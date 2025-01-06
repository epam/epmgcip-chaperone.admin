import React, { forwardRef, useEffect, useImperativeHandle } from 'react';

import { MantineProvider } from '@mantine/core';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from 'messages/en.json';

import { sendContactForm } from '@/actions';
import { NotificationType } from '@/enums';
import { useShowNotification } from '@/hooks';

import ContactForm from './ContactForm';

/* eslint-disable max-nested-callbacks */

jest.mock('react-google-recaptcha', () => {
  return forwardRef(function Component(
    props: { asyncScriptOnLoad: () => void; onChange: (token: string) => void },
    ref,
  ) {
    useImperativeHandle(ref, () => ({
      asyncScriptOnLoad: jest.fn(() => {}),
      execute: jest.fn(),
      executeAsync: jest.fn(() => 'test-token'),
      onChange: jest.fn(),
      reset: jest.fn(),
    }));

    useEffect(() => {
      props?.asyncScriptOnLoad();
      props?.onChange('test-token');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, react/prop-types
    const { asyncScriptOnLoad, ...domProps } = props;

    // @ts-expect-error: Skip TS ref type incompatibilities.
    return <input {...domProps} ref={ref} type="checkbox" data-testid="mock-v2-captcha-element" />;
  });
});

/* eslint-enable max-nested-callbacks */

jest.mock('@/actions', () => ({
  sendContactForm: jest.fn(() => Promise.resolve({ success: true })),
}));
jest.mock('@/hooks', () => ({
  useShowNotification: jest.fn(() => jest.fn()),
}));

const useShowNotificationMock = useShowNotification as jest.Mock;
const sendContactFormMock = sendContactForm as jest.Mock;

const defaultProps = {
  reCaptchaSiteKey: 'test-site-key',
};

describe('ContactForm', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <NextIntlClientProvider locale="en" messages={messages}>
      <MantineProvider>{children}</MantineProvider>
    </NextIntlClientProvider>
  );

  const renderComponent = (props = {}) =>
    render(<ContactForm {...defaultProps} {...props} />, { wrapper });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render form', async () => {
    renderComponent();

    expect(screen.getByText('Feedback form')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Subject')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('mock-v2-captcha-element')).toBeInTheDocument();
    });
  });

  it('should show validation error if form is submitted without filling all required fields', async () => {
    renderComponent();

    fireEvent.change(screen.getByTestId('contact-name'), { target: { value: 'test-name' } });
    fireEvent.click(screen.getByTestId('contact-submit-button'));

    await waitFor(() => {
      expect(screen.getByText('E-mail is required')).toBeInTheDocument();
      expect(screen.getByText('Select subject')).toBeInTheDocument();
      expect(screen.getByText('Message is required')).toBeInTheDocument();
    });
  });

  it('should handle send contact form action success if all required fields are filled and ReCAPTCHA token is provided', async () => {
    const showNotification = jest.fn();

    useShowNotificationMock.mockReturnValue(showNotification);

    renderComponent();

    fireEvent.change(screen.getByTestId('contact-name'), {
      target: { value: 'test-name' },
    });
    fireEvent.change(screen.getByTestId('contact-email'), { target: { value: 'test@mail.com' } });
    fireEvent.change(screen.getByTestId('contact-message'), { target: { value: 'test-message' } });

    fireEvent.click(screen.getByPlaceholderText('Select subject'));
    fireEvent.click(screen.getByText('Cooperation'));

    fireEvent.click(screen.getByTestId('contact-submit-button'));

    await waitFor(() => {
      expect(sendContactForm).toHaveBeenCalledWith({
        email: 'test@mail.com',
        message: 'test-message',
        name: 'test-name',
        subject: 'Cooperation',
      });
    });

    expect(showNotification).toHaveBeenCalledWith({
      message: 'Email sent successfully',
      type: NotificationType.Success,
    });
  });

  it('should handle send contact form action failure if all required fields are filled and ReCAPTCHA token is provided', async () => {
    const showNotification = jest.fn();

    useShowNotificationMock.mockReturnValue(showNotification);
    sendContactFormMock.mockReturnValue({ messages: ['test-error'], success: false });

    renderComponent();

    fireEvent.change(screen.getByTestId('contact-name'), {
      target: { value: 'test-name' },
    });
    fireEvent.change(screen.getByTestId('contact-email'), { target: { value: 'test@mail.com' } });
    fireEvent.change(screen.getByTestId('contact-message'), { target: { value: 'test-message' } });

    fireEvent.click(screen.getByPlaceholderText('Select subject'));
    fireEvent.click(screen.getByText('Cooperation'));

    fireEvent.click(screen.getByTestId('contact-submit-button'));

    await waitFor(() => {
      expect(sendContactForm).toHaveBeenCalledWith({
        email: 'test@mail.com',
        message: 'test-message',
        name: 'test-name',
        subject: 'Cooperation',
      });
    });

    expect(showNotification).toHaveBeenCalledWith({
      message: 'test-error',
      type: NotificationType.Error,
    });
  });
});
