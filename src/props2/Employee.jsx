import React from "react";


class Employee extends React.Component{


    render(){
        return  <div>
                       <h2>Employee component</h2>
                       <h3>{"good Evening"}</h3>
                       <pre>{JSON.stringify(this.props)}</pre>

                      

                </div>
    } 
}
export default  Employee 