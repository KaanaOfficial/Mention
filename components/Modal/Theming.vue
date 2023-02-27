<template>
  <button type="button" @click="setIsOpen(true)"
    class="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
    <Icon name="material-symbols:settings-suggest-outline-sharp" size="25" class="hidden h-6 w-6 xl:block" />
  </button>
  <div class="z-10 fixed" v-if="isOpen" @close="setIsOpen">
    <div class="fixed inset-0 flex items-center justify-center p-4">
      <div class="hover-animation fixed inset-0 bg-black/40 dark:bg-[#5B7083]/40" aria-hidden="true"
        data-projection-id="2" style="opacity: 1"></div>
      <div class="overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
        <div class="hover-animation fixed inset-0 bg-black/40 dark:bg-[#5B7083]/40"></div>
        <div class="fixed inset-0 flex items-center justify-center p-4">
          <div
            class="max-w-xl max-h-[calc(100vh-4rem)] overflow-auto bg-main-background w-full p-8 rounded-2xl hover-animation border-2 border-dark-border dark:border-light-border"
            id="headlessui-dialog-panel-:r9h:" data-headlessui-state="open" data-projection-id="6"
            style="opacity: 1; transform: none">
            <div class="flex flex-col items-center gap-6">
              <div class="flex flex-col gap-3 text-center">
                <h2 class="text-2xl font-bold">{{ $t('pages.customize.title') }}</h2>
                <p class="text-light-secondary dark:text-dark-secondary">{{ $t('pages.customize.description') }}</p>
              </div>
              <article
                class="hover-animation mx-8 rounded-2xl px-4 py-3 border-2 border-dark-border dark:border-light-border">
                <div class="grid grid-cols-[auto,1fr] gap-3">
                  <NuxtLink class="blur-picture flex self-start pointer-events-none" tabindex="-1" to="/home">
                    <figure style="width: 48px">
                      <span
                        class="box-border block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 relative">
                        <span class="box-border block w-auto h-auto bg-transparent opacity-100 border-0 m-0"
                          style="padding: 100% 0px 0px;"></span>
                        <img alt="Mention" src="~/assets/images/Logo/Logo.png" decoding="async" data-nimg="responsive"
                          class="rounded-full object-cover absolute inset-0 box-border p-0 border-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full" /></span>
                    </figure>
                  </NuxtLink>
                  <div>
                    <div class="flex gap-1">
                      <a class="flex items-center gap-1 truncate font-bold pointer-events-none" tabindex="-1" href="/">
                        <p class="truncate">Mention</p>
                        <i>
                          <Icon name="material-symbols:verified" class="text-accent-blue h-5 w-5">
                          </Icon>
                        </i>
                      </a>
                      <p class="text-light-secondary dark:text-dark-secondary">
                        @mention
                      </p>
                      <div class="flex gap-1 text-light-secondary dark:text-dark-secondary">
                        <i>·</i>
                        <p>16m</p>
                      </div>
                    </div>
                    <p class="whitespace-pre-line break-words">
                      At the heart of Mention are short messages called Mentions
                      — just like this one — which can include photos, videos,
                      links, text, hashtags, and mentions like
                      <span class="text-main-accent">@mention</span>.
                    </p>
                  </div>
                </div>
              </article>
              <div class="flex w-full flex-col gap-1">
                <p class="text-sm font-bold text-light-secondary dark:text-dark-secondary">{{ $t('customizeViewColor') }}
                </p>
                <div
                  class="hover-animation grid grid-cols-3 grid-rows-2 justify-items-center gap-3 rounded-2xl bg-main-sidebar-background py-3 xs:grid-cols-6 xs:grid-rows-none">
                  <label v-for="color in ['blue', 'orange', 'green', 'yellow', 'purple', 'pink']"
                    :class="['hover-animation', 'flex', 'h-10', 'w-10', 'cursor-pointer', 'items-center', 'justify-center', 'rounded-full', { 'bg-accent-blue': color === 'blue', 'bg-accent-orange': color === 'orange', 'bg-accent-green': color === 'green', 'bg-accent-yellow': color === 'yellow', 'bg-accent-purple': color === 'purple', 'bg-accent-pink': color === 'pink', }, { 'hover:ring': color === 'blue' || color === 'green' || color === 'purple', 'hover:ring-blue-400': color === 'blue', 'hover:ring-green-400': color === 'green', 'hover:ring-purple-400': color === 'purple', }, { 'active:ring': color === 'blue' || color === 'green' || color === 'purple', 'active:ring-blue-200': color === 'blue', 'active:ring-green-200': color === 'green', 'active:ring-purple-200': color === 'purple', }]"
                    class="border-2 border-dark-border dark:border-light-border" :for="color" :key="color">
                    <input class="peer absolute h-0 w-0 opacity-0" :id="color" type="radio" name="accent" :value="color"
                      :checked="color === 'blue'" tabindex="0" />
                    <i class="text-white peer-checked:inner:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" aria-hidden="true"
                        class="h-6 w-6 opacity-0 transition-opacity duration-200">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                      </svg>
                    </i>
                  </label>
                </div>
              </div>
              <div class="flex w-full flex-col gap-1">
                <p class="text-sm font-bold text-light-secondary dark:text-dark-secondary">{{ $t('customizeViewTheme') }}
                </p>
                <div
                  class="hover-animation grid grid-rows-3 gap-3 rounded-2xl bg-main-sidebar-background p-3 xs:grid-cols-3 xs:grid-rows-none">
                  <label v-for="color of ['system', 'light', 'dark', 'sepia']" :key="color"
                    class="capitalize flex cursor-pointer items-center gap-2 rounded-2xl p-3 font-bold ring-main-accent transition duration-200 [&amp;:has(div>input:checked)]:ring-2 text-main bg-main-primary [&amp;:hover>div]:bg-light-secondary/10 [&amp;:active>div]:bg-light-secondary/20 border-2 border-dark-border dark:border-light-border"
                    :for="`themeSelector-${color}`" @click="$colorMode.preference = color">
                    <div class="hover-animation flex h-10 w-10 items-center justify-center rounded-full">
                      <input class="peer absolute h-0 w-0 opacity-0" :id="`themeSelector-${color}`" type="radio"
                        name="theme" :value="color" :checked="color === $colorMode.value" />
                      <i
                        class="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#B9CAD3] text-white transition duration-200 peer-checked:border-transparent peer-checked:bg-main-accent peer-checked:inner:opacity-100 border-2 border-dark-border dark:border-light-border">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" aria-hidden="true"
                          class="h-full w-full p-0.5 opacity-0 transition-opacity duration-200">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg>
                      </i>
                    </div>
                    {{ color }}
                  </label>
                  <NuxtLink to="/settings/themes/add"
                    class="capitalize flex cursor-pointer items-center gap-2 rounded-2xl p-3 font-bold ring-main-accent transition duration-200 [&amp;:has(div>input:checked)]:ring-2 text-main bg-main [&amp;:hover>div]:bg-light-secondary/10 [&amp;:active>div]:bg-light-secondary/20 border-2 border-dark-border dark:border-light-border">
                    <div class="hover-animation flex items-center justify-center rounded-full">
                      <Icon name="material-symbols:dashboard-customize-rounded" class="h-full w-full p-0.5" size="22" />
                    </div>
                    {{ $t('pages.customize.AddThemeButton') }}
                  </NuxtLink>
                </div>
              </div>
              <ChangeLanguage />
              <button
                class="custom-button main-tab bg-main-accent px-4 py-1.5 font-bold text-white hover:bg-main-accent/90 active:bg-main-accent/75"
                type="button" @click="setIsOpen(false)">{{ $t('buttons.done') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false);

function setIsOpen(value) {
  isOpen.value = value;
}
</script>
