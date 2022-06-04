import React from 'react'
import { faker } from '@faker-js/faker';

const About = () => {
    return (
      // we used bootstrap card component
      // https://getbootstrap.com/docs/5.2/components/card/
      <div className="container container-about-us">
      <div class="card">
      <img class="card-img-top" alt="purple-beard-logo" src="https://purplebeard.co.uk/wp-content/uploads/2019/07/Finalwhite-300x108.png" width={300}></img>
        <div class="card-body">
          <h2 class="card-title">Welcome to PurpleBeard Weather App</h2>
          <p class="card-text">{faker.lorem.lines(15)}</p>
          <a href="https://purplebeard.co.uk/" target={"_blank"} class="btn button btn-lg">Hire a Developer</a>
          <a class="button" href="/">Back</a>
        </div>
      </div>
        
      </div>
      
    )
}

export default About