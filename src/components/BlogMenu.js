import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sortByCategory } from '../actions/filters';
import selectPosts from '../selectors/posts';

const BlogMenu = (props) => (
    <nav>
        <ul>
            <li>
                <a 
                    href="#" 
                    onClick={()=>(
                        props.dispatch(sortByCategory(''))
                    )}
                    >Home
                </a>
            </li>

            <li>
                <a 
                    href="#" 
                    onClick={()=>(
                        props.dispatch(sortByCategory('js'))
                    )}>JS
                </a>
            </li>

            <li>
                <a 
                    href="#"
                    onClick={()=>(
                        props.dispatch(sortByCategory('react'))
                    )}
                    >React
                </a>
            </li>

            <li>
                <a 
                    href="#"
                    onClick={()=>(
                        props.dispatch(sortByCategory('webpack'))
                    )}
                    >Webpack</a>
            </li>

            <li>
                <a 
                    href="#"
                    onClick={()=>(
                        props.dispatch(sortByCategory('yarn'))
                    )}
                    >Yarn
                </a>
            </li>

            <li>
                <a 
                    href="#"
                    onClick={()=>(
                        props.dispatch(sortByCategory('scss/sass'))
                    )}
                    >SASS/SCSS
                </a>
            </li>

            <li><Link to="/login" className="admin">Admin</Link></li>
        </ul>
    </nav>
);

const mapStateToProps = (state) => {
    return {
      posts: selectPosts(state.posts, state.filters)
    };
};

export default connect(mapStateToProps)(BlogMenu);