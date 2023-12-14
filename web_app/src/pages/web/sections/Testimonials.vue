<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="section section-six">
    <div class="reviews-container">
      <h2>Opiniones de los usuarios</h2>
      <p>Descubra por qué las empresas aman a nuestros asistentes virtuales</p>
      <div class="reviews">
        <div class="review-card">
          <p>Desde que utilizamos nuestros asistentes de IA, las empresas han experimentado un crecimiento notable.</p>
          <div class="rating">★★★★☆</div>
          <div class="author">John Smith</div>
          <div class="position">Desarrollador líder, soluciones tecnológicas</div>
        </div>
        <div class="review-card">
          <p>Recomiendo ampliamente a nuestros asistentes de IA para cualquier negocio que busque mejorar.</p>
          <div class="rating">★★★★★</div>
          <div class="author">Emily Johnson</div>
          <div class="position">Product Manager, Growth Co.</div>
        </div>
        <div class="review-card">
          <p>El éxito de nuestra empresa no sería el mismo sin nuestros asistentes de IA.</p>
          <div class="rating">★★★★★</div>
          <div class="author">Alex Thompson</div>
          <div class="position">CTO, Innovate Corp</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // You can add methods or data properties if needed
};
</script>

<style scoped>
.section-six {
  background-color: #000;
  color: #fff;
  padding: 5rem 10%;
}

.reviews-container {
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.reviews {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.review-card {
  background: #222;
  padding: 2rem;
  border-radius: 10px;
  max-width: 300px;
}

.rating {
  color: #ffc107; /* Gold/yellow color for stars */
  margin: 1rem 0;
}

.author {
  font-weight: bold;
}

.position {
  font-size: 0.85rem;
  color: #aaa;
}
</style>
