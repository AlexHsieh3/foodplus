<script setup>
</script>

<template>
  <nav class="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-gray-200/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <a href="#" class="flex items-center gap-2">
            <img src="/images/logo/logo.png" alt="food+" class="h-10 w-auto" />
          </a>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-gray-600 hover:text-primary transition-colors font-medium">首頁</a>
          <a href="#products" class="text-gray-600 hover:text-primary transition-colors font-medium">產品介紹</a>
          <a href="#about" class="text-gray-600 hover:text-primary transition-colors font-medium">關於我們</a>
          <a href="#blog" class="text-gray-600 hover:text-primary transition-colors font-medium">營養小學堂</a>
        </div>

        <!-- CTA Button -->
        <div class="flex items-center space-x-4">
          <button class="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary/30">
            立即選購
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
