import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
            <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up"> Technologies I work with</h2>
            <p className='flex flex-left text-gray-300 pt-2 text-left' >
                I am proficient in web development using Next.js, React, and Tailwind CSS. I am also familiar with other popular frameworks like Angular and Vue.js. I am also experienced with various programming languages, including HTML, CSS, JavaScript, TypeScript, and Python.
                i have a solid foundation in  web development, specialzing in HTML, CSS, and JavaScript.my experience extent to using framworks like React and Next.js to cteate dynamic and user-friendly Applicatoin i am also preficient in Tailwind CSS for efficent styling and design with a passion for learning, I stay updated on the latest technology to enhance user experience my skills set and contribute effectivelity to pojects.
            </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                  <div className='speace-y-3'data-aos="zoom-in-up">
                    <h2>Typescript</h2>
                    <h2>HTML</h2>
                    <h2>CSS</h2>
                    </div>
                  <div className='speace-y-'data-aos="zoom-in-up">
                    <h2>Next.js</h2>
                    <h2>Tailwing</h2>
                    <h2>Node.js</h2>
                    </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Skills