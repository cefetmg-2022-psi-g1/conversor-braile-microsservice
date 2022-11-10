/*require("dotenv").config();
const nodeMail = require("nodemailer");
const path = require("path");

async function mainMail(name, email, subject, message) {
  console.log(typeof(process.env.GMAIL_USER))
  console.log(typeof(process.env.PASSWORD))
  const transporter = await nodeMail.createTransport({
    service: 'gmail',
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

module.exports = mainMail;
