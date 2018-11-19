import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const AddPost = () => (
    <div>
        <Header />
        <h4><Link to="/admin">Blog admin</Link> > New Post</h4>
        <form>
            <input type="text" name="post-title" placeholder="Type the post title" />
            <textarea placeholder="Type the post content"></textarea>
            <input type="button" value="Save" />
        </form>
    </div>
);

export default AddPost;