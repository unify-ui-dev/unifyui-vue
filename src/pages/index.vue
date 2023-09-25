<script setup>
import { useHead } from 'unhead'
import { blocGroups } from '../data/blocks';

useHead({
  title: 'Unify-UI ressources',
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
</script>
<template>
    <main>
        <div class="fixed top-0 right-4 w20 flex justify-end py4 px4">
            <div class="flex items-center">
                Use DarkMode
                <input data-toggle-dark
                    class="h5 w9 appearance-none rd-full ring ring-gray-1 dark-ring-gray-7 bg-gray-1 dark:bg-gray-7 relative before:absolute before:w-4 before:h-4 before:top-1/2 before:-translate-y-1/2 before:rd-full left-0 before:bg-gray-4 dark:before:bg-gray-5 checked:before:translate-x-full checked:before:!bg-blue-600 before:content-empty before:transition before:ease-linear before:duration-300 cursor-pointer"
                    type="checkbox" role="switch" />
            </div>
        </div>
        <section>
            <div v-for="blocgroup in blocGroups" :key="blocgroup.id" class="mx-auto max-w-7xl py-10 px-5 space-y-10">
                <h1 text-2xl font-semibold text-gray-9 dark-text-white>
                    {{ blocgroup.title }}
                </h1>
                <div grid grid-cols-2 md-grid-cols-4 gap-6 text="gray-8 dark:gray-2"
                    un-children="p6 rd-md bg-gray-1 dark:bg-gray-9 border-gray-2 dark:border-gray-8">
                    <router-link v-for="bloc in blocgroup.items" :key="bloc.id" :to="bloc.link"> 
                        {{ bloc.title }}
                    </router-link>
                </div>
            </div>
        </section>
    </main>
</template>
<style >
body{
    --at-apply: font-dms bg-white dark-bg-gray950
}
</style>