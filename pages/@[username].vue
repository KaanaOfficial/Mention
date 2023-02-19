<template>
  <main
    class="hover-animation flex min-h-screen w-full max-w-xl flex-col border-x-0 border-light-border pb-96 dark:border-dark-border xs:border-x">
    <header
      class="hover-animation even z-10 bg-main-background/60 px-4 py-2 backdrop-blur-md sticky top-0 flex items-center gap-6">
      <button
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
      <div class="-mb-1 truncate" data-projection-id="10" style="opacity: 1">
        <NuxtLink class="flex items-center gap-1 truncate font-bold pointer-events-none -mt-1 text-xl" tabindex="-1"
          to="/@albert">
          <h2 class="truncate">Albert Isern Alvarez</h2>
        </NuxtLink>
        <p class="text-xs text-light-secondary dark:text-dark-secondary">
          No Tweet
        </p>
      </div>
    </header>
    <section data-projection-id="3" style="opacity: 1">
      <div class="mt-0.5 h-36 xs:h-48 sm:h-52">
        <div class="h-full bg-light-line-reply dark:bg-dark-line-reply"></div>
      </div>
      <div class="relative flex flex-col gap-3 px-4 py-3">
        <div class="flex justify-between">
          <div class="mb-8 xs:mb-14 sm:mb-16">
            <button
              class="custom-button main-tab accent-tab absolute -mt-3 aspect-square w-24 -translate-y-1/2 overflow-hidden p-0 disabled:cursor-auto disabled:opacity-100 xs:w-32 sm:w-36 [&amp;:hover>figure>span]:brightness-75"
              type="button">
              <figure
                class="hover-animation relative h-full w-full bg-main-background inner:!m-1 inner:rounded-full inner:transition inner:duration-200">
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
                    position: absolute;
                    inset: 0px;
                  ">
                  <img alt="Albert Isern Alvarez" sizes="100vw"
                    src="https://pbs.twimg.com/profile_images/1604802383162269698/MbMxGgB7_400x400.jpg" decoding="async"
                    data-nimg="fill" class="rounded-full object-cover" style="
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
                    " />
                </span>
              </figure>
            </button>
          </div>
          <form class="">
            <button
              class="custom-button main-tab dark-bg-tab self-start border border-light-line-reply px-4 py-1.5 font-bold hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20"
              type="button">
              Edit profile
            </button>
          </form>
        </div>
        <div>
          <NuxtLink class="flex items-center gap-1 truncate font-bold pointer-events-none -mb-1 text-xl" tabindex="-1"
            to="/@albert">
            <p class="truncate">Albert Isern Alvarez</p>
          </NuxtLink>
          <div class="flex items-center gap-1 text-light-secondary dark:text-dark-secondary">
            <p>@AlbertIsernAl</p>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex flex-wrap gap-x-3 gap-y-1 text-light-secondary dark:text-dark-secondary">
            <div class="flex items-center gap-1">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true" class="h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z">
                  </path>
                </svg>
              </i>
              <button class="custom-underline group relative">
                Joined February 2023
                <div
                  class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-1">
                  <span>00:15 · 10 Feb 2023</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          class="flex gap-4 text-light-secondary dark:text-dark-secondary [&amp;>a>div]:font-bold [&amp;>a>div]:text-light-primary dark:[&amp;>a>div]:text-dark-primary">
          <NuxtLink
            class="hover-animation mt-0.5 mb-[3px] flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary"
            to="/@albert/following">
            <div class="overflow-hidden">
              <p class="text-sm" data-projection-id="6" style="opacity: 1; transform: none">
                0
              </p>
            </div>
            <p>Following</p>
          </NuxtLink>
          <NuxtLink
            class="hover-animation mt-0.5 mb-[3px] flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary"
            to="/@albert/followers">
            <div class="overflow-hidden">
              <p class="text-sm" data-projection-id="7" style="opacity: 1; transform: none">
                0
              </p>
            </div>
            <p>Follower</p>
          </NuxtLink>
        </div>
      </div>
    </section>
    <nav
      class="hover-animation flex justify-between overflow-y-auto border-b border-light-border dark:border-dark-border"
      data-projection-id="8" style="opacity: 1">
      <NuxtLink
        class="hover-animation main-tab dark-bg-tab flex flex-1 justify-center hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
        to="/@albert">
        <div class="px-6 md:px-8">
          <p
            class="flex flex-col gap-3 whitespace-nowrap pt-3 font-bold transition-colors duration-200 text-light-primary dark:text-dark-primary [&amp;>i]:scale-100 [&amp;>i]:opacity-100">
            Tweets
            <i class="h-1 scale-50 rounded-full bg-main-accent opacity-0 transition duration-200"></i>
          </p>
        </div>
      </NuxtLink>
      <NuxtLink
        class="hover-animation main-tab dark-bg-tab flex flex-1 justify-center hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
        to="/@albert/with_replies">
        <div class="px-6 md:px-8">
          <p
            class="flex flex-col gap-3 whitespace-nowrap pt-3 font-bold transition-colors duration-200 text-light-secondary dark:text-dark-secondary">
            Tweets &amp; replies
            <i class="h-1 scale-50 rounded-full bg-main-accent opacity-0 transition duration-200"></i>
          </p>
        </div>
      </NuxtLink>
      <NuxtLink
        class="hover-animation main-tab dark-bg-tab flex flex-1 justify-center hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
        to="/@albert/media">
        <div class="px-6 md:px-8">
          <p
            class="flex flex-col gap-3 whitespace-nowrap pt-3 font-bold transition-colors duration-200 text-light-secondary dark:text-dark-secondary">
            Media
            <i class="h-1 scale-50 rounded-full bg-main-accent opacity-0 transition duration-200"></i>
          </p>
        </div>
      </NuxtLink>
      <NuxtLink
        class="hover-animation main-tab dark-bg-tab flex flex-1 justify-center hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
        to="/@albert/likes">
        <div class="px-6 md:px-8">
          <p
            class="flex flex-col gap-3 whitespace-nowrap pt-3 font-bold transition-colors duration-200 text-light-secondary dark:text-dark-secondary">
            Likes
            <i class="h-1 scale-50 rounded-full bg-main-accent opacity-0 transition duration-200"></i>
          </p>
        </div>
      </NuxtLink>
    </nav>
    <section>
      <div class="flex justify-center p-8">
        <div class="w-full max-w-sm">
          <div class="flex flex-col items-center gap-6">
            <div class="flex flex-col gap-2 text-center">
              <p class="text-3xl font-extrabold">
                @AlbertIsernAl hasn't tweeted
              </p>
              <p class="text-light-secondary dark:text-dark-secondary">
                When they do, their Tweets will show up here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
