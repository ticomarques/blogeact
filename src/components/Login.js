import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => (
    <div className="login">
        <div className="picture"></div>
        <div className="info">
            <h1>Blog Admin</h1>
            <input type="text" placeholder="Insert your email" />
            <input type="text" placeholder="Insert your password" />
            <input type="button" value="Log in" />

            <Link to="#forgotpass">Forgot your password </Link> ? <Link to="#forgotemail">or email</Link> ? <Link to="#signin">Sign in</Link>
        </div>
    </div>
);

export default Login;