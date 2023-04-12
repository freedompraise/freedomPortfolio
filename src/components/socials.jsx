import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Socials() {
  return (
    <>
      <a href="https://github.com/freedompraise" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/freedom_praise" target="_blank">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/in/praise-dike" target="_blank">
        <FaLinkedin />
      </a>
    </>
  );
}

export default Socials;
