<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const locale = useState<string>('locale.setting')
const app = useAppConfig() as AppConfigInput
useHead({
  title: app.name,
  titleTemplate: '%s - Mention',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Mention',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>

<template>
  <Html :lang="locale">

  <Body class="antialiased duration-300 transition-colors">
    <div class="flex w-full justify-center gap-0 lg:gap-4">
      <HomeSidebar />
      <div
        class="hover-animation flex min-h-screen w-full max-w-xl flex-col border-x-0 border-light-border pb-96 dark:border-dark-border xs:border-x">
        <NuxtLayout>
          <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
          <NuxtPage />
        </NuxtLayout>
      </div>
      <!-- Follow and trends -->
      <aside class="flex w-96 flex-col gap-4 px-4 py-3 pt-1 hidden md:block">
        <HomeSearch />
        <HomeWidgetsTrends />
        <Footer />
      </aside>
    </div>
  </Body>

  </Html>
</template>