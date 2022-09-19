import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
  const [projects] = useState([
    {
      title: 'Project 1',
      id: 'project1',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum odio dolorem cumque nobis, sed ea quibusdam veritatis esse veniam labore exercitationem nostrum non itaque eveniet officiis doloribus iste quis obcaecati!',
      deployed: '/',
      repo: '/',
      image: 'test-image-1'
    },
    {
      title: 'Project 2',
      id: 'project2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi at, temporibus culpa sed itaque fugiat optio rerum, hic odit autem alias architecto ratione debitis quisquam quibusdam accusantium veritatis molestias.',
      deployed: '/',
      repo: '/',
      image: 'test-image-2'
    },
    {
      title: 'Project 3',
      id: 'project3',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, delectus, sint ad similique tempore sapiente est magni odit ab dolorem suscipit quae ratione nesciunt vero ipsam nulla ut exercitationem amet!',
      deployed: '/',
      repo: '/',
      image: 'test-image-3'
    },
    {
      title: 'Project 4',
      id: 'project4',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste quibusdam iusto sit soluta inventore nemo eos, alias cupiditate at dicta placeat quia nobis corporis vel. Tempora mollitia laudantium obcaecati.',
      deployed: '/',
      repo: '/',
      image: 'test-image-4'
    },
    {
      title: 'Project 5',
      id: 'project5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tempore possimus ullam reprehenderit molestias esse cumque libero. Porro quasi nisi, saepe, possimus ipsam nesciunt, adipisci et minus quia in repellat?',
      deployed: '/',
      repo: '/',
      image: 'test-image-5'
    },
    {
      title: 'Project 6',
      id: 'project6',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quaerat natus at voluptates esse praesentium deleniti placeat, cum delectus assumenda quo illum illo, ratione, rem officiis. Debitis quam odio ad.',
      deployed: '/',
      repo: '/',
      image: 'test-image-6'
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