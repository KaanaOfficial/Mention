export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    "global-middleware",
    (to, from) => {
      const user = useSupabaseUser();
      const pagesLogin = [
        "/home",
        "/profile",
        "/notifications",
        "/lists",
        "/bookmarks",
        "/messages",
        "/create",
      ];
      if (!user.value) {
        if (pagesLogin.includes(to.fullPath)) {
          return navigateTo("/login");
          /*return navigateTo("https://nuxt.com", {
            external: true,
          });*/
        }
      }
    },
    { global: true }
  );
});
