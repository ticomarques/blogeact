import React from 'react';
import { Link } from 'react-router-dom';
    import { removePost } from '../actions/posts';
    import { connect } from 'react-redux';

const PostListItem = (post) => (
    <tr>
        <td>{post.title} - {post.category}</td>
        <td className="actions">
            <Link to={`/edit/${post.id}`}>Edit</Link> | 

            <button
                onClick={() => {
                    post.dispatch(removePost({ id: post.id }));
                }}
            >
            Delete</button> | 
            
            <Link to={`/post/${post.id}`}>View</Link></td>
    </tr>
);


  
export default connect()(PostListItem);
