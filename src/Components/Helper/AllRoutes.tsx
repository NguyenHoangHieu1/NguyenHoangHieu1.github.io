import { lazy, PropsWithChildren } from "react"
import { Route, Routes } from "react-router-dom"

const SmallIntro = lazy(() => import("../About/SmallIntro"))
const Techs = lazy(() => import("../About/Techs"))
const Contact = lazy(() => import("../Contact/Contact"))
const Intro = lazy(() => import("../HomePage/Intro"))

const AllRoutes: React.FC<PropsWithChildren> = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Intro />
            <hr className="container m-auto max-w-6xl px-2 my-20" />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <SmallIntro />
            <span className="text-center block text-2xl my-5">∿∿∿</span>
            <Techs />
            <hr className="container m-auto max-w-6xl px-2 my-10" />
          </>
        }
      />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AllRoutes
