<template>
  <HomeHeader class="border-b-2 border-dark-border dark:border-light-border" />
  <FeedForm />
  <FeedPost v-for="post in posts" :key="post.id" :post="post" @click.prevent="redirect(post)" class="cursor-pointer" />
  <div>
    <form @submit.prevent="submitPost" class="mb-4">
      <h2 class="text-xl font-bold mb-2">Add Post</h2>
      <div class="mb-2">
        <label for="post-User" class="block font-bold mb-1">User:</label>
        <input type="text" id="post-User" v-model="postUser"
          class="w-full border-gray-300 rounded-md shadow-sm py-1 px-2" />
      </div>
      <div class="mb-2">
        <label for="post-text" class="block font-bold mb-1">Text:</label>
        <textarea id="post-text" v-model="postText"
          class="w-full border-gray-300 rounded-md shadow-sm py-1 px-2"></textarea>
      </div>
      <button type="submit"
        class="px-4 py-2 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700">Submit</button>
    </form>
  </div>
</template>

<script>
export default defineComponent({
  setup() {
    const store = useMentionStore()
    const router = useRouter()
    const route = useRoute()

    // Use refs to store form data
    const postUser = ref('')
    const postText = ref('')
    const replyUser = ref('')
    const replyText = ref('')

    // Define function to submit a new post
    const submitPost = () => {
      if (!postUser.value || !postText.value) {
        return
      }
      store.addPost({
        id: Date.now(),
        user: {
          id: Date.now(),
          name: {
            first: postUser.value,
            last: '',
          },
          username: postUser.value.toLowerCase(),
          avatar: `https://api.dicebear.com/5.x/micah/svg?seed=${Date.now()}`,
        },
        content: {
          text: postText.value,
        },
        replies: [],
      })
      postUser.value = ''
      postText.value = ''
    }

    // Define function to submit a new reply
    const submitReply = (post) => {
      if (!replyUser.value || !replyText.value) {
        return
      }
      post.replies.push({
        id: Date.now(),
        user: replyUser.value,
        text: replyText.value,
      })
      store.updatePost(post)
      replyUser.value = ''
      replyText.value = ''
    }

    const redirect = (post) => {
      router.push(`/p/${post.id}`)
    }
    return {
      // Use computed property to get posts from the store
      posts: computed(() => store.posts),
      // Pass refs and submit functions to template
      postUser,
      postText,
      replyUser,
      replyText,
      submitPost,
      submitReply,
      redirect,
    }
  },
})
</script>
