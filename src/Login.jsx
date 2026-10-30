import "./Login.css"

function Login () {
    return(
        <div className="Login" id="Login">
            <div>
                <h2>Sign Up</h2>
            </div>

            <div>
                <img id="BHLogo"src="/public/images/Logo1.png" alt="BH Logo"></img>
            </div>

            <div>
                <form>Email Adress</form>
                <form>password</form>
                <button> continue with google </button>
                <button> Sign Up </button>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Dont have an account. Log in</a>
                <a href="https://www.youtube.com/watch?v=7oKZeo779Xg">forgot pasword</a>
            </div>
            
        </div>
    );
}

export default Login;