import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return <div>
  <h1>Главная страница</h1>
  <Link to={"/login"}>Залогиниться</Link>
</div>
};

export default Home;