const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525,
    auth: {
        user: process.env.ELASTICEMAIL_USERNAME,
        pass: process.env.ELASTICEMAIL_API_KEY,
    },
});

const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.ELASTICEMAIL_USERNAME,
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error('Email send error:', error);
        throw new Error('Email could not be sent');
    }
};

module.exports = sendEmail;