<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="call-to-action text-white">
        <div class="content">
            <h2>Comience su viaje en IA con nosotros</h2>
            <p>Transforme su negocio con asistentes virtuales impulsados por IA</p>
            <button class="btn btn-primary" @click="getStarted">Empezar</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getStarted() {
            // Implement the logic for getting started
        }
    }
};
</script>

<style scoped>

.content {
    background-color: #282828;
    border-radius: 25px;
    padding: 5%;

}
.call-to-action {
    text-align: center;
    background-color: #000;
    padding: 5rem 5%;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.brand {
    flex-basis: 20%;
}

.links,
.social-links,
.legal-links {
    flex-basis: 20%;
    list-style: none;
}

.links ul,
.social-links a,
.legal-links a {
    margin-bottom: 0.5rem;
}

.btn-primary {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #222;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: #444;
}
</style>
