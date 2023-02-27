<template>
  <header
    class="flex w-0 shrink-0 transition-opacity duration-200 xs:w-20 md:w-24 md:w-20 lg:max-w-none xl:-mr-4 xl:w-full xl:max-w-xs xl:justify-end">
    <div
      class="fixed bottom-0 z-10 flex w-full flex-col justify-between border-t border-light-border bg-main-background py-0 dark:border-dark-border xs:top-0 xs:h-full xs:w-20 xs:border-0 xs:bg-transparent xs:px-2 xs:py-3 xs:pt-2 md:px-4 xl:w-72">
      <section class="flex flex-col justify-center gap-2 xs:items-center xl:items-stretch">
        <h1 class="hidden xs:flex">
          <NuxtLink
            class="custom-button main-tab text-accent-blue transition hover:bg-light-primary/10 focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 dark:text-twitter-icon dark:hover:bg-dark-primary/10"
            to="/">
            <UiLogo />
          </NuxtLink>
        </h1>
        <nav class="flex items-center justify-around xs:flex-col xs:justify-center xl:block">
          <NuxtLink class="group py-1 outline-none flex" :class="{ 'hidden xs:flex': item.showInMobile == null }"
            v-for="item in menu" :key="item" :to="item.link">
            <div
              class="custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2 group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 dark:group-focus-visible:ring-white xs:p-3 xl:pr-5">
              <Icon :name="item.icon" size="25" class="h-7 w-7" />
              <p class="hidden xl:block">{{ item.name }}</p>
            </div>
          </NuxtLink>
          <div class="relative" data-headlessui-state="">
            <button class="group relative flex w-full py-1 outline-none" id="headlessui-menu-button-:r8a:" type="button"
              aria-haspopup="true" aria-expanded="false" data-headlessui-state="">
              <div
                class="custom-button flex gap-4 text-xl transition group-hover:bg-light-primary/10 group-focus-visible:ring-2 group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 dark:group-focus-visible:ring-white xl:pr-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true" class="h-7 w-7">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                  </path>
                </svg>
                <p class="hidden xl:block">More</p>
              </div>
            </button>
          </div>
        </nav>
        <NuxtLink to="/create"
          class="custom-button mx-auto text-center main-tab accent-tab absolute right-4 -translate-y-[72px] bg-main-accent/70 text-lg font-bold text-accent outline-none transition hover:brightness-90 active:brightness-75 xs:static xs:translate-y-0 xs:hover:bg-main-accent/90 xs:active:bg-main-accent/75 xl:w-11/12 border-2 border-dark-border dark:border-light-border"
          type="button">
          <svg class="fill-current block h-6 w-6 xl:hidden" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z">
              </path>
            </g>
          </svg>
          <p class="hidden xl:block">Create post</p>
        </NuxtLink>
      </section>
      <div class="hidden sm:block">
        <ModalTheming />
      </div>
      <section class="relative hidden sm:block">
        <button
          class="custom-button main-tab dark-bg-tab flex w-full items-center justify-between hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20"
          id="headlessui-menu-button-:r1:" type="button" aria-haspopup="true" aria-expanded="false">
          <div class="flex gap-3 truncate">
            <a class="blur-picture flex self-start pointer-events-none" tabindex="-1" to="">
              <figure class="w-[40px]">
                <span style="
                                      box-sizing: border-box;
                                      display: block;
                                      overflow: hidden;
                                      width: initial;
                                      height: initial;
                                      background: none;
                                      opacity: 1;
                                      border: 0px;
                                      margin: 0px;
                                      padding: 0px;
                                      position: relative;
                                    "><span style="
                                        box-sizing: border-box;
                                        display: block;
                                        width: initial;
                                        height: initial;
                                        background: none;
                                        opacity: 1;
                                        border: 0px;
                                        margin: 0px;
                                        padding: 100% 0px 0px;
                                      "></span><img alt="Albert Isern Alvarez"
                    src="https://pbs.twimg.com/profile_images/1604802383162269698/MbMxGgB7_400x400.jpg" decoding="async"
                    data-nimg="responsive" class="rounded-full object-cover" style="
                                        position: absolute;
                                        inset: 0px;
                                        box-sizing: border-box;
                                        padding: 0px;
                                        border: none;
                                        margin: auto;
                                        display: block;
                                        width: 0px;
                                        height: 0px;
                                        min-width: 100%;
                                        max-width: 100%;
                                        min-height: 100%;
                                        max-height: 100%;
                                      " sizes="100vw" /></span>
              </figure>
            </a>
            <div class="hidden truncate text-start leading-5 xl:block">
              <a class="flex items-center gap-1 truncate font-bold pointer-events-none start" tabindex="-1"
                href="/user/AuronPlay#">
                <p class="truncate">Albert Isern Alvarez</p>
              </a>
              <a class="truncate text-light-secondary dark:text-dark-secondary pointer-events-none">@AlbertIsernAl</a>
            </div>
          </div>
          <Icon name="material-symbols:more-vert" size="25" class="hidden h-6 w-6 xl:block" />
        </button>
      </section>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "Home",
          icon: "material-symbols:home-rounded",
          link: "/",
          showInMobile: true,
        },
        {
          name: "Explore",
          icon: "material-symbols:explore",
          link: "/explore",
          showInMobile: true,
        },
        {
          name: "Notifications",
          icon: "material-symbols:notifications",
          link: "/notifications",
          showInMobile: true,
        },
        {
          name: "Bookmarks",
          icon: "material-symbols:bookmarks-rounded",
          link: "/bookmarks",
        },
        {
          name: "Lists",
          icon: "material-symbols:list-alt-rounded",
          link: "/lists"
        },
        {
          name: "Profile",
          icon: "material-symbols:account-circle",
          link: "/profile",
          showInMobile: true,
        },
      ],
    };
  },
};
</script>
