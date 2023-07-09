import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Blogs = ({ blogs, deleteBlog }) => {
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
        {blogs.map((item) => (
          <Card key={item.id} style={{ width: "18rem", position: "relative" }}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.body}</Card.Text>
              <button
                style={{
                  position: "absolute",
                  right: "5px",
                  bottom: "5px",
                  borderRadius: "5px",
                  backgroundColor: "red",
                  border: "none",
                }}
                onClick={() => {
                  deleteBlog(item.id);
                }}
              >
                Delete
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
