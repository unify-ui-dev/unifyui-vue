<script setup>
import { useHead } from 'unhead'
import { ref } from 'vue'

const navIsOpen = ref(false)

useHead({
  title: 'Creative Agency Herosection',
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
        text:"Products",
        href:"#",
    },
    {
        id:3,
        text:"Services",
        href:"#",
    },
    {
        id:4,
        text:"Company",
        href:"#",
    }
]

function toggleNavbar(){
    navIsOpen.value = !navIsOpen.value
    document.body.classList.toggle("overflow-y-auto")
}


</script>
<template>
        <header class="absolute top-0 inset-x-0 z50 h24 flex items-center">
        <div px="5 sm:10 md:12 lg:5" class="mx-auto lg-max-w-7xl w-full h-full items-center">
            <nav class="flex justify-between items-center h-full">
                <div class="flex min-w-max items-center">
                    <a href="/" un-text="2xl gray-7 dark:gray-3" class="flex items-center gap-x-4 font-semibold">
                        <div class="flex items-center -space-x-3 font-semibold">
                            <span bg="emerald-6 dark:emerald-4" class="h6 aspect-square rd-full flex"></span>
                            <span bg="gray-6 dark:white" class="h6 aspect-square rd-full flex"></span>
                        </div>
                        Agency
                    </a>
                </div>
                <div un-bg="white dark:gray-950 lg:!transparent" un-py="20 lg:0" un-px="5 sm:10 md:14 lg:0" space-y="10 lg:0" class="flex flex-col inset-0 fixed top-0 h-100dvh
                    transition-all ease-linear duration-300 lg-flex-row lg-flex-1 lg-gap-x-10 lg-relative lg-top-0 lg-h-full lg-items-center lg-justify-between lg-w-max"
                    :class="navIsOpen ? 'translate-y-0 op-100 visible' : '-translate-y-9 op-0 invisible lg-translate-y-0'">
                    <ul text="gray-7 dark:gray-3" class="flex flex-col gap-y-5 lg-items-center lg-flex-row lg-gap-x-5 lg-h-full lg-justify-center lg-flex-1">
                        <li v-for="navItem in navItems" :key="navItem.id">
                            <a :href="navItem.href" transition ease-linear hover="text-gray-9 dark:text-white">
                                {{navItem.text}}
                            </a>
                        </li>
                        
                    </ul>
                    <div w-full flex sm-w-max lg-min-w-max lg-items-center>
                        <a href="#" un-text="gray-7 dark:gray-3 hover:gray-9 dark:hover:white" border-b="~ gray-7 dark:blue-3 hover:gray-9 dark:hover:white" class="flex justify-center gap-x-3 items-center bg-transparent">
                            Get in touch
                            <span i-carbon-arrow-right flex ></span>
                        </a>
                    </div>
                </div>
                <div class="flex items-center justify-end relative z60 lg-hidden">
                    <button aria-label="toggle navbar" @click="toggleNavbar()" un-bg="emerald-6 dark:emerald-5" class="p3 rd-full outline-none w12 aspect-square flex flex-col relative justify-center items-center">
                        <span class="w6 h0.5 rd-full bg-gray-3 transition-transform duration-300 ease-linear" :class="navIsOpen ? 'translate-y-1.5 rotate-40':''"></span>
                        <span class="w6 origin-center  mt1 h0.5 rd-full bg-gray-3 transition-all duration-300 ease-linear" :class="navIsOpen ? 'scale-0 op-0':''"></span>
                        <span class="w6 mt1 h0.5 rd-full bg-gray-3 transition-all duration-300 ease-linear" :class="navIsOpen ? '-translate-y-1.5 -rotate-40':''"></span>
                    </button>
                </div>
            </nav>
        </div>
    </header>
</template>

<style >
body{
    --at-apply: font-dms bg-white dark-bg-gray950
}
</style>