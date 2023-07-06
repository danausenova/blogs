import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  const [res, setRes] = useState([]);
  async function getData() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    setRes(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px auto" }}>Blogs</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          rowGap: "2rem",
        }}
      >
        {res.map((item) => (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
