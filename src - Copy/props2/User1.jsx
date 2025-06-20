import Employee from "./Employee";
// This is for passing data from the User component to the Employee component

let User1 = () => {
    let uid = 101; // int
    let uname = "BalajiReddy"; // string
    let loc = ["Tirupati", "Bellammadugu"]; // array

    let newUser = {
        eid: 101,
        esal: 90000,
        uname: 'Balajireddy'
    };

    return (
        <div>
            <h1>User component</h1>
            <h2>User_Name: {uname}</h2>
            <hr />
            <Employee 
                user_id={uid}
                Employee_Name={uname}
                loc={loc[1]}
                New_user={newUser}
            />
        </div>
    );
}

export default User1;

//--------------------------------------------------------------

//App.jsx codes for Employee.jsx file and User1.jsx file 

/*
import Employee from "./props2/Employee";
let  App = () =>{

  return <div>
            <h2>App component </h2>
            <Employee/>
            
        </div>
}
export default App
*/


