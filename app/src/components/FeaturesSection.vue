<script setup>
const features = [
  {
    icon: 'eco',
    title: '全食物營養',
    description: '保留食材完整精華，不僅是萃取物，而是完整的食物纖維與微量元素，營養不流失，腸道好吸收。'
  },
  {
    icon: 'health_and_safety',
    title: '無添加保證',
    description: '您的健康我們嚴格把關。全系列產品無色素、無香精、無防腐劑，通過高規格檢驗，安心無負擔。'
  },
  {
    icon: 'bedtime',
    title: '植萃助眠配方',
    description: '添加酸棗仁、芝麻素等天然草本植萃，不含藥性，溫和幫助放鬆身心，提升夜間睡眠品質。'
  }
]
</script>

<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-[#1b160d] text-3xl sm:text-4xl font-black mb-4">三大核心價值，守護您的健康</h2>
      <p class="text-[#5c4d3c] text-lg sm:text-xl max-w-2xl mx-auto">
        我們堅持使用天然食材，拒絕化學添加，只給您最純粹的營養。
      </p>
    </div>

    <!-- Feature Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="flex flex-col gap-4 p-8 rounded-xl border border-[#e7dfcf] bg-white hover:shadow-lg transition-shadow duration-300"
      >
        <div class="w-14 h-14 rounded-full bg-[#fcfaf8] flex items-center justify-center text-[#eea62b] mb-2 border border-[#e7dfcf]">
          <span class="material-symbols-outlined text-4xl">{{ feature.icon }}</span>
        </div>
        <h3 class="text-[#1b160d] text-2xl font-bold">{{ feature.title }}</h3>
        <p class="text-[#5c4d3c] text-lg leading-relaxed">
          {{ feature.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
