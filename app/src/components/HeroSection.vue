<script setup>
const productImages = {
  night: '/images/product/product2.png',  // 大麥苗香蕉 晚安特調
  youth: '/images/product/product1.png'   // 番茄覆盆子 青春特調
}
</script>

<template>
  <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left">
          <!-- Badge -->
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-primary text-sm font-semibold mb-6">
            <span class="material-icons-round text-sm mr-1">eco</span> 機能食品設計｜完全營養食
          </div>

          <!-- Heading -->
          <h1 class="font-display text-5xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900">
            Drink to <br />
            <span class="gradient-text">Your Health</span>
          </h1>

          <!-- Description -->
          <p class="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            由營養師打造的 food+ 食之味，讓營養 × 美味 = 剛剛好的日常照顧。採用植物性食材與植萃，結合「完全營養食」概念，讓一餐輕鬆補足關鍵營養。
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#products" class="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:opacity-90 transition-opacity text-center">
              了解更多
            </a>
            <a href="#about" class="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <span class="material-icons-round">play_circle</span> 品牌故事
            </a>
          </div>

          <!-- Features List -->
          <div class="mt-12 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm font-medium">
            <div class="flex items-center gap-2">
              <span class="material-icons-round text-primary">check_circle</span> 全食物營養
            </div>
            <div class="flex items-center gap-2">
              <span class="material-icons-round text-primary">check_circle</span> 無添加
            </div>
            <div class="flex items-center gap-2">
              <span class="material-icons-round text-primary">check_circle</span> 植萃機能
            </div>
          </div>
        </div>

        <!-- Right Content - Product Images -->
        <div class="relative h-[400px] lg:h-[600px] flex justify-center items-center">
          <!-- Background Blurs -->
          <div class="absolute w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
          <div class="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-secondary/10 rounded-full blur-[80px] -z-10 bottom-0 right-0"></div>

          <!-- Product Images - 並排顯示 -->
          <div class="flex items-end justify-center gap-4 lg:gap-8">
            <div class="w-40 lg:w-64 float-animation">
              <img
                :src="productImages.night"
                alt="大麥草香蕉 晚安特調"
                class="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 filter contrast-110"
              />
            </div>
            <div class="w-40 lg:w-64 float-animation-delayed">
              <img
                :src="productImages.youth"
                alt="番茄覆盆莓 青春特調"
                class="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 filter contrast-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
