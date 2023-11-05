<script setup>



useHead({
  title: 'LogoCloud section',
  meta: [
    {
      name: 'description',
      content: 'Logo-cloud section',
    },
  ],
  link:[
    {
        href:"https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap",
        rel:"stylesheet"
    }
  ]
})


</script>
<template>
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-5 sm-px10 md-px12 lg-px5 space-y-10 ">
            <div class="flex flex-col md-flex-row gap-20">
                <div class="md:w-1/3 space-y-6">
                    <h1 class="text-2xl lg-text-3xl font-semibold text-gray9 dark-text-white capitalize">Trusted by companies like</h1>
                    <p class="text-gray7 dark-text-gray3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptates sit officia nulla architecto libero assumenda iusto.
                    </p>
                </div>
                <div class="flex flex-wrap gap-4 flex-1">
                    <nuxt-link to="#" target="_blank">
                        <img src="/logos/paypallogo.png" width="300" alt="logo ipsum" class="w-auto h9 dark-grayscale">
                    </nuxt-link>
                    <nuxt-link to="#" target="_blank">
                        <img src="/logos/paypallogo.png" width="300" alt="logo ipsum" class="w-auto h9 dark-grayscale">
                    </nuxt-link>
                    <nuxt-link to="#" target="_blank">
                        <img src="/logos/paypallogo.png" width="300" alt="logo ipsum" class="w-auto h9 dark-grayscale">
                    </nuxt-link>
                    <nuxt-link to="#" target="_blank">
                        <img src="/logos/paypallogo.png" width="300" alt="logo ipsum" class="w-auto h9 dark-grayscale">
                    </nuxt-link>
                    <nuxt-link to="#" target="_blank">
                        <img src="/logos/paypallogo.png" width="300" alt="logo ipsum" class="w-auto h9 dark-grayscale">
                    </nuxt-link>
                    <nuxt-link to="#" target="_blank">
                        <img src="/logos/paypallogo.png" width="300" alt="logo ipsum" class="w-auto h9 dark-grayscale">
                    </nuxt-link>
                    <nuxt-link to="#" target="_blank">
                        <img src="/logos/paypallogo.png" width="300" alt="logo ipsum" class="w-auto h9 dark-grayscale">
                    </nuxt-link>
                    <nuxt-link to="#" target="_blank">
                        <img src="/logos/paypallogo.png" width="300" alt="logo ipsum" class="w-auto h9 dark-grayscale">
                    </nuxt-link>
                    <nuxt-link to="#" target="_blank">
                        <img src="/logos/paypallogo.png" width="300" alt="logo ipsum" class="w-auto h9 dark-grayscale">
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>
<style >
body{
    --at-apply: font-dms bg-white dark-bg-gray-950
}
</style>