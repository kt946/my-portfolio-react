import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
  const [projects] = useState([
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odio dolorem cumque nobis, sed ea quibusdam veritatis esse veniam labore exercitationem nostrum non itaque eveniet officiis doloribus iste quis obcaecati!',
      deployed: '/',
      repo: '/',
      image: 'test-image-1'
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi at, temporibus culpa sed itaque fugiat optio rerum, hic odit autem alias architecto ratione debitis quisquam quibusdam accusantium veritatis molestias.',
      deployed: '/',
      repo: '/',
      image: 'test-image-2'
    },
    {
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, delectus, sint ad similique tempore sapiente est magni odit ab dolorem suscipit quae ratione nesciunt vero ipsam nulla ut exercitationem amet!',
      deployed: '/',
      repo: '/',
      image: 'test-image-3'
    },
    {
      title: 'Project 4',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste quibusdam iusto sit soluta inventore nemo eos, alias cupiditate at dicta placeat quia nobis corporis vel. Tempora mollitia laudantium obcaecati.',
      deployed: '/',
      repo: '/',
      image: 'test-image-4'
    },
    {
      title: 'Project 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tempore possimus ullam reprehenderit molestias esse cumque libero. Porro quasi nisi, saepe, possimus ipsam nesciunt, adipisci et minus quia in repellat?',
      deployed: '/',
      repo: '/',
      image: 'test-image-5'
    },
    {
      title: 'Project 6',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quaerat natus at voluptates esse praesentium deleniti placeat, cum delectus assumenda quo illum illo, ratione, rem officiis. Debitis quam odio ad.',
      deployed: '/',
      repo: '/',
      image: 'test-image-6'
    },
  ]);

  return(
    <section id="portfolio" className="mx-4 mx-sm-5 py-3">
      <h2 className="section-title text-white">
        Portfolio
      </h2>
      <Project projects={projects}></Project>
    </section>
  );
}

export default Portfolio;