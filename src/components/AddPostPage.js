import React from 'react';
import { Link } from 'react-router-dom';
    import { connect } from 'react-redux';
import Header from './Header';
import PostForm from './PostForm';
import { addPost } from '../actions/posts';

const AddPostPage = (props) => (
    <div>
        <Header />
        <h4><Link to="/admin">Blog admin</Link> > New Post</h4>
        <PostForm 
            onSubmit={(post) => {
                props.dispatch(addPost(post));
                props.history.push('/admin');
            }}
        />
    </div>
);

export default connect()(AddPostPage);