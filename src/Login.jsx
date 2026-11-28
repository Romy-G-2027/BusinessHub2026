import "./Login.css"


function Login () {
   return(
       <div className="Login" id="Login">


           <div className="leftColumn">
               <img id="BHLogo"src="/public/images/Logo1.png" alt="BH Logo"></img>
           </div>


           <div className="rigthColumn">
               <div>
                   <h2>Log In</h2>
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
                      <button> Log In </button>
                   </div>


                   <div id="linksDiv">
                        <div id="linkToSigUp"> Dont have an account.
                            <a href="https://businesshub2026-ffbk-2jb2xh9r--5173--e1edbc98.local-corp.webcontainer.io/Signin"> Sign Up </a>
                        </div>
                        
                        <div>
                            <a href="https://businesshub2026-ffbk-2jb2xh9r--5173--e1edbc98.local-corp.webcontainer.io/Forgotpassword">forgot pasword</a>
                        </div>
                   </div>


               </div>
           </div>
          
       </div>
   );
}


export default Login;

