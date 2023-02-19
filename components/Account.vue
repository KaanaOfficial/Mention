<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const loading = ref(true);
const username = ref("");
const website = ref("");
const avatar_path = ref("");

// Fetch user profile data and update the page
async function fetchProfile() {
  loading.value = true;
  const { data, error } = await supabase
    .from("profiles")
    .select(`username, website, avatar_url`)
    .eq("id", user.value.id)
    .single();

  if (error) {
    alert(error.message);
  }

  if (data) {
    username.value = data.username;
    website.value = data.website;
    avatar_path.value = data.avatar_url;
  }

  loading.value = false;
}

fetchProfile();

async function updateProfile() {
  try {
    loading.value = true;
    const updates = {
      id: user.value.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_path.value,
      updated_at: new Date(),
    };

    const { error } = await supabase.from("profiles").upsert(updates, {
      returning: "minimal", // Don't return the value after inserting
    });
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}

async function signOut() {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    user.value = null;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <form class="form-widget py-6 px-8" @submit.prevent="updateProfile">
    <div class="mb-4">
      <label for="email" class="block text-gray-700 font-medium mb-2">
        Email
      </label>

      <input
        id="email"
        type="text"
        :value="user.email"
        disabled
        class="w-full p-2 border border-gray-400 rounded-lg"
      />
    </div>

    <div class="mb-4">
      <label for="username" class="block text-gray-700 font-medium mb-2">
        Username
      </label>

      <input
        id="username"
        type="text"
        v-model="username"
        class="w-full p-2 border border-gray-400 rounded-lg"
      />
    </div>

    <div class="mb-4">
      <label for="website" class="block text-gray-700 font-medium mb-2">
        Website
      </label>

      <input
        id="website"
        type="website"
        v-model="website"
        class="w-full p-2 border border-gray-400 rounded-lg"
      />
    </div>

    <div class="mb-4">
      <input
        type="submit"
        class="w-full btn btn-primary py-2 text-white rounded-lg bg-cyan-500 hover:bg-cyan-600 cursor-pointer"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div class="mb-4">
      <button
        class="w-full btn btn-secondary py-2 text-gray-700 rounded-lg hover:bg-gray-400 cursor-pointer"
        @click="signOut"
        :disabled="loading"
      >
        Sign Out
      </button>
    </div>
  </form>
</template>
