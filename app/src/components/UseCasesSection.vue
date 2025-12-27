<script setup>
const useCases = [
  {
    time: 'MORNING',
    icon: 'wb_sunny',
    title: '晨間活力',
    description: '一杯溫熱的營養，喚醒沈睡的身體，為新的一天注入滿滿元氣。',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&h=450&fit=crop'
  },
  {
    time: 'AFTERNOON',
    icon: 'local_cafe',
    title: '午後補給',
    description: '閱讀、休閒時的最佳良伴，補充體力，讓午後時光更充實。',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=450&fit=crop'
  },
  {
    time: 'NIGHT',
    icon: 'nights_stay',
    title: '睡前安神',
    description: '溫潤口感搭配植萃配方，幫助放鬆身心，輕鬆擁抱深層好眠。',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=450&fit=crop'
  }
]
</script>

<template>
  <section class="py-16 lg:py-24 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-[#1b160d] text-3xl sm:text-4xl font-black mb-4">全天候的營養守護</h2>
      <p class="text-[#5c4d3c] text-xl">無論何時，food+ 都是您最貼心的健康夥伴</p>
    </div>

    <!-- Use Cases Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="useCase in useCases"
        :key="useCase.title"
        class="group rounded-2xl overflow-hidden cursor-pointer"
      >
        <!-- Image -->
        <div
          class="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          :style="{ backgroundImage: `url('${useCase.image}')` }"
        ></div>

        <!-- Content Card -->
        <div class="p-6 bg-white border border-t-0 border-[#f3efe7] rounded-b-2xl shadow-sm">
          <div class="flex items-center gap-2 mb-2 text-[#eea62b]">
            <span class="material-symbols-outlined">{{ useCase.icon }}</span>
            <span class="font-bold text-sm tracking-wide">{{ useCase.time }}</span>
          </div>
          <h3 class="text-2xl font-bold text-[#1b160d] mb-2">{{ useCase.title }}</h3>
          <p class="text-[#5c4d3c] text-lg">{{ useCase.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
