<script setup>
    const categories = [
        {
            text: 'Videography & Photography'
        },
        {
            text: 'Pets'
        },
        {
            text: 'Sports & Fitness'
        },
        {
            text: 'Business & Career'
        },
        {
            text: 'Home'
        },
        {
            text: 'Videography & Photography'
        },
    ]
</script>

<template>
    <div>
        <div v-for="category of categories">
            <span>
                {{ category.text }}
            </span>
        </div>
    </div>
</template>

<style scoped>
</style>