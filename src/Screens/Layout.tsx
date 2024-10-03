import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  const hasData = true; 
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensure full height */}
    <Header />
    <main className="flex items-center justify-center flex-grow bg-white">
      {/* Conditional rendering for the main content */}
      {hasData ? (
        <Outlet />
      ) : (
        <div className="text-center text-gray-500">
          {/* Customize your no data message */}
          <p>No data available.</p>
        </div>
      )}
    </main>
    <Footer />
  </div>
  );
};

export default Layout;
