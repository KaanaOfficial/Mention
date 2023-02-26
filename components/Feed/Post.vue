<template>
  <section>
    <article
      v-for="post in posts"
      class="accent-tab h- relative flex cursor-default flex-col gap-3 border-b border-light-border px-4 py-3 outline-none dark:border-dark-border"
      style="opacity: 1"
    >
      <div class="flex flex-col gap-2">
        <div class="grid grid-cols-[auto,1fr] gap-3">
          <NuxtLink
            class="blur-picture flex self-start"
            tabindex="0"
            to="/@albert"
          >
            <figure style="width: 48px">
              <span
                style="
                  box-sizing: border-box,
                  display: block;
                  overflow: hidden;
                  width: initial;
                  height: initial;
                  background: none;
                  opacity: 0.5;
                  border: 0px;
                  margin: 0px;
                  padding: 0px;
                  position: relative;
                "
                ><span
                  style="
                    box-sizing: border-box;
                    display: block;
                    width: initial;
                    height: initial;
                    background: none;
                    opacity: 1;
                    border: 0px;
                    margin: 0px;
                    padding: 100% 0px 0px;
                  "
                ></span
                ><img
                  alt="Isaac engineer"
                  src=""
                  decoding="async"
                  data-nimg="responsive"
                  class="rounded-full object-cover absolute m-auto"
                  style="
                    inset: 0px;
                    box-sizing: border-box;
                    padding: 0px;
                    border: none;
                    display: block;
                    width: 0px;
                    height: 0px;
                    min-width: 100%;
                    max-width: 100%;
                    min-height: 100%;
                    max-height: 100%;
                  "
              /></span>
            </figure>
          </NuxtLink>
          <div class="flex min-w-0 justify-between">
            <div
              class="flex flex-col truncate xs:overflow-visible xs:whitespace-normal"
            >
              <NuxtLink
                class="flex items-center gap-1 truncate font-bold custom-underline -mb-1"
                tabindex="0"
                to="/@albert"
              >
                <p class="truncate">Albert Isern Alvarez</p>
              </NuxtLink>
              <NuxtLink
                class="truncate text-light-secondary dark:text-dark-secondary"
                tabindex="-1"
                to="/@albert"
              >
                @albert
              </NuxtLink>
            </div>
            <div class="px-4">
              <div data-headlessui-state="">
                <button
                  class="custom-button main-tab main-tab group group absolute top-2 right-2 p-2 hover:bg-accent-blue/10 focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20"
                  id="headlessui-popover-button-:r2:"
                  aria-expanded="false"
                  data-headlessui-state=""
                  type="button"
                >
                  <div class="group relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-light-secondary group-hover:text-accent-blue group-focus-visible:text-accent-blue dark:text-dark-secondary/80"
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
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="whitespace-pre-line break-words text-2xl">
          {{ post.title }}
        </p>
        <div
          class="inner:hover-animation inner:border-b inner:border-light-border dark:inner:border-dark-border"
        >
          <div class="flex gap-1 py-4">
            <div class="group relative">
              <a
                class="custom-underline peer whitespace-nowrap text-light-secondary dark:text-dark-secondary"
                href="/tweet/1ydzjDOKw6y5kD1C8D5z"
                >09:35 · 10 Feb 2023</a
              >
              <div
                class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-1 peer-focus:opacity-100 peer-focus-visible:visible peer-focus-visible:delay-200"
              >
                <span>09:35 · 10 Feb 2023</span>
              </div>
            </div>
          </div>
          <div
            class="flex gap-4 px-1 py-4 text-light-secondary dark:text-dark-secondary [&amp;>button>div]:font-bold [&amp;>button>div]:text-light-primary dark:[&amp;>button>div]:text-dark-primary"
          >
            <button
              class="hover-animation mt-0.5 mb-[3px] flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary"
            >
              <div class="overflow-hidden">
                <p class="text-sm" style="opacity: 1; transform: none">1</p>
              </div>
              <p>Like</p>
            </button>
          </div>
          <div
            class="flex text-light-secondary inner:outline-none dark:text-dark-secondary justify-around py-2"
          >
            <button
              class="group flex items-center gap-1.5 p-0 transition-none disabled:cursor-not-allowed inner:transition inner:duration-200 hover:text-accent-blue focus-visible:text-accent-blue"
            >
              <i
                class="relative rounded-full p-2 not-italic group-focus-visible:ring-2 group-hover:bg-accent-blue/10 group-active:bg-accent-blue/20 group-focus-visible:bg-accent-blue/10 group-focus-visible:ring-accent-blue/80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  ></path>
                </svg>
                <div
                  class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3"
                >
                  <span>Reply</span>
                </div>
              </i>
            </button>
            <button
              class="group flex items-center gap-1.5 p-0 transition-none disabled:cursor-not-allowed inner:transition inner:duration-200 hover:text-accent-green focus-visible:text-accent-green"
            >
              <i
                class="relative rounded-full p-2 not-italic group-focus-visible:ring-2 group-hover:bg-accent-green/10 group-active:bg-accent-green/20 group-focus-visible:bg-accent-green/10 group-focus-visible:ring-accent-green/80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  ></path>
                </svg>
                <div
                  class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3"
                >
                  <span>Retweet</span>
                </div>
              </i>
            </button>
            <button
              class="group flex items-center gap-1.5 p-0 transition-none disabled:cursor-not-allowed inner:transition inner:duration-200 hover:text-accent-pink focus-visible:text-accent-pink"
            >
              <i
                class="relative rounded-full p-2 not-italic group-focus-visible:ring-2 group-hover:bg-accent-pink/10 group-active:bg-accent-pink/20 group-focus-visible:bg-accent-pink/10 group-focus-visible:ring-accent-pink/80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path>
                </svg>
                <div
                  class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3"
                >
                  <span>Like</span>
                </div>
              </i>
            </button>
            <div class="relative" data-headlessui-state="">
              <button
                class="group relative flex items-center gap-1 p-0 outline-none transition-none hover:text-accent-blue focus-visible:text-accent-blue"
                id="headlessui-popover-button-:r7:"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <i
                  class="relative rounded-full p-2 not-italic duration-200 group-hover:bg-accent-blue/10 group-focus-visible:bg-accent-blue/10 group-focus-visible:ring-2 group-focus-visible:ring-accent-blue/80 group-active:bg-accent-blue/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    ></path>
                  </svg>
                  <div
                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3"
                  >
                    <span>Share</span>
                  </div>
                </i>
              </button>
            </div>
          </div>
        </div>
        <form class="flex flex-col -mx-4">
          <label
            class="hover-animation grid w-full grid-cols-[auto,1fr] gap-3 px-4 py-3 pt-3 pb-1"
            for=":ra:"
          >
            <a
              class="blur-picture flex self-start"
              tabindex="0"
              href="/user/AlbertIsernAl"
            >
              <figure style="width: 48px">
                <span
                  style="
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
                  "
                  ><span
                    style="
                      box-sizing: border-box;
                      display: block;
                      width: initial;
                      height: initial;
                      background: none;
                      opacity: 1;
                      border: 0px;
                      margin: 0px;
                      padding: 100% 0px 0px;
                    "
                  ></span
                  ><img
                    alt="Albert Isern Alvarez"
                    src=""
                    decoding="async"
                    data-nimg="responsive"
                    class="rounded-full object-cover"
                    sizes="100vw"
                    style="
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
                    "
                /></span>
              </figure>
            </a>
            <div class="flex w-full flex-col gap-4">
              <div
                class="flex min-h-[48px] w-full flex-col justify-center gap-4"
              >
                <div class="flex flex-col gap-6">
                  <div class="flex items-center gap-3">
                    <textarea
                      id=":ra:"
                      class="w-full min-w-0 resize-none bg-transparent text-xl outline-none placeholder:text-light-secondary dark:placeholder:text-dark-secondary"
                      placeholder="Tweet your reply"
                      style="height: 28px !important"
                    ></textarea
                    ><button
                      class="custom-button main-tab cursor-pointer bg-main-accent px-4 py-1.5 font-bold text-white opacity-50"
                      type="button"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </form>
      </div>
    </article>
  </section>
</template>

<script setup>
const { data: posts } = useFetch("/api/posts");
</script>
