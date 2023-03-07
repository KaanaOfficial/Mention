<template>
    <header
        class="hover-animation even z-10 bg-main-background/60 px-4 py-2 backdrop-blur-md sticky top-0 flex items-center gap-6 border-b-2 border-dark-border dark:border-light-border">
        <button @click="goBack"
            class="custom-button main-tab dark-bg-tab group relative p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20"
            type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
            </svg>
            <div
                class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3">
                <span>{{ $t('buttons.back') }}</span>
            </div>
        </button>
        <div class="flex gap-8">
            <h2 class="text-xl font-bold">{{ $t('pages.post.title') }}</h2>
        </div>
    </header>
    <FeedPost :post="post" v-if="post" />
    <form class="flex flex-col -mx-4 px-4">
        <label class="hover-animation grid w-full grid-cols-[auto,1fr] gap-3 px-4 py-3 pt-3 pb-1" for=":r8:"><a
                class="blur-picture flex self-start">
                <figure style="width: 48px;"><span
                        style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"><span
                            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 100% 0px 0px;"></span>
                        <img v-if="post && post.user" :alt="post.user.name.first + ' ' + post.user.name.last"
                            :src="post.user.avatar.url" decoding="async" data-nimg="responsive"
                            class="rounded-full object-cover"
                            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"></span>
                </figure>
            </a>
            <div class="flex w-full flex-col gap-4">
                <div class="flex min-h-[48px] w-full flex-col justify-center gap-4">
                    <div class="flex flex-col gap-6">
                        <div class="flex items-center gap-3"><textarea id=":r8:"
                                class="w-full min-w-0 resize-none bg-transparent text-xl outline-none placeholder:text-light-secondary dark:placeholder:text-dark-secondary"
                                placeholder="Write your reply" style="height: 28px !important;"></textarea>
                            <UiButton type="submit" disabled class="my-button">{{ $t('buttons.post') }}</UiButton>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    </form>
</template>

<script>
export default defineComponent({
    setup() {
        const postsStore = usePostsStore()
        const router = useRouter()
        const route = useRoute()

        postsStore.fetchPosts();

        // Use computed property to get post by ID from store
        const post = computed(() => {
            const postId = parseInt(route.params.id)
            return postsStore.getPostById(postId)
        })

        // Define function to go back to previous page
        const goBack = () => {
            router.go(-1)
        }

        return {
            post,
            goBack,
        }
    },
})
</script>