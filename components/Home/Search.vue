<template>
    <form class="hover-animation sticky top-0 z-10 -my-2 bg-main-background py-2">
    <label class="group flex items-center justify-between gap-4 rounded-full bg-main-search-background px-4 py-2 transition focus-within:bg-main-background focus-within:ring-2 focus-within:ring-main-accent">
       <i>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-5 w-5 text-light-secondary transition-colors group-focus-within:text-main-accent dark:text-dark-secondary">
             <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
          </svg>
       </i>
       <input class="peer flex-1 bg-transparent outline-none placeholder:text-light-secondary dark:placeholder:text-dark-secondary" type="text" placeholder="Search Twitter" value="">
       <button class="custom-button main-tab accent-tab scale-50 bg-main-accent p-1 opacity-0 transition hover:brightness-90 disabled:opacity-0" type="button" disabled="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-3 w-3 stroke-white">
             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
       </button>
    </label>
 </form>
</template>