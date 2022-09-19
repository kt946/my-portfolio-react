import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
  const [projects] = useState([
    {
      title: 'Watch It Later',
      id: 'watch-it-later',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odio dolorem cumque nobis, sed ea quibusdam veritatis esse veniam labore exercitationem nostrum non itaque eveniet officiis doloribus iste quis obcaecati!',
      deployed: 'https://watch-it-later.herokuapp.com/',
      repo: 'https://github.com/cnohilly/watch-it-later'
    },
    {
      title: 'Movie TV Watchlist',
      id: 'movie-tv-watchlist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi at, temporibus culpa sed itaque fugiat optio rerum, hic odit autem alias architecto ratione debitis quisquam quibusdam accusantium veritatis molestias.',
      deployed: 'https://cnohilly.github.io/movie-tv-watchlist/',
      repo: 'https://github.com/cnohilly/movie-tv-watchlist'
    },
    {
      title: 'Weather Dashboard',
      id: 'weather-dashboard',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, delectus, sint ad similique tempore sapiente est magni odit ab dolorem suscipit quae ratione nesciunt vero ipsam nulla ut exercitationem amet!',
      deployed: 'https://kt946.github.io/weather-dashboard/',
      repo: 'https://github.com/kt946/weather-dashboard'
    },
    {
      title: 'The Epic Tech Blog',
      id: 'the-epic-tech-blog',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste quibusdam iusto sit soluta inventore nemo eos, alias cupiditate at dicta placeat quia nobis corporis vel. Tempora mollitia laudantium obcaecati.',
      deployed: 'https://sheltered-mesa-54132.herokuapp.com/',
      repo: 'https://github.com/kt946/epic-tech-blog-MVC'
    },
    {
      title: 'Pizza Hunt',
      id: 'pizza-hunt',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tempore possimus ullam reprehenderit molestias esse cumque libero. Porro quasi nisi, saepe, possimus ipsam nesciunt, adipisci et minus quia in repellat?',
      deployed: 'https://pizza-hunt-13648.herokuapp.com/',
      repo: 'https://github.com/kt946/pizza-hunt'
    },
    {
      title: 'Taskmaster Pro',
      id: 'taskmaster-pro',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quaerat natus at voluptates esse praesentium deleniti placeat, cum delectus assumenda quo illum illo, ratione, rem officiis. Debitis quam odio ad.',
      deployed: 'https://kt946.github.io/taskmaster-pro/',
      repo: 'https://github.com/kt946/taskmaster-pro'
    },
  ]);

  return(
    <section id="portfolio" className="py-4 custom-bg-color">
      <div className="container pb-4">
        <h2 className="section-title text-center border-bottom border-primary border-2 pb-2 mb-4">
          Portfolio
        </h2>
        <Project projects={projects}></Project>
      </div>
    </section>
  );
}

export default Portfolio;