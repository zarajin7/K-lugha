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
    <Route path="/" element={<Layout><Lessonpage/></Layout>}/>
</Routes>
</BrowserRouter>

        </>
    )
}

export default Router