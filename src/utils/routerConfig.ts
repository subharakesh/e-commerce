

export const ROUTE_CONFIGS = [
    {
    path: "",
    component: () => import("../pages/home"),
    exact: true,
},
   {
    path: "contact",
    component: () => import("../pages/contact"),
    exact: true,
},
];