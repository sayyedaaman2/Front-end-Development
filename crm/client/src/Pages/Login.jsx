import loginPic from '../img/login-icon.png';


import React, { useState } from "react";
import { Link } from 'react-router-dom'

function Login() {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const [userIdErr, setUserIdErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    //userId handler
    function userIdHandler(e) {
        let userId = e.target.value;
        console.log("userId", userId)

        var validUserIdRegex = new RegExp(/^[a-zA-Z][^\s-]+$/);
        if (validUserIdRegex.test(userId)) {
            setUserIdErr(false);
        } else {
            setUserIdErr(true);
        }
        setUserId(userId);
    }

    function passwordHandler(e) {
        let password = e.target.value;
        console.log("password", password)
        var validPasswordRegex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
        //S.Aaman$1234
        if (validPasswordRegex.test(password)) {
            setPasswordErr(false);
        } else {
            setPasswordErr(true);
        }
        setPassword(password);
    }
    function SubmitData(e) {
        e.preventDefault();

        if (!userIdErr && !passwordErr && userId && password) {
            //Post request write here
            alert("Successfuly Login")
        } else {
            alert("Fill the information")
        }
    }

    return (
        <>
            <div id='login-container'>
                <div id='login-pic-section'>
                    <img id='login-logo' src={loginPic} alt="login-pic" />
                </div>
                <div id='login-form-section'>
                    <form id='login-form' onSubmit={SubmitData} >
                        <table>
                            <tbody>
                                <tr className='row'>
                                    <td className='label'>
                                        UserId
                                    </td>
                                    <td className='input-field'>
                                        <input type="text" name='userId' placeholder='Enter your UserId' autoComplete='off' onChange={userIdHandler} />
                                        <div className="errorIcon">{userId !== "" ? userIdErr ? <span className="falseMark">&#215;</span> : <span className="trueMark">&#10003;</span> : <span> </span>}</div>
                                    </td>
                                </tr>
                                <tr className='row'>
                                    <td className='label'>
                                        Password
                                    </td>
                                    <td className='input-field'>
                                        <input type="text" name='password' placeholder='Enter your Password' autoComplete='off' onChange={passwordHandler} />
                                        <div className="errorIcon">{password !== "" ? passwordErr ? <span className="falseMark">&#215;</span> : <span className="trueMark">&#10003;</span> : <span> </span>}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <button type="submit" id="submit-btn">Submit</button>
                    </form>
                    <div id="signup-section">

                        <Link to="/signup" className='signup-href' value="SignUp">SignUp</Link>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Login;