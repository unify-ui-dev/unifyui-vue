<script setup>
import { useHead } from 'unhead'


useHead({
  title: 'Blog section',
  meta: [
    {
      name: 'description',
      content: 'Blog section',
    },
  ],
  link:[
    {
        href:"https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap",
        rel:"stylesheet"
    }
  ]
})


const posts = [
  {
    id:1,
    cover:"/images/working-on-housing-project.jpg",
    publishAt:"12-06-2022",
    author:"John doe",
    title:"You're probably fetching data in the wrong way",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum placeat"
  },
  {
    id:2,
    cover:"/images/working-on-housing-project.jpg",
    publishAt:"12-06-2022",
    author:"John doe",
    title:"You're probably fetching data in the wrong way",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum placeat"
  },
  {
    id:3,
    cover:"/images/working-on-housing-project.jpg",
    publishAt:"12-06-2022",
    author:"John doe",
    title:"You're probably fetching data in the wrong way",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum placeat"
  },
  {
    id:4,
    cover:"/images/working-on-housing-project.jpg",
    publishAt:"12-06-2022",
    author:"John doe",
    title:"You're probably fetching data in the wrong way",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum placeat"
  },
  {
    id:5,
    cover:"/images/working-on-housing-project.jpg",
    publishAt:"12-06-2022",
    author:"John doe",
    title:"You're probably fetching data in the wrong way",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum placeat"
  },
  {
    id:6,
    cover:"/images/working-on-housing-project.jpg",
    publishAt:"12-06-2022",
    author:"John doe",
    title:"You're probably fetching data in the wrong way",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum placeat"
  },
]


</script>
<template>
    <section py20>
        <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto space-y-10">
            <div class="text-center space-y-6 max-w-2xl mx-auto">
                <h1 text="3xl gray-9 dark:white" class="font-bold  capitalize">Our most recent Articles</h1>
                <p text="gray-7 dark:gray-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit perferendis eos amet eum repudiandae
                    aspernatur mollitia quos consectetur voluptatibus pariatur
                </p>

                <div class="flex justify-center">
                    <a href="#" border="~ gray-1 dark:gray-9" text="blue-6 dark:gray-3"
                        class="px5 py2.5 rd-md flex items-center gap-x-3">
                        See More
                        <span i-carbon-chevron-right text-lg></span>
                    </a>
                </div>
            </div>
            <div class="relative w-full">
                <div class="grid sm-grid-cols-2 lg-grid-cols-3 gap-8">
                    <div v-for="post in posts" :key="post.id" bg="white dark:gray-950" shadow="lg gray-2/60 dark:none" border="~ border-gray-2/70 dark:gray-8/80"
                        class="rd-md flex flex-col p4">
                        <div class="relative">
                            <img :src="post.cover" alt="illustration" width="1300"
                                bg="gray-1 dark:gray-9" class="w-full rd aspect-[5/3] object-cover">
                            <div
                                class="absolute inset-x-2 bottom-2 px3 py1.5 rd-sm bg-gray-8/80 backdrop-filter backdrop-blur-sm">
                                <p class="font-semibold text-gray-1">{{ post.author }}</p>
                                <p text="sm gray-3">{{ post.publishAt }}</p>
                            </div>
                        </div>
                        <a href="#" un-text="xl gray-9 dark:white" class="mt5 font-semibold">
                            {{ post.title }}
                        </a>
                        <p text="gray-7 dark:gray-3" class="line-clamp-2 my4">
                            {{ post.description }}
                        </p>
                        <div class="flex flex-1 items-end">
                            <a href="#" un-text="blue-6 dark:blue-5" class="flex items-center gap-x-2">
                                Read more
                                <span i-carbon-arrow-up-right text-sm font-medium></span>
                            </a>
                        </div>
                    </div>
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