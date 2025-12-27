<script setup>
const teamMembers = [
  {
    name: '陳頡燕',
    title: '創辦人 / 美國註冊營養師',
    description: '專精於熟齡營養規劃，致力於推廣全食物養生。',
    image: '/images/team/founder-portrait.png'
  }
]

const certifications = [
  { icon: 'verified_user', label: 'ISO 22000' },
  { icon: 'security', label: 'HACCP' },
  { icon: 'science', label: 'SGS 檢驗合格' },
  { icon: 'eco', label: '100% 天然' },
]

const features = [
  {
    icon: 'soup_kitchen',
    title: '全食物營養',
    description: '保留食物原態，不使用萃取物，讓身體攝取最完整的天然營養素。'
  },
  {
    icon: 'task_alt',
    title: '無添加保證',
    description: '拒絕人工色素、香料與防腐劑。成分單純，連嬰兒都能安心食用。'
  },
  {
    icon: 'medication_liquid',
    title: '植萃機能',
    description: '結合中西醫理，針對熟齡需求精準調配，吃得好，更要吃得巧。'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full py-16 lg:py-24 bg-[#fcfaf8]">
      <div class="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="flex flex-col gap-6 order-2 lg:order-1">
            <span class="inline-block w-fit rounded-full bg-[#eea62b]/10 px-4 py-1.5 text-base font-bold text-[#d48e15]">
              專業醫療級 ✕ 居家溫暖
            </span>
            <h1 class="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#1b160d]">
              用全食物的力量，<br />守護您的黃金歲月
            </h1>
            <p class="text-lg lg:text-xl text-[#5c4d3c] leading-relaxed max-w-xl">
              專為銀髮族設計的植萃機能食品。我們相信，最好的醫藥就在廚房裡，回歸自然，吃出健康。
            </p>
          </div>
          <div class="relative order-1 lg:order-2">
            <div class="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-[#f3efe7] to-[#e7dfcf]">
              <img
                src="/images/team/founder-full.png"
                alt="創辦人陳頡燕"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Decorative element -->
            <div class="absolute -bottom-6 -left-6 z-0 size-32 rounded-full bg-[#eea62b]/20 blur-2xl"></div>
            <div class="absolute -top-6 -right-6 z-0 size-40 rounded-full bg-yellow-200/30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="w-full bg-[#f3efe7] py-16 lg:py-20">
      <div class="mx-auto max-w-[960px] px-6 lg:px-10 text-center">
        <span class="material-symbols-outlined text-[#eea62b] text-5xl mb-6">format_quote</span>
        <h2 class="text-3xl lg:text-4xl font-bold leading-snug text-[#1b160d] mb-6">
          我們的使命：讓長輩不再依賴瓶瓶罐罐的保健食品，重拾餐桌上的笑容。
        </h2>
        <div class="h-1 w-20 bg-[#eea62b] mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- Founder Story -->
    <section class="w-full py-16 lg:py-24 bg-[#fcfaf8]">
      <div class="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div class="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-sm border border-[#e7dfcf]">
          <!-- Image Side -->
          <div class="lg:w-1/2 relative min-h-[400px]">
            <img
              src="/images/team/founder-portrait.png"
              alt="陳頡燕 營養師"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <!-- Content Side -->
          <div class="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center gap-6">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-[#eea62b] text-2xl">verified</span>
              <span class="text-lg font-bold text-[#d48e15]">創辦人的話</span>
            </div>
            <h3 class="text-3xl font-bold text-[#1b160d]">我是陳頡燕，一名美國註冊營養師。</h3>
            <div class="space-y-4 text-lg text-[#5c4d3c] leading-relaxed">
              <p>
                創立 food+ 的初衷，是因為我不忍心看到長輩們每天吞嚥大把的膠囊藥丸。在工作的這些年間，我見證了太多因為飲食失調而受苦的長者。
              </p>
              <p>
                我始終相信，「藥補不如食補」。我們希望能透過科學的配方，將艱澀的營養學轉化為餐桌上美味的飲品。每一口，都是對家人的愛與專業的堅持。
              </p>
            </div>
            <div class="pt-4">
              <div class="inline-flex flex-col">
                <span class="text-xl font-bold text-[#1b160d]">陳頡燕, RDN</span>
                <span class="text-base text-[#5c4d3c]">food+ 創辦人 / 美國註冊營養師</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Features -->
    <section class="w-full py-16 lg:py-24 bg-[#fcfaf8]">
      <div class="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <!-- Header -->
          <div class="lg:w-1/3 flex flex-col gap-6">
            <h2 class="text-3xl lg:text-4xl font-black text-[#1b160d] leading-tight">
              三大核心堅持
            </h2>
            <p class="text-lg text-[#5c4d3c] leading-normal">
              我們嚴格把關每一道程序，只為提供最安心的選擇。這不僅是食品，更是對生命的承諾。
            </p>
            <router-link
              to="/products"
              class="w-fit flex h-12 items-center justify-center rounded-lg bg-[#eea62b] px-6 text-[#1b160d] text-base font-bold shadow-sm hover:bg-[#d48e15] transition-colors mt-2"
            >
              了解我們的產品
            </router-link>
          </div>
          <!-- Cards Grid -->
          <div class="lg:w-2/3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="flex flex-col gap-4 rounded-xl border border-[#e7dfcf] bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="size-14 rounded-full bg-[#eea62b]/10 flex items-center justify-center text-[#eea62b] mb-2">
                <span class="material-symbols-outlined text-[32px]">{{ feature.icon }}</span>
              </div>
              <h3 class="text-xl font-bold text-[#1b160d]">{{ feature.title }}</h3>
              <p class="text-base text-[#5c4d3c] leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="w-full py-12 bg-white border-t border-[#e7dfcf]">
      <div class="mx-auto max-w-[1280px] px-6 lg:px-10">
        <p class="text-center text-base font-bold text-[#5c4d3c] mb-8 uppercase tracking-widest">
          專業認證・安心保證
        </p>
        <div class="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 hover:opacity-100 transition-all duration-500">
          <div
            v-for="cert in certifications"
            :key="cert.label"
            class="flex items-center gap-2 text-2xl font-bold text-gray-400"
          >
            <span class="material-symbols-outlined text-4xl">{{ cert.icon }}</span>
            {{ cert.label }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
