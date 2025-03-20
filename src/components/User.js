import React, { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Learning react OP");
    }, 1000);
    //this return statement in useEffect is to unmount, what ever you want to clear, here like interval time, we can do in this return callback function
    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);
  return (
    <div className="user-card">
      <h1>count:{count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Bangalore</h3>
      <h4>Contact: @sriya94</h4>
    </div>
  );
};

export default User;
