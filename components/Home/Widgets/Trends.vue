<template>
  <section class="hover-animation rounded-2xl bg-main-sidebar-background my-4">
    <div class="inner:px-4 inner:py-3" style="opacity: 1">
      <h2 class="text-xl font-extrabold">Trends for you</h2>
      <a
        v-for="item in items"
        :key="item.id"
        class="hover-animation accent-tab hover-card relative flex cursor-not-allowed flex-col gap-0.5"
        :href="`/search?q=%23${item.hashtag}`"
      >
        <div class="absolute right-2 top-2">
          <button
            class="custom-button main-tab hover-animation group relative cursor-not-allowed p-2 hover:bg-accent-blue/10 focus-visible:bg-accent-blue/20 focus-visible:!ring-accent-blue/80"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="h-5 w-5 text-light-secondary group-hover:text-accent-blue group-focus-visible:text-accent-blue dark:text-dark-secondary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              ></path>
            </svg>
            <div
              class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3"
            >
              <span>More</span>
            </div>
          </button>
        </div>
        <p class="text-sm text-light-secondary dark:text-dark-secondary">
          Trending Worldwide
        </p>
        <p class="font-bold">#{{ item.hashtag }}</p>
        <p class="text-sm text-light-secondary dark:text-dark-secondary">
          {{ item.tweets }} tweets
        </p>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, hashtag: "Kaana2023", tweets: "463.6K" },
        { id: 2, hashtag: "VueJS", tweets: "100K" },
        { id: 3, hashtag: "NuxtJS", tweets: "50K" },
        { id: 4, hashtag: "SanAlbert2023", tweets: "100K" },
        { id: 5, hashtag: "Barcelona", tweets: "50K" },
      ],
    };
  },
};
</script>
