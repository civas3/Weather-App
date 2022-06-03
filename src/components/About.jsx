import React from 'react'
import { faker } from '@faker-js/faker';

const About = () => {
    return (
      <div className="container container-about-us">
        <h2>Welcome to PurpleBeard Weather App</h2>
        <img src="https://purplebeard.co.uk/wp-content/uploads/2019/07/Finalwhite-300x108.png" width={300}></img>
        <div className='faker-lorem'>{faker.lorem.lines(15)}</div>
        <a class="button" href="https://purplebeard.co.uk/" target={"_blank"}>Hire a Developer</a>
        <a class="button" href="/">Back</a>
      </div>
    )
}

export default About