import { Layout } from "antd";
import Logo from "../Atoms/Logo/Logo";

import classes from "./Footer.module.css";
import FooterLinksSection from "./FooterLinksSection/FooterLinksSection";
import SocialMediaSection from "./SocialMediaSection/SocialMediaSection";

const LogoRow = () => {
  return (
    <div className={classes.frstRow}>
      <Logo />
    </div>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Layout.Footer className={classes.mainFooter}>
      <LogoRow />
      <hr />
      <FooterLinksSection />
      <hr />
      <SocialMediaSection />
      <hr />
      <div className={classes.lastRow}>
        <span>© {year} BulkWeb.io — All rights reserved.</span>
        <span>Built with ❤️ for scaling the web.</span>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
