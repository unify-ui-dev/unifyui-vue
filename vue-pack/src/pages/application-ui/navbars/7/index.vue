<script setup>
import { useHead } from 'unhead'
import { ref } from 'vue'

const navIsOpen = ref(false)
useHead({
  title: 'SaaS Herosection',
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
        text:"Features",
        href:"#"
    },
    {
        id:2,
        text:"Company",
        href:"#"
    },
    {
        id:3,
        text:"Plateform",
        href:"#"
    },
    {
        id:4,
        text:"Resources",
        href:"#"
    },
    {
        id:5,
        text:"Contact",
        href:"#"
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
            <div class="flex items-center min-w-max relative">
                <router-link to="#" class="font-semibold flex items-center gap-x-2">
                    <div class="flex items-center -space-x-3">
                        <span bg="purple-6 dark:purple-5" class="h6 aspect-square rd-full flex"></span>
                        <span bg="pink-6 dark:pink-4" class="h6 aspect-square blur rd-full flex"></span>
                    </div>
                    <span text="lg text-gray-7 dark:gray-3">mySto</span>
                </router-link>
            </div>

            <div bg="white dark:gray-950 lg:!transparent" py="32 lg:0" px="5 sm:10 md:12 lg:0"
                class="fixed inset-x-0 h-[100dvh] lg-h-max top-0 left-0 w-full lg-top-0 lg-relative  lg-flex lg-justify-between duration-300 ease-linear"
                :class="navIsOpen ? 'translate-y-0 op100 visible':' -translate-y-10 op-0 invisible lg-visible  lg-translate-y-0 lg-op-100'">
                <ul text="gray-7 dark:gray-3"
                    class="flex flex-col lg-flex-row gap-6 lg-items-center lg-w-full lg-pl-10">
                    <li v-for="navItem in navItems" :key="navItem.id">
                        <router-link :to="navItem.href" class="py2.5 duration-300 ease-linear hover:text-purple-6">
                            {{navItem.text}}
                        </router-link>
                    </li>
                </ul>
                <div
                    class="flex flex-col sm-flex-row sm-items-center gap-4  lg-min-w-max mt-10 lg-mt-0">
                    <router-link to="#" class="h10 flex items-center justify-center w-full sm-w-max rd-full px5 border border-gray-2 dark-border-gray-8 text-purple-6 dark-text-gray-3">
                        Login
                    </router-link>
                    <router-link to="#" class="h10 flex items-center justify-center w-full sm-w-max rd-full px5 bg-purple-6 text-white border border-transparent">
                        Sign-up
                    </router-link>
                </div>
            </div>
            <div class="flex items-center lg-hidden">
                <button @click="toggleNavBar()" aria-label="toggle navbar" border-l="~ purple-1 dark:gray-8"
                    class="focus-outline-none pl-3 relative py3 bg-transparent">
                    <div aria-hidden="true" bg="gray-8 dark:gray-3"
                        class="h0.5 w6 rd transition duration-300" :class="navIsOpen?'rotate-45 translate-y-1.5':''">
                    </div>
                    <div aria-hidden="true" bg="gray-8 dark:gray-3"
                        class="mt2 h0.5 w6 rd transition duration-300" :class="navIsOpen?'-rotate-45 -translate-y-1.5':''"></div>
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