<script setup>
const testimonials = [
  {
    stars: 5,
    text: '"The night blend has completely changed my sleep routine. I wake up feeling refreshed, not groggy. The taste is surprisingly pleasant too!"',
    name: 'Sarah Jenkins',
    role: 'Verified Buyer'
  },
  {
    stars: 5,
    text: '"I add the Youth Blend to my morning smoothie. I feel more energetic throughout the day and my skin has been looking great."',
    name: 'Mike Chen',
    role: 'Verified Buyer'
  },
  {
    stars: 4.5,
    text: '"Finally a supplement with NO additives. Just pure ingredients. I love how transparent food+ is about what goes into the packets."',
    name: 'Emma Thompson',
    role: 'Verified Buyer'
  }
]
</script>

<template>
  <section id="testimonials" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="font-display text-3xl font-bold text-center text-gray-900 mb-12">
        Real Stories, Real Results
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
        >
          <!-- Stars -->
          <div class="flex text-yellow-400 mb-4">
            <span v-for="i in Math.floor(testimonial.stars)" :key="'star-' + i" class="material-icons-round text-sm">star</span>
            <span v-if="testimonial.stars % 1 !== 0" class="material-icons-round text-sm">star_half</span>
          </div>

          <!-- Quote -->
          <p class="text-gray-600 italic mb-6">{{ testimonial.text }}</p>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
              <svg class="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <div>
              <h5 class="font-bold text-sm text-gray-900">{{ testimonial.name }}</h5>
              <p class="text-xs text-gray-500">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
