export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Crear Evento",
    route: "/events/create",
  },
  {
    label: "Mi Perfil",
    route: "/profile",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  imageUrl: "",
  categoryId: "",
  isFree: true,
  price: "",
  currency: "COP",
};
