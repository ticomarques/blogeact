import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import PostListItem from './PostListItem';
import selectPosts from '../selectors/posts';

const PostList = (props) => (
    <div>
        <Header />
        <Link to="/create">New Post</Link>
        <table>
            <thead>
                <tr>
                    <th>Post</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {props.posts.map((post) => {
                    return <PostListItem key={post.id} {...post} />;
                  })}
            </tbody>
        </table>
    </div>
);

const mapStateToProps = (state) => {
  return {
    posts: selectPosts(state.posts, state.filters)
  };
};

export default connect(mapStateToProps)(PostList);