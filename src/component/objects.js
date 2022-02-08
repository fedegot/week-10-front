import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

const Objects = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/97");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {`${user.id} ${user.Date} ${user.Brief_Description_of_sighting}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Objects;
