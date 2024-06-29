import './CSS/SignInPageCss.css'
function SignInPage() {
    return (<>
        <div className="cardDivBox rounded-5 shadow-lg">
            <div className="randomnImageBox">
                <img src="./media/SpaceImage1.jpeg" className='randomnImageBoxImage' alt="" />
            </div>
            <div className="formDivBox">
                <form action="" method="post">
                    <h1>SignIn Page</h1>
                    <br />
                    <div className="inputFieldSigninBox">
                        <label htmlFor="inputFieldSignin" className="inputTextSignin inputTextSigninPassword fs-4">Username : </label>
                        <input type="text" name="inputFieldSignin" className="inputFieldSignin inputFieldSigninPassword form-control" />
                    </div>
                    <br />
                    <div className="inputFieldSigninBox">
                        <label htmlFor="inputFieldSignin" className="inputTextSignin inputTextSigninEmail fs-4">Email : </label>
                        <input type="text" name="inputFieldSignin" className="inputFieldSignin inputFieldSigninEmail form-control" />
                    </div>
                    <br />
                    <div className="inputFieldSigninBox">
                        <label htmlFor="inputFieldSignin" className="inputTextSignin inputTextSigninPassword fs-4">Password : </label>
                        <input type="text" name="inputFieldSignin" className="inputFieldSignin inputFieldSigninPassword form-control" />
                    </div>
                    <br />
                    <div className="selectUserType">
                        <select name="" id="userTypeSelect" className='form-select'>
                            <option value="noneSelected" selected hidden disabled>Select your account type</option>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="parent">Parent</option>

                        </select>
                    </div>
                    <br />
                    <div className="askForSignIn">
                        <label htmlFor="" className="askSignInLabel fs-6">
                            Already&nbsp;have&nbsp;an&nbsp;account&nbsp;?&nbsp; 
                            <a href="/login">Log In</a>
                        </label>
                    </div>
                    <br />
                    <div className="btnSubmitBox">
                        <button className='btnSubmit btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>);
}

export default SignInPage;