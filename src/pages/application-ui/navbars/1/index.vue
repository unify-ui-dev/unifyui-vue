<script setup>
import { useHead } from 'unhead'
import { ref } from 'vue'

const navIsOpen = ref(false)
useHead({
  title: 'Agency Website Herosection',
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
        text:"Home",
        href:"/",
        isActive:true
    },
    {
        id:2,
        text:"Portfolio",
        href:"#",
        isActive:false
    },
    {
        id:3,
        text:"Services",
        href:"#",
        isActive:false
    },
    {
        id:4,
        text:"Company",
        href:"#",
        isActive:false
    },
    {
        id:5,
        text:"Contact",
        href:"#",
        isActive:false
    },
]

function toggleNavBar(){
    navIsOpen.value = !navIsOpen.value
    document.body.classList.toggle("overflow-y-auto")
}
function closeNavBar(){
    navIsOpen.value = false
    ocument.body.classList.add("overflow-y-auto")
}
</script>
<template>
    <div aria-hidden="true" @click="closeNavBar()" bg="gray-8/40" class="fixed inset-0 z30" :class="navIsOpen ? 'visible flex lg-hidden lg-invisible':'invisible hidden'"></div>
    <header border-b="~ gray-1 dark:gray-9" bg="white/80 dark:gray-950/80"
        class="backdrop-filter backdrop-blur-xl z40 sticky top-0 w-full flex items-center h20">
        <nav px="5 sm:10 md:12 lg:5" class="relative mxauto max-w-7xl w-full flex gap-x-5 justify-between items-center">
            <div class="flex items-center min-w-max">
                <a href="/" class="relative flex items-center gap-2.5">
                    <span class="flex">
                        <span w3 h6 rd-l-full flex bg-blue-4></span>
                        <span w3 h6 rd-r-full flex bg-indigo-6 mt2></span>
                    </span>
                    <span text="indigo-950 dark:white" inline-flex text-lg font-bold>
                        Estam
                    </span>
                </a>
            </div>
            <div lg="top-0 relative w-max flex" bg="white dark:gray-950 lg:transparent"
                border-b="~ gray-2 dark:gray-8 lg:none" py="8 lg:0" px="5 sm:10 md:12 lg:px-0"
                class="ease-linear lg-transition-none gap-x-6 absolute top-full left-0 w-full duration-300"
                :class="navIsOpen ? 'visible op100 translate-y-0':'translate-y-10 lg-translate-y-0 invisible lg-visible op0 lg-op100'">
                <ul text="gray-7 dark:gray-3" class="flex flex-col lg-flex-row gap6 lg-w-full lg-justify-center lg-items-center">
                    <li v-for="navItem in navItems" :key="navItem.id">
                        <router-link :to="navItem.href"  class="py2.5 duration-300 ease-linear hover-text-indigo-6  relative after-absolute after-content-empty after-bg-indigo-6 after-w-full after-left-0 after-bottom-0 after-h-px after-rd-md after-duration-300 after-ease-linean" :class="navItem.isActive ?'text-indigo-6 after-scale-x-100':'after-scale-x-0 hover-after-scale-x-100'"> 
                            {{ navItem.text }}
                        </router-link>
                    </li>
                </ul>
                <div mt="10 lg:0" flex flex-col sm-flex-row sm-items-center gap-4 lg-min-w-max>
                    <a href="#" class="flex justify-center relative px6 py3"
                        un-before="absolute content-empty inset-0 rd-lg transition bg-gray-1 dark-bg-gray-9 after-origin-left after-ease-linear after-after-duration-300">
                        <span relative text="indigo-6 dark:white">
                            Book a call
                        </span>
                    </a>
                </div>
            </div>
            <div flex items-center lg-hidden>
                <button @click="toggleNavBar()" outline-none border-l="~ indigo-1 dark:gray-7"
                    p-3 relative bg-transparent aria-label="toggle navbar">
                    <div h0.5 w6 rd bg="gray-7 dark:gray-3" transition duration-300 aria-hidden="true" :class="navIsOpen ? 'rotate-45 translate-y-1.5':''">
                    </div>
                    <div mt2 h0.5 w6 rd bg="gray-7 dark:gray-3" transition duration-300 aria-hidden="true" :class="navIsOpen ? '-rotate-45 -translate-y-1.5':''">
                    </div>
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