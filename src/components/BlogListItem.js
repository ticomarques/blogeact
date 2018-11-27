import React from 'react';
import { Link } from 'react-router-dom';


const BlogListItem = (post) => (
    <div className="box-post">
        <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
        <small>{post.category}</small>
        <p>{post.content}</p>
    </div>
)

export default BlogListItem;