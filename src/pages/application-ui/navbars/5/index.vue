<script setup>
import { useHead } from 'unhead'
import { ref } from 'vue'

const navIsOpen = ref(false)
useHead({
  title: 'Agency Herosection',
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

const navItems = [
    {
        id:1,
        text:"Portfolio",
        href:"/",
    },
    {
        id:2,
        text:"Company",
        href:"/",
    },
    {
        id:3,
        text:"Products",
        href:"/",
    },
    {
        id:4,
        text:"Ressources",
        href:"/",
    }
]

function toggleNavBar(){
    navIsOpen.value = !navIsOpen.value
    document.body.classList.toggle("overflow-y-auto")
}
</script>
<template>
    <header
        class="absolute left-0 top-0 w-full flex items-center h24 z40">
        <nav px="5 sm:10 md:12 lg:5"
            class="relative mx-auto lg-max-w-7xl w-full flex gap-x-5 justify-between items-center">
            <div class="flex items-center min-w-max">
                <router-link to="#" class="font-semibold flex items-center gap-x-2">
                    <div class="flex items-center -space-x-3">
                        <span bg="purple-6 dark:purple-5" class="h6 aspect-square rd-full flex"></span>
                        <span bg="violet-6 dark:violet-4" class="h6 aspect-square blur rd-full flex"></span>
                    </div>
                    <span text="lg gray-7 dark:gray-3">Agency</span>
                </router-link>
            </div>

            <div bg="white dark:gray-950 lg:!transparent" border-b="~ border-gray-2 dark:gray-8 lg:none" py="8 lg:0" px="5 sm:10 md:12 lg:0"
                class="absolute top-17 left-0 w-full h-[calc(100dvh-68px)] lg-h-max lg-w-max lg-space-x-16 lg-top-0 lg-relative  lg-flex duration-300 lg-transition-none ease-linear"
                :class="navIsOpen?'translate-y-0 op-100 visible':'translate-y-10 op-0 invisible lg-visible  lg-translate-y-0 lg-op-100'">
                <ul text="gray-7 dark:gray-3"
                    class="flex flex-col lg-flex-row gap-6 lg-items-center lg-w-full lg-justify-center">
                    <li v-for="navItem in navItems" :key="navItem.id">
                        <router-link :to="navItem.href"  class="px2 py2.5 transition-colors hover-text-purple-6">
                            {{navItem.text}}
                        </router-link>
                    </li>
                </ul>
                <div  class="flex flex-col sm-flex-row sm-items-center gap-4  lg-min-w-max mt10 lg-mt0">
                    <router-link to="#" class="bg-gray-1 dark-bg-gray-9 text-purple-6 dark-text-gray-3 border border-gray-2 dark-border-gray-8 flex items-center justify-center w-full sm-w-auto h12 px6 rd-full">
                        Get It touch
                    </router-link>
                </div>
            </div>
            <div class="flex items-center lg-hidden">
                <button @click="toggleNavBar()" border-l="~ purple-1 dark:gray-8"
                    class="outline-none pl-3 relative py-3 bg-transparent" aria-label="toggle navbar">
                    <div id="line-1" aria-hidden="true" bg="gray-8 dark:gray-3"
                        class="h0.5 w6 rd transition duration-300" :class="navIsOpen ? 'rotate-45 translate-y-1.5' : ''">
                    </div>
                    <div id="line-2" aria-hidden="true" bg="gray-8 dark:gray-3"
                        class="mt2 h0.5 w6 rd transition duration-300" :class="navIsOpen ? '-rotate-45 -translate-y-1.5' : ''"></div>
                </button>
            </div>
        </nav>
    </header>
</template>

<style >
body{
    --at-apply: font-dms bg-white dark-bg-gray950
}
</style>