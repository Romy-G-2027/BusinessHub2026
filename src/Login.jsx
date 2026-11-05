import "./Login.css"

function Login () {
    return(
        <div className="Login" id="Login">

            <div className="BHLogoClas">
                <img id="BHLogo"src="/public/images/Logo1.png" alt="BH Logo"></img>
            </div>

            <div className="rigthColumn">
                <div>
                    <h2>Log in</h2>
                </div>

                <div>
                    <div>
                        <p><label htmlFor="Email">Email Adress</label></p>
                        <input type="email" className="inputBox"/>
                    </div>

                    <div>
                        <p><label htmlFor="password">Password</label></p>
                        <input type="password" className="inputBox"/>
                    </div>

                    <div>
                        <button className="googleButton"> continue with google </button>
                    </div>

                    <div>
                       <button> Sign Up </button>
                    </div>

                    <div>
                    <form>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Dont have an account. Log in</a>
                    </form>
                    <form>
                        <a href="https://www.youtube.com/watch?v=7oKZeo779Xg">forgot pasword</a>
                    </form>
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default Login;