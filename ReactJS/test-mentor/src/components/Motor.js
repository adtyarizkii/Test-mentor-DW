import React from "react";

export default function Motor({ merk, year }) {
  return (
    <div>
      <h2>My Motor:</h2>
      <ul>
        <li>{merk}</li>
        <li>{year}</li>
      </ul>
    </div>
  );
}
