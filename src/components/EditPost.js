import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const EditPost = (props) => (
    <div>
        <Header />
        <h4><Link to="/admin">Blog admin</Link> > Editing post id: {props.match.params.id}</h4>
        <form>
            <input type="text" name="post-title" placeholder="Type the post title" />
            <textarea placeholder="Type the post content"></textarea>
            <input type="button" value="Save" />
            <input type="button" value="Delete" />
        </form>
    </div>
);

export default EditPost;