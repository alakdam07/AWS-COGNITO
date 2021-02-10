import React, { useState, useEffect } from "react";
import { api } from './api';

const Home = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const response = await fetch(`${api}/all`);
    const data = await response.json();
    setstate(data.item)
  }
  return (
    <div className="row">
      <h1>hello welcome to home</h1>
      {
        state?.map((i, index) => <h1 key={index}>{i.income}</h1>)
      }
    </div>
  );
};

export default Home;
