// rfce
import React, { useState } from 'react';
import Project from '../components/Project.js';
import imgCrawler from '../assets/crawler.jpg'

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Dungeon Crawler',
      link: 'https://frozen-bayou-97963.herokuapp.com/',
      description: 'One of the toughtest parts of running a tabletop RPG dungeon is simply keeping track of every last creature, trinket, and secret. Dungeon Crawler is a full-stack SQL-driven website that makes tracking a sprawling campaign as easy as clicking a button. \n \n This application takes the tedium out of running dungeons by letting users quickly and easily do things like create dungeons and rooms, manage monsters, update stats, and even allows for multiple campaigns to be managed at once!',
      image: imgCrawler,
      repo: 'https://github.com/the-wake/project-2-dungeon-crawler',
    },
    {
      name: 'Monster Finder',
      link: 'https://the-wake.github.io/project-1-dnd/',
      description: 'Every DM (Dungeon Master) knows that you can\'t build an encounter without monsters! Every DM also knows that as a system ages, tracking down monsters becomes a huge hassle. \n \n The D&D Monster Finder uses the open5e API to seach monsters from a huge range of official and unofficial sources. Users can select their desired Challenge Rating, browse mosters color-coded by type, and save lists of monsters they intend to use.',
      image: '../assets/dnd.jpg',
      repo: 'https://github.com/the-wake/project-1-dnd',
    },
  ]);

  return (
    <div>
      <h2 className="content-header">Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => {
          return <Project project={project} key={index} />
        })}
      </div>
    </div>
  )
}

export default Portfolio;
