import React from "react";
import "./Styles.css"

const User = ({ user }) => {
  const { name, phone, email } = user;
  return (
    <div className="user">
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default User;
