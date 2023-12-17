<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="reviews-container">
        <h2 class="texto-primary text-testimonials">Comentarios de nuestros usuarios</h2>
        <div class="text-h5 q-mb-lg col-8 text-description">Descubra por qué las empresas aman a nuestros asistentes
            virtuales</div>
        <div class="row q-gutter-md justify-center">
            <div class="review-card col-auto col-xs-12">
                <p>Desde que utilizamos nuestros asistentes de IA, las empresas han experimentado un crecimiento
                    notable.</p>
                <div class="rating">★★★★☆</div>
                <div class="author">John Smith</div>
                <div class="position">Desarrollador líder, soluciones tecnológicas</div>
            </div>
            <div class="review-card col-auto col-xs-12">
                <p>Recomiendo ampliamente a nuestros asistentes de IA para cualquier negocio que busque mejorar.</p>
                <div class="rating">★★★★★</div>
                <div class="author">Emily Johnson</div>
                <div class="position">Product Manager, Growth Co.</div>
            </div>
            <div class="review-card col-auto col-xs-12">
                <p>El éxito de nuestra empresa no sería el mismo sin nuestros asistentes de IA.</p>
                <div class="rating">★★★★★</div>
                <div class="author">Alex Thompson</div>
                <div class="position">CTO, Innovate Corp</div>
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
.reviews-container {
    text-align: center;
}

.review-card {
    background: #000;
    padding: 2rem;
    border-radius: 10px;
    color: #FFF;
    max-width: 300px;
    border: #de1b89 solid 1px;
}

.rating {
    color: #ffc107;
    /* Gold/yellow color for stars */
    margin: 1rem 0;
}

.author {
    font-weight: bold;
    color: #de1b89;
}

.title-testimonials {
    font-size: 3rem;
    text-align: center;
    line-height: 3rem;
}

.text-description {
    text-align: center;
    color: #fff;
}

@media (min-width: 1000px) {
    .title-testimonials {
        font-size: 3rem;
        text-align: center;
        line-height: 3rem;
    }

    .text-description {
        text-align: center;
    }
}
</style>
