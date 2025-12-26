<script setup>
const features = [
  {
    icon: 'nutrition',
    iconColor: 'text-primary',
    bgColor: 'bg-green-100',
    title: '全食物營養',
    description: '採用全食物、全營養概念，保留完整營養，滿足一餐的營養需求'
  },
  {
    icon: 'block',
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-100',
    title: '無添加',
    description: '減法哲學，不添加人工色素、甜味劑、防腐劑、及香料/香精'
  },
  {
    icon: 'spa',
    iconColor: 'text-secondary',
    bgColor: 'bg-orange-100',
    title: '植萃機能',
    description: '添加植物萃取，協同營養 1+1>2，發揮營養素最大價值'
  }
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl font-bold text-gray-900 mb-4">核心價值</h2>
        <p class="text-gray-600">為什麼選擇我們？</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="text-center p-8 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors group"
        >
          <div :class="[feature.bgColor, 'w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform']">
            <span :class="[feature.iconColor, 'material-icons-round text-3xl']">{{ feature.icon }}</span>
          </div>
          <h3 class="font-bold text-xl text-gray-900 mb-3">{{ feature.title }}</h3>
          <p class="text-gray-500 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
