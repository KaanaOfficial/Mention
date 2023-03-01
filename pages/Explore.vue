<template>
    <header
        class="hover-animation even z-10 bg-main-background/60 px-4 py-2 backdrop-blur-md sticky top-0 flex flex-col gap-4 border-b-2 border-dark-border dark:border-light-border">
        <div class="flex items-center gap-6">
            <button @click="goBack"
                class="custom-button main-tab dark-bg-tab group relative p-2 hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20"
                type="button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                </svg>
                <div
                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible group-focus-visible:opacity-100 translate-y-3">
                    <span>Back</span>
                </div>
            </button>
            <div class="flex gap-8">
                <h2 class="text-xl font-bold">Search</h2>
            </div>
        </div>
        <UiSearch :search="search" class="flex-1" />
    </header>
</template>


<script>
export default defineComponent({
    setup() {
        const store = useMentionStore()
        const router = useRouter()
        const route = useRoute()

        // Define function to go back to previous page
        const goBack = () => {
            router.go(-1)
        }

        return {
            goBack,
        }
    },
})
</script>