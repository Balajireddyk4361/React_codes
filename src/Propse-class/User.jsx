
import Employees from "./Employees";
import React from "react";

class User extends React.Component{
    uid=100;
    uname="BalajiReddy"
    user_Details={
         Email:"balaji@4361",
         loc:["medahalli","Bengaluru"]
    }
    render(){
        return <div>
                     <h4>User Component</h4>
                     <h4>User Name:{this.uname}</h4>
                     <hr />
                     <Employees eid={this.uid} 
                     ename={this.uname}
                     emp_Details={this.user_Details}/>
               </div>
    }
}
export default User;

//---------------------------------------------
// App.jsx codes for user.jsc and Empoyees.jsx 
/*
import User from "./Propse-class/User";
let App = () =>{

  return <div>
             <h2>App component</h2>
             <hr />
             <User/>
         </div>

}
export default App
*/