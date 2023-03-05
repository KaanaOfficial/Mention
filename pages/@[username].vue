<template>
  <main class="hover-animation flex min-h-screen w-full max-w-xl flex-col pb-96 dark:border-dark-border">
    <header
      class="hover-animation even z-10 bg-main-background/60 px-4 py-2 backdrop-blur-md sticky top-0 flex items-center gap-6 border-b-2 border-dark-border dark:border-light-border">
      <button @click="goBack"
        class="custom-button main-tab dark-bg-tab group relative p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20"
        type="button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          aria-hidden="true" class="h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
        </svg>
        <div
          class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3">
          <span>Back</span>
        </div>
      </button>
      <div class="truncate" data-projection-id="10" style="opacity: 1">
        <NuxtLink class="flex items-center gap-1 truncate font-bold pointer-events-none -mt-1 text-xl" tabindex="-1"
          to="/@{{ user.username }}">
          <h2 class="truncate">{{ user.name.first }} {{ user.name.last }}</h2>
          <Icon name="material-symbols:verified" class="text-main-accent h-5 w-5" />
        </NuxtLink>
        <p class="text-xs text-light-secondary dark:text-dark-secondary">
          No post
        </p>
      </div>
    </header>
    <section data-projection-id="3" style="opacity: 1">
      <div class="h-36 xs:h-48 sm:h-52 border-b-2 border-dark-border dark:border-light-border"><button
          class="custom-button main-tab accent-tab relative h-full w-full rounded-none p-0 transition hover:brightness-75"
          type="button">
          <figure>
            <span class="block absolute inset-0 overflow-hidden box-border bg-transparent opacity-100 border-0 m-0 p-0">
              <img src="https://pbs.twimg.com/profile_banners/1904582695/1646871546/1500x500" decoding="async"
                data-nimg="fill"
                class="object-cover absolute inset-0 box-border p-0 border-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full">
            </span>
          </figure>
        </button></div>
      <div class="relative flex flex-col gap-2 p-2">
        <div class="flex justify-between">
          <div class="mb-8 xs:mb-14 sm:mb-16">
            <button
              class="custom-button main-tab accent-tab absolute -mt-3 aspect-square w-24 -translate-y-1/2 overflow-hidden p-0 disabled:cursor-auto disabled:opacity-100 xs:w-32 sm:w-36 [&amp;:hover>figure>span]:brightness-75 border-2 border-dark-border dark:border-light-border"
              type="button">
              <figure
                class="hover-animation relative h-full w-full bg-main-background inner:rounded-full inner:transition inner:duration-200">
                <span class="box-border block overflow-hidden w-full h-full opacity-100 absolute">
                  <img alt="{{ user.name.first }} {{ user.name.last }}" sizes="100vw"
                    src="https://pbs.twimg.com/profile_images/1604802383162269698/MbMxGgB7_400x400.jpg" decoding="async"
                    data-nimg="fill"
                    class="rounded-full object-cover absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full m-auto p-0 border-[none] inset-0" />
                </span>
              </figure>
            </button>
          </div>
          <div class="flex gap-2 self-start">
            <div class="relative" data-headlessui-state="">
              <button
                class="custom-button main-tab dark-bg-tab group relative border border-light-line-reply p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20"
                id="headlessui-popover-button-:r2cg:" aria-expanded="false" data-headlessui-state="" type="button"><svg
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true" class="h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z">
                  </path>
                </svg>
                <div
                  class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3">
                  <span>More</span>
                </div>
              </button>
            </div>
            <NuxtLink
              class="custom-button main-tab dark-bg-tab group relative cursor-not-allowed border border-light-line-reply p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20"
              external="true" :to="`https://allo.kaana.io/@${user.username}`" target="_blank" rel="noreferrer"><svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
                </path>
              </svg>
              <div
                class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3">
                <span>Chat</span>
              </div>
            </NuxtLink>
            <UiButtonBlack type="submit">Follow</UiButtonBlack>
          </div>
        </div>
        <div>
          <NuxtLink class="flex items-center gap-1 truncate font-bold pointer-events-none -mb-1 text-xl" tabindex="-1"
            to="/@{{ user.username }}">
            <p class="truncate font-bold text-2xl mb-1">{{ user.name.first }} {{ user.name.last }}</p>
            <Icon name="material-symbols:verified" class="text-main-accent h-6 w-6" />
          </NuxtLink>
          <div class="flex items-center gap-1 text-light-secondary dark:text-dark-secondary">
            <p class="text-lg">@{{ user.username }}</p>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex flex-wrap gap-x-3 gap-y-1 text-light-secondary dark:text-dark-secondary">
              <div class="flex items-center gap-1" v-if="user.location">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                  </svg>
                </i>
                <p class="font-medium">{{ user.location }}</p>
              </div>
              <div class="flex items-center gap-1" v-if="user.link">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244">
                    </path>
                  </svg>
                </i>
                <NuxtLink class="custom-underline font-medium text-main-accent" external="true" :to="user.link.url"
                  target="_blank" rel="noreferrer">{{ user.link.text }}
                </NuxtLink>
              </div>
              <div class="flex items-center gap-1" v-if="user.signup_date">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z">
                    </path>
                  </svg>
                </i>
                <button class="custom-underline group relative">
                  {{ user.signup_date.formatted }}
                  <div
                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-1">
                    <span class="font-medium">{{ user.signup_date.date }}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <p class="status bg-main-accent/10">{{ user.bio.formatted }}</p>
        </div>
        <div class="stats">
          <NuxtLink v-for="stat in user.stats" v-show="stat.show" :to="stat.link"
            class="stat flex-col items-center mx-auto text-center bg-main-accent/20 text-accent outline-none transition hover:brightness-90 active:brightness-75 xs:static xs:translate-y-0 xs:hover:bg-main-accent/50 xs:active:bg-main-accent/75 border-2 border-dark-border dark:border-light-border">
            <p class="font-bold text-xl">{{ stat.value }}</p>
            <p>{{ stat.name }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>
    <nav
      class="hover-animation flex justify-between whitespace-nowrap overflow-auto scrollbar-hide border-b-2 border-dark-border dark:border-light-border"
      data-projection-id="8" style="opacity: 1">
      <NuxtLink
        class="hover-animation main-tab dark-bg-tab flex flex-1 justify-center hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
        to="/@{{ user.username }}">
        <div class="px-4 md:px-6">
          <p
            class="flex flex-col gap-2 whitespace-nowrap pt-3 font-bold transition-colors duration-200 text-light-primary dark:text-dark-primary [&amp;>i]:scale-100 [&amp;>i]:opacity-100">
            Posts
            <i class="h-1 scale-50 rounded-full bg-main-accent opacity-0 transition duration-200"></i>
          </p>
        </div>
      </NuxtLink>
      <NuxtLink
        class="hover-animation main-tab dark-bg-tab flex flex-1 justify-center hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
        to="/@{{ user.username }}/with_replies">
        <div class="px-4 md:px-6">
          <p
            class="flex flex-col gap-2 whitespace-nowrap pt-3 transition-colors duration-200 text-light-secondary dark:text-dark-secondary">
            Posts & replies
            <i class="h-1 scale-50 rounded-full bg-main-accent opacity-0 transition duration-200"></i>
          </p>
        </div>
      </NuxtLink>
      <NuxtLink
        class="hover-animation main-tab dark-bg-tab flex flex-1 justify-center hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
        to="/@{{ user.username }}/affiliates">
        <div class="px-4 md:px-6">
          <p
            class="flex flex-col gap-2 whitespace-nowrap pt-3 transition-colors duration-200 text-light-secondary dark:text-dark-secondary">
            Affiliates
            <i class="h-1 scale-50 rounded-full bg-main-accent opacity-0 transition duration-200"></i>
          </p>
        </div>
      </NuxtLink>
      <NuxtLink
        class="hover-animation main-tab dark-bg-tab flex flex-1 justify-center hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
        to="/@{{ user.username }}/media">
        <div class="px-4 md:px-6">
          <p
            class="flex flex-col gap-2 whitespace-nowrap pt-3 transition-colors duration-200 text-light-secondary dark:text-dark-secondary">
            Media
            <i class="h-1 scale-50 rounded-full bg-main-accent opacity-0 transition duration-200"></i>
          </p>
        </div>
      </NuxtLink>
      <NuxtLink
        class="hover-animation main-tab dark-bg-tab flex flex-1 justify-center hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
        to="/@{{ user.username }}/likes">
        <div class="px-4 md:px-6">
          <p
            class="flex flex-col gap-2 whitespace-nowrap pt-3 transition-colors duration-200 text-light-secondary dark:text-dark-secondary">
            Likes
            <i class="h-1 scale-50 rounded-full bg-main-accent opacity-0 transition duration-200"></i>
          </p>
        </div>
      </NuxtLink>
    </nav>
    <section>
      <NuxtPage />
    </section>
  </main>
</template>


<script>
export default defineComponent({
  setup() {
    const store = useMentionStore()
    const router = useRouter()
    const route = useRoute()

    const user = {
      name: {
        first: "Albert",
        last: "Isern Alvarez",
      },
      username: "albert",
      avatar: "https://avatars.githubusercontent.com/u/10274099?v=4",
      location: "Barcelona, Spain",
      signup_date: {
        date: "2012-12-16 T00:00:00.000Z",
        formatted: "December 16, 2012",
      },
      link: {
        url: "https://albertisernalvarez.com",
        text: "albertisernalvarez.com",
      },
      bio: {
        text: `🐉💥🤙
❤️‍🔥 @abbxcafl
🧨 CEO y fundador de Kaana
👧 Athina's dad
🪙 Co-fundador de FairCoin
🌍 Viajes
📱Pixel 6 Pro`,
        formatted: `🐉💥🤙
❤️‍🔥 @abbxcafl
🧨 CEO y fundador de Kaana
👧 Athina's dad
🪙 Co-fundador de FairCoin
🌍 Viajes
📱Pixel 6 Pro`,
      },
      stats: [
        {
          show: true,
          name: 'Posts',
          value: "1.2K",
          link: {
            url: `/@${route.params.username}`,
            enabled: true,
          },
        },
        {
          show: true,
          name: 'Reposts',
          value: "732",
          link: {
            url: `/@${route.params.username}/reposts`,
            enabled: true,
          },
        },
        {
          show: true,
          name: 'Replies',
          value: "233",
          link: {
            url: `/@${route.params.username}/replies`,
            enabled: true,
          },
        },
        {
          show: true,
          name: 'Karma',
          value: "51.4K",
          link: {
            url: `/@${route.params.username}/karma`,
            enabled: false,
          },
        },
        {
          show: true,
          name: 'Reactions',
          value: "52",
          link: {
            url: `/@${route.params.username}/reactions`,
            enabled: false,
          },
        },
        {
          show: true,
          name: 'Following',
          value: "388",
          link: {
            url: `/@${route.params.username}/following`,
            enabled: true,
          }
        },
        {
          show: true,
          name: 'Followers',
          value: "23.4K",
          link: {
            url: `/@${route.params.username}/followers`,
            enabled: true,
          }
        },
      ]

    }

    // Define function to go back to previous page
    const goBack = () => {
      router.go(-1)
    }

    return {
      goBack,
      user,
    }
  },
})
</script>

<style>
.status {
  @apply text-[1em] font-medium whitespace-pre-wrap text-left whitespace-pre-wrap mt-2 p-2 rounded-[1em] border-2 border-dark-border whitespace-pre-wrap
}

.stats {
  margin: auto;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 1em;
  overflow: auto;
}

.stats>.stat {
  text-align: center;
  padding: 0.5em;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  vertical-align: middle;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  cursor: pointer;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  border-radius: 10em;
  max-height: 8em;
  -webkit-box-flex: 10;
  -ms-flex-positive: 10;
  flex-grow: 10;
  max-width: 100%;
  margin: 0.15em;
  min-width: 7em;
}
</style>