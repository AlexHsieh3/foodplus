<script setup>
const quickLinks = [
  { text: '關於品牌', href: '#about' },
  { text: '全系列產品', href: '#products' },
  { text: '檢驗報告專區', href: '#' },
  { text: '常見問題 FAQ', href: '#' },
]

const socialLinks = [
  { label: 'FB', href: 'https://www.facebook.com/profile.php?id=61555904084431' },
  { label: 'IG', href: '#' },
  { label: 'LINE', href: 'https://lin.ee/tiVbCLW' },
]
</script>

<template>
  <footer class="bg-[#1b160d] text-[#fcfaf8] pt-16 pb-8">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand Info -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2 mb-2">
            <div class="size-8 text-[#eea62b] flex items-center justify-center bg-white/10 rounded-full">
              <span class="material-symbols-outlined">local_cafe</span>
            </div>
            <h2 class="text-2xl font-black">food+ 食之味</h2>
          </div>
          <p class="text-[#e7dfcf] text-lg leading-relaxed">
            專注於熟齡營養，以全食物、無添加為本，致力於提供最安心、有效的機能飲品。
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-6 text-[#eea62b]">快速連結</h3>
          <ul class="flex flex-col gap-3">
            <li v-for="link in quickLinks" :key="link.text">
              <a :href="link.href" class="text-lg hover:text-[#eea62b] transition-colors">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-xl font-bold mb-6 text-[#eea62b]">聯絡我們</h3>
          <ul class="flex flex-col gap-4">
            <li>
              <p class="text-sm text-[#e7dfcf] mb-1">免付費客服專線</p>
              <a href="tel:0800-888-999" class="text-3xl font-black text-white hover:text-[#eea62b] transition-colors">
                0800-888-999
              </a>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined mt-1 text-[#e7dfcf]">schedule</span>
              <div>
                <p class="text-lg">週一至週五</p>
                <p class="text-[#e7dfcf]">09:00 - 18:00</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h3 class="text-xl font-bold mb-6 text-[#eea62b]">追蹤我們</h3>
          <div class="flex gap-4 mb-6">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#eea62b] hover:text-[#1b160d] transition-colors"
            >
              <span class="font-bold">{{ social.label }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#e7dfcf] text-sm">
        <p>© 2025 food+ 食之味. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white">隱私權政策</a>
          <a href="#" class="hover:text-white">服務條款</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
