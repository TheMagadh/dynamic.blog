import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const saved = localStorage.getItem('fectum_blog_draft');

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>

      {saved ? (
        <table className="w-full border text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Preview</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Draft Blog</td>
              <td className="border px-4 py-2">
                <Link to="/preview/draft" className="text-blue-600 underline">View</Link>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No blogs found. Create a new one from the homepage.</p>
      )}
    </div>
  );
};

export default BlogList;
