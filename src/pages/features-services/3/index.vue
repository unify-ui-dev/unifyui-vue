<script setup>
import { useHead } from 'unhead'


useHead({
  title: 'Feaure & Services',
  meta: [
    {
      name: 'description',
      content: 'My page description',
    },
  ],
  link:[
    {
        href:"https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap",
        rel:"stylesheet"
    }
  ]
})


const features = [
  {
    id:1,
    icon:'i-carbon-development',
    title:'Feature 1',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus expedita nam itaque ducimus quod fugiat .'
  },
  {
    id:2,
    icon:'i-carbon-ibm-watson-knowledge-studio',
    title:'Feature 2',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus expedita nam itaque ducimus quod fugiat .'
  },
  {
    id:3,
    icon:'i-carbon-ibm-watson-openscale',
    title:'Feature 3',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus expedita nam itaque ducimus quod fugiat .'
  },
  {
    id:4,
    icon:'i-carbon-development',
    title:'Feature 4',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus expedita nam itaque ducimus quod fugiat .'
  },
  {
    id:5,
    icon:'i-carbon-development',
    title:'Feature 5',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus expedita nam itaque ducimus quod fugiat .'
  },
  {
    id:6,
    icon:'i-carbon-development',
    title:'Feature 6',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus expedita nam itaque ducimus quod fugiat .'
  },
]

</script>
<template>
    <section py-20>
        <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto flex flex-col gap-14">
            <div class="flex max-w-xl">
                <h2 class="text-4xl lg-text-4xl text-gray-8 dark-text-white font-bold">
                    Order from anywhere, get it delivered fast
                </h2>
            </div>
            <div class="flex gap-12 lg-items-center">
                <div class="flex flex-1 flex-col gap-10">
                    <div class="gap-8 lg-gap-10 grid sm-grid-cols-2">
                        <div v-for="feature in features" :key="feature.id" class="space-y-4">
                            <span class="text-emerald-6 dark-text-emerald-4 p2 rd-md flex w-max bg-emerald-50 dark-bg-gray-9">
                                <span flex text-2xl :class="feature.icon"></span>
                            </span>
                            <h2 un-text="xl gray-9 dark:white" class="font-bold">
                                {{ feature.title }}
                            </h2>
                            <p un-text="gray-7 dark:gray-3">
                                {{ feature.description }}
                            </p>
                        </div>
                    </div>
                    <router-link to="#" class="bg-emerald-7 text-white px5 h12 rd-md w-max flex items-center gap-x-3">
                        Sign up now
                        <span i-carbon-arrow-right flex text-md></span>                        
                    </router-link>
                </div>
                <div class="hidden md-flex justify-end md-w-1/2 xl-w-45% lg-h-full items-center">
                    <img src="/images/Image.png" width="600" height="687" alt="img cover about"
                        class="w-full lg-w90% xl-w85% h-auto object-cover rd-md">
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