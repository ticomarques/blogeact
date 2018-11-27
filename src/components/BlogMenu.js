import React from 'react';
import { Link } from 'react-router-dom';

const BlogMenu = () => (
    <nav>
        <ul>
            <li><a href="#">JS</a></li>
            <li><a href="#">React</a></li>
            <li><a href="#">Webpack</a></li>
            <li><a href="#">Yarn</a></li>
            <li><a href="#">SASS/SCSS</a></li>

            <li><Link to="/login" className="admin">Admin</Link></li>
        </ul>
    </nav>
);

export default BlogMenu;