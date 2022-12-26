import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
  // array of projects with title, id, subtitle, description, and links to deployed application and github repository
  const [projects] = useState([
    {
      title: 'CodeFlow',
      image: 'codeflow.png',
      technology: 'MERN, JavaScript, GraphQL, JWT, Tagify, Bootstrap',
      description: `CodeFlow is an interactive social media MERN stack SPA that gives developers 
        a creative hub to show off their coding projects through posts, add 
        friends, and join the discussion with other developers in threaded comments.`,
      deployed: 'https://codeflow.onrender.com',
      repo: 'https://github.com/cnohilly/codeflow'
    },
    {
      title: 'Watch It Later',
      image: 'watch-it-later.png',
      technology: 'Node, MySQL, Sequelize, Handlebars, Bulma, MVC, TMDB API',
      description: `A full-stack app allowing users to search for movies and TV shows, create accounts to add them to 
        their personal watchlist saved in a SQL database, leave comments, and rate movies.`,
      deployed: 'https://watch-it-later.onrender.com/',
      repo: 'https://github.com/cnohilly/watch-it-later'
    },
    {
      title: 'Movie TV Watchlist',
      image: 'movie-tv-watchlist.png',
      technology: 'HTML, CSS, JavaScript, Bulma, TMDB API',
      description: `Looking for something to watch? 
        Use this app to search for movies and TV shows through the TMDB's API as well as add them to a 
        personal watchlist saved in the browser's local storage.`,
      deployed: 'https://cnohilly.github.io/movie-tv-watchlist/',
      repo: 'https://github.com/cnohilly/movie-tv-watchlist'
    },
    {
      title: 'Shop-Shop',
      image: 'shop-shop.png',
      technology: 'MERN, JavaScript, GraphQL, JWT, Stripe, Redux',
      description: `An e-commerce full-stack MERN application that uses Redux to manage global state. Users can create 
        accounts to add products to their shopping cart and checkout using the Stripe API.`,
      deployed: 'https://shop-shop.onrender.com',
      repo: 'https://github.com/kt946/awesome-shop-shop-redux'
    },
    {
      title: 'Pizza Hunt',
      image: 'pizza-hunt.png',
      technology: 'Node, Express, NoSQL, MongoDB, Mongoose',
      description: `Hungry for some pizza? Check out Pizza Hunt, an app that uses NoSQL to store pizza recipies and user comments.`,
      deployed: 'https://pizza-hunt-wmr7.onrender.com',
      repo: 'https://github.com/kt946/pizza-hunt'
    },
    {
      title: 'The Epic Tech Blog',
      image: 'the-epic-tech-blog.png',
      technology: 'Node, Express, MySQL, Sequelize, Handlebars, Bootstrap, MVC',
      description: `A CMS-style blog site using the MVC paradigm for discussing technology through blog posts and comments.`,
      deployed: 'https://epic-tech-blog.onrender.com',
      repo: 'https://github.com/kt946/epic-tech-blog-MVC'
    },
  ]);

  return(
    // section for Portfolio component with projects
    <section id="portfolio" className="container py-4 custom-height text-white">
      <h1 className="section-title text-center pb-2 mb-4 animate__animated animate__fadeIn">
        Portfolio
      </h1>
      <h2 className="fs-4 fw-bold text-center mb-4 animate__animated animate__fadeInDown delay-1">
        Here is a collection of my featured projects.
      </h2>
      {/* Project component */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4 animate__animated animate__fadeIn animate__delay-1s">
        {projects.map((project) => (
          <Project 
            key={project.title} 
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;