<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
const app = useAppConfig() as AppConfigInput
</script>

<template>
  <footer class="sticky top-16 flex flex-col gap-3 text-center text-sm text-light-secondary dark:text-dark-secondary">
    <nav class="flex flex-wrap justify-center gap-2">
      <a class="custom-underline" target="_blank" rel="noreferrer" href="https://mention.earth/tos">{{
        $t('footer.links.terms') }}</a>
      <a class="custom-underline" target="_blank" rel="noreferrer" href="https://mention.earth/privacy">{{
        $t('footer.links.privacy') }}</a>
      <a class="custom-underline" target="_blank" rel="noreferrer" href="https://help.kaana.io/resources/accessibility">{{
        $t('footer.links.accessibility') }}</a>
    </nav>
    <p>{{ $t('footer.text', { author: app.author }) }}</p>
    <p>({{ app.shortName }} {{ app.version }}).</p>
  </footer>
</template>
