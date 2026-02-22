import { ConfigProvider, ThemeConfig } from "antd";
import { FC, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

// const defaultData: ThemeData = {
//   borderRadius: 6,
//   colorPrimary: "#2c5f34",
//   //   Button: {
//   //     colorPrimary: "#00B96B",
//   //   },
// };
const theme: ThemeConfig = {
  token: {
    colorPrimary: "#2c5f34",       // Brand green – all primary interactions
    colorTextSecondary: "#6b7280", // Muted secondary text
    colorText: "#111827",          // Near-black body text
    colorLink: "#2c5f34",          // Brand green links
    colorBorder: "#e5e7eb",        // Light border
    colorError: "#f5222d",         // Red for errors
    colorBgContainer: "#ffffff",   // White surfaces
    borderRadius: 8,
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  components: {
    Button: {
      colorPrimary: "#2c5f34",
      colorPrimaryHover: "#1e4426",
      colorPrimaryActive: "#1e4426",
    },
  },
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  //   const [data, setData] = useState<ThemeData>(defaultData);

  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
