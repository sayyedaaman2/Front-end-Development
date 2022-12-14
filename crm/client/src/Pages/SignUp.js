// import MessageBox from "./MessageBox";

import { useState } from 'react';
import {Link} from 'react-router-dom'

import CustomerPic  from '../img/profile-icon.png'
import EngineerPic from '../img/profileEng-icon.png'
import constant from '../utils/constant';

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState(constant.userType.customer);

    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [userIdErr, setUserIdErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    function nameHandler(e) {
        let name = e.target.value;
        var validNameRegex = new RegExp(/^[a-zA-Z\s]*$/g);
        if (validNameRegex.test(name)) {
            // console.log("valid");
            setNameErr(false);
        } else {
            setNameErr(true);
            // console.log("Invalid");

        }
        setName(name);

    }

    function emailHandler(e) {
        let email = e.target.value;
        var validEmailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        if (validEmailRegex.test(email)) {
            setEmailErr(false);
        } else {
            setEmailErr(true);
        }
        setEmail(email);
    }

    function userIdHandler(e) {
        let userId = e.target.value;
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
        var validPasswordRegex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
        //S.Aaman$1234
        if (validPasswordRegex.test(password)) {
            setPasswordErr(false);
        } else {
            setPasswordErr(true);
        }
        setPassword(password);
    }
    
    function userTypeHandler(e){
        if(userType === constant.userType.customer){
            setUserType(constant.userType.engineer);
        }else{
            setUserType(constant.userType.customer);
        }
    }

    function SubmitData(e) {
        e.preventDefault();
        // const body = {
        //     name,
        //     email,
        //     password,
        //     userId,
        //     userType
        // }
        if (!nameErr && !userIdErr && !emailErr && !passwordErr && userId  && password  && email  && name && userType === constant.userType.customer) {
            //Post request write here
           
            alert("Successfuly Register")
        } else {
            alert("Fill the information")
        }
    }
    return (
        <>
            <div id="signUp-container">

                <div id="signUp-pic-section">
                    { userType===constant.userType.customer ? <img id="signUp-logo" src={CustomerPic} alt="customer-pic" /> : <img id="signUp-logo" src={EngineerPic} alt="engineer-pic"/>
}
                </div>

                <div id="signUp-form-section">
                    <form id="signUp-form" onSubmit={SubmitData}>
                        <table>
                            <tbody>
                                <tr className="row">
                                    <td className="label">
                                        Name
                                    </td>
                                    <td className="input-field" maxLength="10">
                                        <input type="text" name="name" placeholder='Enter Your Name' autoComplete='off' onChange={nameHandler} />
                                        <div className="errorIcon">{ name!== "" ? nameErr? <span className="falseMark">&#215;</span> :<span className="trueMark">&#10003;</span> : <span> </span>}</div>
                                    </td>
                                </tr>
                                <tr className="row">
                                    <td className="label">
                                        Email
                                    </td>
                                    <td className="input-field" maxLength="20">
                                        <input type="text" name="email" placeholder='Enter Your Email' autoComplete='off' onChange={emailHandler} />
                                        <div className="errorIcon">{ email!== "" ? emailErr? <span className="falseMark" >&#215;</span> :<span className="trueMark" >&#10003;</span> : <span> </span>}</div>
                                    </td>
                                </tr><tr className="row">
                                    <td className="label">
                                        UserId
                                    </td>
                                    <td className="input-field" maxLength="10">
                                        <input type="text" name="userId" placeholder='Enter Your UserId' autoComplete='off' onChange={userIdHandler} />
                                        <div className="errorIcon">{ userId!== "" ? userIdErr? <span className="falseMark" >&#215;</span> :<span className="trueMark" >&#10003;</span> : <span> </span>}</div>
                                    </td>
                                </tr><tr className="row">
                                    <td className="label">
                                        Password
                                    </td>
                                    <td className="input-field" maxLength="20">
                                        <input type="text" name="password" placeholder='Enter Your Password' autoComplete='off' onChange={passwordHandler} />
                                        <div className="errorIcon">{ password!=="" ? passwordErr? <span className="falseMark" >&#215;</span> :<span className="trueMark" >&#10003;</span> : <span> </span>}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <button type="submit" id="submit-btn">Submit</button>
                    </form>
                    <div id="Login-section">
                        <Link to="/login" className='login-href'>I have already Account</Link>

                    { userType===constant.userType.customer ? <button className='login-href' onClick={()=> userTypeHandler()}>SignUp as Engineer</button> : <button  className='login-href' onClick={()=> userTypeHandler()}>SignUp as Customer</button>}

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;