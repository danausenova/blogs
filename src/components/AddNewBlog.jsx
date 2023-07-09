import React from "react";

const AddNewBlog = ({ addBlog }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "30px auto" }}>Add blog</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          width: "400px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          if (
            e.target.elements[0].value.trim() ||
            e.target.elements[1].value.trim()
          ) {
            addBlog(e.target.elements[0].value, e.target.elements[1].value);
          }
          e.target.elements[0].value = "";
          e.target.elements[1].value = "";
        }}
      >
        <input
          style={{ height: "50px", marginBottom: "20px" }}
          placeholder="enter title"
        />
        <input
          style={{ height: "50px", marginBottom: "20px" }}
          placeholder="enter text"
        />
        <button
          style={{
            width: "30%",
            margin: "0 auto",
            padding: "5px",
            backgroundColor: "green",
            borderRadius: "5px",
            border: "none",
          }}
        >
          add
        </button>
      </form>
    </div>
  );
};

export default AddNewBlog;
