<script setup>
import { ref } from 'vue'

const selectedCategory = ref('all')

const categories = [
  { id: 'all', label: '全部文章' },
  { id: 'sleep', label: '舒眠對策' },
  { id: 'nutrition', label: '營養小百科' },
  { id: 'recipe', label: '養生食譜' },
  { id: 'herbs', label: '植萃機能' },
]

const featuredArticle = {
  title: '提升睡眠品質：給長者的5個飲食建議',
  excerpt: '隨著年齡增長，睡眠模式也會改變。透過攝取富含鎂與色胺酸的天然食材，如香蕉、堅果與全穀類，能有效助您放鬆神經，夜夜好眠。',
  date: '2025.12.20',
  image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=500&fit=crop'
}

const articles = [
  {
    id: 1,
    title: '黃金南瓜濃湯：全食物的溫暖力量',
    excerpt: '南瓜富含β-胡蘿蔔素與膳食纖維，這道不加鮮奶油的清爽濃湯，保留了食材最原始的甜味，適合牙口不好的長輩食用。',
    category: 'recipe',
    categoryLabel: '養生食譜',
    readTime: '5 分鐘閱讀',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    title: '60歲後的關鍵營養：為何鎂對骨骼如此重要？',
    excerpt: '除了鈣質，鎂也是維持骨骼密度的關鍵礦物質。本文將介紹富含鎂的十大食物，以及如何透過日常飲食有效補充。',
    category: 'nutrition',
    categoryLabel: '營養小百科',
    readTime: '8 分鐘閱讀',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    title: '銀杏與記憶力：你需要知道的植萃真相',
    excerpt: '植物萃取一直是東方養生的智慧。我們探討銀杏葉萃取物在現代科學研究中的實證功效，以及如何安全食用。',
    category: 'herbs',
    categoryLabel: '植萃機能',
    readTime: '6 分鐘閱讀',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
  }
]

const email = ref('')
</script>

<template>
  <div>
    <!-- Breadcrumbs -->
    <div class="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-6">
      <nav class="flex flex-wrap items-center gap-2 text-base text-[#5c4d3c]">
        <router-link to="/" class="hover:text-[#eea62b] hover:underline">首頁</router-link>
        <span class="material-symbols-outlined text-sm">chevron_right</span>
        <span class="font-medium text-[#1b160d]">健康專欄</span>
      </nav>
    </div>

    <!-- Page Heading -->
    <div class="w-full max-w-[1200px] mx-auto px-4 md:px-8 pb-6">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#e7dfcf] pb-6">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-black text-[#1b160d] mb-4 tracking-tight">健康專欄</h1>
          <p class="text-lg md:text-xl text-[#5c4d3c] leading-relaxed">
            專為銀髮族打造的營養知識與養生秘訣。我們深信全食物的力量，透過專業營養師的建議，守護您無添加的健康生活。
          </p>
        </div>
      </div>
    </div>

    <!-- Categories -->
    <div class="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-4">
      <div class="flex flex-wrap gap-3">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectedCategory = cat.id"
          :class="[
            'px-6 py-2.5 rounded-full text-base font-medium transition-colors',
            selectedCategory === cat.id
              ? 'bg-[#eea62b] text-[#1b160d] font-bold shadow-md'
              : 'bg-white border border-[#e7dfcf] text-[#5c4d3c] hover:border-[#eea62b] hover:text-[#eea62b]'
          ]"
        >
          {{ cat.label }}
        </button>
      </div>
    </div>

    <!-- Featured Article -->
    <section class="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-8">
      <div class="w-full bg-white rounded-2xl shadow-sm border border-[#e7dfcf] overflow-hidden group hover:border-[#eea62b]/50 transition-colors">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:w-3/5 relative h-64 lg:h-auto min-h-[400px]">
            <div
              class="absolute inset-0 bg-cover bg-center"
              :style="{ backgroundImage: `url('${featuredArticle.image}')` }"
            ></div>
          </div>
          <div class="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center gap-6">
            <div class="flex items-center gap-2">
              <span class="bg-[#eea62b]/20 text-[#1b160d] text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider">本週精選</span>
              <span class="text-[#5c4d3c] text-sm font-medium">{{ featuredArticle.date }}</span>
            </div>
            <h2 class="text-3xl lg:text-4xl font-black text-[#1b160d] leading-tight">
              {{ featuredArticle.title }}
            </h2>
            <p class="text-lg text-[#5c4d3c] leading-relaxed line-clamp-3">
              {{ featuredArticle.excerpt }}
            </p>
            <button class="flex items-center justify-center gap-2 bg-[#eea62b] hover:bg-[#d48e15] text-[#1b160d] w-fit px-8 py-3 rounded-lg text-lg font-bold transition-transform active:scale-95 mt-2">
              <span>閱讀全文</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Grid -->
    <section class="w-full max-w-[1200px] mx-auto px-4 md:px-8 pb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="article in articles"
          :key="article.id"
          class="flex flex-col bg-white rounded-xl border border-[#e7dfcf] overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 h-full"
        >
          <div
            class="h-60 w-full bg-cover bg-center"
            :style="{ backgroundImage: `url('${article.image}')` }"
          ></div>
          <div class="p-6 flex flex-col flex-1 gap-4">
            <div class="flex justify-between items-center">
              <span class="text-[#eea62b] font-bold text-sm tracking-wide">{{ article.categoryLabel }}</span>
              <span class="text-[#5c4d3c] text-sm">{{ article.readTime }}</span>
            </div>
            <h3 class="text-2xl font-bold text-[#1b160d] leading-snug">
              {{ article.title }}
            </h3>
            <p class="text-[#5c4d3c] text-base leading-relaxed line-clamp-3 mb-4">
              {{ article.excerpt }}
            </p>
            <a href="#" class="mt-auto flex items-center gap-1 text-[#eea62b] font-bold text-lg hover:underline decoration-2 underline-offset-4">
              閱讀更多 <span class="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
        </article>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="w-full max-w-[1200px] mx-auto px-4 md:px-8 pb-12">
      <div class="bg-[#fcf5e6] rounded-2xl p-8 md:p-12 border border-[#eea62b]/20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="flex-1 space-y-4">
          <h3 class="text-3xl font-black text-[#1b160d]">訂閱每週健康電子報</h3>
          <p class="text-lg text-[#5c4d3c]">
            加入我們，每週接收最新的長者營養知識、獨家食譜與優惠資訊。我們承諾絕不發送垃圾郵件。
          </p>
        </div>
        <div class="w-full md:w-auto flex flex-col sm:flex-row gap-3 min-w-[320px]">
          <input
            v-model="email"
            type="email"
            placeholder="請輸入您的電子郵件"
            class="flex-1 px-5 py-3 rounded-lg border border-[#e7dfcf] focus:ring-2 focus:ring-[#eea62b] focus:border-transparent text-lg bg-white"
          />
          <button class="bg-[#eea62b] hover:bg-[#d48e15] text-[#1b160d] font-bold px-8 py-3 rounded-lg text-lg transition-colors whitespace-nowrap">
            免費訂閱
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
