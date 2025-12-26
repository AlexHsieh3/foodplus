<script setup>
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <nav class="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🍽️</span>
          <h1 class="text-xl font-bold text-orange-600">FoodPlus</h1>
        </div>
        <div class="flex gap-4">
          <a href="#" class="text-gray-600 hover:text-orange-600 transition-colors">首頁</a>
          <a href="#" class="text-gray-600 hover:text-orange-600 transition-colors">關於</a>
          <a href="#" class="text-gray-600 hover:text-orange-600 transition-colors">聯絡我們</a>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <main class="mx-auto max-w-7xl px-4 py-16">
      <div class="text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          歡迎來到 FoodPlus
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          探索美味，享受生活
        </p>
        <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl">
          開始探索
        </button>
      </div>

      <!-- Features -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">🥗</div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">健康飲食</h3>
          <p class="text-gray-600">精選營養均衡的美味餐點</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">🚀</div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">快速送達</h3>
          <p class="text-gray-600">新鮮食材快速送到您手中</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">💰</div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">優惠價格</h3>
          <p class="text-gray-600">每日特惠讓您吃得划算</p>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8 mt-16">
      <div class="mx-auto max-w-7xl px-4 text-center">
        <p>&copy; 2025 FoodPlus. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
</style>
