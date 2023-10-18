import { useState } from "react";
import BlogList from "./BlogList";


  const Home = () => {
    // create a useState with an array of blogs
    const [blogs, setBlogs] = useState([
      { title: 'My ReactJS App', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ', author: 'John Ault', id: 1},
      { title: 'Welcome Party', body: 'Ultrices gravida dictum fusce ut placerat orci nulla. Quis risus sed vulputate odio ut. Nisl purus in mollis nunc sed id. Vitae auctor eu augue ut lectus arcu bibendum. Sed risus pretium quam vulputate dignissim suspendisse in. Erat pellentesque adipiscing commodo elit at imperdiet dui.', author: 'Kathy Ault', id: 2},
      { title: 'Web Dev Tips', body: 'Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nulla aliquet enim tortor at auctor urna. Dolor sit amet consectetur adipiscing elit duis. ', author: 'Christian Ault', id: 3},
      { title: 'Favorite Labor Day Foods', body: 'Velit ut tortor pretium viverra suspendisse potenti. Diam vel quam elementum pulvinar etiam. A scelerisque purus semper eget duis. Id consectetur purus ut faucibus pulvinar elementum integer enim. Id leo in vitae turpis massa sed elementum tempus. Justo eget magna fermentum iaculis eu non diam phasellus.', author: 'Hannah Ault', id: 4}
    ])

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

    return (
      <div className="home">
            {/* blogs property of home, which fires a callback of each item, which creates JSX inside parenthesis */}

        {/* {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </div>
        ))} */}

      {/* Send blogs and title to BlogList component as props */}
      
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'John Ault')} title="John's Blogs" handleDelete={handleDelete}/>

      </div>
    );
  }
   
  export default Home;
  