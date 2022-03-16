import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section id="Testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonials">
          <div className="client__avatar"></div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
