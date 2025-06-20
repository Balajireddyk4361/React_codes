

import React from 'react'

class Employees extends React.Component{

    render(){
        return    <div>
                     <h4>Employees Componeent </h4>
                     <pre>{JSON.stringify(this.props)}</pre>
                     <h3>Employe id:{this.props.eid  }</h3>
                     <h3>Employe Name:{this.props.ename  }</h3>
                     <h3>Employe Email:{this.props.emp_Details.Email  }</h3>
                  </div>
    } 
}
export default Employees;