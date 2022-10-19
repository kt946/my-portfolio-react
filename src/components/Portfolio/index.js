import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
  // array of projects with title, id, subtitle, description, and links to deployed application and github repository
  const [projects] = useState([
    {
      title: 'CodeFlow',
      id: 'codeflow.png',
      subtitle: 'MERN (MongoDB, Express, React, Node), JavaScript, GraphQL, Mongoose ODM, JWT, Tagify, Bootstrap',
      description: `CodeFlow is an interactive MERN stack SPA social media app that gives developers 
      a creative hub to show off their coding projects through posts and add 
      friends as well as comment and like replies from other developers in threaded discussions.`,
      deployed: 'https://code-flow-app.herokuapp.com/',
      repo: 'https://github.com/cnohilly/codeflow'
    },
    {
      title: 'Watch It Later',
      id: 'watch-it-later.png',
      subtitle: 'Node, MySQL, Sequelize, Handlebars, Bulma, MVC, TMDB API',
      description: `A full-stack app allowing users to search for movies and TV shows, create accounts to add them to 
        their personal watchlist saved in a SQL database, leave comments, and rate movies.`,
      deployed: 'https://watch-it-later.herokuapp.com/',
      repo: 'https://github.com/cnohilly/watch-it-later'
    },
    {
      title: 'Movie TV Watchlist',
      id: 'movie-tv-watchlist.png',
      subtitle: 'HTML, CSS, JavaScript, Bulma, TMDB API',
      description: `Looking for something to watch? 
        Use this app to search for movies and TV shows through the TMDB's API as well as add them to a 
        personal watchlist saved in the browser's local storage.`,
      deployed: 'https://cnohilly.github.io/movie-tv-watchlist/',
      repo: 'https://github.com/cnohilly/movie-tv-watchlist'
    },
    {
      title: 'Weather Dashboard',
      id: 'weather-dashboard.png',
      subtitle: 'HTML, CSS, JavaScript, Bootstrap, OpenWeather API',
      description: `An app to search for the current weather and 5-day forecast in cities using the OpenWeather One Call API.`,
      deployed: 'https://kt946.github.io/weather-dashboard/',
      repo: 'https://github.com/kt946/weather-dashboard'
    },
    {
      title: 'The Epic Tech Blog',
      id: 'the-epic-tech-blog.png',
      subtitle: 'Node, MySQL, Sequelize, Handlebars, Bootstrap, MVC',
      description: `A CMS-style blog site using the MVC paradigm for discussing technology through blog posts and comments.`,
      deployed: 'https://sheltered-mesa-54132.herokuapp.com/',
      repo: 'https://github.com/kt946/epic-tech-blog-MVC'
    },
    {
      title: 'Pizza Hunt',
      id: 'pizza-hunt.png',
      subtitle: 'Node, NoSQL, MongoDB, Mongoose',
      description: `Hungry for some pizza? Check out Pizza Hunt, an app that uses NoSQL to store pizza recipies and user comments.`,
      deployed: 'https://pizza-hunt-13648.herokuapp.com/',
      repo: 'https://github.com/kt946/pizza-hunt'
    },
    {
      title: 'Taskmaster Pro',
      id: 'taskmaster-pro.png',
      subtitle: 'HTML, CSS, JavaScript, jQuery, Bootstrap',
      description: `Got a busy week ahead? Taskmaster Pro, a task-management application, can help you 
        organize and save your tasks and due dates all from your local browser!`,
      deployed: 'https://kt946.github.io/taskmaster-pro/',
      repo: 'https://github.com/kt946/taskmaster-pro'
    },
  ]);

  return(
    // section for Portfolio component with projects
    <section id="portfolio" className="py-4 custom-bg-color text-white">
      <div className="container pb-4">
        <h2 className="section-title text-center border-bottom border-3 pb-2 mb-4 animate__animated animate__fadeIn animate__faster">
          Portfolio
        </h2>
        <p className="fs-3 text-center mb-4 cm-font-heading animate__animated animate__fadeInDown">
          Here you will find a collection of some of my works.
        </p>
        {/* Project component */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 animate__animated animate__fadeIn animate__delay-1s">
          {projects.map((project) => (
            <Project 
              key={project.id} 
              title={project.title}
              id={project.id} 
              subtitle={project.subtitle}
              description={project.description}
              deployed={project.deployed}
              repo={project.repo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;