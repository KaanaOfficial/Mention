<template>
  <article v-for="post in posts">
    <a
      class="accent-tab hover-card relative flex flex-col gap-y-4 px-4 py-3 outline-none border-b-2 border-dark-border dark:border-light-border">
      <div class="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1">
        <div class="flex flex-col items-center gap-2">
          <div class="group relative self-start text-light-primary dark:text-dark-primary [&amp;>div]:translate-y-2"><a
              class="blur-picture flex self-start" to="/@{{ post.author.username}}">
              <figure style="width: 48px;">
                <span
                  style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"><span
                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 100% 0px 0px;"></span><img
                    alt="{{ post.author.name}}" :src="post.author.avatar" class="rounded-full object-cover" sizes="100vw"
                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"></span>
              </figure>
            </a>
            <MiniCardsUser />
          </div>
        </div>
        <div class="flex min-w-0 flex-col">
          <div class="flex justify-between gap-2 text-light-secondary dark:text-dark-secondary">
            <div class="flex gap-1 truncate xs:overflow-visible xs:whitespace-normal">
              <div
                class="group relative self-start text-light-primary dark:text-dark-primary grid [&amp;>div]:translate-y-7">
                <NuxtLink
                  class="flex items-center gap-1 truncate font-bold custom-underline text-light-primary dark:text-dark-primary"
                  to="/@{{ post.author.username}}">
                  <p class="truncate">{{ post.author.name }}</p><i><svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="fill-accent-blue h-5 w-5">
                      <path fill-rule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"></path>
                    </svg></i>
                </NuxtLink>
                <MiniCardsUser />
              </div>
              <div
                class="group relative self-start text-light-primary dark:text-dark-primary grid [&amp;>div]:translate-y-7">
                <NuxtLink class="truncate text-light-secondary dark:text-dark-secondary" tabindex="-1"
                  to="/@{{ post.author.username}}">
                  @{{ post.author.username }}</NuxtLink>
                <MiniCardsUser />
              </div>
              <div class="flex gap-1"><i>·</i>
                <div class="group relative">
                  <NuxtLink class="custom-underline peer whitespace-nowrap" to="/post/{{ post.id }}">23 Feb</NuxtLink>
                  <div
                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-1 peer-focus:opacity-100 peer-focus-visible:visible peer-focus-visible:delay-200">
                    <span>16:31 · 23 Feb 2023</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4">
              <div data-headlessui-state="">
                <button
                  class="custom-button main-tab main-tab group group absolute top-2 right-2 p-2 hover:bg-accent-blue/10 focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20"
                  id="headlessui-popover-button-:r3p:" aria-expanded="false" data-headlessui-state="" type="button">
                  <div class="group relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" aria-hidden="true"
                      class="h-5 w-5 text-light-secondary group-hover:text-accent-blue group-focus-visible:text-accent-blue dark:text-dark-secondary/80">
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
          <p class="whitespace-pre-line break-words">{{ post.content }}</p>
          <div class="mt-1 flex flex-col gap-2">
            <div class="flex text-light-secondary inner:outline-none dark:text-dark-secondary max-w-md justify-between">
              <button
                class="group flex items-center gap-1.5 p-0 transition-none disabled:cursor-not-allowed inner:transition inner:duration-200 hover:text-accent-blue focus-visible:text-accent-blue"><i
                  class="relative rounded-full p-2 pt-1 not-italic group-focus-visible:ring-2 group-hover:bg-accent-blue/10 group-active:bg-accent-blue/20 group-focus-visible:bg-accent-blue/10 group-focus-visible:ring-accent-blue/80">
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
                <div class="overflow-hidden"></div>
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
                <div class="overflow-hidden"></div>
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
                <div class="overflow-hidden"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </a>
  </article>
</template>

<script setup>
const { data: posts } = useFetch("/api/posts");
</script>
