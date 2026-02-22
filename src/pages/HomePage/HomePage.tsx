import { useNavigate } from "react-router";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCreateWebsite = () => {
    navigate("/template");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className={classes.home}>
      <div className={classes.overlay}>
        <h1 className={classes.title}>
          <span>Effortless Website Creation</span>{" "}
          <span className={classes.titleAccent}>at Scale</span>
        </h1>
        <p className={classes.subtitle}>
          Create, customize, and launch stunning websites with just a few clicks
          — powered by smart templates and automation.
        </p>
        <div className={classes.buttonGroup}>
          <button
            onClick={handleCreateWebsite}
            className={classes.primaryButton}
          >
            Create New Website
          </button>
          <button onClick={handleLogin} className={classes.secondaryButton}>
            Login/Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
