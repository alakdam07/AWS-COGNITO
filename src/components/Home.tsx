import React, { useState, useEffect } from "react";
import { api } from './api';
import useHandlder from './configHandler/useHandler'
import { Redirect } from 'react-router-dom';

const Home = () => {
  const [state, setstate] = useState([]);
  const { getAuthenticatedUser } = useHandlder();
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const response = await fetch(`${api}/all`);
    const data = await response.json();
    setstate(data.item)
  }

  return getAuthenticatedUser() === null ? <Redirect to="/signin" /> :
    <div className="row">
      <h1>hello welcome to home</h1>
      {
        state?.map((i, index) => <h1 key={index}>{i.income}</h1>)
      }
    </div>

};

export default Home;
