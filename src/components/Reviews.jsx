import React from "react";
import { testimonials } from "../constants";

export default function Reviews() {
  return (
    <div className="reviewsContainer">
      <h2>Customer Testimonials</h2>
      <section>
        {testimonials.map((testimonial) => (
          <article>
            <img
              src={testimonial.img}
              alt=""
              style={{ height: "100px", width: "100px", borderRadius: "50%" }}
            />
            <br />
            <p>{"⭐️".repeat(testimonial.stars)}</p>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.review}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
