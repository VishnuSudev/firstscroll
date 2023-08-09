import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = {
  auth: {
    // Update here your SendGrid API key 
    api_key: "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",
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
  // console.log(req.body)
  const { name, email, phone, company, text } = req.body;

  const data = {
    // Update here your email
    to: email,
    from: "FirstScroll<hello@firstscroll.com>",
    subject: "Firstscroll Contact Form",
    html: `<h3>Dear Admin,</h3>

    <p>New Enquiry from FirstScroll Contact Form.
    Find the below details and get back to the 
    customer as soon as possible.</p><br/>

            <p>Name :  ${name} </p>
            <p>Company :  ${company}</p> 
            <p>Email ID :  ${email}</p> 
            <p>Phone Number :  ${phone}</p> 
            <p>Comment :  ${text} </p>
    <br/>
    <br/>
    Website Link : <a href="https://firstscrolldemo2.vercel.app">FirstScroll.com</a> <br/>
    <br/>
    <a href="https://firstscrolldemo2.vercel.app"><img 
    style="width: 200px; height: 30px;"
    src="https://i.postimg.cc/1RYh5qJD/firstscrolllogo.gif" alt="companyLogo" /></a>

        `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};
