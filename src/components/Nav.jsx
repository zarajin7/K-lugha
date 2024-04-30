import {Link} from "react-router-dom"

function Nav(){
    return(
        <>
        <div className="bg-gradient-to-r from-neutral-950 via-red-950 to-green-950 text-white">
        <div className="container  flex justify-between  px-10 py-0  items-center">
           
            <ul className="flex flex-row gap-5 items-center ">
            <li><img className="img w-[20%]" src="images/k-lna-removebg-preview.png"></img></li>
            <Link to="/"><li>Home</li></Link>
                <li>Login</li>
                <Link to="/lessons"><li>Language-Categories</li></Link>
                <li>Lessons</li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Nav