import { FC } from "react";
import classes from "./ContactTitle.module.css";

const ContactTitle = () => {
  return (
    <header className={classes.sectionHeader}>
      <h1 className={classes.sectionTitle}>Contact Us</h1>
    </header>
  );
};

export default ContactTitle;

interface MainTitleProps {
  label: string;
}

export const MainTitle: FC<MainTitleProps> = ({ label = "Contact Us" }) => {
  return (
    <header className={classes.sectionHeader}>
      <h1 className={classes.sectionTitle}>{label}</h1>
    </header>
  );
};
