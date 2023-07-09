import "bootstrap/dist/css/bootstrap.min.css";
import MainRoute from "./routes/MainRoute";
import { useEffect, useState } from "react";
import axios from "axios";
const API = "http://localhost:8000/posts";
function App() {
  const [blogs, setBlogs] = useState([]);
  async function getBlogs() {
    const { data } = await axios(API);
    setBlogs(data);
  }
  useEffect(() => {
    getBlogs();
  }, []);
  async function deleteBlog(id) {
    await axios.delete(`${API}/${id}`);
    getBlogs();
  }
  async function addBlog(title, body) {
    const newBlog = { userId: 1, title, body };
    await axios.post(API, newBlog);
    getBlogs();
  }
  return (
    <div>
      <MainRoute blogs={blogs} deleteBlog={deleteBlog} addBlog={addBlog} />
    </div>
  );
}

export default App;
