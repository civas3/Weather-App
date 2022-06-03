import React from 'react'

const About = () => {
    return (
      <div className="container container-about-us">
        <h2>Welcome to PurpleBeard Weather App</h2>
        <img src="https://purplebeard.co.uk/wp-content/uploads/2019/07/Finalwhite-300x108.png" width={300}></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sem et ligula efficitur viverra ut vel sapien. Maecenas a ornare metus. Vivamus sapien quam, tempor congue pretium eget, euismod at est. Ut accumsan imperdiet nisi ac faucibus. Morbi tortor sapien, ultrices in efficitur ut, tempor a erat. Nunc blandit tempor egestas. Vestibulum maximus consequat metus eu vulputate.</p>
        <a class="button" href="https://purplebeard.co.uk/" target={"_blank"}>Hire a Developer</a>
        <a class="button" href="/">Back</a>
      </div>
    )
}

export default About