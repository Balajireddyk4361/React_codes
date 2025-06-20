
let Employ = (props1)=>{

    return <div>
                   <h1>Employ  component</h1>
                   <pre>{JSON.stringify(props1)}</pre>
                   <h4>Employee ID:{props1.user_id}</h4>
                   <h3>Employee Name:{props1.Employee_Name}</h3>
                   <h3>Lcation:{props1.loc}</h3>
                   <h3>New Employees:{props1.New_user.uname}</h3>

            </div>
}
export default Employ ;