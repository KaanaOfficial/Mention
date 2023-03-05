<template>
    <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contributors</h1>
        <div class="grid grid-cols-3 gap-4">
            <div v-for="contributor in sortedContributors" :key="contributor.id"
                class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img :src="contributor.avatar_url" alt="Avatar" width="100%" class="h-48 object-cover">
                <div class="p-4">
                    <a :href="contributor.html_url" target="_blank"
                        class="text-blue-500 hover:underline font-bold dark:text-blue-400">{{ contributor.login }}</a>
                    <p class="text-gray-500 dark:text-gray-300">{{ contributor.contributions }} contributions</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: contributors } = await useFetch('https://api.github.com/repos/KaanaOfficial/Mention/contributors')

const sortedContributors = computed(() => {
    return contributors.value.slice().sort((a, b) => b.contributions - a.contributions)
})
</script>