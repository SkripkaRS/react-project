import React, { useEffect } from "react";
import "./Styles.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

const User = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${params.id}`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();

        setUser(data);

        setIsLoading(false);
      } catch (e) {
        console.error("error", e.message);
      }
    };

    getUser();
  }, [params.id]);

  const { name, phone, email } = user;

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="user">
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default User;
