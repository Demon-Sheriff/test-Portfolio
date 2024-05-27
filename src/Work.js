import React from 'react';

const Work = () => {
  return (
    <section id="Work">
      <h1>What I Do ?</h1>
      <div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/Image/Data_Analysis.svg`} alt="Data Analysis" />
        </div>
        <div>
          <h1>Data Analytics & ML</h1>
          <ul>
            <li><i className="fab fa-python"></i></li>
            <li><img src={`${process.env.PUBLIC_URL}/Image/numpy-ar21.svg`} alt="NumPy" /></li>
            <li><img src={`${process.env.PUBLIC_URL}/Image/kindpng_5747046.png`} alt="Pandas" /></li>
          </ul>
          <div>
            <p>💥 Developing Models that clean, tranform and analyse raw data to discover useful information, in order to make conclusions about the data.</p>
            <p>💥 Experience of working with different python Libraries like Numpy, Pandas, Matplotlib, Seaborn etc. and have knowledge of Data analysis algorithms and techniques.</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>Web Development</h1>
          <ul>
            <li><i className="fab fa-html5"></i></li>
            <li><i className="fab fa-css3-alt"></i></li>
            <li><i className="fab fa-bootstrap"></i></li>
            <li><i className="fab fa-js-square"></i></li>
            <li><i className="fab fa-react"></i></li>
            <li><i className="fab fa-node"></i></li>
            <li><i className="fab fa-figma"></i></li>
          </ul>
          <div>
            <p>💥 Building Fully responsive website frontend using HTML, CSS, Bootstrap and Javascript.</p>
            <p>💥 As of now I have knowledge only of frontend but in near future I will learn more skills and excited to explore React, NodeJS, Django, Flask and many more.</p>
            <p>💥 I have also used Abode Photoshop, Illustrator and Figma to design User interface of websites and mobile applications and designed logos.</p>
          </div>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/Image/website.svg`} alt="Website Development" />
        </div>
      </div>
      <div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/Image/Coding.svg`} alt="Coding" />
        </div>
        <div>
          <h1>Data Structures and Algorithms</h1>
          <ul>
            <li><i className="fas fa-laptop-code"></i></li>
            <li><i className="fas fa-file-code"></i></li>
          </ul>
          <div>
            <p>💥 I have knowledge of Data Structures like Hash Tables, Trees, Tries, Graphs, and various algorithms for solving various problems efficiently.</p>
            <p>💥 As I know Data Structures and Algorithms are the heart of programming, so I love to solve programming questions in different competitive websites like Codeforces, Codechef, Hackerrank and many more.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
