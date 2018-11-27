import React from 'react';
import { Link } from 'react-router-dom';
    import { connect } from 'react-redux';
import Header from './Header';
import PostForm from './PostForm';
    import { removePost, editPost} from '../actions/posts';

const EditPostPage = (props) => (
    <div>
        <Header />
        <h4><Link to="/admin">Blog admin</Link> > Editing post id: {props.match.params.id}</h4>
        <PostForm 
            post={props.post}
            onSubmit={(post) => {
                //dispatch
                props.dispatch(editPost(props.post.id, post));
                props.history.push('/admin');
                //redirect
      
                console.log('updated', post);
              }}
        />

        <button 
            onClick={() => {
                props.dispatch(removePost({ id: props.post.id }));
                props.history.push('/admin');
            }}
            
        >Remove</button>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
      post :  state.posts.find((post) => post.id === props.match.params.id)
    };
};
  
export default connect (mapStateToProps) (EditPostPage);
