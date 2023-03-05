<template>
    <div>
        <form class="flex flex-col border-b-2 border-dark-border dark:border-light-border">
            <label
                class="hover-animation grid w-full grid-cols-[auto,1fr] gap-3 px-4 py-3 border-b-2 border-light-border dark:border-dark-border">
                <NuxtLink class="blur-picture flex self-start" to="/@AlbertIsernAl">
                    <figure class="w-12">
                        <span
                            class="box-border block overflow-hidden w-[initial] h-[initial] opacity-100 relative m-0 p-0 border-0">
                            <span
                                class="box-border block w-[initial] h-[initial] opacity-100 m-0 pt-[100%] pb-0 px-0 border-0"></span>
                            <img alt="Albert Isern Alvarez"
                                src="https://pbs.twimg.com/profile_images/1604802383162269698/MbMxGgB7_400x400.jpg"
                                decoding="async" data-nimg="responsive"
                                class="absolute box-border block w-0 h-0 min-w-full max-w-full min-h-full max-h-full m-auto p-0 border-[none] inset-0 rounded-full object-cover border-2 border-dark-border dark:border-light-border">
                        </span>
                    </figure>
                </NuxtLink>
                <div class="flex w-full flex-col gap-4">
                    <div class="flex min-h-[48px] w-full flex-col justify-center gap-4">
                        <div class="flex flex-col gap-6">
                            <div class="flex items-center gap-3"><textarea id=":r2:"
                                    class="w-full min-w-0 resize-none bg-transparent text-xl outline-none placeholder:text-light-secondary dark:placeholder:text-dark-secondary"
                                    placeholder="What's happening?" style="height: 28px !important;"></textarea></div>
                        </div>
                    </div>
                    <div class="hidden lg:flex justify-between " style="opacity: 1;">
                        <div
                            class="flex text-main-accent xs:[&amp;>button:nth-child(n+6)]:hidden md:[&amp;>button]:!block [&amp;>button:nth-child(n+4)]:hidden">
                            <input class="hidden" type="file" accept="image/*" multiple=""><button
                                class="custom-button main-tab accent-tab accent-bg-tab group relative rounded-full p-2 hover:bg-main-accent/10 active:bg-main-accent/20"
                                type="button">
                                <Icon name="material-symbols:image-rounded" size="22" />
                                <div
                                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs
                                                                                                                                                                                                             text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible 
                                                                                                                                                                                                                 group-focus-visible:opacity-100 translate-y-3">
                                    <span>Media</span>
                                </div>
                            </button>
                            <button
                                class="custom-button main-tab accent-tab accent-bg-tab group relative rounded-full p-2 hover:bg-main-accent/10 active:bg-main-accent/20"
                                type="button" disabled="">
                                <Icon name="material-symbols:gif-box-rounded" size="22" />
                                <div
                                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs
                                                                                                                                                                                                             text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible 
                                                                                                                                                                                                             group-focus-visible:opacity-100 translate-y-3">
                                    <span>GIF</span>
                                </div>
                            </button>
                            <button
                                class="custom-button main-tab accent-tab accent-bg-tab group relative rounded-full p-2 hover:bg-main-accent/10 active:bg-main-accent/20"
                                type="button" disabled="">
                                <Icon name="material-symbols:view-kanban-outline-rounded" size="22" />
                                <div
                                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs
                                                                                                                                                                                                         text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible 
                                                                                                                                                                                                             group-focus-visible:opacity-100 translate-y-3">
                                    <span>Poll</span>
                                </div>
                            </button>
                            <button
                                class="custom-button main-tab accent-tab accent-bg-tab group relative rounded-full p-2 hover:bg-main-accent/10 active:bg-main-accent/20"
                                type="button" disabled="">
                                <Icon name="material-symbols:sentiment-very-satisfied-outline" size="22" />
                                <div
                                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs
                                                                                                                                                                                                         text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible 
                                                                                                                                                                                                             group-focus-visible:opacity-100 translate-y-3">
                                    <span>Emoji</span>
                                </div>
                            </button>
                            <button
                                class="custom-button main-tab accent-tab accent-bg-tab group relative rounded-full p-2 hover:bg-main-accent/10 active:bg-main-accent/20"
                                type="button" disabled="">
                                <Icon name="material-symbols:schedule" size="22" />
                                <div
                                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs
                                                                                                                                                                                                         text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible 
                                                                                                                                                                                                             group-focus-visible:opacity-100 translate-y-3">
                                    <span>Schedule</span>
                                </div>
                            </button>
                            <button
                                class="custom-button main-tab accent-tab accent-bg-tab group relative rounded-full p-2 hover:bg-main-accent/10 active:bg-main-accent/20"
                                type="button" disabled="">
                                <Icon name="material-symbols:location-on" size="22" />
                                <div
                                    class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs
                                                                                                                                                                                                         text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible 
                                                                                                                                                                                                             group-focus-visible:opacity-100 translate-y-3">
                                    <span>Location</span>
                                </div>
                            </button>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="flex items-center gap-4" style="opacity: 0; transform: scale(0) translateZ(0px);">
                                <button class="group relative cursor-pointer outline-none" type="button"><i
                                        class="flex h-5 w-5 -rotate-90 items-center justify-center transition"><svg
                                            class="overflow-visible" width="100%" height="100%" viewBox="0 0 20 20">
                                            <circle class="stroke-light-border dark:stroke-dark-border" cx="50%" cy="50%"
                                                fill="none" stroke-width="2" r="9"></circle>
                                            <circle class="transition-colors stroke-main-accent" cx="50%" cy="50%"
                                                fill="none" stroke-width="2" r="9" stroke-linecap="round"
                                                style="stroke-dashoffset: 56.5487; stroke-dasharray: 56.5487;"></circle>
                                        </svg></i><span
                                        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%]
                                                                                                                                                                                                           scale-50 text-xs opacity-0">280</span>
                                    <div
                                        class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs
                                                                                                                                                                                                         text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible 
                                                                                                                                                                                                             group-focus-visible:opacity-100 translate-y-3">
                                        <span>280
                                            characters
                                            remaining</span>
                                    </div>
                                </button><i class="hidden h-8 w-[1px] bg-[#B9CAD3] dark:bg-[#3E4144] xs:block"></i><button
                                    class="custom-button main-tab group relative hidden rounded-full border border-light-line-reply p-[1px] text-main-accent dark:border-light-secondary xs:block"
                                    type="button" disabled=""><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                        class="h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">
                                        </path>
                                    </svg>
                                    <div
                                        class="invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs
                                                                                                                                                                                                         text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] dark:bg-[#495A69] group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible 
                                                                                                                                                                                                             group-focus-visible:opacity-100 translate-y-3">
                                        <span>Add</span>
                                    </div>
                                </button>
                            </div>
                            <UiButton type="submit" disabled class="my-button">{{ $t('buttons.post') }}</UiButton>
                        </div>
                    </div>
                </div>
            </label>
        </form>
    </div>
</template>