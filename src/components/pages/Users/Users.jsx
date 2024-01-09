import React, { useContext, useEffect, useState } from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContextInfo";

const Users = () => {
  const data = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      if (data.isAuth) {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");

          if (!res.ok) {
            throw new Error("Failed to fetch");
          }

          const data = await res.json();

          setUsers(data);

          setIsLoading(false);
        } catch (e) {
          console.error("error", e.message);
        }
      }
    };

    getUsers();
  }, [data.isAuth]);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <h1>List of users:</h1>
      {users.map((user) => (
        <div className="users-container" key={user.id}>
          <Link to={`${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
