<script setup>
import { ref } from 'vue'

const selectedCategory = ref('all')

const categories = [
  { id: 'all', label: '全部商品', icon: 'check_circle' },
  { id: 'energy', label: '活力體力', icon: 'bolt' },
  { id: 'digest', label: '消化順暢', icon: 'spa' },
  { id: 'sleep', label: '好眠對策', icon: 'bedtime' },
  { id: 'care', label: '關鍵保養', icon: 'health_and_safety' },
]

const products = [
  {
    id: 1,
    name: '大麥苗香蕉 晚安特調',
    description: '獨家助眠配方，添加色胺酸幫助入睡。濃郁香蕉香氣，溫暖您的每一個夜晚。',
    price: 720,
    originalPrice: 880,
    image: '/images/product/product2.png',
    tags: ['助眠', '高纖'],
    badge: '熱銷 TOP 1',
    category: 'sleep'
  },
  {
    id: 2,
    name: '番茄覆盆莓 青春特調',
    description: '富含茄紅素與抗氧化成分，維持青春活力，適合注重保養的您。',
    price: 720,
    originalPrice: 880,
    image: '/images/product/product1.png',
    tags: ['抗氧化', '活力'],
    badge: '醫師推薦',
    category: 'care'
  }
]

const filteredProducts = () => {
  if (selectedCategory.value === 'all') return products
  return products.filter(p => p.category === selectedCategory.value)
}

