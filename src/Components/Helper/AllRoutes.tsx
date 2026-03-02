import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SmallIntro = lazy(() => import("../About/SmallIntro"));
const Techs = lazy(() => import("../About/Techs"));
const Contact = lazy(() => import("../Contact/Contact"));
const Intro = lazy(() => import("../HomePage/Intro"));
const BlogList = lazy(() => import("../Blogs/BlogList"));
const BlogViewer = lazy(() => import("../Blogs/BlogViewer"));
const ProjectList = lazy(() => import("../Projects/ProjectList"));
const ProjectDetail = lazy(() => import("../Projects/ProjectDetail"));

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route
        path="/about"
        element={
          <>
            <SmallIntro />
            <Techs />
          </>
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blogs/:slug" element={<BlogViewer />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
};

export default AllRoutes;
