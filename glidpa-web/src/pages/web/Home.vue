<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Presentation />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Testimonials />
    <Bottom />
  </div>
</template>

<script>
import Presentation from './sections/Presentation.vue';
import Section2 from './sections/Section2.vue';
import Section3 from './sections/Section3.vue';
import Section4 from './sections/Section4.vue';
import Section5 from './sections/Section5.vue';
import Testimonials from './sections/Testimonials.vue';
import Bottom from './sections/Bottom.vue';
export default {
  components: {
    Presentation,
    Section2,
    Section3,
    Section4,
    Section5,
    Testimonials,
    Bottom
  }
};
</script>

<style>
/* Aquí puedes añadir estilos globales para Home.vue */
</style>
