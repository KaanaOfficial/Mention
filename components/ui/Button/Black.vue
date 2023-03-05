<template>
    <button :class="[customClass]"
        class="custom-button main-tab bg-light-primary px-4 py-1.5 font-bold text-white hover:bg-light-primary/90 focus-visible:bg-light-primary/90 active:bg-light-border/75 dark:bg-light-border dark:text-light-primary dark:hover:bg-dark-border/90 dark:focus-visible:bg-dark-border/90 dark:active:bg-light-border/75"
        @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        class: {
            type: String,
            default: ''
        }
    },
    computed: {
        customClass() {
            return this.class
        }
    },
    methods: {
        handleClick() {
            // Add button click logic here
        }
    }
}
</script>

<style>
button {
    /* Add default button styles here */
}
</style>
