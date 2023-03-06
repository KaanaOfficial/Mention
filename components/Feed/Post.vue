<template>
  <article>
    <div
      class="accent-tab hover-card relative flex flex-col gap-y-4 px-4 py-3 outline-none border-b-2 border-dark-border dark:border-light-border">
      <div class="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1">
        <div class="flex flex-col items-center gap-2">
          <div class="group relative self-start text-light-primary dark:text-dark-primary [&amp;>div]:translate-y-2">
            <NuxtLink class="blur-picture flex self-start" :to="`/@${post.user.username}`">
              <figure class="w-12">
                <span
                  class="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 relative m-0 p-0 border-0">
                  <span
                    class="box-border block w-[initial] h-[initial] opacity-100 m-0 pt-[100%] pb-0 px-0 border-0"></span><img
                    alt="{{ post.user.name}}" :src="post.user.avatar.url"
                    class="rounded-full object-cover absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full m-auto p-0 border-[none] inset-0"></span>
              </figure>
            </NuxtLink>
            <MiniCardsUser :user="post.user" />
          </div>
        </div>
        <div class="flex min-w-0 flex-col">
          <div class="flex justify-between gap-2 text-light-secondary dark:text-dark-secondary">
            <div class="flex gap-1 truncate xs:overflow-visible xs:whitespace-normal">
              <div
                class="group relative self-start text-light-primary dark:text-dark-primary grid [&amp;>div]:translate-y-7">
                <NuxtLink
                  class="flex items-center gap-1 truncate font-bold custom-underline text-light-primary dark:text-dark-primary"
                  :to="`/@${post.user.username}`">
                  <p class="truncate">{{ post.user.name.first }} {{ post.user.name.last }}</p>
                  <Icon name="material-symbols:verified" class="text-main-accent h-5 w-5" />
                </NuxtLink>
                <MiniCardsUser :user="post.user" />
              </div>
              <div
                class="group relative self-start text-light-primary dark:text-dark-primary grid [&amp;>div]:translate-y-7">
                <NuxtLink class="truncate font-medium text-light-secondary dark:text-dark-secondary"
                  :to="`/@${post.user.username}`">
                  @{{ post.user.username }}</NuxtLink>
                <MiniCardsUser :user="post.user" />
              </div>
              <div class="flex gap-1"><i>·</i>
                <div class="group relative">
                  <NuxtLink class="custom-underline font-medium peer whitespace-nowrap" :to="`/p/${post.id}`">23 Feb
                  </NuxtLink>
                  <div
                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-1 peer-focus:opacity-100 peer-focus-visible:visible peer-focus-visible:delay-200">
                    <span>16:31 · 23 Feb 2023</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4">
              <div>
                <button
                  class="custom-button main-tab main-tab group group absolute top-2 right-2 p-2 hover:bg-main-accent/10 focus-visible:bg-main-accent/10 focus-visible:!ring-main-accent/80 active:bg-main-accent/20"
                  type="button">
                  <div class="group relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" aria-hidden="true"
                      class="h-5 w-5 text-light-secondary group-hover:text-main-accent group-focus-visible:text-main-accent dark:text-dark-secondary/80">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z">
                      </path>
                    </svg>
                    <div
                      class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3">
                      <span>More</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <p class="whitespace-pre-line break-words">{{ post.content.text }}</p>
          <div class="mt-1 flex flex-col gap-2">
            <div class="flex text-light-secondary inner:outline-none dark:text-dark-secondary max-w-md justify-between">
              <button
                class="group flex items-center gap-1.5 p-0 transition-none disabled:cursor-not-allowed inner:transition inner:duration-200 hover:text-main-accent focus-visible:text-main-accent"><i
                  class="relative rounded-full p-2 pt-1 not-italic group-focus-visible:ring-2 group-hover:bg-main-accent/10 group-active:bg-main-accent/20 group-focus-visible:bg-main-accent/10 group-focus-visible:ring-main-accent/80">
                  <Icon name="icon-park-twotone:comments" size="18" />
                  <div
                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3">
                    <span>Reply</span>
                  </div>
                </i>
                <div class="overflow-hidden">
                  <p class="text-sm" style="opacity: 1; transform: none;">1</p>
                </div>
              </button>
              <button
                class="group flex items-center gap-1.5 p-0 transition-none disabled:cursor-not-allowed inner:transition inner:duration-200 hover:text-accent-green focus-visible:text-accent-green"><i
                  class="relative rounded-full p-2 pt-1 not-italic group-focus-visible:ring-2 group-hover:bg-accent-green/10 group-active:bg-accent-green/20 group-focus-visible:bg-accent-green/10 group-focus-visible:ring-accent-green/80">
                  <Icon name="material-symbols:repeat" size="18" />
                  <div
                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3">
                    <span>Repost</span>
                  </div>
                </i>
                <div class="overflow-hidden">
                  <p class="text-sm" style="opacity: 1; transform: none;">1</p>
                </div>
              </button>
              <button
                class="group flex items-center gap-1.5 p-0 transition-none disabled:cursor-not-allowed inner:transition inner:duration-200 hover:text-accent-pink focus-visible:text-accent-pink">
                <i
                  class="relative rounded-full p-2 pt-1 not-italic group-focus-visible:ring-2 group-hover:bg-accent-pink/10 group-active:bg-accent-pink/20 group-focus-visible:bg-accent-pink/10 group-focus-visible:ring-accent-pink/80">
                  <Icon name="icon-park-twotone:like" size="18" />
                  <div
                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3">
                    <span>Like</span>
                  </div>
                </i>
                <div class="overflow-hidden">
                  <p class="text-sm" style="opacity: 1; transform: none;">1</p>
                </div>
              </button>
              <button
                class="group flex items-center gap-1.5 p-0 transition-none disabled:cursor-not-allowed inner:transition inner:duration-200 hover:text-accent-pink focus-visible:text-accent-pink">
                <i
                  class="relative rounded-full p-2 pt-1 not-italic group-focus-visible:ring-2 group-hover:bg-accent-pink/10 group-active:bg-accent-pink/20 group-focus-visible:bg-accent-pink/10 group-focus-visible:ring-accent-pink/80">
                  <Icon name="icon-park-twotone:share-two" size="18" />
                  <div
                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3">
                    <span>Share</span>
                  </div>
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "post",
  props: {
    post: Object,
  },
};
</script>