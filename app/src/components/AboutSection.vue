<script setup>
const certifications = [
  { label: 'SGS 檢驗合格', icon: 'check_circle' },
  { label: 'HACCP 認證工廠', icon: 'check_circle' },
  { label: 'ISO 22000 認證', icon: 'check_circle' },
]
</script>

<template>
  <section id="about" class="py-16 bg-[#f3efe7]">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-10">
        <h2 class="text-[#1b160d] text-3xl sm:text-4xl font-black">專業營養師團隊，誠心推薦</h2>
      </div>

      <!-- Main Card -->
      <div class="bg-white rounded-2xl p-6 md:p-10 lg:p-12 shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <!-- Founder Image -->
        <div class="w-full lg:w-1/3 aspect-square lg:aspect-[3/4] rounded-xl shadow-inner relative overflow-hidden">
          <img
            src="/images/team/founder-portrait.png"
            alt="陳頡燕 營養師"
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white lg:hidden">
            <p class="font-bold text-xl">陳頡燕</p>
            <p class="text-sm opacity-90">food+ 創辦人・美國註冊營養師</p>
          </div>
        </div>

        <!-- Content -->
        <div class="flex-1 flex flex-col gap-6">
          <!-- Name & Title (Desktop) -->
          <div class="hidden lg:block">
            <p class="text-2xl font-bold text-[#1b160d]">陳頡燕</p>
            <p class="text-lg text-[#eea62b] font-medium">food+ 創辦人 | 美國註冊營養師</p>
          </div>

          <!-- Quote -->
          <div class="relative">
            <span class="material-symbols-outlined text-6xl text-[#f3efe7] absolute -top-8 -left-4 -z-10">format_quote</span>
            <blockquote class="text-xl sm:text-2xl font-medium leading-relaxed text-[#1b160d] italic">
              「隨著年齡增長，吸收能力與睡眠品質往往是長輩最困擾的問題。針對熟齡族群的生理需求，我們精心調配了最適合的營養比例。這不只是一杯飲品，更是守護您每日健康的承諾。」
            </blockquote>
          </div>

          <!-- Certifications -->
          <div class="flex flex-col gap-4 mt-4">
            <p class="text-[#5c4d3c] font-bold text-lg">嚴格檢驗，只為讓您安心：</p>
            <div class="flex flex-wrap gap-4 items-center">
              <div
                v-for="cert in certifications"
                :key="cert.label"
                class="px-4 py-2 border border-[#e7dfcf] rounded bg-[#fcfaf8] text-sm font-bold text-[#5c4d3c] flex items-center gap-2"
              >
                <span class="material-symbols-outlined text-green-600">{{ cert.icon }}</span>
                {{ cert.label }}
              </div>
              <button class="text-[#eea62b] font-bold text-lg hover:underline flex items-center">
                查看完整檢驗報告
                <span class="material-symbols-outlined text-sm ml-1">open_in_new</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
