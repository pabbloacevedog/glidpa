<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="section section-three">
        <div class="image-container col-md-6 col-xs-10 q-pa-sm">
            <img src="@/assets/data-security.png" alt="Data Security">
        </div>
        <div class="content col-md-6 col-xs-10 q-pa-sm">
            <h2>Todo tu trabajo está seguro con nosotros</h2>
            <p>Nos tomamos en serio la seguridad de sus datos, por eso utilizamos protocolos de cifrado avanzados para
                proteger sus archivos en la nube. Tus datos están seguros y protegidos con nosotros.</p>
            <button class="btn btn-primary" @click="tryNow">Registate</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        tryNow() {
            // Implement your logic for trying the service
        }
    }
};
</script>

<style scoped>
.section-three {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 10%;
    background-color: #000;
    color: #fff;
}

.content {
    max-width: 500px;
}

h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
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

.image-container {
    flex-shrink: 0;
    padding: 2rem;
}

.image-container img {
    max-width: 400px;
    height: auto;

    border-radius: 30px !important;
}
</style>
