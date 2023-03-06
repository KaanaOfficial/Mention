import { defineStore } from "pinia";

// Define a Pinia store
export const useMentionStore = defineStore({
  // Unique identifier for the store
  id: "mention",

  // Define initial state for the store
  state: () => ({
    // Array to hold all posts
    posts: [
      {
        id: 1,
        user: {
          id: 1,
          name: {
            first: "Alice",
            last: "Smith",
          },
          username: "alice",
          avatar: {
            url: `https://api.dicebear.com/5.x/micah/svg?seed=${Date.now()}`,
          },
        },
        content: {
          text: "Hello, Mention!",
        },
        replies: [
          {
            id: 2,
            User: "Bob",
            text: "Hi, Alice!",
          },
        ],
        likes: [], // new property to keep track of likes
      },
    ],
    // Current user information
    currentUser: null,
    // Array to hold all users
    users: [],
    // Array to hold all notifications
    notifications: [],
  }),

  persist: true,

  // Define actions that can be performed on the store
  actions: {
    // Add a post to the post array
    addPost(post) {
      this.posts.push(post);
    },

    // Remove a post from the post array
    removePost(post) {
      const index = this.posts.indexOf(post);
      if (index !== -1) {
        this.posts.splice(index, 1);
      }
    },

    // Add a reply to a post
    addReply(post, reply) {
      if (!post.replies) {
        // If post does not have any replies yet, create a new replies array
        post.replies = [];
      }
      // Add the reply to the post's replies array
      post.replies.push(reply);
    },

    // Remove a reply from a post
    removeReply(post, reply) {
      if (post.replies) {
        const index = post.replies.indexOf(reply);
        if (index !== -1) {
          post.replies.splice(index, 1);
        }
      }
    },

    // Add a user to the likes array for a post
    addLike(post, user) {
      // Check if the user has already liked
      const alreadyLiked = post.likes.some((like) => like.id === user.id);
      if (!alreadyLiked) {
        post.likes.push({
          id: user.id,
          name: user.name,
          avatar: user.avatar,
        });
      }
    },

    // Add a user to the user array
    addUser(user) {
      this.users.push(user);
    },

    // Remove a user from the user array
    removeUser(user) {
      const index = this.users.indexOf(user);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
    },

    // Add a notification to the notification array
    addNotification(notification) {
      this.notifications.push(notification);
    },

    // Remove a notification from the notification array
    removeNotification(notification) {
      const index = this.notifications.indexOf(notification);
      if (index !== -1) {
        this.notifications.splice(index, 1);
      }
    },

    // Set the current user
    setCurrentUser(user) {
      this.currentUser = user;
    },

    // Clear the current user
    clearCurrentUser() {
      this.currentUser = null;
    },
  },
  getters: {
    getPostById: (state) => (id) => {
      return state.posts.find((post) => post.id === id);
    },
  },
});
