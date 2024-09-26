export const routes = [
  {
    name: "index",
    path: "/",
    label: "Główna",
  },
  {
    name: "products",
    path: "/products",
    label: "Sklep",
  },
  {
    name: "profile",
    path: "/",
    label: "Profil",
  },
] as const;

export type RoutePath = (typeof routes)[number]["path"];

export const prettyTruncate = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }


  return text.substring(0, maxLength) + '...';
}