import React from 'react';

function Blog() {
  return (
    <section className="p-4 bg-rose-100 dark:bg-rose-800">
      <h2 className="text-2xl font-bold mb-4 text-rose-900 dark:text-white">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-rose-900 p-4 rounded shadow">
          <img src="path_to_blog_image.jpg" alt="Blog Title" className="w-full rounded mb-4"/>
          <h3 className="text-rose-900 dark:text-rose-200 font-semibold mb-2">Blog Title</h3>
          <p className="text-rose-700 dark:text-rose-400 mb-4">Short blog description...</p>
          <button className="text-rose-600 dark:text-rose-400 hover:underline">Read More</button>
        </div>
        // Repeat the above div for each blog post
      </div>
    </section>
  );
}

export default Blog;
