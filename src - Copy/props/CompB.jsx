
let CompB =(props)=>{

    return <div>
                 <h3>Component B</h3>
                 <h3>{JSON.stringify(props)}</h3>
                 <h4>Employee Name:{props.ename}</h4>
          </div>
}
export default CompB;