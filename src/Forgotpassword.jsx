import { Link } from 'react-router-dom'
import "./Forgotpassword.css"


function Forgotpassword () {
   return(
       <div className="Forgotpassword" id="Forgotpassword">


           <div className="leftColumn">
               <img id="BHLogo"src="/images/Logo1.png" alt="BH Logo"></img>
           </div>


              
           <div className="rightColumn">
               <div>
                   <h2>Reset Password</h2>
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
               </div>


               <div>
                   <button> Reset Password </button>
               </div>


               <div id="links">
                   <div> Dont have an account
                   <Link to="/Signin"> Sign up </Link>
                   </div>


                   <div>
                   <Link to="/Login">Log in</Link>
                   </div>
               </div>


           </div>
          
       </div>
   );
}


export default Forgotpassword;



