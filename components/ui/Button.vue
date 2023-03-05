<template>
    <button :class="[customClass]"
        class="custom-button main-tab accent-tab bg-main-accent px-4 py-1.5 font-bold text-accent enabled:hover:bg-main-accent/90 enabled:active:bg-main-accent/75 border-2 border-dark-border dark:border-light-border whitespace-nowrap"
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
