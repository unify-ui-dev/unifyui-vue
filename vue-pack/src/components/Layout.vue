<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();

const toggleTheme = useToggle(isDark);
</script>
<template>
    <div class="w-full">
        <RouterView/>
        <div class="fixed bottom-2 right-2 z50 text-gray7 dark-text-gray3">
            <div class="flex items-center">
                Use DarkMode
                <input data-toggle-dark @change="toggleTheme()"
                    class="h5 w9 appearance-none rd-full ring ring-gray-1 dark-ring-gray-7 bg-gray-1 dark:bg-gray-7 relative before:absolute before:w-4 before:h-4 before:top-1/2 before:-translate-y-1/2 before:rd-full left-0 before:bg-gray-4 dark:before:bg-gray-5 checked:before:translate-x-full checked:before:!bg-blue-600 before:content-empty before:transition before:ease-linear before:duration-300 cursor-pointer"
                    type="checkbox" role="switch" />
            </div>
        </div>
    </div>
</template>