import { Suspense } from "react";
import Header from "./Components/Generals/Header";
import Footer from "./Components/Generals/Footer";
import ScrollToTop from "./Components/Helper/GoUp";
import AllRoutes from "./Components/Helper/AllRoutes";
import LoadingSpinner from "./Components/UI/LoadingSpinner";

const App = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white w-full overflow-x-hidden">
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <AllRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
