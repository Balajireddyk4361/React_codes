// these is for "FUNCTION USER PAGE  TO FUNCTION "EMPLOY PAGE";

import Employ from "./employ";
let User = ()=>{
let uid=101; //int
let uname="BalajiReddy"//string
let loc=["Tirupati","Bellammadugu"]//array
let New_user={
    eid:101,
    esal:90000,
    uname:'Balajireddy'
    }
    return <div>
                   <h1>User component</h1>
                   <h2>User_Name:{uname}</h2>
                   <hr/>
                   <Employ user_id={uid}
                           Employee_Name={uname}
                            loc={loc[1]}
                            New_user={New_user} />
            </div>
}
export default User;

// ---------------------------------------------
//App.jsx cosdes for user.jsx and Employ.jsx
/*
import User from "./props1/user"
let  App = () =>{

  return <div>
            <h2>App component</h2>
            <User/>
        </div>
}
export default App*/