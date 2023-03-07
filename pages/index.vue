<template>
  <HomeHeader class="border-b-2 border-dark-border dark:border-light-border" />
  <FeedForm />
  <FeedPost v-for="post in posts" :key="post.id" :post="post" @click.prevent="redirect(post)" class="cursor-pointer" />
</template>

<script setup>
const postsStore = usePostsStore()

postsStore.fetchPosts();
setInterval(() => {
  postsStore.fetchPosts();
}, 500);

const posts = computed(() => {
  return postsStore.posts
})

const redirect = (post) => {
  navigateTo(`/p/${post.id}`)
}
</script>
