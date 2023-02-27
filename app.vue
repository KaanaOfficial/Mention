<template>
  <div class="flex w-full justify-center gap-0 lg:gap-4">
    <HomeSidebar />
    <div
      class="hover-animation flex min-h-screen w-full max-w-xl flex-col border-x-0 border-dark-border pb-96 dark:border-light-border xs:border-l-2 sm:border-x-2">
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
</template>