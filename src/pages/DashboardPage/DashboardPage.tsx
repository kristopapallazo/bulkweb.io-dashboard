import { Layout } from "antd";
import MainHeader from "../../components/Header/MainHeader";
import MainContentContainer from "../../components/Content/MainContentContainer/MainContentContainer";
import classes from "./DashboardPage.module.css";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getLocalStorageItem } from "../../utils/utils";
import {
  setUser,
  updateCredits,
  updateWebsites,
} from "../../redux/Slices/UserSlice";
import {
  updateFavorites,
  updateMyTemplates,
} from "../../redux/Slices/TemplatesSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const login = getLocalStorageItem("login");
    const credits = getLocalStorageItem("credits");
    const websites = getLocalStorageItem("websites") || [];
    const favorites = getLocalStorageItem("favorites") || [];
    const myTemplates = getLocalStorageItem("myTemplates") || [];

    if (login) dispatch(setUser(login === "undefined" ? undefined : login));
    dispatch(updateCredits(credits));
    dispatch(updateWebsites(websites as AllWebsites));
    dispatch(updateFavorites(favorites as TemplateAllIds));
    dispatch(updateMyTemplates(myTemplates as TemplateAllIds));
  }, []);

  return (
    <Layout className={classes.dashboardPage} style={{ height: "100vh" }}>
      <MainHeader />
      <MainContentContainer />
    </Layout>
  );
};

export default Dashboard;
