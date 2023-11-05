<script setup>
import { useHead } from 'unhead'


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

const logos = [
    {
        id:1,
        label:"paypal logo",
        logo:"/logos/paypallogo.png"
    },
    {
        id:2,
        label:"paypal logo",
        logo:"/logos/paypallogo.png"
    },
    {
        id:3,
        label:"Spotify",
        logo:"/logos/spotify.png"
    },
    {
        id:4,
        label:"Spotify",
        logo:"/logos/spotify.png"
    },
    {
        id:5,
        label:"Paypal",
        logo:"/logos/paypallogo.png"
    },
    {
        id:6,
        label:"Spotify",
        logo:"/logos/spotify.png"
    },
]
</script>
<template>
        <section class="py-20">
        <div class="max-w-7xl mx-auto px-5 sm-px10 md-px12 lg-px5 space-y-10 ">
            <div class="flex flex-col md-flex-row gap-10 gap-y-16">
                <div class="md-w-320px">
                    <h1 class="text-lg font-semibold text-gray9 dark-text-white capitalize">Trusted by companies like</h1>
                </div>
                <div class="flex flex-wrap gap-4 w-full">
                    <router-link v-for="logo in logos" :key="logo.id" to="#" target="_blank" class="bg-gray-1/80 dark-bg-gray-9/80 p4 rd-lg border-gray-100 dark:border-gray-900">
                        <img :src="logo.logo" width="300" :alt="logo.label" class="w-auto h8 sm-h9 dark:grayscale">
                    </router-link>
                </div>
            </div>
            <div class="text-center space-y-6 max-w-2xl mx-auto">
                
            </div>
            <div class="flex justify-center flex-wrap gap-4 ">
            </div>

        </div>
    </section>
</template>
<style >
body{
    --at-apply: font-dms bg-white dark-bg-gray-950
}
</style>