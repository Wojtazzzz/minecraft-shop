export const routes = [
  {
    name: "index",
    path: "/",
    label: "Główna",
  },
  {
    name: "shop",
    path: "/",
    label: "Sklep",
  },
  {
    name: "profile",
    path: "/",
    label: "Profil",
  },
] as const;

export type RoutePath = (typeof routes)[number]["path"];
