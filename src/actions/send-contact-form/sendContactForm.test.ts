import nodemailer from "nodemailer";

import { sendContactForm } from "./sendContactForm";

jest.mock("nodemailer");

const mockedCreateTransport = nodemailer.createTransport as jest.Mock;
const mockedSendMail = jest.fn();

mockedCreateTransport.mockReturnValue({
  sendMail: mockedSendMail,
});

describe("sendContactForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return an error if token is missing", async () => {
    const result = await sendContactForm({
      name: "John Doe",
      email: "john@example.com",
      subject: "Test Subject",
      message: "Test Message",
      token: "",
    });

    expect(result).toEqual({
      success: false,
      message: "CAPTCHA verification failed",
    });
    expect(mockedSendMail).not.toHaveBeenCalled();
  });

  it("should send an email successfully", async () => {
    mockedSendMail.mockResolvedValueOnce(true);

    const result = await sendContactForm({
      name: "John Doe",
      email: "john@example.com",
      subject: "Test Subject",
      message: "Test Message",
      token: "valid-token",
    });

    expect(result).toEqual({ success: true });
    expect(mockedSendMail).toHaveBeenCalledTimes(1);
    expect(mockedSendMail).toHaveBeenCalledWith({
      from: "John Doe",
      to: process.env.CONTACTS_EMAIL,
      subject: "Test Subject",
      html: expect.stringContaining("John Doe"),
    });
  });

  it("should handle errors when sending email fails", async () => {
    mockedSendMail.mockRejectedValueOnce(new Error("SMTP Error"));

    const result = await sendContactForm({
      name: "Jane Doe",
      email: "jane@example.com",
      subject: "Error Test",
      message: "Error Message",
      token: "valid-token",
    });

    expect(result).toEqual({
      success: false,
      message: "Failed to send email",
    });
    expect(mockedSendMail).toHaveBeenCalledTimes(1);
  });
});
