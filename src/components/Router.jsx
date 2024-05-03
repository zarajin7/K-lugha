

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Lessonpage from "../pages/Lesson-page"
import Layout from "../pages/Layout"
import Adminpannel from "../pages/Adminpannel"
import Authentications from "../pages/Authentications"
import Landingpage from "../pages/Landingpage"
import Payment from "../pages/Paymentpage"
 
import Form from "../pages/Form"
import Singleclass from "../pages/SingleClass"

import Lesson from "./Lesson"
import Lessonkamba from "./Lessonkamba"
import Lessonnubian from "./Lessonnubian"
import Lessonkikuyu from "./Lessonkikuyu"
import Lessonkisii from "./Lessonkisii"
import Lessonmasai from "./Lessonmasai"
import Lessonpagespart from "../pages/Lesson-pages-part"


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

   <Route path="/form" element={<Layout><Form/></Layout>}/>
   <Route path="/admin/lessons/:id" element={<Singleclass/>}/>
    <Route path="/lesson" element={<Layout><Lesson/></Layout>}/>
    <Route path="/lessonss" element={<Layout><Lessonkamba/></Layout>}/>
    <Route path="/lesso" element={<Layout><Lessonkikuyu/></Layout>}/>
    <Route path="/less" element={<Layout><Lessonkisii/></Layout>}/>
    <Route path="/les" element={<Layout><Lessonnubian/></Layout>}/>
    <Route path="/len" element={<Layout><Lessonmasai/></Layout>}/>
    <Route path="/len" element={<Layout><Lessonpagespart/></Layout>}/>



</Routes>
</BrowserRouter>

        </>
    )


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lessonpage from "../pages/Lesson-page";
import Layout from "../pages/Layout";
import Adminpannel from "../pages/Adminpannel";
import Authentications from "../pages/Authentications";
import Landingpage from "../pages/Landingpage";
import Payment from "../pages/Paymentpage";

import Form from "../pages/Form";
import Singleclass from "../pages/SingleClass";

import Lesson from "./Lesson";
import Lessonkamba from "./Lessonkamba";
import Lessonnubian from "./Lessonnubian";
import Lessonkikuyu from "./Lessonkikuyu";
import Lessonkisii from "./Lessonkisii";
import Lessonmasai from "./Lessonmasai";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/lessons"
            element={
              <Layout>
                <Lessonpage />
              </Layout>
            }
          />
          <Route
            path="/admin"
            element={
              <Layout>
                <Adminpannel />
              </Layout>
            }
          />
          <Route
            path="/login&r"
            element={
              <Layout>
                <Authentications />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <Landingpage />
              </Layout>
            }
          />
          <Route
            path="/paid"
            element={
              <Layout>
                <Payment />
              </Layout>
            }
          />

          <Route
            path="/form"
            element={
              <Layout>
                <Form />
              </Layout>
            }
          />
          <Route path="/admin/lessons/:id" element={<Singleclass />} />
          <Route
            path="/lesson"
            element={
              <Layout>
                <Lesson />
              </Layout>
            }
          />
          <Route
            path="/lessonss"
            element={
              <Layout>
                <Lessonkamba />
              </Layout>
            }
          />
          <Route
            path="/lesso"
            element={
              <Layout>
                <Lessonkikuyu />
              </Layout>
            }
          />
          <Route
            path="/less"
            element={
              <Layout>
                <Lessonkisii />
              </Layout>
            }
          />
          <Route
            path="/les"
            element={
              <Layout>
                <Lessonnubian />
              </Layout>
            }
          />
          <Route
            path="/len"
            element={
              <Layout>
                <Lessonmasai />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default Router;
