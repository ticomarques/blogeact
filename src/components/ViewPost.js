import React from 'react';
import { Link } from 'react-router-dom';

const ViewPost = (props) => (
    <div className="blog">
        <aside className="aside">
            <h1>Blogeact</h1>
            <nav>
            <ul>
                <li><a href="#">JS</a></li>
                <li><a href="#">React</a></li>
                <li><a href="#">Webpack</a></li>
                <li><a href="#">Yarn</a></li>
                <li><a href="#">SASS/SCSS</a></li>
            </ul>
            </nav>
        </aside>
        <main className="posts">
            <h4><Link to="/">Home</Link> Post : {props.match.params.id}</h4>
            <h1>Title Post </h1>
            <p>Post content</p>
        </main>
    </div>

);

export default ViewPost;