// import MessageBox from "./MessageBox";

import { useState } from "react";
import { Link } from "react-router-dom";

import CustomerPic from "../img/profile-icon.png";
import EngineerPic from "../img/profileEng-icon.png";
import constant from "../utils/constant";

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
    var validEmailRegex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
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
    var validPasswordRegex = new RegExp(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    );
    //S.Aaman$1234
    if (validPasswordRegex.test(password)) {
      setPasswordErr(false);
    } else {
      setPasswordErr(true);
    }
    setPassword(password);
  }

  function userTypeHandler(e) {
    if (userType === constant.userType.customer) {
      setUserType(constant.userType.engineer);
    } else {
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
    if (
      !nameErr &&
      !userIdErr &&
      !emailErr &&
      !passwordErr &&
      userId &&
      password &&
      email &&
      name &&
      userType === constant.userType.customer
    ) {
      //Post request write here

      alert("Successfuly Register");
    } else {
      alert("Fill the information");
    }
  }
  return (
    <>
      <div className="h-screen bg-slate-400 block">
        <div className="border-2 border-white w-11/12 mx-auto">
          <div className="bg-white w-[50%] border-2 border-slate-800 rounded-full  mx-auto my-9 transcplate ">
            {userType === constant.userType.customer ? (
              <img className="w-44" src={CustomerPic} alt="customer-pic" />
            ) : (
              <img className="w-44" src={EngineerPic} alt="engineer-pic" />
            )}
          </div>

          <div className="border-2 border-gray-900 rounded-lg bg-cyan-200">
            <form
              className="w-[95%] mx-auto text-center mt-2 bg-zinc-400 p-4"
              onSubmit={SubmitData}
            >
              <table className="w-full">
                <tbody>
                  <tr className="row">
                    <td className="label">Name</td>
                    <td className="input-field" maxLength="10">
                      <input
                        className="input-box"
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        autoComplete="off"
                        onChange={nameHandler}
                      />
                      <div className="inline ml-3">
                        {name !== "" ? (
                          nameErr ? (
                            <span className="falseMark">&#215;</span>
                          ) : (
                            <span className="trueMark">&#10003;</span>
                          )
                        ) : (
                          <span> </span>
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr className="row">
                    <td className="label">Email</td>
                    <td className="input-field" maxLength="20">
                      <input
                        className="input-box"
                        type="text"
                        name="email"
                        placeholder="Enter Your Email"
                        autoComplete="off"
                        onChange={emailHandler}
                      />
                      <div className="errorIcon">
                        {email !== "" ? (
                          emailErr ? (
                            <span className="falseMark">&#215;</span>
                          ) : (
                            <span className="trueMark">&#10003;</span>
                          )
                        ) : (
                          <span> </span>
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr className="row">
                    <td className="label">UserId</td>
                    <td className="input-field" maxLength="10">
                      <input
                        className="input-box"
                        type="text"
                        name="userId"
                        placeholder="Enter Your UserId"
                        autoComplete="off"
                        onChange={userIdHandler}
                      />
                      <div className="errorIcon">
                        {userId !== "" ? (
                          userIdErr ? (
                            <span className="falseMark">&#215;</span>
                          ) : (
                            <span className="trueMark">&#10003;</span>
                          )
                        ) : (
                          <span> </span>
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr className="row">
                    <td className="label">Password</td>
                    <td className="input-field" maxLength="20">
                      <input
                        className="input-box"
                        type="text"
                        name="password"
                        placeholder="Enter Your Password"
                        autoComplete="off"
                        onChange={passwordHandler}
                      />
                      <div className="errorIcon">
                        {password !== "" ? (
                          passwordErr ? (
                            <span className="falseMark">&#215;</span>
                          ) : (
                            <span className="trueMark">&#10003;</span>
                          )
                        ) : (
                          <span> </span>
                        )}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <button className="bg-gradient-to-b from-teal-100  to-teal-400 h-12 w-20 border-2 border-black shadow-black shadow-md rounded-lg hover:bg-black hover:text-white" type="submit" >
                Submit
              </button>
            </form>
            <div className="Login-section">
              <Link to="/login" className="login-href">
                I have already Account
              </Link>

              {userType === constant.userType.customer ? (
                <button
                  className="login-href"
                  onClick={() => userTypeHandler()}
                >
                  SignUp as Engineer
                </button>
              ) : (
                <button
                  className="login-href"
                  onClick={() => userTypeHandler()}
                >
                  SignUp as Customer
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
