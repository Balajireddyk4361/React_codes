import CompB from "./compB"
let CompA = ()=>{
let empName="BaljiReddy"
    return <div>
                <h3>component A</h3>
                <hr/>
                <CompB ename={empName} message={"Good morning"}/> 
                
           </div>
}
export default CompA

//--------------------------------------------------------

// app.jsx code for these CompA and compB

/*
import CompA from "./props/CompA"

let App = ()=>{

    return <div>
                <h3>Appcomponent A</h3>
                <CompA/>
           </div>
}
export default App;*/