/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Image, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/actions";
import Loader from "react-loader-spinner";
import { LegalText } from "./LegalText";

function Login({ history, location }) {
    document.body.style.backgroundColor = "#f4f4f4";

    useEffect(() => {
        location.state && auth.signOut();
    }, []);

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loaded, setLoaded] = useState(false);

    const handleChange = (e) => {
        switch (e.target.name) {
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            default:
                return null;
        }
    };

    const handleSubmit = (e) => {
        setLoaded(true);
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch(setUser(user));
                setLoaded(false);
                history.push("/");
            })
            .catch((error) => {
                if (error) {
                    setLoaded(false);
                    alert(error.message);
                }
            });
    };

    return (
        <>
            <div className="shadow-sm bg-white">
                <div className="form">
                    <div className="form__logo m-auto">
                        <Link to="/">
                            <Image
                                src="https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png"
                                className="img-fluid login__logo text-center"
                            />
                        </Link>
                    </div>
                    <div className="form__main-div">
                        <br />
                        {loaded && (
                            <div className="text-center">
                                <Loader
                                    type="TailSpin"
                                    color="#f0c14b"
                                    height={50}
                                    width={50}
                                />
                            </div>
                        )}
                        <p className="form__title text--bold">Login</p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label className="text--bold form-label">
                                    Email or mobile phone number
                </Form.Label>
                                <Form.Control
                                    type="email"
                                    size="sm"
                                    name="email"
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="text--bold form-label">
                                    Password
                </Form.Label>
                                <Form.Control
                                    type="password"
                                    size="sm"
                                    name="password"
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Button
                                variant="warning"
                                className="btn-block button--global"
                                size="sm"
                                type="submit"
                            >
                                Login
              </Button>
                        </Form>
                        <LegalText />
                    </div>
                    <div className="form__new-to-amazon text-center">
                        <p className="mt-3 text-muted">New to Amazon?</p>
                        <Button
                            variant="light"
                            className="btn-block form__button--new-account"
                            size="sm"
                            href="/signup"
                        >
                            Create your Amazon account
            </Button>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;



























// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { auth } from './firebase';
// import './Login.css';
// function Login() {
//     const history = useHistory();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const signIn = e => {
//         e.preventDefault();

//         auth
//             .signInWithEmailAndPassword(email, password)
//             .then(auth => {
//                 history.push('/')
//             })
//             .catch(error => alert(error.message))
//     }

//     const register = e => {
//         e.preventDefault();

//         auth
//             .createUserWithEmailAndPassword(email, password)
//             .then((auth) => {
//                 // created  a new user with email and password
//                 console.log(auth);
//                 if (auth) {
//                     history.push('/')
//                 }
//             })
//             .catch(error => alert(error.message));
//         // do some fancy firebase register shitt.........
//     }
//     return (
//         <div className="login">
//             <Link to='/'>
//                 <img
//                     className="login_logo"
//                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
//             </Link>
//             <div className="login_container">
//                 <h1>Sign-in</h1>
//                 <form>
//                     <h5>E-mail</h5>
//                     <input type="text" value={email}
//                         onChange={e => setEmail(e.target.value)} />
//                     <h5>Password</h5>
//                     <input type="password" value={password}
//                         onChange={e => setPassword(e.target.value)} />
//                     <button onClick={signIn}
//                         type="submit"
//                         className="login_signInButton">Sign In</button>
//                 </form>
//                 <p>
//                     By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
//                 </p>
//                 <button onClick={register}
//                     className="login_registerButton">Create Your Amazon Account</button>
//             </div>
//         </div>
//     )
// }

// export default Login
