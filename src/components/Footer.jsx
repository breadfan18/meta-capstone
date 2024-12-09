import React from "react";
import {
  SlSocialGoogle,
  SlSocialInstagram,
  SlSocialReddit,
  SlSocialLinkedin,
  SlSocialPintarest,
} from "react-icons/sl";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="imgAndSocial">
          <img
            src="https://i.imgur.com/sExfMN4.png"
            alt=""
            style={{ width: "12rem" }}
          />
        </section>
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <section>
            <h4>Contact Us</h4>
            <p>Phone Number: 1-800-212-8526</p>
            <p>Email: littlelemon@gmail.com</p>
          </section>
          <section>
            <h4>Our Locations</h4>
            <p>Silver Spring, MD</p>
            <p>San Francisco, CA</p>
            <p>Cincinnati, OH</p>
            <p>Chicago, IL</p>
          </section>
          <section>
            <h4>Meet our Team</h4>
            <p>Donald Harris, CEO</p>
            <p>JD Walz, CFO</p>
            <p>Elon Buttigeg, CTO</p>
          </section>
        </div>

        <article className="social-media-footer">
          <SlSocialGoogle />
          <SlSocialInstagram />
          <SlSocialReddit />
          <SlSocialLinkedin />
          <SlSocialPintarest />
        </article>
      </footer>
    </>
  );
}
