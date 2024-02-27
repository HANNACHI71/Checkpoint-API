import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UsersList = () => {
  const [users, setUsers] = useState([]); // State variable to store users data
useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") // Make a GET request to the
      .then((res) => setUsers(res.data)) // When promise is resolved, update the state with the response data
      .catch((err) => console.log(err)); // API endpoint for user data
  }, []); // Empty dependency array means this effect will run once on component mount

return (
    <div
    style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        margin: "10px",
        gap: "10px",
    }}
    >
    {users.map((el) => (
        <UserCard key={el.id} user={el} />
    ))}
    </div>
);
};

export default UsersList;
