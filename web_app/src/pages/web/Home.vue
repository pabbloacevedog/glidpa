<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Presentation />
    <Intro />
    <SafeWithUs />
    <Efficiency />
    <JoinCommunity />
    <Testimonials />
    <GetStarted />
  </div>
</template>

<script>
import Presentation from './sections/Presentation.vue';
import Intro from './sections/Intro.vue';
import SafeWithUs from './sections/SafeWithUs.vue';
import Efficiency from './sections/Efficiency.vue';
import JoinCommunity from './sections/JoinCommunity.vue';
import Testimonials from './sections/Testimonials.vue';
import GetStarted from './sections/GetStarted.vue';

export default {
  components: {
    Presentation,
    Intro,
    SafeWithUs,
    Efficiency,
    JoinCommunity,
    Testimonials,
    GetStarted
  }
};
</script>

<style>
/* Aquí puedes añadir estilos globales para Home.vue */
</style>
