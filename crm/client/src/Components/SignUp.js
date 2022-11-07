import React from 'react'
import Logo from '../img/form.png'
const SignUp = () => {
    return (
        <>
            <div id='signup-container'>
                <div className="signup-body-upper">
                    <div className="signup-form">
                        <form>
                            <div className='form-item'>
                                <label>Name : </label>
                                <input type="text" name="name" placeholder="Enter Your Name" /><br />
                            </div>
                            <div className='form-item'>
                                <label>Email : </label>
                                <input type="text" name="email" placeholder="Enter Your Email" /><br />
                            </div><div className='form-item'>
                                <label>UserId : </label>
                                <input type="text" name="userId" placeholder="Enter Your UserId" /><br />
                            </div><div className='form-item'>
                                <label>Password : </label>
                                <input type="text" name="password" placeholder="Enter Your Password" /><br />
                            </div>
                        </form>
                    </div>
                    <div className="signup-img">
                        <img id="signup-img" src={Logo} />
                    </div>

                </div>
                <div className="signup-body-lower">
                    <div className="other-methods-signup">
                        <a href="#"> I have alread Account</a>
                        <a href="#">SignUp as Engnieer</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
