import React from 'react';
import {Link} from 'react-router-dom';

const Login = (props) => (
    <div className="login">
        <div className="picture"></div>
        <div className="info loginContent">
            <div className="wrapForm">
                <h1>Blog Admin</h1>
                <form className="loginForm"
                        onSubmit={() => {
                            props.history.push('/admin');
                        }}
                >
                    <input type="text" placeholder="Insert your email" />
                    <input type="password" placeholder="Insert your password" />
                    <button>Log in</button>
                </form>

                <Link to="#forgotpass">Forgot your password ?</Link> <Link to="#forgotemail">or email ?</Link><br></br><Link to="#signin">Sign in</Link>
            </div>
        </div>
    </div>
);

export default Login;