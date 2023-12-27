import React, { useEffect, useState } from "react";
import User from "../User/User";
import "./Styles.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
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
    };

    getUsers();
  }, []);

  const LoadingComponent = () => {
    return <div>Loading...</div>;
  };

  const UsersComponent = () => {
    return (
      <div>
        <h1>List of users:</h1>
        <div className="users-container">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  };

  return <div>{isLoading ? <LoadingComponent /> : <UsersComponent />}</div>;
};

export default Users;
