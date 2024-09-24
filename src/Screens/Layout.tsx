import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className={`flex  flex-col`}>
      <Header />
      {/* Main Content */}
      <main className="bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
