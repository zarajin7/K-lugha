import { useLocation } from "react-router-dom"

function Singleclass(){



    const {state} = useLocation();
    
    
    console.log(state)

    return(
<div>
    <h1>You can add the {state} lessons</h1>
    <button   className="flex border px-2  hover:bg-red-700">Add Lessons</button>
    
</div>

    )
}
export default Singleclass