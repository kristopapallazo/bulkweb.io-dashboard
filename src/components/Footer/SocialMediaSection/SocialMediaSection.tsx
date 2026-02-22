import { CgCopyright } from "react-icons/cg";
import classes from "./SocialMediaSection.module.css";
import { ReactElement } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

interface SocialMediaItem {
  id: string;
  icon: ReactElement;
  link: string;
}
const Social_Media_Items: SocialMediaItem[] = [
  {
    id: "Instagram",
    icon: <BsInstagram className="icon" />,
    link: "https://www.instagram.com/",
  },
  {
    id: "Tweeter",
    icon: <FaYoutube className="icon" />,
    link: "https://www.tweeter.com/",
  },
  {
    id: "Facebook",
    icon: <FaFacebookSquare className="icon" />,
    link: "https://www.fabeboo.com/",
  },
  {
    id: "Linkedin",
    icon: <FaLinkedin className="icon" />,
    link: "https://www.linkedin.com/",
  },
];
const SocialMedia = () => {
  const items = Social_Media_Items.map(({ id, icon, link }) => (
    <a key={id} href={link} className={classes.socialLink}>
      {icon}
    </a>
  ));
  return (
    <div className={classes.socialMedia}>
      <span className={classes.followLabel}>Follow us</span>
      <div className={classes.iconsContainer}>{items}</div>
    </div>
  );
};

const SocialMediaSection = () => {
  return (
    <div className={classes.socialMediaSection}>
      <span className={classes.copyright}>
        <CgCopyright /> Copyright since 2019 by <a href="djaldfj">bulkWeb.io</a>
        {/* All rights reserved. */}
      </span>
      <SocialMedia />
    </div>
  );
};

export default SocialMediaSection;
