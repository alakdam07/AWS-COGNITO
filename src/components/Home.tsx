import React, { useState, useEffect } from "react";
import useHandlder from "./configHandler/useHandler";
import { Redirect } from "react-router-dom";
const Home = () => {
  const [state, setstate] = useState([]);
  const { getAuthenticatedUser } = useHandlder();
  const [isMounted, setIsMounted] = useState(true)
  useEffect(() => {
    return () => {
      setIsMounted(false)
    }
  }, [])

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    if (isMounted) {
      setstate(data);
    }
  };
  return getAuthenticatedUser() === null ? (
    <Redirect to="/signin" />
  ) : (
      <div className="row">
        <h1>hello welcome to home</h1>
        {state?.map((i: string, id: number) => (
          <h1 key={id}>{i.title}</h1>
        ))}
      </div>
    );
};
export default Home;
