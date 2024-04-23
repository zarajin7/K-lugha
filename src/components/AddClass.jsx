function AddClass({ isOpen, onClose,children}){
    if (!isOpen) return null;

    return(
        <div className="bg-gray-300 flex flex-col w-[30%] px-6 py-[4em]  text-center mx-auto">
            <div className="flex flex-col gap-[2em]">{children}</div>
        {/* <h3 className="text-2xl font-semibold">Add a Class</h3>
        <input type="text" name="" placeholder="Class Name" className="py-5 px-3 outline-none"/>
        <button className="bg-red-300 py-5 w-[40%] mx-auto">Add</button> */}
        </div>
    )
}
export default AddClass