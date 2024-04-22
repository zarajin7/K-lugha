import { BrowserRouter, Route, Routes } from "react-router-dom"
import Lessonpage from "../pages/Lesson-page"
import Layout from "../pages/Layout"
import Adminpannel from "../pages/Adminpannel"
import Authentications from "../pages/Authentications"
import Landingpage from "../pages/Landingpage"
import Payment from "../pages/Paymentpage"
function Router(){
    return(
        <>
<BrowserRouter>
<Routes>
    <Route path="/lessons" element={<Layout><Lessonpage/></Layout>}/>
    <Route path="/admin" element={<Layout><Adminpannel/></Layout>}/>
    <Route path="/login&r" element={<Layout><Authentications/></Layout>}/>
    <Route path="/" element={<Layout><Landingpage/></Layout>}/>
    <Route path="/paid" element={<Layout><Payment/></Layout>}/>
   
</Routes>
</BrowserRouter>

        </>
    )
}

export default Router