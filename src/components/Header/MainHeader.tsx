import { Header } from "antd/es/layout/layout";
import MainMenu from "../Menu/MainMenu/MainMenu";

import classes from "./MainHeader.module.css";
import Logo from "../Atoms/Logo/Logo";
import { RootStoreState } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import TranslatedButton from "../UI/AntD/Buttons/TranslatedBttn";
import { Popover } from "antd";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { FC } from "react";
import Flag, { FlagProps } from "react-world-flags";
import { setLang } from "../../redux/Slices/UserSlice";
import i18n from "../../internalization/internalization";

const LANG_TO_I18N: Record<Lang, string> = {
  GB_ENG: "en",
  ES: "es",
  IT: "en", // Italian not yet translated, falls back to English
};

const FlagIcon: FC<FlagProps> = (props) => {
  const { code = "GB_ENG", width = 30 } = props;
  return <Flag code={code} width={width} />;
};

const items: MenuProps["items"] = [
  {
    key: "GB_ENG",
    icon: <FlagIcon code="GB_ENG" />,
    label: "English",
  },
  {
    key: "ES",
    icon: <FlagIcon code="ES" />,
    label: "Español",
  },
  {
    key: "IT",
    icon: <FlagIcon code="IT" />,
    label: "Italiano",
  },
];

const FlagDropdown = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state: RootStoreState) => state.user.lang);

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        selectedKeys: [lang],
        onClick: ({ key }) => {
          const newLang = key as Lang;
          dispatch(setLang(newLang));
          i18n.changeLanguage(LANG_TO_I18N[newLang]);
        },
      }}
    >
      <span style={{ cursor: "pointer" }}>
        <FlagIcon code={lang} />
      </span>
    </Dropdown>
  );
};

const CreateProjectBttn = () => {
  const { user, credits } = useSelector((state: RootStoreState) => state.user);

  return (
    <>
      <Popover
        content={
          <div>
            {user ? (
              <>
                <p>
                  <b>User: </b>
                  <span>{user}</span>
                </p>
                <p>
                  <b>Credits: </b>
                  <span>{credits}</span>
                </p>
              </>
            ) : (
              <p>Please login</p>
            )}
          </div>
        }
        title="Dropdown"
        trigger="hover"
        placement="bottomLeft"
      >
        <TranslatedButton
          // disabled={user ? true : false}
          label="Profile"
          type="primary"
          style={{ marginLeft: "10px" }}
        />
      </Popover>
    </>
  );
};

const MainHeader = () => {
  return (
    <Header className={classes.main_header}>
      <Logo />
      <MainMenu />

      <FlagDropdown />
      <CreateProjectBttn />
    </Header>
  );
};

export default MainHeader;
