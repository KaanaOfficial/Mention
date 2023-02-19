<template>
  <div class="flex flex-col items-center min-h-screen">
    <div class="bg-white rounded-xl p-4 w-80 shadow">
      <div class="flex justify-between mb-3">
        <div>
          <div>
            <img
              class="h-16 w-16 rounded-full object-cover"
              src="https://pbs.twimg.com/profile_images/1206997998900850688/cTXTQiHm_200x200.jpg"
              alt=""
            />
          </div>
          <div class="font-bold leading-tight">{{ user.fullname }}</div>
          <div class="text-sm text-gray-600 leading-tight">@{{ username }}</div>
        </div>
        <div>
          <button
            class="text-blue-400 rounded-full border border-blue-400 h-10 px-4 font-bold hover:bg-gray-100"
          >
            Follow
          </button>
        </div>
      </div>
      <div class="mb-3 leading-tight text-gray-700">
        Husband, father of two, independent open source developer. Creator /
        project lead of
        <a href="#" class="text-blue-400 hover:underline">@vuejs</a> and
        connoisseur of sushi.
      </div>
      <div class="flex mb-3">
        <div class="mr-4">
          <a href="" class="hover:underline font-bold"
            >1,160 <span class="font-normal text-gray-500">Following</span></a
          >
        </div>
        <div>
          <a href="" class="hover:underline font-bold"
            >125.6K <span class="font-normal text-gray-500">Followers</span></a
          >
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-row-reverse ml-1 mr-3 flex-shrink-0">
          <img
            class="w-6 h-6 -mx-1 border border-white rounded-full object-cover"
            src="https://pbs.twimg.com/profile_images/946256627203584000/S_GHxy5Q_200x200.jpg"
            alt=""
          />
          <img
            class="w-6 h-6 -mx-1 border border-white rounded-full object-cover"
            src="https://pbs.twimg.com/profile_images/824552757671694337/3ZCys2U4_200x200.jpg"
            alt=""
          />
          <img
            class="w-6 h-6 -mx-1 border border-white rounded-full object-cover"
            src="https://pbs.twimg.com/profile_images/1217762908882468864/n9oa2hd1_200x200.jpg"
            alt=""
          />
        </div>
        <div class="leading-tight">
          <a href="#" class="text-sm text-gray-500 hover:underline"
            >Followed by Vue.js Developers Newsletter, MadeWithVueJS, and 22
            others you follow</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Array,
  },
};
</script>
