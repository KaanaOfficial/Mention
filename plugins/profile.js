export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    "global-middleware",
    (to, from) => {
      const user = useSupabaseUser();
      if (to.fullPath === "/profile" && user.value && user.value?.username) {
        return navigateTo("/@" + user.value?.username);
      }
    },
    { global: true }
  );
});
