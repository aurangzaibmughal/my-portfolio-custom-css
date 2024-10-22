import React from 'react'

interface  propsType {
    title: string;
}

const Heading : React.FC<propsType> = ({title}) => {
    return (
        <div className="text-4xl text-center pb-8">
          <p className='border-b-4 inline-block pb-2'data-aos="zoom-in-up">{title}</p>  
        </div>
    )
}


export default Heading