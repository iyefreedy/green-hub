import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="container">
        <h1 className="fs-1 container text-left">About Us</h1>
        <p className="fs-2 container text-left">
          We thrive to become the best community that connects
          <br />
          local producers and you. We do it all for our world
        </p>
        <Image src="" alt="sustain enery logo" />
        <Image src="" alt="human working with energy plan" />
      </div>
      <div>
        <h2>Our Mission</h2>
        <Image src="" alt="world mission" />
        <p>Who We Are</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <p>What We Do</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <p>How to Help</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <p>What We Work</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div>
        <h3>Our Team</h3>
        <p>Ardy</p>
        <Image src="" alt="Ardys Picture" />
        <p>Widya</p>
        <Image src="" alt="Widyas Picture" />
        <p>Quraisy</p>
        <Image src="" alt="Quraisy Picture" />
      </div>
    </>
  );
};
export default AboutUs;
