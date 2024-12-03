import nodemailer from 'nodemailer';

import { sendContactForm } from './sendContactForm';

jest.mock('nodemailer');

const mockedCreateTransport = nodemailer.createTransport as jest.Mock;
const mockedSendMail = jest.fn();

mockedCreateTransport.mockReturnValue({
  sendMail: mockedSendMail,
});

describe('sendContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should send an email successfully', async () => {
    mockedSendMail.mockResolvedValueOnce(true);

    const result = await sendContactForm({
      email: 'john@example.com',
      message: 'Test Message',
      name: 'John Doe',
      subject: 'Test Subject',
    });

    expect(result).toEqual({ success: true });
    expect(mockedSendMail).toHaveBeenCalledTimes(1);
    expect(mockedSendMail).toHaveBeenCalledWith({
      from: 'John Doe',
      html: expect.stringContaining('John Doe'),
      subject: 'Test Subject',
      to: process.env.CONTACTS_EMAIL,
    });
  });

  it('should handle errors when sending email fails', async () => {
    mockedSendMail.mockRejectedValueOnce(new Error('SMTP Error'));

    const result = await sendContactForm({
      email: 'jane@example.com',
      message: 'Error Message',
      name: 'Jane Doe',
      subject: 'Error Test',
    });

    expect(result).toEqual({
      messages: ['Failed to send email'],
      success: false,
    });
    expect(mockedSendMail).toHaveBeenCalledTimes(1);
  });
});
