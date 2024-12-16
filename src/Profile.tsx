import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return <div>
        <h1>Тут ваш профиль!</h1>
        <Link to={"/login"}>Выйти</Link>
    </div>
};

export default Profile;