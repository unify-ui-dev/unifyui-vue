<script setup>
import { useHead } from 'unhead'


useHead({
  title: 'Metric sections',
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
    <section class="py24">
        <div class="max-w-7xl mx-auto px-5 sm-px10 md-px12 lg-px5 space-y-16">
            <div class="space-y-6 max-w-xl">
                <h1 class="text-3xl font-bold text-gray9 dark-text-white capitalize">Title</h1>
                <p class="text-gray7 dark-text-gray3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit perferendis eos amet eum repudiandae aspernatur mollitia quos consectetur voluptatibus pariatur 
                </p>
            </div>
            <div class="flex flex-col md-flex-row gap-14 md:items-center">
                <div class="md-w-1/2 md-py8 grid sm-grid-cols-2 gap8 md-gap6 lg-gap10 text-center text-gray7 dark-text-gray3 children-space-y3">
                    <div class="">
                        <span class="font-semibold text-xl text-sky6 dark-text-sky5">
                            12K+
                        </span>
                        <h2 class="text-gray8 dark-text-gray2 font-medium">
                            Metric title
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="">
                        <span class="font-semibold text-xl text-sky6 dark-text-sky5">
                            12K+
                        </span>
                        <h2 class="text-gray8 dark-text-gray2 font-medium">
                            Metric title
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="">
                        <span class="font-semibold text-xl text-sky6 dark-text-sky5">
                            12K+
                        </span>
                        <h2 class="text-gray8 dark-text-gray2 font-medium">
                            Metric title
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="">
                        <span class="font-semibold text-xl text-sky6 dark-text-sky5">
                            12K+
                        </span>
                        <h2 class="text-gray8 dark-text-gray2 font-medium">
                            Metric title
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <img src="/images/happy-work.webp" alt="happy team work" class="w-full h-auto md-w-1/2 md:h-full object-cover rd-lg">
            </div>
        </div>
    </section>
</template>
<style >
body{
    --at-apply: font-dms bg-white dark-bg-gray-950
}
</style>