const nutritionInfo = {
  calories: '112 kcal',
  protein: '5.2 g',
  fat: '1.8 g',
  carbs: '18.5 g',
  fiber: '4.8 g',
  sodium: '15 mg'
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="w-full flex justify-center bg-[#f3efe7] py-6 md:py-10">
      <div class="w-full max-w-[1280px] px-4 md:px-10">
        <div
          class="relative w-full rounded-2xl overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center bg-cover bg-center"
          style="background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%), url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&h=600&fit=crop');"
        >
          <div class="relative z-10 p-8 md:p-16 max-w-2xl flex flex-col gap-6">
            <span class="inline-block px-4 py-1 bg-[#eea62b] text-[#1b160d] font-bold rounded-full w-fit text-sm md:text-base">
              醫師推薦 • 無添加 • 植萃機能
            </span>
            <h2 class="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2]">
              專為熟齡設計的<br />全食物營養
            </h2>
            <p class="text-gray-100 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
              找回生活的活力與美味。我們嚴選天然食材，為50+族群打造好吸收、無負擔的營養補給。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Category Filters -->
    <section class="w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8 md:py-12">
      <div class="flex flex-col gap-6">
        <h3 class="text-2xl md:text-3xl font-bold text-[#1b160d] border-l-8 border-[#eea62b] pl-4">
          選擇您的健康需求
        </h3>
        <div class="flex flex-wrap gap-4">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="selectedCategory = cat.id"
            :class="[
              'group flex items-center gap-3 px-6 py-4 rounded-xl transition-all',
              selectedCategory === cat.id
                ? 'bg-[#eea62b] text-[#1b160d] shadow-md ring-2 ring-[#eea62b] ring-offset-2'
                : 'bg-[#f3efe7] text-[#1b160d] hover:bg-[#e7dfcf]'
            ]"
          >
            <span class="material-symbols-outlined text-2xl" :class="selectedCategory === cat.id ? 'fill-1' : 'group-hover:text-[#eea62b]'">
              {{ cat.icon }}
            </span>
            <span class="text-lg font-bold">{{ cat.label }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Product Grid -->
    <section class="w-full max-w-[1280px] mx-auto px-4 md:px-10 pb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <article
          v-for="product in filteredProducts()"
          :key="product.id"
          class="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
        >
          <div class="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#f3efe7] to-[#e7dfcf] flex items-center justify-center p-8">
            <div v-if="product.badge" class="absolute top-4 left-4 z-10">
              <span class="bg-[#eea62b] text-[#1b160d] text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                {{ product.badge }}
              </span>
            </div>
            <img
              :src="product.image"
              :alt="product.name"
              class="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div class="flex flex-col flex-1 p-6 gap-4">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in product.tags"
                :key="tag"
                class="text-xs font-medium bg-[#eea62b]/10 text-[#d48e15] px-2 py-1 rounded"
              >
                {{ tag }}
              </span>
            </div>
            <h4 class="text-2xl font-bold text-[#1b160d] leading-tight">{{ product.name }}</h4>
            <p class="text-[#5c4d3c] text-base leading-relaxed line-clamp-2">
              {{ product.description }}
            </p>
            <div class="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-4">
              <div class="flex items-end justify-between">
                <span class="text-3xl font-bold text-[#eea62b]">NT$ {{ product.price }}</span>
                <span v-if="product.originalPrice" class="text-sm text-gray-500 line-through mb-1">
                  NT$ {{ product.originalPrice }}
                </span>
              </div>
              <button class="w-full bg-[#f3efe7] hover:bg-[#eea62b] text-[#1b160d] font-bold text-lg py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                <span class="material-symbols-outlined">shopping_cart</span>
                加入購物車
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Product Detail Highlight -->
    <section class="w-full bg-[#f3efe7] py-12 md:py-20">
      <div class="max-w-[1280px] mx-auto px-4 md:px-10">
        <div class="flex flex-col lg:flex-row gap-12 items-start">
          <!-- Left: Info -->
          <div class="flex-1 flex flex-col gap-8">
            <div>
              <span class="text-[#eea62b] font-bold text-xl mb-2 block">明星商品解析</span>
              <h3 class="text-3xl md:text-4xl font-bold text-[#1b160d] mb-4">為什麼選擇 food+ 機能飲品？</h3>
              <p class="text-lg text-[#5c4d3c] leading-relaxed">
                我們深知隨著年齡增長，消化與代謝功能會逐漸改變。因此，food+ 食之味研發團隊特別調配了好吸收、高營養密度的全穀飲。
              </p>
            </div>
            <!-- Icons -->
            <div class="grid grid-cols-2 gap-6">
              <div class="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div class="bg-[#eea62b]/20 p-3 rounded-full text-[#eea62b]">
                  <span class="material-symbols-outlined text-3xl">fiber_manual_record</span>
                </div>
                <div>
                  <h5 class="font-bold text-lg text-[#1b160d]">膳食纖維豐富</h5>
                  <p class="text-sm text-[#5c4d3c] mt-1">每包含有 3 顆高麗菜的纖維量</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div class="bg-[#eea62b]/20 p-3 rounded-full text-[#eea62b]">
                  <span class="material-symbols-outlined text-3xl">no_food</span>
                </div>
                <div>
                  <h5 class="font-bold text-lg text-[#1b160d]">無添加糖</h5>
                  <p class="text-sm text-[#5c4d3c] mt-1">健康無負擔，適合控糖族群</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div class="bg-[#eea62b]/20 p-3 rounded-full text-[#eea62b]">
                  <span class="material-symbols-outlined text-3xl">local_dining</span>
                </div>
                <div>
                  <h5 class="font-bold text-lg text-[#1b160d]">容易消化</h5>
                  <p class="text-sm text-[#5c4d3c] mt-1">細緻粉末，快速沖泡好吸收</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div class="bg-[#eea62b]/20 p-3 rounded-full text-[#eea62b]">
                  <span class="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <div>
                  <h5 class="font-bold text-lg text-[#1b160d]">SGS 檢驗合格</h5>
                  <p class="text-sm text-[#5c4d3c] mt-1">470項農藥檢驗零檢出</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Right: Nutrition Table -->
          <div class="w-full lg:w-[450px] bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
            <h4 class="text-xl font-bold text-[#1b160d] mb-6 flex items-center gap-2">
              <span class="material-symbols-outlined text-[#eea62b]">analytics</span>
              營養標示 (每份 30g)
            </h4>
            <div class="flex flex-col divide-y divide-gray-200">
              <div class="flex justify-between py-3 text-lg">
                <span class="text-[#5c4d3c]">熱量</span>
                <span class="font-bold text-[#1b160d]">{{ nutritionInfo.calories }}</span>
              </div>
              <div class="flex justify-between py-3 text-lg">
                <span class="text-[#5c4d3c]">蛋白質</span>
                <span class="font-bold text-[#1b160d]">{{ nutritionInfo.protein }}</span>
              </div>
              <div class="flex justify-between py-3 text-lg">
                <span class="text-[#5c4d3c]">脂肪</span>
                <span class="font-bold text-[#1b160d]">{{ nutritionInfo.fat }}</span>
              </div>
              <div class="flex justify-between py-3 text-lg">
                <span class="text-[#5c4d3c]">碳水化合物</span>
                <span class="font-bold text-[#1b160d]">{{ nutritionInfo.carbs }}</span>
              </div>
              <div class="flex justify-between py-3 text-lg">
                <span class="text-[#5c4d3c]">膳食纖維</span>
                <span class="font-bold text-[#eea62b]">{{ nutritionInfo.fiber }}</span>
              </div>
              <div class="flex justify-between py-3 text-lg">
                <span class="text-[#5c4d3c]">鈉</span>
                <span class="font-bold text-[#1b160d]">{{ nutritionInfo.sodium }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
