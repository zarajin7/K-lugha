function Nav(){
    return(
        <>
        <div className="container mx-auto flex justify-between  px-10 py-0 bg-gradient-to-r from-neutral-950 via-red-950 to-green-950 text-white items-center">
           
            <ul className="flex flex-row gap-5 items center">
            <li><img className="img w-[20%]" src="images/logo-removebg-preview.png"></img></li>
                <li>Home</li>
                <li>Login</li>
                <li>Language-Categories</li>
                <li>Lessons</li>
            </ul>
        </div>
        </>
    )
}

export default Nav