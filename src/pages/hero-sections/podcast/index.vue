<script setup>
import { useHead } from 'unhead'
import { ref } from 'vue'

const navIsOpen = ref(false)
useHead({
  title: 'Podcast Herosection',
  meta: [
    {
      name: 'description',
      content: 'My page description',
    },
  ],
  link:[
    {
        href:"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
        rel:"stylesheet"
    }
  ]
})

const navItems = [
    {
        id:1,
        text:"Home",
        href:"#"
    },
    {
        id:2,
        text:"Features",
        href:"#"
    },
    {
        id:3,
        text:"Episodes",
        href:"#"
    },
    {
        id:4,
        text:"About",
        href:"#"
    },
    {
        id:5,
        text:"Pricing",
        href:"#"
    }
]

function toggleNavBar(){
    navIsOpen.value = !navIsOpen.value
    document.body.classList.toggle("overflow-y-auto")
}

function closeNavBar(){
    navIsOpen.value = false
    document.body.classList.add("overflow-y-auto")
}
</script>
<template>
    <div @click="closeNavBar()" aria-hidden="true" class="fixed bg-gray-8/40 inset-0 z-30" :class="navIsOpen ? 'flex lg-hidden' : 'hidden'"></div>
    <header fixed inset-x-0 top-0 w-full flex items-center h20 border-b="~ gray-1 dark:gray-9" z40
        bg="white/80 dark:gray-950/80" backdrop-filter backdrop-blur-xl>
        <nav relative mxauto max-w-7xl wfull px="5 sm:10 md:12 lg:5" flex gap-x-5 justify-between items-center>
            <div flex items-center min-w-max>
                <router-link to="/" class="text-xl font-semibold flex items-center gap-x-2">
                    <span class="flex">
                        <span w3 h6 rd-l-full flex bg-sky-6></span>
                        <span w3 h6 rd-r-full flex bg-teal-4 mt2></span>
                    </span>
                    <span text="lg gray-7 dark:gray-3">Podux</span>
                </router-link>
            </div>

            <div lg-relative top="full lg:0" bg="white dark:gray-950 lg:transparent"
                border-b="~ gray-2 dark:gray-7 lg:none" left-0 absolute py="8 lg:0" px="5 sm:10 md:12 lg:0"
                class="lg-flex lg-justify-between duration-300 ease-linear w-full"
                :class="navIsOpen ? 'translate-y-0 skew-x-0 op100 visible' : 'translate-y-10 skew-x-6 op0 invisible lg-visible lg-skew-x-0 lg-translate-y-0 lg-op100 '">
                <ul flex flex-col lg-flex-row gap-6 lg-items-center text="gray-7 dark:gray-3" lg-w-full lg-justify-center>
                    <li v-for="navItem in navItems" :key="navItem.id">
                        <router-link :to="navItem.href" class="relative py2.5 duration-300 ease-linear hover-text-sky-6 after-content-empty after-absolute after-w-full after-left-0 after-bottom-0 after-h-px after-rd-md after-origin-left after-ease-linear after-duration-300 after-scale-x-0 after-bg-sky-6 hover-after-scale-100">
                            {{navItem.text}}
                        </router-link>
                    </li> 
                </ul>
                <div flex flex-col sm-flex-row sm-items-center gap-4 lg-min-w-max mt="10 lg:0">
                    <router-link to="#" class="px5 py2.5 border border-gray-2 dark-border-gray-8 text-sky-7 dark-text-white flex
                        justify-center w-full sm-w-auto">
                        Signin
                    </router-link>
                    <router-link to="#" class="px5 py2.5 bg-sky-7 text-white duration-300 ease-linear flex justify-center
                        w-full sm-w-auto">
                        Signup
                    </router-link>
                </div>
            </div>
            <div class="flex items-center lg:hidden">
                <button @click="toggleNavBar()" aria-label="toggle navbar" outline-none border-l="gray-2 dark:gray-8"
                    bg-transparent pl3 relative py3>
                    <div aria-hidden="true" h0.5 w6 rd-full bg="gray-8 dark:gray-2" transition duration-300 :class="navIsOpen ? 'rotate-45 translate-y-1' : ''">
                    </div>
                    <div aria-hidden="true" mt2 h0.5 w6 rd-full bg="gray-8 dark:gray-2" transition duration-300 :class="navIsOpen ? '-rotate-45 -translate-y-1' : ''"></div>
                </button>
            </div>
        </nav>
    </header>

    <section class="py8 mt24">
        <div px="5 sm:10 md:12 lg:5" mxauto max-w-7xl w-full flex flex-col lg-flex-row lg-items-stretch gap-10>
            <div py="lg:10 xl:12" text="center lg:left" class="lg-w-1/2 max-w-2xl md-max-w-3xl mx-auto">
                <h1 text="teal-950 dark:white 4xl md:5xl lg:6xl" class="font-semibold leading-tight">
                    Find and listen in your favorite <div relative
                        after="content-empty absolute inset-x-0 h3 bg-sky-1 dark:bg-sky-950 bottom-2" inline-block
                        px-2>
                        <span relative z10 text-transparent bg-clip-text bg-gradient-to-tr from-sky-8
                            to-teal-4>Podcasts</span>
                    </div>!
                </h1>
                <p mt8 text-gray-7 dark-text-gray-3 max-w-lg lg-max-w-none mx-auto>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, beatae omnis ipsa magnam neque ut
                </p>
                <div mt-8 flex flex-col sm-flex-row justify-center lg-justify-start gap-4>
                    <a href="#" flex items-center justify-center gap-x-2 px-5 py2.5
                        bg-sky-7 text-white>
                        Start Listening
                        <span i-carbon-arrow-right bg-white text-xl flex></span>
                    </a>
                    <a href="#" class="flex items-center justify-center gap-x-2 px-5 py2.5
                        border border-gray-2 dark-border-gray-8 text-sky-7 dark-text-white">
                        Explore channels
                        <span i-carbon-explore bg="sky-7 dark:white" text-xl></span>
                    </a>
                </div>
                <div flex items-center gap-1 mt10 justify-center lg-justify-start gap-x-3>
                    <div class="flex items-center -space-x-2">
                        <img src="/images/podCast.webp" width="2250" alt="listener avatar"
                            class="w10 h10 object-cover rd-full ring-4 ring-white dark:ring-gray-950">
                        <img src="/images/podCast.webp" width="2250" alt="listener avatar"
                            class="w10 h10 object-cover rd-full ring-4 ring-white dark:ring-gray-950">
                        <img src="/images/podCast.webp" width="2250" alt="listener avatar"
                            class="w10 h10 object-cover rd-full ring-4 ring-white dark:ring-gray-950">
                    </div>
                    <div class="flex flex-col justify-start items-start">
                        <span font-semibold text="lg gray-8 dark:gray-2">+12k</span>
                        <span text="gray-6 sm dark:gray-3">WordWide listners</span>
                    </div>
                </div>
            </div>
            <div class="lg-w-1/2 relative lg-h-auto max-w-2xl md-max-w-3xl mx-auto">
                <div class="absolute left-1/2 -translate-x-1/2 
                    -top-8 px-10 py1.5 bg-white text-center border border-gray-1 shadow-lg shadow-gray-2/40">
                    <span text="text-3xl text-sky-950" class="font-bold">+25</span>
                    <p class="text-gray-6">Podcasts</p>
                </div>
                <img src="/images/sidebiew.webp" alt="sidebiew image" lg="w-full h-full" object-cover>
            </div>
        </div>
    </section>
</template>

<style >
body{
    --at-apply: font-poppins bg-white dark-bg-gray950
}
</style>