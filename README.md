# Setup Guide  

This guide provides instructions on how to register the necessary services, configure environment variables, and set up the project to use a form with CAPTCHA and email functionality.

---

## **1. Registration and API Keys**

### **Contentful**
[Full instruction](https://github.com/epam/epmgcip-chaperone.contentful/blob/main/README.md)

---

### **Google reCAPTCHA**
1. Go to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create).
2. Register your site:
   - **Label**: Choose a name for your site.
   - **reCAPTCHA Type**: Select "reCAPTCHA v2"
   - **Domains**: Add the domains where the reCAPTCHA will be used.
3. After registration, you will receive:
   - **Site Key**: Public key to use on the client side.
   - **Secret Key**: Private key for server-side verification.
4. Save these keys for later.

---

### **Email Service**
You will need an SMTP provider for sending emails: **Gmail**

1. Use [App Passwords](https://support.google.com/accounts/answer/185833) for better security.
3. Collect the following:
    - **SMTP Host**: `smtp.gmail.com`
    - **SMTP Port**: `587`
    - **System Email**: Your Gmail address (e.g., `example@gmail.com`).
    - **System Email Password**: Your email password or app-specific password.

---

## **2. Environment Variable Setup**

Create a `.env.local` file in your project root directory (if it doesn't exist) and add the following environment variables:

```env
# Contentful
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ENVIRONMENT=your_contentful_environment
CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN=your_contentful_delivery_access_token

# Google reCAPTCHA
RE_CAPTCHA_SITE_KEY=your_recaptcha_site_key
RE_CAPTCHA_SECRET_KEY=your_recaptcha_secret_key

# Contact Email
CONTACTS_EMAIL=your_contact_email@example.com

# SMTP Configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SYSTEM_EMAIL=your_system_email@example.com
SYSTEM_EMAIL_PASSWORD=your_system_email_password
```

### Example Configuration (using Gmail):
```env
# Contentful
CONTENTFUL_SPACE_ID=abcd1234efgh
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN=1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef

# Google reCAPTCHA
RE_CAPTCHA_SITE_KEY=6LcXXXXUAAAAANXXXXmQXXXfJXXXX
RE_CAPTCHA_SECRET_KEY=6LcXXXXUAAAAAXXXXXo_XXXXeGXXXX

# Contact Email
CONTACTS_EMAIL=support@example.com

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SYSTEM_EMAIL=example@gmail.com
SYSTEM_EMAIL_PASSWORD=your_app_specific_password
```

---

## **3. Verification Checklist**
- Confirm that your reCAPTCHA keys match the site configuration.
- Test the SMTP credentials to ensure emails can be sent successfully.
- Verify that all environment variables are correctly added to `.env.local`.

Once everything is set up, your form component will be ready to use with CAPTCHA validation and email functionality.