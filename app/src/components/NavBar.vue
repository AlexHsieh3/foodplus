<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const navItems = [
  { name: '首頁', to: '/' },
  { name: '產品介紹', to: '/products' },
  { name: '健康專欄', to: '/blog' },
  { name: '關於我們', to: '/about' },
  { name: '聯絡我們', to: '/contact' },
]

const increaseFontSize = () => {
  const html = document.documentElement
  const currentSize = parseFloat(getComputedStyle(html).fontSize)
  html.style.fontSize = `${currentSize + 2}px`
}

const isActive = (path) => {
  return route.path === path
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-[#fcfaf8]/95 backdrop-blur-sm border-b border-[#e7dfcf]">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3">
          <img
            src="/images/logo/logo.png"
            alt="food+ logo"
            class="h-12 w-auto"
          />
          <div>
            <h1 class="text-[#1b160d] text-2xl font-black tracking-tighter leading-none">food+</h1>
            <span class="text-[#5c4d3c] text-sm font-bold tracking-widest">食之味</span>
          </div>
        </router-link>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-6">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.to"
            :class="[
              'text-lg font-medium transition-colors',
              isActive(item.to)
                ? 'text-[#eea62b] font-bold'
                : 'text-[#1b160d] hover:text-[#eea62b]'
            ]"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-3">
          <button
            class="hidden sm:flex items-center justify-center h-12 px-6 bg-[#f3efe7] text-[#1b160d] text-base font-bold rounded-lg hover:bg-[#e7dfcf] transition-colors"
            @click="increaseFontSize"
          >
            <span class="material-symbols-outlined mr-2">text_increase</span>
            <span class="truncate">字體放大</span>
          </button>
          <router-link
            to="/products"
            class="flex items-center justify-center h-12 px-6 bg-[#eea62b] text-[#1b160d] text-base font-bold rounded-lg hover:bg-[#d48e15] transition-colors shadow-sm"
          >
            <span class="truncate">立即選購</span>
          </router-link>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden flex items-center justify-center w-12 h-12 text-[#1b160d]"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span class="material-symbols-outlined text-3xl">
              {{ mobileMenuOpen ? 'close' : 'menu' }}
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Nav -->
      <nav
        v-if="mobileMenuOpen"
        class="lg:hidden py-4 border-t border-[#e7dfcf]"
      >
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.to"
          :class="[
            'block py-3 text-lg font-medium transition-colors',
            isActive(item.to)
              ? 'text-[#eea62b] font-bold'
              : 'text-[#1b160d] hover:text-[#eea62b]'
          ]"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
</style>
