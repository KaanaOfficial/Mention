<template>
    <section class="mt-0.5">
        <div v-if="!followers.length" class="flex justify-center p-8">
            <div class="w-full max-w-sm">
                <div class="flex flex-col items-center gap-6">
                    <figure style="width: 336px;">
                        <span
                            style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;">
                            <span
                                style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 50% 0px 0px;"></span>
                            <img alt="No bookmarks" src="~/assets/images/emptyPages/Bookmarks.png" decoding="async"
                                data-nimg="responsive" class="object-cover" sizes="100vw"
                                style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;">
                        </span>
                    </figure>
                    <div class="flex flex-col gap-2 text-center">
                        <p class="text-3xl font-extrabold">@albert isn’t following anyone</p>
                        <p class="text-light-secondary dark:text-dark-secondary">
                            Once they follow accounts, they’ll show up here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <section class="w-full max-w-screen-lg">
            <div v-for="follower in followers" :key="follower.id" :to="`/@${follower.username}`"
                class="accent-tab hover-animation grid grid-cols-[auto,1fr] gap-3 px-4 py-3 hover:bg-light-primary/5 dark:hover:bg-dark-primary/5">
                <div class="group relative self-start text-light-primary dark:text-dark-primary">
                    <a class="blur-picture flex self-start">
                        <figure class="w-12 h-12">
                            <span class="block overflow-hidden rounded-full">
                                <img alt="{{ follower.name.first }} {{ follower.name.last }}" :src="follower.avatar.url"
                                    class="object-cover w-full h-full">
                            </span>
                        </figure>
                    </a>
                </div>
                <div class="flex flex-col gap-1 truncate overflow-visible xs:overflow-visible">
                    <div class="flex items-center justify-between gap-2 truncate overflow-visible xs:overflow-visible">
                        <div
                            class="flex flex-col justify-center truncate overflow-visible xs:overflow-visible whitespace-normal">
                            <div class="text-lg font-medium">{{ follower.name.first }} {{ follower.name.last }}</div>
                            <div class="flex items-center gap-1 text-light-secondary dark:text-dark-secondary">
                                <div
                                    class="group relative self-start text-light-primary dark:text-dark-primary grid [&>div]:translate-y-7">
                                    <NuxtLink class="truncate font-medium text-light-secondary dark:text-dark-secondary">
                                        @{{ follower.username }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <button
                            class="custom-button main-tab dark:bg-tab min-w-[106px] self-start border border-light-line-reply px-4 py-1.5 font-medium hover:border-accent-red hover:bg-accent-red/10 hover:text-accent-red inner:hover:hidden dark:border-light-secondary">Follow</button>
                    </div>
                    <div class="whitespace-normal">{{ follower.bio }}</div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default defineComponent({
    name: 'FollowersPage',

    setup() {
        const followers = [];

        return {
            followers,
        };
    },
});
</script>