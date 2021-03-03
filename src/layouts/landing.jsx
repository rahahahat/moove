import React from "react";
import Layout from "../components/layout/layout-styles";
import Navbar from "../components/navbar/navbar";
import { Section } from "../components/section/section-styles";
import Carousal from "../components/carousal/carousal";
import Info from "../components/info/info";
import Footer from "../components/footer/footer";
import "../index.css";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Layout>
        <Section padding="0px" display="flex" id="home">
          <Carousal />
        </Section>
        <Section
          flexDir="column"
          display="flex"
          justifyCont="center"
          padding="4vw"
          bg="#eeeeee"
          className="about-us"
        >
          <div
            css={`
              font-size: 8rem;
              font-family: "Bebas Neue";
              align-self: center;
              margin-bottom: 10px;
            `}
          >
            About Us
          </div>
          <div
            css={`
              align-self: center;
              width: 80%;
              font-weight: 400;
              position: relative;
              display: flex;
              justify-content: center;
              @media (max-width: 500px) {
                width: 90%;
                font-size: 1.1;
              }
            `}
          >
            <div
              css={`
                font-size: 3.5rem;
                font-family: "Raleway";
                font-weight: 400;
                position: relative;
                justify-content: center;
                width: 100%;
                @media (max-width: 500px) {
                  width: 90%;
                  font-size: 1rem;
                }
              `}
            >
              Hello Cardiff! we’re moove. We’re revolutionising how we find
              housing. Want to get involved before we launch in March? Register
              your interest, review your house, or read our blog.
            </div>
          </div>
        </Section>
        <Section
          flexDir="column"
          display="flex"
          justifyCont="center"
          padding="4vw"
          className="about-us"
        >
          <Info />
        </Section>
      </Layout>
      <Footer />
    </>
  );
}
