import './CSS/LoginPageCss.css'
function LoginPage() {
    return (<>
        <div className="cardDivBox rounded-5 shadow-lg">
            <div className="randomnImageBox">
                <img src="./media/SpaceImage1.jpeg" className='randomnImageBoxImage' alt="" />
            </div>
            <div className="formDivBox">

                <form action="" method="post">
                    <h1>Login Page</h1>
                    <br />
                    <div className="inputFieldLoginBox">
                        <label htmlFor="inputFieldLogin" className="inputTextLogin inputTextLoginEmail fs-4">Email : </label>
                        <input type="text" name="inputFieldLogin" className="inputFieldLogin inputFieldLoginEmail form-control" />
                    </div>
                    <br />
                    <div className="inputFieldLoginBox">
                        <label htmlFor="inputFieldLogin" className="inputTextLogin inputTextLoginPassword fs-4">Password : </label>
                        <input type="text" name="inputFieldLogin" className="inputFieldLogin inputFieldLoginPassword form-control" />
                    </div>
                    <br />
                    <div className="askForSignIn">
                        <label htmlFor="" className="askSignInLabel fs-6">
                            Don't&nbsp;have&nbsp;an&nbsp;account&nbsp;?&nbsp; 
                            <a href="/signin">Sign In</a>
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

export default LoginPage;