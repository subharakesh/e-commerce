

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
  {
    path: "cars",
    component: () => import("../pages/cars"),
    exact: true,
},
  {
    path: "about",
    component: () => import("../pages/about"),
    exact: true,
},
  {
    path: "cars/:id",
    component: () => import("../pages/carDetail"),
    exact: true,
},
{
    path: "/favorites",  
    component: () => import("../pages/favorites"),
  },
];