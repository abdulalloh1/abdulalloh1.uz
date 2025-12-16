<script
  setup
  lang="ts"
>
const selectedLang = ref('ru');
</script>

<template>
  <div class="sticky left-0 top-0 h-screen w-full flex flex-col items-center justify-between text-white rounded-r-3xl p-5 gap-4 bg-black">
    a
    <div class="h-10 flex items-center">
      <SelectButton
        v-model="selectedLang"
        :options="['uz', 'ru', 'en']"
      />
    </div>
    
    <div class="flex flex-col items-center gap-4">
      <img
        src="https://preview.colorlib.com/theme/jackson/images/about.jpg.webp"
        alt=""
        class="w-40 aspect-square rounded-full object-cover"
      >
      
      <h2 class="iceland-regular uppercase text-3xl text-center leading-7">Jasurbek Abdukhalikov</h2>
    </div>
    
    <div class="h-10 flex items-center">
      Copyright @ {{ new Date().getFullYear() }}
    </div>
  </div>
</template>