import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const PostList = () => (
    <div>
        <Header />
        <Link to="/create">New Post</Link>
        <table>
            <thead>
                <tr>
                    <th>Post</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>How to use map, filter, reduce, sort</td>
                    <td><Link to="/edit/123">Edit</Link> | Delete | <Link to="/post/123">View</Link></td>
                </tr>
                <tr>
                    <td>How to use map, filter, reduce, sort</td>
                    <td><Link to="/edit/123">Edit</Link> | Delete | <Link to="/post/123">View</Link></td>
                </tr>
                <tr>
                    <td>How to use map, filter, reduce, sort</td>
                    <td><Link to="/edit/123">Edit</Link> | Delete | <Link to="/post/123">View</Link></td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default PostList;