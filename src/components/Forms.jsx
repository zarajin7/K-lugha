
function forms(){
    return(
        <div className="border border-black mx-6 py-4 text-center bg-gradient-to-r from-red-900 from-10% via-green-900 via-30% to-red-900 to -50% ...h-100px w-100px px-4">
            <form>
                <div className="text-2xl font-semibold text-center">
            <h1>fill in the form </h1>
            </div>
{/* <div className="flex justify-around"> */}
            <div className="gap-4">
            <label> Add class</label>
            <input  className="border border-black" type= "text" placeholder="classname"/>
            </div>


</form>

<button className="border 2px solid grey">Create lesson</button>

            </div>
    )
}
export default forms