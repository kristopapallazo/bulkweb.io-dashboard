import { Menu } from "antd";
import { IoBusinessSharp } from "react-icons/io5";
import { GrTemplate } from "react-icons/gr";
import { GiPriceTag } from "react-icons/gi";
import MenuItem from "../MenuItem";
import { FC, useMemo } from "react";
import { IoIosContact } from "react-icons/io";
import { MenuItemAntd } from "../../../declarations/antD";
import { RootStoreState } from "../../../redux";
import { useSelector } from "react-redux";

interface ItemProps {
  id: string;
  label?: string;
  mr?: boolean;
}

const LoginMenuItem: FC<ItemProps> = ({ id }) => {
  return <MenuItem id={id} label="" />;
};

const baseItems: MenuItemAntd[] = [
  {
    key: "template",
    label: <MenuItem id="template" label="Create web" />,
    icon: <GrTemplate />,
    disabled: true,
  },
  {
    key: "my-websites",
    label: <MenuItem id="my-websites" label="My websites" />,
    icon: <GiPriceTag />,
    disabled: true,
  },
  {
    key: "pricing",
    label: <MenuItem id="pricing" />,
    icon: <GiPriceTag />,
    disabled: true,
  },
  {
    key: "contact",
    label: <MenuItem id="contact" />,
    icon: <IoBusinessSharp />,
  },
  {
    key: "about",
    label: <MenuItem id="about" />,
    icon: <IoBusinessSharp />,
  },
  {
    key: "login",
    label: <LoginMenuItem id="login" />,
    icon: <IoIosContact />,
  },
];

const MainMenu = () => {
  const isLogged = useSelector((state: RootStoreState) => state.user.user);

  const menuItems = useMemo(() => {
    if (!isLogged) return baseItems;
    return baseItems.map((item) => ({ ...item, disabled: false }));
  }, [isLogged]);

  return (
    <Menu
      theme="light"
      mode="horizontal"
      // defaultSelectedKeys={["2"]}
      items={menuItems}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
};

export default MainMenu;
