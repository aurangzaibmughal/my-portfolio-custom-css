import React from 'react'
import "../app/styles/skills.css" // import the custom CSS file

const Skills = () => {
  return (
    <div id='skills' className="skills-container">
        <div className="skills-grid">
          {/* {first column: heading and Paragraph} */}
            <div data-aos="zoom-in-up">
            <h2 className='skills-heading'>Technologies I work with</h2>
            <p className='skills-text' >
                I am proficient in web development using Next.js, React, and Tailwind CSS. I am also familiar with other popular frameworks like Nextjs, react. I am also experienced with various programming languages, including HTML, CSS, JavaScript, TypeScript, and Python.
                i have a solid foundation in  web development, specialzing in HTML, CSS, and JavaScript.my experience extent to using framworks like React and Next.js to cteate dynamic and user-friendly Applicatoin i am also preficient in Tailwind CSS for efficent styling and design with a passion for learning, I stay updated on the latest technology
                 to enhance user experience my skills set and contribute effectivelity to my porjects.
            </p>
            </div>
            {/* {second  column: Skills} */}
            <div>
              <div className="skills-icons-grid">
                  <div className="skills-spece-1">
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                    <h2 data-aos="zoom-in-up">Typescipt</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    </div>
                  <div className="skills-space-2">
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                  </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Skills;