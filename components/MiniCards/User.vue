<template>
    <div class="flex flex-col gap-3 p-4">
        <div class="flex flex-col gap-2">
            <div class="-mx-4 -mt-4">
                <div class="h-16 rounded-t-2xl bg-light-line-reply dark:bg-dark-line-reply"></div>
            </div>
            <div class="flex justify-between">
                <div class="mb-10">
                    <NuxtLink
                        class="blur-picture flex self-start absolute -translate-y-1/2 bg-main-background p-1 hover:brightness-100 [&amp;>figure>span]:[transition:200ms] [&amp;:hover>figure>span]:brightness-75"
                        to="/@albert">
                        <figure style="width: 64px;"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"><span
                                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 100% 0px 0px;"></span><img
                                    alt="Albert Isern Alvarez"
                                    src="https://pbs.twimg.com/profile_images/1604802383162269698/MbMxGgB7_400x400.jpg"
                                    class="rounded-full object-cover"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"></span>
                        </figure>
                    </NuxtLink>
                </div>
                <button
                    class="custom-button main-tab self-start border bg-light-primary px-4 py-1.5 font-bold text-white hover:bg-light-primary/90 focus-visible:bg-light-primary/90 active:bg-light-border/75 dark:bg-light-border dark:text-light-primary dark:hover:bg-light-border/90 dark:focus-visible:bg-light-border/90 dark:active:bg-light-border/75"
                    type="button">Follow</button>
            </div>
            <div>
                <NuxtLink class="flex items-center gap-1 truncate font-bold custom-underline -mb-1 text-lg" tabindex="0"
                    to="/@albert">
                    <p class="truncate">Albert Isern Alvarez</p><i><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="fill-accent-blue h-5 w-5">
                            <path fill-rule="evenodd"
                                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clip-rule="evenodd"></path>
                        </svg></i>
                </NuxtLink>
                <div class="flex items-center gap-1 text-light-secondary dark:text-dark-secondary">
                    <NuxtLink class="truncate text-light-secondary dark:text-dark-secondary" tabindex="-1" to="/@albert">
                        @albert</NuxtLink>
                </div>
            </div>
        </div>
        <div class="text-secondary flex gap-4">
            <NuxtLink
                class="hover-animation flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary"
                to="/@albert/following">
                <p class="font-bold">2</p>
                <p class="text-light-secondary dark:text-dark-secondary">Following</p>
            </NuxtLink>
            <NuxtLink
                class="hover-animation flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary"
                to="/@albert/followers">
                <p class="font-bold">2</p>
                <p class="text-light-secondary dark:text-dark-secondary">Followers</p>
            </NuxtLink>
        </div>
    </div>
</template>