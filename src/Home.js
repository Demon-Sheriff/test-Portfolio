import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faGoogle, faGit } from '@fortawesome/free-brands-svg-icons';
import './Home.css'

const Home = () => {
  return (
    <section id="Home">
      <div className="mainbox">
        <div className="Hello-box">
          <h1 className="hello">Hello All! I'm Anant <span className="wave">👋</span></h1>
          <p>A passionate Developer having an experience in Data Analytics, Machine Learning and Web Development and want to develop sustainable and scalable social and technical systems to create impact</p>
          <div className="social-media">
            <a className="btn" icon = {faInstagram} href="https://www.instagram.com/ajit.verma_/" target="_blank"><i className="fab fa-instagram"></i></a>
            <a className="btn" icon = {faLinkedin} href="https://www.linkedin.com/in/ajit-verma-70b9b0196/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a className="btn" icon = {faGithub} href="https://github.com/AjitVerma15" target="_blank"><i className="fab fa-github"></i></a>
            <a className="btn" icon = {faGoogle} href="mailto:ajitverma1503@gmail.com" target="_blank"><i className="fab fa-google"></i></a>
          </div>
        </div>

        <div className="image-boy">
          <img src="https://ajitverma15.github.io/Interactive-Portfolio/Image/20200630_162659.gif" alt="Boy" />
        </div>
      </div>
    </section>
  );
};

export default Home;
