<template>
    <div
        class="menu-container invisible absolute left-1/2 w-72 -translate-x-1/2 rounded-2xl opacity-0 [transition:visibility_0ms_ease_400ms,opacity_200ms_ease_200ms] group-hover:visible group-hover:opacity-100 group-hover:delay-500 border-2 border-dark-border dark:border-light-border">
        <div class="flex flex-col gap-3 p-4">
            <div class="flex flex-col gap-2">
                <div class="-mx-4 -mt-4">
                    <div
                        class="h-16 rounded-t-2xl bg-light-line-reply dark:bg-dark-line-reply border-b-2 border-dark-border dark:border-light-border">
                    </div>
                </div>
                <div class="flex justify-between">
                    <div class="mb-10">
                        <NuxtLink
                            class="blur-picture flex self-start absolute -translate-y-1/2 bg-main-background hover:brightness-100 [&amp;>figure>span]:[transition:200ms] [&amp;:hover>figure>span]:brightness-75 border-2 border-dark-border dark:border-light-border"
                            to="/@albert">
                            <figure style="width: 74px;">
                                <span
                                    class="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 relative m-0 p-0 border-0">
                                    <span
                                        class="box-border block w-[initial] h-[initial] opacity-100 m-0 pt-[100%] pb-0 px-0 border-0"></span><img
                                        alt="Albert Isern Alvarez"
                                        src="https://pbs.twimg.com/profile_images/1604802383162269698/MbMxGgB7_400x400.jpg"
                                        class="rounded-full object-cover absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full m-auto p-0 border-[none] inset-0"></span>
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
                        <NuxtLink class="truncate text-light-secondary dark:text-dark-secondary" tabindex="-1"
                            to="/@albert">
                            @albert</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="mb-1 leading-tight text-gray-700">
                Husband, father of two, independent open source developer. Creator /
                project lead of
                <a href="#" class="text-blue-400 hover:underline">@vuejs</a> and
                connoisseur of sushi.
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
            <div class="flex">
                <div class="flex flex-row-reverse ml-1 mr-3 flex-shrink-0">
                    <img class="w-6 h-6 -mx-1 border border-white rounded-full object-cover"
                        src="https://pbs.twimg.com/profile_images/946256627203584000/S_GHxy5Q_200x200.jpg" alt="" />
                    <img class="w-6 h-6 -mx-1 border border-white rounded-full object-cover"
                        src="https://pbs.twimg.com/profile_images/824552757671694337/3ZCys2U4_200x200.jpg" alt="" />
                    <img class="w-6 h-6 -mx-1 border border-white rounded-full object-cover"
                        src="https://pbs.twimg.com/profile_images/1217762908882468864/n9oa2hd1_200x200.jpg" alt="" />
                </div>
                <div class="leading-tight">
                    <a href="#" class="text-sm text-gray-500 hover:underline">Followed by Vue.js Developers Newsletter,
                        MadeWithVueJS, and 22
                        others you follow</a>
                </div>
            </div>
        </div>
    </div>
</template>