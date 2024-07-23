<script setup>
import Header from '@/components/common/Header/Header.vue';
import Footer from '@/components/common/Footer/Footer.vue';
import Banner from '@/sections/Home/Banner.vue';
import Landing from '@/sections/Home/Landing.vue';
import Marketers from '@/sections/Home/Marketers.vue';
import Videos from '@/components/Videos/Videos.vue';

</script>

<template>
    <div class="main-layout">
        <div class="max-w-7xl mx-auto"> 
            <Header/>
                <Landing />
                <Marketers />
                <Videos />
                <Banner/>
            <Footer/>
        </div>
    </div>
</template>

<style scoped>
    .main-layout {
    }
</style>
