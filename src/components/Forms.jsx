
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


            {/* <div>
            <label>class number</label>
            <input  className="border border-black" type="number" placeholder="number"/>
           </div>
           </div>
            <h2 className="text-2xl ">Category</h2>

            <h3>Basic</h3>
            <input className="py-2" type="checkbox" placeholder="level"/>
            <div className="flex">
                <div>
            <p>Lesson 1</p>            <input type="checkbox" placeholder="level"/>
<p>lesson2</p>            <input type="checkbox" placeholder="level"/>
<p>lesson3</p>            <input type="checkbox" placeholder="level"/>
<p>lesson4</p>            <input type="checkbox" placeholder="level"/>
<p>lesson5</p>             <input type="checkbox" placeholder="level"/>
</div>
<div>
<p>lesson6</p>             <input type="checkbox" placeholder="level"/>
<p>lesson7</p>             <input type="checkbox" placeholder="level"/>
<p>lesson8</p>             <input type="checkbox" placeholder="level"/>
<p>lesson9</p>             <input type="checkbox" placeholder="level"/>
<p>lesson10</p>             <input type="checkbox" placeholder="level"/>
</div>
</div> */}
</form>

<button className="border 2px solid grey">Create lesson</button>

            </div>
    )
}
export default forms