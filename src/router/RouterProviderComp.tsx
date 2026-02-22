import { FC, ReactNode, lazy, Suspense } from "react";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router";
import { Spin } from "antd";

/* Optimized Comp */
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Dashboard = lazy(() => import("../pages/DashboardPage/DashboardPage"));
const PricingPage = lazy(() => import("../pages/PricingPage/PricingPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
// const CreateProductPage = lazy(
//   () => import("../pages/CreateProductPage/CreateProductPage")
// );
// const CreateBulkPage = lazy(
//   () => import("../pages/CreateBulkPage/CreateBulkPage")
// );
const AboutPage = lazy(() => import("../pages/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));
const TemplatePage = lazy(() => import("../pages/TemplatePage/TemplatePage"));
const DomainPage = lazy(
  () => import("../pages/TemplatePage/DomainPage/DomainPage")
);
const AllTemplatesPage = lazy(
  () => import("../pages/TemplatePage/AllTemplates/AllTemplatesPage")
);
const CustomDomainPage = lazy(
  () =>
    import("../pages/TemplatePage/DomainPage/CustomDomainPage/CustomDomainPage")
);
const PurchaseDomainPage = lazy(
  () =>
    import(
      "../pages/TemplatePage/DomainPage/PurchaseDomainPage/PurchaseDomainPage"
    )
);
const OurServersHostedPage = lazy(
  () => import("../pages/HostingPage/OurServersHosted/OurServerHosted")
);
const SelfHostedPage = lazy(
  () => import("../pages/HostingPage/SelfHosted/SelfHosted")
);
const HostingPage = lazy(() => import("../pages/HostingPage/HostingPage"));
const MyWebsitePage = lazy(
  () => import("../pages/MyWebsitePage/MyWebsitePage")
);

const HistoryPage = lazy(() => import("../pages/HIstoryPage/HistoryPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

interface RouterProviderProps {
  children?: ReactNode;
}
const routeConfigs: RouteObject[] = [
  { path: "", Component: HomePage },
  {
    path: "template",
    Component: TemplatePage,
    children: [
      {
        path: "domain-setup",
        Component: DomainPage,
        children: [
          {
            path: "custom-domain",
            Component: CustomDomainPage,
          },
          {
            path: "purchase-domain",
            Component: PurchaseDomainPage,
          },
        ],
      },
      { path: "purchase-templates", Component: AllTemplatesPage },
      // { path: "favorites", Component: FavoritesPage },
      { path: "history", Component: HistoryPage },
      {
        path: "hosting",
        Component: HostingPage,
        children: [
          {
            path: "self",
            Component: SelfHostedPage,
          },
          {
            path: "our-servers",
            Component: OurServersHostedPage,
          },
        ],
      },
    ],
  },
  { path: "my-websites", Component: MyWebsitePage },
  { path: "about", Component: AboutPage },
  { path: "pricing", Component: PricingPage },
  { path: "login", Component: LoginPage },
  // { path: "create-product", Component: CreateProductPage },
  // { path: "create-bulk", Component: CreateBulkPage },
  { path: "contact", Component: ContactPage },
  { path: "*", Component: NotFoundPage },
];

const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: routeConfigs,
  },
]);

const RouterProviderComp: FC<RouterProviderProps> = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spin size="large" />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default RouterProviderComp;
