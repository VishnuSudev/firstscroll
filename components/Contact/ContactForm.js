import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
const sendGridApiKey =
  "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 ";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  phone: "",
  text: "",
  company: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.sendgrid.com/v3/mail/send`;
      const { name, email, phone, text, company } = contact;
      const payload = {
        // Update here your email
        html: `


        <h3>Dear Admin,</h3>

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
        style="width: 200px; height: 50px;"
        src="https://i.postimg.cc/1RYh5qJD/firstscrolllogo.gif" alt="companyLogo" /></a>

            `,
      };
      const data = {
        personalizations: [
          {
            to: [{ email: "hello.firstscroll@gmail.com" }],
            subject: "Firstscroll Contact Form",
          },
        ],
        from: { email: "hello@firstscroll.com", name: "FirstScroll" },
        content: [
          {
            type: "text/html",
            value: payload.html,
          },
        ],
      };
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${sendGridApiKey}`,
        },
      });
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-form">
        <div className="contact-title">
          <h2>Get In Touch</h2>
          <p>
            Excited to explore what the future holds? Connect with us to
            collaborate on your next project
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="contact-form-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      className="form-control"
                      value={contact.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Id"
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      className="form-control"
                      value={contact.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="text"
                      cols="30"
                      rows="6"
                      placeholder="Write your message..."
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
