import Footer from "../../Footer/Footer";
import MainContent from "./MainContent/MainContent";
import classes from "./MainContentContainer.module.css";
import { useLocation } from "react-router";

const FOOTER_PAGES = ["/", "/about", "/pricing", "/contact", "/login"];

const MainContentContainer = () => {
  const { pathname } = useLocation();

  const showFooter = FOOTER_PAGES.some(
    (page) => pathname === page || pathname.endsWith(page)
  );

  return (
    <div className={classes.mainContentContainer}>
      <MainContent />
      {showFooter && <Footer />}
    </div>
  );
};

export default MainContentContainer;
