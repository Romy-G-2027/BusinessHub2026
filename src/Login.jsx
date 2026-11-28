import {Link} from 'react-router-dom'
import "./Login.css"




function Login () {
  return(
      <div className="Login" id="Login">




          <div className="leftColumn">
              <img id="BHLogo"src="/images/Logo1.png" alt="BH Logo"></img>
          </div>




          <div className="rightColumn">
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
                       <div id="linkToSigUp"> Dont have an account {''}
                           <Link to="/Signin"> Sign Up </Link>
                       </div>
                      
                       <div>
                           <Link to="/Forgotpassword">forgot pasword</Link>
                       </div>
                  </div>




              </div>
          </div>
        
      </div>
  );
}




export default Login;







