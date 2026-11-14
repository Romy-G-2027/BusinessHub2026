import "./Signin.css"

function Signin () {
    return(
        <div className="Signin" id="Signin">

            <div className="BHLogoClass" className="leftColumn">
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
                                <input type="Name" className="inputBox"/>
                            </div>

                            <div id="lastName">
                                <p><label htmlfor="Last Name">Last Name</label></p>
                                <input type="Last Name" className="inputBox"/>
                            </div>
                        </form>
                    </div>

                    <div>
                        <p><label htmlfor="Email">Email Address</label></p>
                        <input type="Email" className="inputBox"/>
                    </div>

                    <div>
                        <p><label htmlfor="password">Password</label></p>
                        <input type="Password" className="inputBox"/>
                    </div>

                    <div>
                        <p><label htmlfor="repeat-password">Repeat Password</label></p>
                        <input type="password" className="inputBox"/>
                    </div>


                    <div>
                        <button className="googleButton">continue with google </button>
                    </div>

                    <div>
                        <button> Sign In </button>
                    </div>

                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Dont have an account. Log in</a>
                    <a href="https://www.youtube.com/watch?v=7oKZeo779Xg">forgot pasword</a>
                </div>
            </div>
        </div>
    );
}

export default Signin;