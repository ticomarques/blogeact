import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BlogMenu from './BlogMenu';

const ViewPost = (props) => (
    <div className="blog">
        <aside className="aside">
            <h1>Blogeact</h1>
            <BlogMenu />
        </aside>
        <main className="posts viewPost">
            <h4><Link to="/">Home</Link> > {props.post.title} </h4>
            <h1>{props.post.title}</h1>
            <small>{props.post.category}</small>
            <p>{props.post.content}</p>
        </main>
    </div>

);

const mapStateToProps = (state, props) => {
    
    return {
      post :  state.posts.find((post) => post.id === props.match.params.id)
    };
};
  
export default connect (mapStateToProps) (ViewPost);