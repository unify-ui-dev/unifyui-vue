<script setup>
import { useHead } from 'unhead'
import { ref } from 'vue';


const sidebarIsToggled = ref(false)




const toggleSidebar = () => {
  sidebarIsToggled.value = !sidebarIsToggled.value
  if (!sidebarIsToggled) {
    document.body.classList.toggle("overflow-y-auto")
  } else {
    document.body.classList.add("overflow-y-auto")
  }
}


useHead({
  title: 'Sidebar',
  meta: [
    {
      name: 'description',
      content: 'Sidebar',
    },
  ],
  link: [
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
      rel: "stylesheet"
    }
  ]
})


const navItems = [
  {
    id: 1,
    icon: 'i-carbon-home',
    text: 'Home',
    link: '/',
    isActive: true
  },
  {
    id: 2,
    icon: 'i-carbon-notebook',
    text: 'Notes',
    link: '#',
    isActive: false
  },
  {
    id: 3,
    icon: 'i-carbon-calendar',
    text: 'Calendar',
    link: '#',
    isActive: false
  },
  {
    id: 4,
    icon: 'i-carbon-task',
    text: 'Tasks',
    link: '#',
    isActive: false
  },
]


</script>
<template>
  <aside un-bg="white dark:gray-950" shadow="lg gray-2/40 dark:gray-8/10"
    class="fixed h-[100dvh] py3 overflow-hidden lg-relative w11/12 max-w-[18rem] md-w72 transition-all flex flex-col justify-between px-4 lg:transition-none ease-linear"
    :class="{
      'translate-x-0': sidebarIsToggled,
      '-translate-x-full lg-translate-x-0': !sidebarIsToggled
    }">
    <div border-b="~ gray-1 dark:gray-9" class="min-h-max py2">
      <router-link to="#" class="flex items-center gap-x-3 font-semibold text-gray8 dark:text-gray2">
        <span un-bg="gray-1 dark:gray-9" un-text="gray-8 dark:gray-2" class="p2.5 rd-md">
          <span class="i-carbon-purchase flex text-2xl"></span>
        </span>
        MyPlan
      </router-link>
    </div>
    <nav class="flex-1 pt-6">
      <ul un-text="gray-7 dark:gray-3" class="space-y-3">
        <li v-for="item in navItems" :key="item.id" :class="{
          'relative before-absolute before-content-empty before--left-4 before-w1.5 before-h4/5 before-rd-r-md before-top-1/2 before--translate-y-1/2 before-bg-blue-6': item.isActive
        }">
          <router-link :to="item.link" class="flex items-center px4 py2.5 gap-x-3 rd-md" :class="{
            'text-blue-600 bg-gray-50 dark:bg-gray-9/80': item.isActive
          }">
            <span class="flex text-2xl" :class="item.icon"></span>
            {{ item.text }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div>
      <div class="flex flex-col gap-y-2 text-gray7 dark-text-gray3">
        <a href="#" class="flex items-center px4 py2.5 gap-x-3">
          <span class="i-carbon-help flex text-2xl"></span>
          Support
        </a>
        <button class="outline-none flex items-center px4 py2.5 gap-x-3 bg-transparent">
          <span class="i-carbon-logout flex text-2xl"></span>
          Logout
        </button>
      </div>
    </div>
  </aside>
  <main>
    <div class="flex lg-hidden fixed right-2 top2 p4">
      <button @click="toggleSidebar" un-bg="blue-6 dark:blue-5"
        class="p3 rd-full outline-none w12 aspect-square flex flex-col relative justify-center items-center"
        aria-label="toggle sidebar">
        <span class="w6 h0.5 rd-full bg-gray-3 transition-transform duration-300 ease-linear"
          :class="sidebarIsToggled ? 'translate-y-1.5 rotate-40' : ''"></span>
        <span class="w6 origin-center  mt-1 h-0.5 rd-full bg-gray-3 transition-all duration-300 ease-linear"
          :class="sidebarIsToggled ? 'scale-x-0 op-0' : ''"></span>
        <span class="w6 mt1 h0.5 rd-full bg-gray-3 transition-all duration-300 ease-linear"
          :class="sidebarIsToggled ? '-translate-y-1.5 -rotate-40' : ''"></span>
      </button>
    </div>
  </main>
</template>
<style >
body {
  --at-apply: font-inter bg-gray-1 dark-bg-gray-9
}
</style>