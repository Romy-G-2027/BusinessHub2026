import "./Signin.css"
import { Link } from "react-router-dom"


function Signin () {
   return(
       <div className="Signin" id="Signin">


           <div className="leftColumn">
               <img id="BHLogo"src="/images/Logo1.png" alt="BH Logo"></img>
           </div>


           <div className="rigthColumn">
               <div>
                   <h2>Sign Up</h2>
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
                       <button> Sign Up </button>
                   </div>


                  
                   <div id="linksDiv">
                       <div id="linkToSigUp"> Already Have and Account {""}
                           <Link to="/Login"> Log In </Link>
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


export default Signin;



