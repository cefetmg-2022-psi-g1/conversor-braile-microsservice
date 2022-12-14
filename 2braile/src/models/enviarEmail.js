require("dotenv").config();
const nodeMail = require("nodemailer");
const path = require("path");

module.exports.mainMail = async function mainMail(name, email, subject, message) {
  const transporter = await nodeMail.createTransport({
    service: 'gmail',
    port: 456,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.PASSWORD,
    },
  });
  const mailOption = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: subject,
    text: `You got a message from 
    Email : ${email}
    Name: ${name}
    Message: ${message}`,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    return Promise.reject(error);
  }

}

