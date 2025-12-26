<script setup>
const products = [
  {
    id: 'night',
    badge: '晚安配方',
    badgeColor: 'bg-primary/10 text-primary',
    name: '大麥草香蕉',
    subtitle: '晚安特調',
    subtitleColor: 'text-primary',
    description: '結合大麥草的豐富營養與天然香蕉，添加羅布麻萃取物。幫助增加 GABA 結合、穩定情緒、維持健康的血清素水平，讓你享有優質睡眠。',
    features: [
      { icon: 'bedtime', title: '好眠支持', desc: '天然 GABA 支援' },
      { icon: 'psychology', title: '情緒平衡', desc: '血清素調節' }
    ],
    buttonColor: 'bg-primary hover:bg-primary-dark',
    price: 'NT$ 720',
    image: '/images/product/product2.png',
    bgGradient: 'from-green-50 to-emerald-100',
    accentColor: 'primary'
  },
  {
    id: 'youth',
    badge: '青春配方',
    badgeColor: 'bg-secondary/10 text-secondary',
    name: '番茄覆盆莓',
    subtitle: '青春特調',
    subtitleColor: 'text-secondary',
    description: '富含抗氧化成分的配方，結合番茄、覆盆莓與花椰菜萃取物，支持 NAD+ 形成，優化代謝過程，讓你由內而外散發青春光采與活力。',
    features: [
      { icon: 'auto_graph', title: 'NAD+ 提升', desc: '細胞能量' },
      { icon: 'face', title: '抗氧化', desc: '代謝支援' }
    ],
    buttonColor: 'bg-secondary hover:bg-orange-600',
    price: 'NT$ 720',
    image: '/images/product/product1.png',
    bgGradient: 'from-orange-50 to-red-50',
    accentColor: 'secondary'
  }
]
</script>

<template>
  <section id="products" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="font-display text-4xl font-bold text-gray-900 mb-4">推薦產品</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          選擇適合你日常節奏的配方，無論是需要恢復性睡眠還是青春活力。
        </p>
      </div>

      <!-- Product Cards -->
      <!-- Night Blend -->
      <div class="bg-white rounded-3xl overflow-hidden shadow-soft mb-16 border border-gray-100">
        <div class="grid md:grid-cols-2 items-center">
          <!-- Content -->
          <div class="p-8 md:p-12 lg:p-16 order-2 md:order-1">
            <div :class="[products[0].badgeColor, 'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4']">
              {{ products[0].badge }}
            </div>
            <h3 class="font-display text-3xl font-bold text-gray-900 mb-2">{{ products[0].name }}</h3>
            <p :class="[products[0].subtitleColor, 'text-xl font-medium mb-6']">{{ products[0].subtitle }}</p>
            <p class="text-gray-600 mb-6 leading-relaxed">{{ products[0].description }}</p>

            <!-- Features -->
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div v-for="feature in products[0].features" :key="feature.title" class="flex items-start gap-3">
                <span class="material-icons-round text-primary">{{ feature.icon }}</span>
                <div>
                  <h4 class="font-bold text-gray-900 text-sm">{{ feature.title }}</h4>
                  <p class="text-xs text-gray-500">{{ feature.desc }}</p>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="flex items-center gap-4">
              <button :class="[products[0].buttonColor, 'text-white px-8 py-3 rounded-xl font-medium transition-colors']">
                立即選購
              </button>
              <span class="text-gray-900 font-bold text-lg">{{ products[0].price }}</span>
            </div>
          </div>

          <!-- Image -->
          <div :class="['bg-gradient-to-br', products[0].bgGradient, 'h-full min-h-[500px] flex items-center justify-center p-12 order-1 md:order-2 relative overflow-hidden group']">
            <img
              :src="products[0].image"
              :alt="products[0].name"
              class="w-72 md:w-96 drop-shadow-2xl relative z-10 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 ease-out"
            />
          </div>
        </div>
      </div>

      <!-- Youth Blend -->
      <div class="bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100">
        <div class="grid md:grid-cols-2 items-center">
          <!-- Image -->
          <div :class="['bg-gradient-to-br', products[1].bgGradient, 'h-full min-h-[500px] flex items-center justify-center p-12 relative overflow-hidden group']">
            <img
              :src="products[1].image"
              :alt="products[1].name"
              class="w-72 md:w-96 drop-shadow-2xl relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-out"
            />
          </div>

          <!-- Content -->
          <div class="p-8 md:p-12 lg:p-16">
            <div :class="[products[1].badgeColor, 'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4']">
              {{ products[1].badge }}
            </div>
            <h3 class="font-display text-3xl font-bold text-gray-900 mb-2">{{ products[1].name }}</h3>
            <p :class="[products[1].subtitleColor, 'text-xl font-medium mb-6']">{{ products[1].subtitle }}</p>
            <p class="text-gray-600 mb-6 leading-relaxed">{{ products[1].description }}</p>

            <!-- Features -->
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div v-for="feature in products[1].features" :key="feature.title" class="flex items-start gap-3">
                <span class="material-icons-round text-secondary">{{ feature.icon }}</span>
                <div>
                  <h4 class="font-bold text-gray-900 text-sm">{{ feature.title }}</h4>
                  <p class="text-xs text-gray-500">{{ feature.desc }}</p>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="flex items-center gap-4">
              <button :class="[products[1].buttonColor, 'text-white px-8 py-3 rounded-xl font-medium transition-colors']">
                立即選購
              </button>
              <span class="text-gray-900 font-bold text-lg">{{ products[1].price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
