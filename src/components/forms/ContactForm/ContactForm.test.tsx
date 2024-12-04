import { MantineProvider } from '@mantine/core';
import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import ReCAPTCHA from 'react-google-recaptcha';

import { sendContactForm } from '@/actions';
import { NotificationType } from '@/enums';
import { useShowNotification } from '@/hooks';

import ContactForm from './ContactForm';

jest.mock('react-google-recaptcha', () => {
  return jest.fn().mockImplementation(() => 'ReCAPTCHA');
});

jest.mock('@/actions', () => ({
  sendContactForm: jest.fn(() => Promise.resolve({ success: true })),
}));
jest.mock('@/hooks', () => ({
  useShowNotification: jest.fn(() => jest.fn()),
}));

const defaultProps = {
  reCaptchaSiteKey: 'test-site-key',
};

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <NextIntlClientProvider locale="en">
    <MantineProvider>{children}</MantineProvider>
  </NextIntlClientProvider>
);

const renderComponent = (props = {}) =>
  render(<ContactForm {...defaultProps} {...props} />, { wrapper });

const solveCaptcha = () =>
  act(async () => {
    (ReCAPTCHA as jest.Mock).mock.calls[0][0].onChange('test-token');
  });

describe('ContactForm', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render form', () => {
    const { getByText } = renderComponent();

    expect(getByText('contactForm.title')).toBeInTheDocument();
    expect(getByText('contactForm.fields.name.label')).toBeInTheDocument();
    expect(getByText('contactForm.fields.email.label')).toBeInTheDocument();
    expect(getByText('contactForm.fields.subject.label')).toBeInTheDocument();
    expect(getByText('contactForm.fields.message.label')).toBeInTheDocument();
    expect(getByText('ReCAPTCHA')).toBeInTheDocument();
  });

  it('should show validation error if form is submitted without filling all required fields', async () => {
    const { getByText, getByRole } = renderComponent();

    await solveCaptcha();

    await userEvent.type(
      getByRole('textbox', { name: 'contactForm.fields.name.label' }),
      'test-name',
    );
    await userEvent.click(getByRole('button', { name: 'submit' }));

    await waitFor(() => {
      expect(getByText('contactForm.fields.email.validation')).toBeInTheDocument();
      expect(getByText('contactForm.fields.subject.validation')).toBeInTheDocument();
      expect(getByText('contactForm.fields.message.validation')).toBeInTheDocument();
    });
  });

  it('should submit form if all required fields are filled and ReCAPTCHA token is provided', async () => {
    const { getByRole } = renderComponent();

    await solveCaptcha();

    await userEvent.type(
      getByRole('textbox', { name: 'contactForm.fields.name.label' }),
      'test-name',
    );
    await userEvent.type(
      getByRole('textbox', { name: 'contactForm.fields.email.label' }),
      'ex@mp.le',
    );
    await userEvent.click(getByRole('textbox', { name: 'contactForm.fields.subject.label' }));
    await userEvent.click(getByRole('option', { name: 'contactForm.subjects.other' }));
    await userEvent.type(
      getByRole('textbox', { name: 'contactForm.fields.message.label' }),
      'test-message',
    );

    await userEvent.click(getByRole('button', { name: 'submit' }));

    expect(sendContactForm).toHaveBeenCalledWith({
      email: 'ex@mp.le',
      message: 'test-message',
      name: 'test-name',
      subject: 'contactForm.subjects.other',
    });
  });

  it('should handle send contact form action failure', async () => {
    const showNotification = jest.fn();

    (useShowNotification as jest.Mock).mockReturnValue(showNotification);
    (sendContactForm as jest.Mock).mockReturnValue({ messages: ['test-error'], success: false });

    const { getByRole } = renderComponent();

    await solveCaptcha();

    await userEvent.type(
      getByRole('textbox', { name: 'contactForm.fields.name.label' }),
      'test-name',
    );
    await userEvent.type(
      getByRole('textbox', { name: 'contactForm.fields.email.label' }),
      'ex@mp.le',
    );
    await userEvent.click(getByRole('textbox', { name: 'contactForm.fields.subject.label' }));
    await userEvent.click(getByRole('option', { name: 'contactForm.subjects.other' }));
    await userEvent.type(
      getByRole('textbox', { name: 'contactForm.fields.message.label' }),
      'test-message',
    );

    await userEvent.click(getByRole('button', { name: 'submit' }));

    expect(showNotification).toHaveBeenCalledWith({
      message: 'test-error',
      type: NotificationType.Error,
    });
  });
});
