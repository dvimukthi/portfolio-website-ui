import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>example@gmail.com</h5>
            <a href="mailto:example@gmal.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsFacebook />
            <h4>Facebook</h4>
            <h5>Deshan Vimukthi/</h5>
            <a href="https://www.facebook.com/">Send a message</a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
