import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <a href="#">Ajit Verma</a>
                <button>
                    <span></span>
                </button>
                <div>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="Education.html">Education</a></li>
                        <li><a href="skill.html">Skills</a></li>
                        <li><a href="Project.html">Projects</a></li>
                        <li><a href="contact.html">Contact Me</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

const Section1 = () => {
    return (
        <section>
            <div>
                <div>
                    <img src="Image/Programming.svg" alt="" />
                </div>
                <div>
                    <h1>Competitive Programming</h1>
                    <ul>
                        <li><a href="https://www.hackerrank.com/Ajitverma?hr_r=1" target="_blank"></a></li>
                        <li><a href="https://www.hackerearth.com/@ajit457" target="_blank"></a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const Section2 = () => {
    return (
        <section>
            <div>
                <div>
                    <h1>Degrees Received</h1>
                </div>
                <div>
                    <div>
                        <div>
                            <i></i>
                            <p>B.tech in Computer Engineering</p>
                        </div>
                        <div>
                            <a href="https://jcboseust.ac.in/" target="_blank">Website</a>
                            <div>💥 I have studied software engineering subjects like Data Structures, Algorithms, DBMS, OS, CA, CN etc.</div>
                            <div><b>💥 CGPA</b>: 7.14 </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <i></i> 
                            <p>Senior Secondary Education</p>
                        </div>
                        <div>
                            <a role="button" style={{ color: 'white' }}>Details</a>
                            <div>💥 I have studied the subjects Physics, Chemistry, Mathematics etc.</div>
                            <div><b>💥 Percentage</b>: 80%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Section3 = () => {
    return (
        <section>
            <div>
                <h1>Certifications</h1>
            </div>
            <div>
                <div>
                    <img src="Image/C++.jpg" alt="Card image cap" />
                    <div>
                        <p>C++ with Data Structures and Algorithms</p>
                        <p>-by Coding Blocks</p>
                    </div>
                </div>
                <div>
                    <img src="Image/JavaScript.jpg" alt="Card image cap" />
                    <div>
                        <p>JavaScript Basics</p>
                        <p>-by Sololearn</p>
                    </div>
                </div>
                <div>
                    <img src="Image/Data Science.jpg" alt="Card image cap" />
                    <div>
                        <p>Data Science</p>
                        <p>-by _____</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer>Made with ❤️ by Ajit Verma</footer>
    );
};

const Education = () => {
    return (
        <div className="App">
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </div>
    );
}

export default Education;
