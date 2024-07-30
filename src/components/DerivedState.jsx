// Derived state is any state that can be computed based on other state or props. It is not stored directly in the components state but is calculated when needed. This approach helps avoid duplication and keeps the state simpler and more manageable.

// Ex: const userCount = user.lenght;


import { useState } from "react";

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);

  // Derived state: count of users
  console.log(users);
  const userCount = users.length;
  // Derived state: average age of users
  const averageAge =
    users.reduce((accum, curElem) => accum + curElem.age, 0) / userCount;

  return (
    <div className="main-div">
      <h1>Users List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
      <p>Total Users: {userCount}</p>
      <p>Average Age: {averageAge}</p>
    </div>
  );
};