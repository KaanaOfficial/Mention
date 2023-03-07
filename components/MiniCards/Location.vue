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
                    <UiButtonBlack type="button" class="mt-2">Follow</UiButtonBlack>
                </div>
                <div>
                    <NuxtLink class="flex items-center gap-1 truncate font-bold custom-underline -mb-1 text-lg" tabindex="0"
                        :to="`/location/${location.lat},${location.lng}`">
                        <p class="truncate">{{ location.name }}</p>
                    </NuxtLink>
                    <div class="flex items-center gap-1 text-light-secondary dark:text-dark-secondary">
                        <NuxtLink class="truncate text-light-secondary dark:text-dark-secondary" tabindex="-1"
                            :to="`/location/${location.lat},${location.lng}`">{{ location.name }}</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="mb-1 leading-tight" v-if="location.description" v-html="location.description"></div>
            <div class="text-secondary flex gap-4">
                <a
                    class="hover-animation flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary">
                    <p class="font-bold">2</p>
                    <p class="text-light-secondary dark:text-dark-secondary">Following</p>
                </a>
                <a
                    class="hover-animation flex h-4 items-center gap-1 border-b border-b-transparent outline-none hover:border-b-light-primary focus-visible:border-b-light-primary dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary">
                    <p class="font-bold">2</p>
                    <p class="text-light-secondary dark:text-dark-secondary">Followers</p>
                </a>
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
                    <a href="#" class="text-sm font-medium text-gray-500 hover:underline">Followed by Vue.js Developers
                        Newsletter,
                        MadeWithVueJS, and 22
                        others you follow</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "location-card",
    props: {
        location: Object,
    },
};
</script>