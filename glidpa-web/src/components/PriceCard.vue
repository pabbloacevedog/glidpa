<!-- eslint-disable vue/no-parsing-error -->
<template>
    <q-card class="bg-black">
        <q-card-section>

            <div :class="'text-' + plan.class + ' text-h6 title-plan'">{{ plan.title }}</div>
            <div class="text-caption q-mb-xs">{{ plan.description }}</div>
            <div class="q-mb-xs flex items-center justify-center">
                <span :class="'text-' + plan.class + ' signo'">$</span>
                <span class="price">{{ plan.price }}</span>
            </div>

            <q-list dense>
                <q-item v-for="feature in plan.features" :key="feature.description" class="list-feature">
                    <q-icon :name="feature.icon" size="xs" :class="'text-' + plan.class + ' q-mr-sm icon-feature'" />
                    <q-item-section>{{ feature.description }}</q-item-section>
                </q-item>
            </q-list>
        </q-card-section>
        <q-card-actions align="right" class="column items-center q-pb-lg">
            <q-btn :color="plan.class + ' btn-plan'" label="Seleccionar" rounded />
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
    name: 'PriceCard',
    props: {
        plan: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.bg-black {
    background-color: #000;
    border-radius: 25px;
}

.title-plan {
    font-size: 1.5rem;
}

.price {
    font-size: 3rem;
    font-weight: 800;
    color: #ffffff;
    display: inline;
    padding-left:5px ;
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
</style>
