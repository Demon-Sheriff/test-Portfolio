import React from 'react';

const Home = () => {
  return (
    <section id="Home">
      <div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/Image/20200630_162659.gif`} alt="Boy" />
        </div>
        <div>
          <h1>Hello All! I'm Ajit <span>👋</span></h1>
          <p>A passionate Developer having an experience in Data Analytics, Machine Learning and Web Development and want to develop sustainable and scalable social and technical systems to create impact</p>
          <div>
            <a href="https://www.instagram.com/ajit.verma_/" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/ajit-verma-70b9b0196/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/AjitVerma15" target="_blank"><i className="fab fa-github"></i></a>
            <a href="mailto:ajitverma1503@gmail.com" target="_blank"><i className="fab fa-google"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
