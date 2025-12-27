<script setup>
const productImages = {
  night: '/images/product/product2.png',  // 大麥苗香蕉 晚安特調
  youth: '/images/product/product1.png'   // 番茄覆盆子 青春特調
}
</script>

<template>
  <section class="relative w-full py-8 lg:py-12 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-2xl overflow-hidden bg-white shadow-sm border border-[#f3efe7]">
      <!-- Hero Content -->
      <div class="flex flex-col gap-6 p-8 lg:p-16 order-2 lg:order-1">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eea62b]/10 w-fit">
          <span class="material-symbols-outlined text-[#eea62b] text-sm">verified</span>
          <span class="text-[#1b160d] text-sm font-bold">專為 50+ 熟齡族群設計</span>
        </div>

        <!-- Heading -->
        <h2 class="text-[#1b160d] text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight">
          好眠養生，<br />
          <span class="text-[#eea62b] decoration-4 underline-offset-4">從一杯開始</span>
        </h2>

        <!-- Description -->
        <p class="text-[#5c4d3c] text-lg sm:text-xl font-normal leading-relaxed max-w-xl">
          專為熟齡設計的植萃全營養飲品，每一口都是對身體的溫柔呵護。拒絕吞嚥膠囊，回歸最自然的飲食方式。
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 mt-4">
          <button class="flex items-center justify-center h-14 px-8 bg-[#eea62b] text-[#1b160d] text-lg font-bold rounded-lg hover:bg-[#d48e15] transition-colors shadow-md">
            立即體驗好眠
            <span class="material-symbols-outlined ml-2">arrow_forward</span>
          </button>
          <button class="flex items-center justify-center h-14 px-8 bg-[#f3efe7] text-[#1b160d] text-lg font-bold rounded-lg hover:bg-[#ece4d5] transition-colors">
            了解全成分
          </button>
        </div>

        <!-- Social Proof -->
        <div class="flex items-center gap-6 mt-4 pt-6 border-t border-[#f3efe7]">
          <div class="flex -space-x-3">
            <div class="w-10 h-10 rounded-full border-2 border-white bg-[#eea62b]/20 flex items-center justify-center">
              <span class="material-symbols-outlined text-[#eea62b]">person</span>
            </div>
            <div class="w-10 h-10 rounded-full border-2 border-white bg-[#eea62b]/30 flex items-center justify-center">
              <span class="material-symbols-outlined text-[#eea62b]">person</span>
            </div>
            <div class="w-10 h-10 rounded-full border-2 border-white bg-[#eea62b]/40 flex items-center justify-center">
              <span class="material-symbols-outlined text-[#eea62b]">person</span>
            </div>
            <div class="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-gray-100 text-xs font-bold text-gray-600">+2k</div>
          </div>
          <p class="text-[#5c4d3c] text-base font-medium">超過 2,000 位家庭的安心選擇</p>
        </div>
      </div>

      <!-- Hero Image - Products -->
      <div class="relative h-[400px] lg:h-full min-h-[500px] bg-gradient-to-br from-[#f3efe7] to-[#e7dfcf] order-1 lg:order-2 flex items-center justify-center p-8">
        <div class="flex items-end justify-center gap-4 lg:gap-8">
          <div class="w-32 lg:w-48 transform hover:scale-105 transition-transform duration-500">
            <img
              :src="productImages.night"
              alt="大麥草香蕉 晚安特調"
              class="w-full h-auto drop-shadow-2xl"
            />
          </div>
          <div class="w-32 lg:w-48 transform hover:scale-105 transition-transform duration-500">
            <img
              :src="productImages.youth"
              alt="番茄覆盆莓 青春特調"
              class="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent lg:bg-gradient-to-l pointer-events-none"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
