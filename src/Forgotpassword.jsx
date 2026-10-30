import "./Forgotpassword.css"

function Forgotpassword () {
    return(
        <div className="Forgotpassword" id="Forgotpassword">
            <div>
                <h2>Reset Password</h2>
            </div>

            <div>
                <img id="BHLogo"src="/public/images/Logo1.png" alt="BH Logo"></img>
            </div>

            <div>
                
                <form>Email Adress</form>
                <form>new password</form>
                <form>repeat new password</form>
                <button> continue with google </button>
                <button> Sign In </button>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Dont have an account. Log in</a>
                <a href="https://www.youtube.com/watch?v=7oKZeo779Xg">remembered pasword</a>
            </div>
            
        </div>
    );
}

export default Forgotpassword;