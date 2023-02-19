<template>
    <div class="flex w-full flex-col gap-1">
        <p class="text-sm font-bold text-light-secondary dark:text-dark-secondary">🌐 {{ locale }}</p>
        <div class="hover-animation grid grid-rows-3 gap-3 rounded-2xl bg-main-sidebar-background px-4 py-3 xs:grid-cols-3
                            xs:grid-rows-none">
            <select v-model="locale">
                <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale.code">
                    {{ locale.name }}
                </option>
            </select>
        </div>
    </div>
</template>
<script setup>
const { locale, locales } = useI18n()

const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
})
</script>