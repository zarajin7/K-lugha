import loader from "../assets/images/loader.gif";
function Loader(){
    return(
        <div className="bg-[rgba(255,255,255,0.5)] h-screen w-screen flex justify-center fixed top-0 left-0 items-center">
            <img src ={loader} />
        </div>
    )
}
export default Loader