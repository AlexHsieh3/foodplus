<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  topic: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  alert('感謝您的留言！我們將於下個工作日主動聯繫您。')
}
</script>

<template>
  <div>
    <!-- Header Image Section -->
    <div class="w-full flex justify-center py-5 px-4 md:px-10 lg:px-40">
      <div class="flex flex-col w-full max-w-[960px]">
        <div
          class="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[260px] md:min-h-[320px] shadow-sm relative"
          style="background-image: linear-gradient(0deg, rgba(34, 27, 16, 0.6) 0%, rgba(34, 27, 16, 0) 60%), url('https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=1200&h=400&fit=crop');"
        >
          <div class="flex p-6 md:p-10 flex-col gap-2">
            <h1 class="text-white tracking-wide text-4xl md:text-5xl font-bold leading-tight drop-shadow-md">聯絡我們</h1>
            <p class="text-white/90 text-lg md:text-xl font-medium drop-shadow-md">您的健康夥伴，隨時為您解答疑惑</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Header -->
    <div class="w-full flex justify-center pb-5 px-4 md:px-10 lg:px-40">
      <div class="flex flex-col w-full max-w-[960px] text-center">
        <h2 class="text-[#1b160d] text-[28px] md:text-[32px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          專業諮詢，貼心服務
        </h2>
        <p class="text-[#5c4d3c] text-lg md:text-xl font-normal leading-relaxed pb-3 pt-1 px-4 max-w-[800px] mx-auto">
          我們提供全方位的健康支持。無論是產品使用問題，或是需要營養師的專業建議，都可以透過以下方式聯繫我們。專為熟齡設計，讓您安心享用，健康無負擔。
        </p>
      </div>
    </div>

    <!-- LINE CTA Section -->
    <div class="w-full flex justify-center py-5 px-4 md:px-10 lg:px-40">
      <div class="flex flex-col w-full max-w-[960px]">
        <div class="bg-[#2ebf4d]/10 border border-[#2ebf4d]/20 rounded-2xl overflow-hidden shadow-sm">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-10 md:px-12 md:py-12">
            <div class="flex flex-col gap-3 text-center md:text-left">
              <div class="flex items-center justify-center md:justify-start gap-3">
                <span class="material-symbols-outlined text-[#00b900] text-[40px]">chat</span>
                <h2 class="text-[#1b160d] text-2xl md:text-3xl font-bold leading-tight">
                  加入 LINE 官方帳號
                </h2>
              </div>
              <p class="text-[#5c4d3c] text-lg font-medium leading-normal max-w-[600px]">
                享有營養師 <span class="text-[#00b900] font-bold">一對一真人諮詢</span> 服務，即時解答您的健康疑問，不用出門也能獲得專業建議。
              </p>
            </div>
            <div class="flex shrink-0">
              <a
                href="https://lin.ee/tiVbCLW"
                target="_blank"
                class="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-[#00b900] hover:bg-[#009e00] text-white text-lg font-bold leading-normal tracking-[0.015em] transition-all shadow-md transform active:scale-95"
              >
                <span>點擊加入好友</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form and Info Grid -->
    <div class="w-full flex justify-center py-10 px-4 md:px-10 lg:px-40 bg-white">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-[960px]">
        <!-- Contact Information Column -->
        <div class="flex flex-col gap-8">
          <div>
            <h3 class="text-[#1b160d] text-2xl font-bold mb-6 flex items-center gap-2">
              <span class="material-symbols-outlined text-[#eea62b]">info</span>
              聯絡資訊
            </h3>
            <div class="flex flex-col gap-5">
              <!-- Phone Card -->
              <div class="flex items-start gap-4 p-5 bg-[#fcfaf8] rounded-xl border border-[#f3efe7]">
                <div class="bg-white p-3 rounded-full shadow-sm text-[#eea62b] shrink-0">
                  <span class="material-symbols-outlined text-[28px]">call</span>
                </div>
                <div>
                  <p class="text-[#5c4d3c] text-base font-medium mb-1">免費客服專線</p>
                  <a href="tel:0800-888-999" class="text-[#1b160d] text-2xl font-bold hover:text-[#eea62b] transition-colors">
                    0800-888-999
                  </a>
                  <p class="text-sm text-[#5c4d3c] mt-1">專人接聽，長輩友善語速</p>
                </div>
              </div>
              <!-- Hours Card -->
              <div class="flex items-start gap-4 p-5 bg-[#fcfaf8] rounded-xl border border-[#f3efe7]">
                <div class="bg-white p-3 rounded-full shadow-sm text-[#eea62b] shrink-0">
                  <span class="material-symbols-outlined text-[28px]">schedule</span>
                </div>
                <div>
                  <p class="text-[#5c4d3c] text-base font-medium mb-1">服務時間</p>
                  <p class="text-[#1b160d] text-xl font-bold">週一至週五</p>
                  <p class="text-[#1b160d] text-lg">09:00 - 18:00 (國定假日除外)</p>
                </div>
              </div>
              <!-- Email Card -->
              <div class="flex items-start gap-4 p-5 bg-[#fcfaf8] rounded-xl border border-[#f3efe7]">
                <div class="bg-white p-3 rounded-full shadow-sm text-[#eea62b] shrink-0">
                  <span class="material-symbols-outlined text-[28px]">mail</span>
                </div>
                <div>
                  <p class="text-[#5c4d3c] text-base font-medium mb-1">電子信箱</p>
                  <a href="mailto:yen285@gmail.com" class="text-[#1b160d] text-xl font-bold break-all hover:text-[#eea62b] transition-colors">
                    yen285@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form Column -->
        <div class="bg-[#fcfaf8] p-6 md:p-8 rounded-2xl border border-[#f3efe7] shadow-sm h-fit">
          <h3 class="text-[#1b160d] text-2xl font-bold mb-2">留言給我們</h3>
          <p class="text-[#5c4d3c] mb-6 text-lg">若非服務時間，請填寫表單，我們將於下個工作日主動聯繫您。</p>
          <form class="flex flex-col gap-5" @submit.prevent="handleSubmit">
            <div class="flex flex-col gap-2">
              <label class="text-[#1b160d] font-bold text-lg" for="name">您的稱呼 <span class="text-red-500">*</span></label>
              <input
                v-model="form.name"
                id="name"
                type="text"
                placeholder="例如：王小明"
                required
                class="w-full px-4 py-3 rounded-lg border border-[#d6d0c4] bg-white text-lg focus:ring-2 focus:ring-[#eea62b] focus:border-transparent outline-none transition-shadow placeholder:text-gray-400"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-[#1b160d] font-bold text-lg" for="phone">聯絡電話 <span class="text-red-500">*</span></label>
              <input
                v-model="form.phone"
                id="phone"
                type="tel"
                placeholder="例如：0912-345-678"
                required
                class="w-full px-4 py-3 rounded-lg border border-[#d6d0c4] bg-white text-lg focus:ring-2 focus:ring-[#eea62b] focus:border-transparent outline-none transition-shadow placeholder:text-gray-400"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-[#1b160d] font-bold text-lg" for="topic">想詢問的類別</label>
              <div class="relative">
                <select
                  v-model="form.topic"
                  id="topic"
                  class="w-full px-4 py-3 rounded-lg border border-[#d6d0c4] bg-white text-lg focus:ring-2 focus:ring-[#eea62b] focus:border-transparent outline-none transition-shadow appearance-none text-[#1b160d] cursor-pointer"
                >
                  <option disabled value="">請選擇問題類別</option>
                  <option value="product">產品成分與食用方式</option>
                  <option value="order">訂單查詢與配送</option>
                  <option value="diet">營養師諮詢預約</option>
                  <option value="other">其他建議</option>
                </select>
                <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#5c4d3c]">
                  <span class="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-[#1b160d] font-bold text-lg" for="message">留言內容</label>
              <textarea
                v-model="form.message"
                id="message"
                rows="4"
                placeholder="請簡單描述您的問題..."
                class="w-full px-4 py-3 rounded-lg border border-[#d6d0c4] bg-white text-lg focus:ring-2 focus:ring-[#eea62b] focus:border-transparent outline-none transition-shadow placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>
            <div class="pt-2">
              <button
                type="submit"
                class="w-full bg-[#eea62b] hover:bg-[#d48e15] text-[#1b160d] text-xl font-bold py-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>送出訊息</span>
                <span class="material-symbols-outlined">send</span>
              </button>
              <p class="text-center text-sm text-[#5c4d3c] mt-3">您的資料將受到嚴格保護，僅用於聯繫服務。</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
