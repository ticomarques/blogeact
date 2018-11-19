import React from 'react';

const Blog = () => (
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
            <h1>Coluna 2</h1>
        </main>
    </div>
);

export default Blog;