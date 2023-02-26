<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
</script>

<template>
  <footer class="sticky top-16 flex flex-col gap-3 text-center text-sm text-light-secondary dark:text-dark-secondary">
    <nav class="flex flex-wrap justify-center gap-2">
      <a class="custom-underline" target="_blank" rel="noreferrer" href="https://mention.earth/tos">Terms of Service</a>
      <a class="custom-underline" target="_blank" rel="noreferrer" href="https://mention.earth/privacy">Privacy Policy</a>
      <a class="custom-underline" target="_blank" rel="noreferrer"
        href="https://help.kaana.io/resources/accessibility">Accessibility</a>
    </nav>
    <p>Made with ❤️ in the 🌎 by Kaana.</p>
    <p>({{ app.shortName }} {{ app.version }}).</p>
  </footer>
</template>
