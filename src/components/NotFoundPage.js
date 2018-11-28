import React from 'react';
import BlogMenu from './BlogMenu';
import {Link} from 'react-router-dom';

const NotFoundPage = (props) => (
    <div className="blog">
        <aside className="aside">
            <div className="wrapMenu">
                <h1>Blogeact</h1>
                <BlogMenu />
            </div>
        </aside>
        <main className="posts notFoundPage">
            <p>PAGE NOT FOUND</p>
            <Link to="/">Home</Link>
        </main>
    </div>
);
export default NotFoundPage;