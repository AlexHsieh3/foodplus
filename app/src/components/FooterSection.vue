<script setup>
import { ref } from 'vue'

const email = ref('')

const shopLinks = [
  { text: '全部產品', href: '#products' },
  { text: '組合優惠', href: '#' },
  { text: '禮品卡', href: '#' }
]

const companyLinks = [
  { text: '關於我們', href: '#about' },
  { text: '成分說明', href: '#' },
  { text: '聯絡我們', href: '#' }
]

const handleSubscribe = () => {
  if (email.value) {
    console.log('Subscribe:', email.value)
    email.value = ''
  }
}
</script>

<template>
  <footer class="bg-white border-t border-gray-200 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div class="col-span-2 md:col-span-1">
          <a href="#" class="font-display font-bold text-2xl tracking-tight text-gray-900 mb-4 block">
            food<span class="text-primary">+</span>
          </a>
          <p class="text-sm text-gray-500 mb-4">
            食之味有限公司<br />
            機能食品設計・完全營養食
          </p>
          <p class="text-sm text-gray-500">
            讓健康變簡單，讓生活更有味。
          </p>
        </div>

        <!-- Shop Links -->
        <div>
          <h4 class="font-bold text-gray-900 mb-4">產品</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li v-for="link in shopLinks" :key="link.text">
              <a :href="link.href" class="hover:text-primary transition-colors">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <!-- Company Links -->
        <div>
          <h4 class="font-bold text-gray-900 mb-4">公司</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li v-for="link in companyLinks" :key="link.text">
              <a :href="link.href" class="hover:text-primary transition-colors">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact & Newsletter -->
        <div>
          <h4 class="font-bold text-gray-900 mb-4">聯絡我們</h4>
          <div class="space-y-2 text-sm text-gray-600 mb-4">
            <p>yen285@gmail.com</p>
            <p>+886-2-2345 8809</p>
          </div>
          <div class="flex gap-3 mb-4">
            <a href="https://www.facebook.com/profile.php?id=61555904084431" target="_blank" class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span class="material-icons-round text-sm">facebook</span>
            </a>
            <a href="https://lin.ee/tiVbCLW" target="_blank" class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span class="material-icons-round text-sm">chat</span>
            </a>
          </div>
          <h4 class="font-bold text-gray-900 mb-2 text-sm">訂閱最新消息</h4>
          <div class="flex gap-2">
            <input
              v-model="email"
              type="email"
              placeholder="您的 Email"
              class="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              @click="handleSubscribe"
              class="bg-primary hover:bg-primary-dark text-white px-3 py-2 rounded-lg text-sm transition-colors"
            >
              <span class="material-icons-round text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2025 food+ 食之味有限公司. All rights reserved.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-gray-900 transition-colors">隱私權政策</a>
          <a href="#" class="hover:text-gray-900 transition-colors">服務條款</a>
          <a href="#" class="hover:text-gray-900 transition-colors">退款政策</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
