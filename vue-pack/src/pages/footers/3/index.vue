<script setup>
import { useHead } from 'unhead'


useHead({
  title: 'Footer sections',
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


const footerLinks = [
  {
    id:1,
    title:"Links",
    items:[
      {
        id:1,
        label:'Home',
        link:'#'
      },
      {
        id:2,
        label:'About',
        link:'#'
      },
      {
        id:3,
        label:'Contact',
        link:'#'
      },
      {
        id:4,
        label:'Portfolio',
        link:'#'
      },
      {
        id:4,
        label:'Services',
        link:'#'
      },
    ]
  },
  {
    id:2,
    title:"Ressources",
    items:[
      {
        id:1,
        label:'Blog',
        link:'#'
      },
      {
        id:2,
        label:'Privacy',
        link:'#'
      },
      {
        id:3,
        label:'Terms',
        link:'#'
      },
      {
        id:4,
        label:'Carreer',
        link:'#'
      },
    ]
  }
]

</script>
<template>
    <footer bg="gray-1 dark:gray-9" un-text="gray-7 dark:gray-3">
        <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto grid grid-cols-2 lg-grid-cols-6 gap-12 lg-gap-16 py20">
            <div class="space-y-6 col-span-2">
                <a href="#">
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-tr from-blue-8 to-indigo-4 font-bold text-2xl">U</span>
                    Unify-Ui
                </a>
                <p class="max-w-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quo aliquam est ipsam. Magni,
                    iusto,
                </p>
            </div>
            <div v-for="footerItem in footerLinks" :key="footerItem.id" class="space-y-6">
                <h1 un-text="lg gray-9 dark:gray-1" class="font-semibold">
                    {{ footerItem.title }}
                </h1>
                <ul class="space-y-3">
                    <li v-for="item in footerItem.items" :key="item.id">
                        <router-link :to="item.link" un-text="hover:blue-6 dark:hover:blue-5" class="duration-200">
                            {{ item.label }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="space-y-6 col-span-2">
                <h1 un-text="lg gray-9 dark:gray-1" class="font-semibold">News-letter</h1>
                <form class="w-full max-w-2xl flex flex-col sm-flex-row gap-3">
                    <input type="email" placeholder="johndoe@gmail.com" bg="gray-2 dark:gray-8" class="px5 py2.5 rd-md outline-none flex-1">
                    <button class="outline-none w-full py2.5 px5 sm-w-max bg-blue-6 text-white rd-md flex items-center justify-center">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
        <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto">
            <div border-t="~ gray-2 dark:gray-8" text="gray-7 dark:gray-3" class="w-full flex flex-col md-flex-row gap-4 items-center sm:justify-between py3">
                <div text="center sm:left" class="flex sm-min-w-max">
                    <p> &copy; 2023 UnifyUI. All right reserved </p>
                </div>
                <div class="flex justify-center sm-justify-end w-full gap-3">
                    <a href="#" aria-label="social link">
                        <span i-carbon-logo-twitter text-2xl flex></span>
                    </a>
                    <a href="#" aria-label="social link">
                        <span i-carbon-logo-linkedin text-2xl flex></span>
                    </a>
                    <a href="#" aria-label="social link">
                        <span i-carbon-logo-instagram text-2xl flex></span>
                    </a>
                    <a href="#" aria-label="social link">
                        <span i-carbon-logo-facebook text-2xl flex></span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
<style >
body{
    --at-apply: font-dms bg-white dark-bg-gray-950
}
</style>