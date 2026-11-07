import "./Signin.css"

function Signin () {
    return(
        <div className="Signin" id="Signin">

            <div>
                <img id="BHLogo"src="/public/images/Logo1.png" alt="BH Logo"></img>
            </div>

            <div className="rigthColumn">
                <div>
                    <h2>Sign In</h2>
                </div>
                <div>
                    <div>
                        <form className="naming">
                            <div id="name">
                                <p><label htmlfor="Name">Name</label></p>
                                <input type="Last Name" className="inputBox"/>
                            </div>

                            <div id="lastName">
                                <p><label htmlfor="Email">Last Name</label></p>
                                <input type="email" className="inputBox"/>
                            </div>
                        </form>
                    </div>

                    <div>
                        <p><label htmlfor="Email">Email Address</label></p>
                        <input type="email" className="inputBox"/>
                    </div>

                    <div>
                        <p><label htmlfor="password">Password</label></p>
                        <input type="Password" className="inputBox"/>
                    </div>

                    <div>
                        <p><label htmlfor="Email">Email Address</label></p>
                        <input type="email" className="inputBox"/>
                    </div>
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