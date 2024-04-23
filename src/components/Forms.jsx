
function forms(){
    return(
        <div className="border border-black mx-6 py-4 text-center">
            <form>
                <div className="text-2xl font-semibold text-center">
            <h1>fill in the form </h1>
            </div>

            <div className="gap-4">
            <label> Add class</label>
            <input  className="border border-black" type= "text" placeholder="classname"/>
            </div>


            <div>
            <label>class number</label>
            <input  className="border border-black" type="number" placeholder="number"/>
           </div>

            <h2 className="text-2xl ">Category</h2>

            <h3>Basic</h3>
            <input type="checkbox" placeholder="level"/>
            <p>Lesson 1</p>            <input type="checkbox" placeholder="level"/>
<p>lesson2</p>            <input type="checkbox" placeholder="level"/>
<p>lesson3</p>            <input type="checkbox" placeholder="level"/>
<p>lesson4</p>            <input type="checkbox" placeholder="level"/>
<p>lesson5</p>             <input type="checkbox" placeholder="level"/>

<button>CreateClass</button>
</form>

            </div>
    )
}
export default forms