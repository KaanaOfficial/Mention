import { defineStore } from "pinia";
export const usePostsStore = defineStore({
  id: "posts",
  state: () => ({
    posts: [],
  }),
  actions: {
    async fetchPosts() {
      const supabase = useSupabaseClient();
      const { data: posts, error } = await supabase
        .from("posts")
        .select("*")
        .order("id", { ascending: false });
      if (error) {
        console.error(error);
      } else {
        this.posts = posts.map((post) => ({
          id: post.id,
          user: {
            id: 1,
            username: "JohnDoe",
            name: {
              first: "John",
              last: "Doe",
            },
            avatar: {
              url: "https://pbs.twimg.com/profile_images/1604802383162269698/MbMxGgB7_400x400.jpg",
            },
          },
          content: post.content,
          replies: post.replies || [],
          date: {
            created: new Date(post.created_at).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            }),
            updated: new Date(post.created_at),
            full: new Date(post.created_at),
          },
          location: post.location || {},
        }));
      }
    },

    async addPost(post) {
      const supabase = useSupabaseClient();
      const { data, error } = await supabase.from("posts").insert([post]);

      if (error) {
        throw new Error(error.message);
      }

      this.posts.unshift({
        id: data[0].id,
        user: data[0].user,
        content: data[0].content,
        replies: data[0].replies || [],
        date: {
          created: new Date(data[0].created_at).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          }),
          updated: new Date(data[0].created_at),
          full: new Date(data[0].created_at),
        },
        location: data[0].location || {},
      });
    },
  },
  getters: {
    getPostById: (state) => (id) => {
      return state.posts.find((post) => post.id === id);
    },
  },
});
