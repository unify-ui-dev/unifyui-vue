<script setup>
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
    publishAt:"2 days ago",
    author:"John doe",
    title:"You're probably fetching data in the wrong way",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error magni ipsam earum placeat"
  },
  {
    id:2,
    cover:"/images/working-on-housing-project.jpg",
    publishAt:"2 days ago",
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
  }
]


</script>
<template>
    <section py20>
        <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto space-y-10">
            <div class="flex flex-col md-flex-row gap-y-8 md-justify-between">
                <div text="center md:left" class="space-y-6 max-w-2xl mx-auto md-mx-0">
                    <h1 text="3xl gray-9 dark:white" class="font-bold capitalize">Our most recent Articles</h1>
                    <p text="gray-7 dark:gray-3" class="max-w-xl mx-auto md-mx-0">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit perferendis eos amet eum repudiandae aspernatur mollitia quos consectetur voluptatibus pariatur 
                    </p>
                </div>
                <div class="flex justify-center md-justify-end">
                    <nuxt-link to="#" border="~ gray-1 dark:gray-9" text="blue-6 dark:gray-3" class="px5 py2.5 flex items-center gap-x-3">
                        See More
                        <span i-carbon-chevron-right></span>                     
                    </nuxt-link>
                </div>
            </div>
            <div class="grid sm-grid-cols-2 gap-6 md-gap-10 lg-grid-cols-3 lg-gap-8">
                <div v-for="post in posts" :key="post.id" class="flex flex-col space-y-5">
                    <img :src="post.cover" alt="illustration" width="1300"
                            bg="gray-1 dark:gray-9" class="w-full rd aspect-[5/3] object-cover">
                    <nuxt-link to="#" un-text="xl gray-9 dark:white" class="mt5 font-semibold">
                        {{ post.title }}
                    </nuxt-link>
                    <p text="gray-7 dark:gray-3">
                        {{ post.description }}
                    </p>
                    <div class="flex items-center gap-x-4">
                        <img src="/images/sidebiew.webp" alt="" width="800" class="w10 h10 object-cover rd-full">
                        <div>
                            <p text="gray-8 dark:gray-50" class="font-semibold">{{ post.author }}</p>
                            <p text="sm gray-6 dark:gray-3">
                                {{ post.publishAt }}
                            </p>
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