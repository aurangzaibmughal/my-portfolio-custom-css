import React from 'react'
import Heading from './Heading'
import Card from './Card'


const data = [
    {
        id: 0,
        title: 'Todo List',
        desc: "A React & Typscript based App for managing and organizing your task efficiently.",
        img: "/new project-0.jpg",
        tags: ["React", "Node","CSS","Typescript"],
        
    },

    {
        id: 1,
        title: "Coundown Timer",
        desc: "A Next.js & TypeScript powered website to track time with an interactive countdown feature.",
        img: "/poject-1.jpg",
        tags: ["Next.JS", "Node","CSS","TypeScript"],
    },

    {
        id: 2,
        title: "Weather Widget",
        desc: "A Next.js and Typescrip based tool for fetching and displaying real-time weather data",
        img: "/project-2.jpg",
        tags: ["Next.JS", "Node","CSS","TypeScript"],
    },

    {
        id: 3,
        title: "Currency Converter",
        desc: "A simple HTML and Typescrip powered tool for converting currencies with real-time rates.",
        img: "/project-03.jpg",
        tags: ["HTML", "Node","CSS","TypeScript"],
    },

    {
        id: 4,
        title: "Static Interactive Resume",
        desc: "A  TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/project-4.jpg",
        tags: ["React", "Node","CSS","Typescript"],
    },

    {
        id: 5,
        title: "Simple calculator Project",
        desc: "A basic HTML CSS and Typescript claculator for perfoming essentail arithmetic oprations.",
        img: "/project-5.jpg",
        tags: ["HTML", "Node","CSS","Typescript"],
    },

];

const projects = () => {
  return (
    <div id='projects' className='container pt-15'data-aos="zoom-in-up">
        <Heading title= 'My Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) =>(<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}

        </div>
    </div>
  )
};

export default projects