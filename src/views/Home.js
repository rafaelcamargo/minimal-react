import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const routes = ['Binding', 'Conditionals', 'Repetitions', 'Mount', 'Unmount'];

  const buildLinks = () => {
    return routes.map(route => (
      <li>
        <NavLink to={ `/${route.toLowerCase()}` }>
          { route }
        </NavLink>
      </li>
    ));
  };

  return (
    <>
      <h1>Homepage</h1>
      <ul>
        { buildLinks() }
      </ul>
    </>
  )
};

export default Home;
