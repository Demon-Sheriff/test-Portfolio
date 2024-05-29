import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <section id="Home">
      <div className="mainbox">
        <div className="Hello-box">
          <h1>Hello All! I'm Anant <span className="wave">👋</span></h1>
          <p>A passionate Developer having an experience in Data Analytics, Machine Learning and Web Development and want to develop sustainable and scalable social and technical systems to create impact</p>
          <div>
            <a href="https://www.instagram.com/ajit.verma_/" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/ajit-verma-70b9b0196/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/AjitVerma15" target="_blank"><i className="fab fa-github"></i></a>
            <a href="mailto:ajitverma1503@gmail.com" target="_blank"><i className="fab fa-google"></i></a>
          </div>
        </div>

        <div className="image">
          <img src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1dd71573-f15d-4d2e-ab44-f210ad951fbc/width=1200/1dd71573-f15d-4d2e-ab44-f210ad951fbc.jpeg" alt="Boy" />
        </div>
      </div>
    </section>
  );
};

export default Home;
