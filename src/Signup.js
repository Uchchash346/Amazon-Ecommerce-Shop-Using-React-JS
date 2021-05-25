// import React, { useState } from "react";
// import { Image, Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./Login.css";
// import { auth } from "./firebase";
// import { useDispatch } from "react-redux";
// import { setUser } from "./redux/actions/actions";
// import Loader from "react-loader-spinner";
// import { LegalText } from "./LegalText";

// function Signup({ history }) {
//     document.body.style.backgroundColor = "#f4f4f4";
//     const dispatch = useDispatch();

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loaded, setLoaded] = useState(false);

//     const handleChange = (e) => {
//         switch (e.target.name) {
//             case "name":
//                 setName(e.target.value);
//                 break;
//             case "email":
//                 setEmail(e.target.value);
//                 break;
//             case "password":
//                 setPassword(e.target.value);
//                 break;
//             default:
//                 return null;
//         }
//     };

//     const handleSignUp = async (e) => {
//         setLoaded(true);
//         e.preventDefault();
//         await auth
//             .createUserWithEmailAndPassword(email, password)
//             .then((user) => {
//                 auth.currentUser
//                     .updateProfile({
//                         displayName: name,
//                     })
//                     .then(() => {
//                         dispatch(setUser(user));
//                         setLoaded(false);
//                         window.location.href = "/";
//                     })
//                     .catch((error) => {
//                         if (error) {
//                             setLoaded(false);
//                             alert(error.message);
//                         }
//                     });
//             })
//             .catch((error) => {
//                 if (error) {
//                     setLoaded(false);
//                     alert(error.message);
//                 }
//             });
//     };

//     return (
//         <div className="shadow-sm bg-white">
//             <div className="form">
//                 <div className="form__logo m-auto">
//                     <Link to="/">
//                         <Image
//                             src="https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png"
//                             className="img-fluid form__logo text-center"
//                         />
//                     </Link>
//                 </div>

//                 <div className="form__main-div">
//                     <br />
//                     {loaded && (
//                         <div className="text-center">
//                             <Loader type="TailSpin" color="#f0c14b" height={50} width={50} />
//                         </div>
//                     )}
//                     <p className="form__title text--bold">Create Account</p>
//                     <Form onSubmit={handleSignUp}>
//                         <Form.Group>
//                             <Form.Label className="text--bold">Your name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 size="sm"
//                                 name="name"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label className="text--bold">
//                                 Mobile number ( Optional )
//               </Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 size="sm"
//                                 name="mobileNumber"
//                                 onChange={handleChange}
//                             />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label className="text--bold">Email</Form.Label>
//                             <Form.Control
//                                 type="email"
//                                 size="sm"
//                                 name="email"
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label className="text--bold">Password</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 size="sm"
//                                 placeholder="At least 6 characters"
//                                 name="password"
//                                 onChange={handleChange}
//                                 required
//                             />
//                             <Form.Text>Passwords must be at least 6 characters.</Form.Text>
//                         </Form.Group>
//                         <Button
//                             variant="warning"
//                             className="btn-block button--global"
//                             size="sm"
//                             type="submit"
//                         >
//                             Signup
//             </Button>
//                     </Form>
//                     <LegalText />
//                 </div>
//                 <div className="form__have-account text-center">
//                     <p className="mt-3 text-muted">Already have an account?</p>
//                     <Button
//                         variant="light"
//                         className="btn-block form__button--have-account"
//                         size="sm"
//                         href="/login"
//                     >
//                         Sign in
//           </Button>
//                     <br />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Signup;
