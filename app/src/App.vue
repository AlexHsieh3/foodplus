<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import UseCasesSection from './components/UseCasesSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="bg-background-light text-gray-800 font-body antialiased transition-colors duration-300">
    <!-- Navigation -->
    <NavBar />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Features Section - 核心價值 -->
    <FeaturesSection />

    <!-- About Section - 品牌故事 -->
    <AboutSection />

    <!-- Products Section - 推薦產品 -->
    <ProductsSection />

    <!-- Use Cases Section - 適用情境 -->
    <UseCasesSection />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<style scoped>
</style>
