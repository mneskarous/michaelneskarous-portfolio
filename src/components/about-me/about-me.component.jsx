import React from 'react';

import './about-me.styles.scss';

const AboutMe = () => (
  <div className="about-me">
    <div id="about-me"className="header-container">
      <h2>About Me</h2>
    </div>
    <div className="text-container">
      <p>
        My name is Mike, and I'm a software engineer with an unbridled enthusiasm for front-end developement. One of the things I love most about coding is that you get to be both technical and creative at the same time. I also love building apps and interfaces that people can interact with and enjoy. 
      </p>
      <p>
        I'm really passionate about coding! At this point, you may be thinking, "Mike, how passionate are you, really?" Well, let me give you an example: While building this portfolio site, I was unable to fall asleep when I went to bed because I was excitedly thinking of all the things I would be doing the next day to build it!
      </p>
      <p>
        When I'm not coding, I like to spend time with my ever-patient wife and my friends and family, do volunteer work with my church, play games on my PS4, go to the gym, read, solve crossword puzzles, watch my favorite teams play, and watch good TV shows and movies.
      </p>
    </div>
  </div>
);

export default AboutMe;