import LoginCard from "../../components/Content/LoginCard/LoginCard";
import classes from "./LoginPage.module.css";

// import { RootStoreState } from "../../redux";
// import { useSelector } from "react-redux";

const LoginPage = () => {
  // const user = useSelector((state: RootStoreState) => state.user.user);

  return (
    <div className={classes.container}>
      {/* {user && (
        <div className={classes.test}>
          Already logged in (test mode)
        </div>
      )} */}
      <LoginCard />
    </div>
  );
};

export default LoginPage;
