<template>
  <fieldset class="grid grid-cols-2 gap-4">
    <legend class="sr-only">Delivery</legend>

    <div>
      <input type="radio" name="DeliveryOption" value="DeliveryStandard" id="DeliveryStandard"
        class="peer hidden [&:checked_+_label_svg]:block" checked />

      <label for="DeliveryStandard"
        class="block cursor-pointer rounded-lg border border-main-accent p-4 text-sm font-medium shadow-sm hover:border-main-accent-200 peer-checked:border-main-accent-500 peer-checked:ring-1 peer-checked:ring-main-accent-500">
        <div class="flex items-center justify-between">
          <p class="text-main-accent-primary">Standard</p>

          <svg class="hidden h-5 w-5 text-main-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <p class="mt-1 text-main-accent">Free</p>
      </label>
    </div>

    <div>
      <input type="radio" name="DeliveryOption" value="DeliveryPriority" id="DeliveryPriority"
        class="peer hidden [&:checked_+_label_svg]:block" />

      <label for="DeliveryPriority"
        class="block cursor-pointer rounded-lg border border-main-accent p-4 text-sm font-medium shadow-sm hover:border-main-accent-200 peer-checked:border-main-accent-500 peer-checked:ring-1 peer-checked:ring-main-accent-500">
        <div class="flex items-center justify-between">
          <p class="text-main-accent-primary">Mention+</p>

          <svg class="hidden h-5 w-5 text-main-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <p class="mt-1 text-main-accent">⊜9.99</p>
      </label>
    </div>

    <div>
      <input type="radio" name="DeliveryOption" value="DeliveryPriority" id="DeliveryPriority"
        class="peer hidden [&:checked_+_label_svg]:block" />

      <label for="DeliveryPriority"
        class="block cursor-pointer rounded-lg border border-main-accent p-4 text-sm font-medium shadow-sm hover:border-main-accent-200 peer-checked:border-main-accent-500 peer-checked:ring-1 peer-checked:ring-main-accent-500">
        <div class="flex items-center justify-between">
          <p class="text-main-accent-primary">Kaana Pass</p>

          <svg class="hidden h-5 w-5 text-main-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>
        </div>

        <p class="mt-1 text-main-accent">⊜1.99/⊜16.99</p>
      </label>
    </div>
  </fieldset>
</template>
