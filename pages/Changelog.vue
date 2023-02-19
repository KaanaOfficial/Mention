<template>
    <div class="p-10">
        <ol class="relative border-l border-gray-200 dark:border-gray-700" v-if="changelog.length">
            <li class="mb-10 ml-6" v-for="(item, index) in changelog">
                <span
                    class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"></path>
                    </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{ item.name }}
                    {{ item.tag_name }}<span
                        class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
                        v-if="index == 0">Latest</span>
                </h3>
                <p class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"><time>Released
                        on
                        {{ item.published_at }}</time> <span> by </span>
                    <NuxtLink :to="item.author.html_url" target="_blank" rel="noopener noreferrer">{{
                        item.author.login
                    }}</NuxtLink>
                </p>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ item.body }}</p>
                <NuxtLink :to="item.html_url" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                    <Icon name="logos:github-icon" class="w-4 h-4 mr-2" fill="currentColor" /> Go to release
                </NuxtLink>
            </li>
        </ol>
        <p v-else>No releases</p>
    </div>
</template>

<script>
export default defineNuxtComponent({
    async asyncData() {
        return {
            changelog: await $fetch('https://api.github.com/repos/KaanaOfficial/Mention/releases')
        }
    }
})
</script>