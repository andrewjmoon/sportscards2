import Footer from "./Footer";
//import MOONJPG from "../svg/moon.jpg";

function Layout({ children }) {
  return (
    <>
      <div style={{background:'lightblue'}} className="shadow-md">
        <div className="md:relative container mx-auto px-3">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
