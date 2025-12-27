<script setup>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="bg-[#fcfaf8] text-[#1b160d] font-body antialiased min-h-screen flex flex-col">
    <!-- Navigation -->
    <NavBar />

    <!-- Main Content -->
    <main class="flex-grow w-full">
      <router-view />
    </main>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<style scoped>
</style>
