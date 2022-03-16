import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.png";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.png";

const Testimonials = () => {
  return (
    <section id="Testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
            <h5 className="client__name">John Smith</h5>
            <small className="client__review">
              From start to finished, they were extremely professional and
              delivered the task in less than an hour. I will return to them
              with more tasks very soon.
            </small>
          </div>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar two" />
            <h5 className="client__name">Hannna Backer</h5>
            <small className="client__review">
              Thank you for your great work! Everything working as expected, and
              I am excited to do more projects with you.
            </small>
          </div>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar two" />
            <h5 className="client__name">Tom Ryan</h5>
            <small className="client__review">
              Very neat work. Was forward and honest with his knowledge. Helped
              me understand what I did t understand before to get my project
              working again.
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
