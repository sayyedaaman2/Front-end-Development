import loginPic from '../img/login-icon.png';


function Login() {
    return (
        <>
            <div id='login-container'>
                <div id='login-pic-section'>
                    <img id='login-logo' src={loginPic} />
                </div>
                <div id='login-form-section'>
                    <form id='login-form'>
                        <table>
                            <tbody>
                                <tr className='row'>
                                    <td className='label'>
                                        UserId
                                    </td>
                                    <td className='input-field'>
                                        <input type="text" name='userId' placeholder='Enter your UserId' autoComplete='off' />
                                        {/* <div className="errorIcon">{name != "" ? nameErr ? <span className="falseMark">&#215;</span> : <span className="trueMark">&#10003;</span> : <span> </span>}</div> */}
                                    </td>
                                </tr>
                                <tr className='row'>
                                    <td className='label'>
                                        Password
                                    </td>
                                    <td className='input-field'>
                                        <input type="text" name='password' placeholder='Enter your Password' autoComplete='off' />
                                        {/* <div className="errorIcon">{name != "" ? nameErr ? <span className="falseMark">&#215;</span> : <span className="trueMark">&#10003;</span> : <span> </span>}</div> */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                        <button type="submit" id="submit-btn">Submit</button>
                    </form>
                    <div id="signup-section">

                        <a href="#" className='signup-href'>SignUp</a>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Login;