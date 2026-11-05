import "./Signin.css"

function Signin () {
    return(
        <div className="Signin" id="Signin">

            <div>
                <img id="BHLogo"src="/public/images/Logo1.png" alt="BH Logo"></img>
            </div>

            <div>
                <div>
                    <h2>Sign In</h2>
                </div>
                <div>
                    <div>
                    <form>Name</form>
                    <form>Last Name</form>
                    </div>
                    
                    <form>Email Adress</form>
                    <form>password</form>
                    <form>repeat password</form>
                    <button> <img src="google.wbpg"></img>continue with google </button>
                    <button> Sign In </button>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Dont have an account. Log in</a>
                    <a href="https://www.youtube.com/watch?v=7oKZeo779Xg">forgot pasword</a>
                </div>
            </div>
        </div>
    );
}

export default Signin;