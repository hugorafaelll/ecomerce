import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

const MainComponent = () => {
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    // Fetch items from an API
    const fetchData = async () => {
      const result = await fetch("https://api.example.com/items");
      const items = await result.json();
      setItems(items);
      setTotalPages(Math.ceil(items.length / pageSize));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>List of Items</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.slice(0, pageSize).map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} pageSize={pageSize} />
    </div>
  );
};

export default MainComponent;
