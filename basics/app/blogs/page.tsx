import axios from "axios"

async function getBlogs() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return response.data
}

export default async function Blogs() {
  const blogs = await getBlogs();
  return <div>
    {blogs.map((blog: Itodo) => <Todo title={blog.title} completed={blog.completed} />)}

  </div>
}

interface Itodo {
  title: string;
  completed: boolean;
}

function Todo({ title, completed }: Itodo) {
  return <div>
    {title}{completed ? "done!" : "not done"}
  </div>
}