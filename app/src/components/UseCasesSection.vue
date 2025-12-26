<script setup>
const useCases = [
  {
    title: '早餐',
    description: '忙碌的早晨，一杯補足營養',
    image: 'https://static.wixstatic.com/media/11062b_3f58e4966e1a4863ac1b3d520112e2ff~mv2.jpeg/v1/fill/w_277,h_370,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_3f58e4966e1a4863ac1b3d520112e2ff~mv2.jpeg'
  },
  {
    title: '營養補充',
    description: '全家人的健康守護',
    image: 'https://static.wixstatic.com/media/11062b_7abd3c294fde454592a4d8f605b187d7~mv2.jpeg/v1/fill/w_277,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_7abd3c294fde454592a4d8f605b187d7~mv2.jpeg'
  },
  {
    title: '運動補給',
    description: '運動前後的最佳夥伴',
    image: 'https://static.wixstatic.com/media/11062b_13f6beb054814e65a8c87056ea331e70~mv2.jpg/v1/fill/w_277,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_13f6beb054814e65a8c87056ea331e70~mv2.jpg'
  }
]
</script>

<template>
  <section class="py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="font-display text-3xl font-bold text-gray-900 mb-4">適用情境</h2>
        <p class="text-gray-600">隨時隨地，輕鬆補充營養</p>
      </div>

      <!-- Use Cases Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="useCase in useCases"
          :key="useCase.title"
          class="group relative overflow-hidden rounded-2xl"
        >
          <!-- Image -->
          <div class="aspect-[3/4] overflow-hidden">
            <img
              :src="useCase.image"
              :alt="useCase.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          <!-- Content -->
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 class="font-display text-2xl font-bold mb-2">{{ useCase.title }}</h3>
            <p class="text-white/80">{{ useCase.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
