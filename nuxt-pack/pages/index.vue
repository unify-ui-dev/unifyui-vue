<script setup>
import { blocGroups } from '~/data/blocks';
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
        <section>
            <div v-for="blocgroup in blocGroups" :key="blocgroup.id" class="mx-auto max-w-7xl py-10 px-5 space-y-10">
                <h1 text-2xl font-semibold text-gray-9 dark-text-white>
                    {{ blocgroup.title }}
                </h1>
                <div grid grid-cols-2 md-grid-cols-4 gap-6 text="gray-8 dark:gray-2"
                    un-children="p6 rd-md bg-gray-1 dark:bg-gray-9 border-gray-2 dark:border-gray-8">
                    <nuxt-link v-for="bloc in blocgroup.items" :key="bloc.id" :to="bloc.link"> 
                        {{ bloc.title }}
                    </nuxt-link>
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