const BlogList = ({ blogs, title, handleDelete}) => {
  // const blogs = props.blogs;
  // const title = props.title;
  // console.log(blogs);

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      <div className="row">
      {blogs.map(blog => (
        <div className="col-md-3 blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>{ blog.body }</p>
          <p className='dark'>Written by: { blog.author }</p>
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>

        </div>
      ))}
      </div>
    </div>
  );
}
 
export default BlogList;