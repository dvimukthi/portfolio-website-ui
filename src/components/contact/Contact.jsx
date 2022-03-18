import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>example@gmail.com</h5>
            <a href="mailto:example@gmal.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsFacebook className="contact__option-icon" />
            <h4>Facebook</h4>
            <h5>Deshan Vimukthi</h5>
            <a href="https://www.facebook.com/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FiInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>Deshan</h5>
            <a href="https://www.instagram.com/" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
