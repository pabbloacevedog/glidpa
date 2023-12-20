<!-- eslint-disable vue/no-parsing-error -->
<template>
    <q-card class="bg-card">
        <q-card-section class="section-plan">
            <div :class="'text-' + plan.class + ' text-h6 title-plan'">{{ plan.title }}</div>
            <div class="q-mb-xs text-list">{{ plan.description }}</div>
            <div class="q-mb-xs flex items-center justify-center">
                <span :class="'text-' + plan.class + ' signo'">$</span>
                <span class="price f_monserrat_l">{{ plan.price }}</span>
            </div>

            <q-list dense>
                <q-item v-for="feature in plan.features" :key="feature.description" class="list-feature">
                    <q-icon :name="feature.icon" size="xs" :class="'text-' + plan.class + ' q-mr-sm icon-feature'" />
                    <q-item-section class="text-list">{{ feature.description }}</q-item-section>
                </q-item>
            </q-list>
        </q-card-section>
        <q-card-actions align="right" class="column items-center q-pb-lg">
            <q-btn :color="plan.class + ' btn-plan'" label="Seleccionar" rounded />
        </q-card-actions>
    </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PriceCard',
    props: {
        plan: {
            type: Object,
            required: true,
        },
    },
});
</script>

<style scoped>
.bg-card {
    background: rgb(6 0 0 / 50%) !important;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(20px);
    border: 0.5px solid rgb(22 10 26 / 92%);
    border-radius: 35px !important;
    margin: 5px !important;
}

.title-plan {
    font-size: 1.5rem;
    text-align: center;
}

.price {
    font-size: 3rem;
    font-weight: 800;
    color: #ffffff;
    display: inline;
    padding-left: 5px;
}

.signo {
    font-size: 2rem;
    display: inline;
}

.icon-feature {
    font-size: 1rem;
}

.q-btn {
    color: #ffffff;
}


.list-feature {
    padding: 5px 0px;
}

.btn-plan {
    padding: 0 15% 0;
}

.list-feature {
    padding: 5px 0px;
}

@media (min-width: 1200px) {
    .text-list {
        font-size: 1.3rem;
    }

    .icon-feature {
        font-size: 1.5rem !important;
    }

    .bg-card {
        background: rgb(6 0 0 / 50%) !important;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(20px);
        border: 0.5px solid rgb(22 10 26 / 92%);
        border-radius: 35px !important;
        margin: 10px !important;
    }
    .section-plan{
        padding: 10% !important;
    }
}
</style>
