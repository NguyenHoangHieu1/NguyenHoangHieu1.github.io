import React from "react"
import { useState, Suspense, Fragment, startTransition } from "react"
import classes from "./App.css"
import Header from "./Components/Generals/Header"
import Footer from "./Components/Generals/Footer"
import GoUp from "./Components/Helper/GoUp"
import Mouse from "./Components/UI/Mouse"
import Contact from "./Components/Contact/Contact"
import Intro from "./Components/HomePage/Intro"
import Publisher from "./Components/HomePage/Publisher"
import Update from "./Components/HomePage/Update"
import { Routes, Route } from "react-router-dom"
import SmallIntro from "./Components/About/SmallIntro"
import Techs from "./Components/About/Techs"
import Blog from "./Components/About/Blog"

import mario from "./assets/mario.jpg"
import Undertale from "./assets/Undertale.png"
import CreateBlog from "./Components/createBlog/CreateBlog"
import AllRoutes from "./Components/Helper/AllRoutes"
import LoadingSpinner from "./Components/UI/LoadingSpinner"

interface props {
  onChangeBackDrop: () => void
  children?: React.ReactNode
}

const App: React.FC<props> = (props) => {
  return (
    <Fragment>
      <div className=" dark:bg-gray-900 dark:text-white w-screen  ">
        <GoUp />
        <Mouse />
        <div className=" flex flex-col min-h-screen  ">
          <Header />
          <Suspense fallback={<LoadingSpinner />}>
            <AllRoutes />
          </Suspense>
          <Footer />
        </div>
      </div>
    </Fragment>
  )
}

export default App
