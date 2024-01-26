import nodemailer from "nodemailer";
import credentials from "../../config.js";
// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: credentials.user,
    pass: credentials.pass,
  },
});

const sendEmail = (email) => {
  const mailOptions = {
    from: "codeforinterview03@gmail.com",
    to: email.to,
    subject: email.subject,
    text: email.body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export default sendEmail;