import React from "react";

export default function Car({ merk, year }) {
  return (
    <div>
      <h2>My Car:</h2>
      <ul>
        <li>{merk}</li>
        <li>{year}</li>
      </ul>
    </div>
  );
}
