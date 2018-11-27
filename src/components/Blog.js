import React from 'react';
import { connect } from 'react-redux';
import BlogListItem from './BlogListItem';
import BlogMenu from './BlogMenu';
import selectPosts from '../selectors/posts';

const Blog = (props) => (
    <div className="blog">
        <aside className="aside">
            <div className="wrapMenu">
                <h1>Blogeact</h1>
                <BlogMenu />
            </div>
        </aside>
        <main className="posts">
            {props.posts.map((post) => {
                return <BlogListItem key={post.id} {...post} />;
              })}
        </main>
    </div>
);

const mapStateToProps = (state) => {
    return {
      posts: selectPosts(state.posts)
    };
  };
  
export default connect(mapStateToProps)(Blog);