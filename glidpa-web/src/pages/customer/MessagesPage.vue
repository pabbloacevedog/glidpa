<template>
    <q-page class="q-pa-md row ">
        <q-card class="list-border no-shadow">
            <div>
                <q-tabs v-model="tab" align="center" inline-label class="q-mb-lg q-pt-md" dense narrow-indicator>
                    <q-tab class="text-green" name="new" label="Nuevos" icon="mail">
                        <q-badge v-if="unseenCount > 0" color="red" floating>{{ unseenCount }}</q-badge>
                    </q-tab>
                    <q-tab class="text-grey" name="old" label="Leídos" icon="mail"></q-tab>
                </q-tabs>

                <div class="q-gutter-y-sm">

                    <q-tab-panels v-model="tab" animated transition-prev="fade" transition-next="fade" class="text-center">
                        <q-tab-panel name="new">
                            <q-list class="col col-md-4 min-width-list scrollable-list">
                                <q-item v-for="contact in newContacts" :key="contact.id" class="q-ma-md " clickable v-ripple
                                    @click="selectContact(contact)">
                                    <q-item-section avatar>
                                        <q-avatar color="primary" class="text-white">
                                            {{ getFirstLetter(contact.name) }}
                                        </q-avatar>
                                    </q-item-section>

                                    <q-item-section>
                                        <q-item-label>{{ contact.name }}</q-item-label>
                                        <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
                                    </q-item-section>

                                    <q-item-section side>
                                        <q-icon name="chat_bubble" color="green" />
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-tab-panel>

                        <q-tab-panel name="old">
                            <q-list class="col col-md-4 min-width-list scrollable-list">
                                <q-item v-for="contact in oldContacts" :key="contact.id" class="q-ma-md" clickable v-ripple
                                    @click="selectContact(contact)">
                                    <q-item-section avatar>
                                        <q-avatar color="primary">
                                            {{ getFirstLetter(contact.name) }}
                                        </q-avatar>
                                    </q-item-section>

                                    <q-item-section>
                                        <q-item-label>{{ contact.name }}</q-item-label>
                                        <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
                                    </q-item-section>

                                    <q-item-section side>
                                        <q-icon name="chat_bubble" color="grey" />
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-tab-panel>

                    </q-tab-panels>
                </div>
            </div>

        </q-card>

        <q-card flat class=" col q-ml-md q-mt-none message-space">
            <div v-if="selectedContact">
                <q-card-section class="q-mx-md q-mt-md">
                    <div class="text-h4">{{ selectedContact ? selectedContact.name : 'Selecciona un contacto' }}</div>
                </q-card-section>
                <q-card-section class="spacer">
                    <q-item>
                        <q-item-section avatar>
                            <q-avatar color="red">
                                <i class="fa-regular fa-envelope text-white"></i>
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <div class="text-h6">{{ selectedContact ? selectedContact.email : 'Selecciona un contacto' }}
                            </div>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section class="spacer">
                    <q-item>
                        <q-item-section avatar>
                            <q-avatar color="positive">
                                <i class="fa-brands fa-whatsapp text-white"></i>
                            </q-avatar>
                        </q-item-section>

                        <q-item-section>
                            <div class="text-h6">{{ selectedContact ? selectedContact.whatsapp : 'Selecciona un contacto' }}
                            </div>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section class="spacer">
                    <q-item>
                        <q-item-section avatar>
                            <q-avatar color="primary">
                                <i class="fa-brands fa-instagram text-white"></i>
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <div class="text-h6">{{ selectedContact ? selectedContact.instagram : 'Selecciona un contacto'
                            }}
                            </div>
                        </q-item-section>
                    </q-item>
                </q-card-section>
                <q-card-section class="spacer-message">
                    <div class="text-h6">Mensaje:</div>
                    <div class="text-h6 q-pt-md">{{ selectedContact ? selectedContact.message : 'Selecciona un contacto' }}
                    </div>
                </q-card-section>
            </div>
            <div v-else class="message-placeholder">
                <div>
                    <q-avatar color="positive" size="86px">
                        <q-icon name="chat_bubble" class="text-light" />
                    </q-avatar>
                    <div class="text-h4 text-light q-pb-sm q-pt-md">Tus mensajes</div>
                    <div class="text-light text-h6 ">Selecciona un mensaje de tu lista para revisar tus mensajes pendientes.
                    </div>
                </div>
            </div>
        </q-card>
    </q-page>
</template>

<script>
import { ref, computed } from 'vue'
const contactos = [{
    id: 1,
    name: 'Ruddy Jedrzej',
    email: 'rjedrzej0@discuz.net',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.',
    seen: true
}, {
    id: 2,
    name: 'Mallorie Alessandrini',
    email: 'malessandrini1@marketwatch.com',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.',
    seen: true
}, {
    id: 3,
    name: 'Elisabetta Wicklen',
    email: 'ewicklen2@microsoft.com',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.',
    seen: true
}, {
    id: 4,
    name: 'Elisabetta Wicklen',
    email: 'ewicklen2@microsoft.com',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.',
    seen: true
}, {
    id: 5,
    name: 'Elisabetta Wicklen',
    email: 'ewicklen2@microsoft.com',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.',
    seen: true
}, {
    id: 6,
    name: 'Elisabetta Wicklen',
    email: 'ewicklen2@microsoft.com',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.',
    seen: true
}, {
    id: 7,
    name: 'Seka Fawdrey',
    email: 'sfawdrey3@wired.com',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.',
    seen: true
}, {
    id: 8,
    name: 'Seka Fawdrey',
    email: 'sfawdrey3@wired.com',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.',
    seen: true
}, {
    id: 9,
    name: 'Seka Fawdrey',
    email: 'sfawdrey3@wired.com',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.',
    seen: true
},
{
    id: 10,
    name: 'Brunhilde Panswick',
    email: 'bpanswick4@csmonitor.com',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.', seen: false
}, {
    id: 11,
    name: 'Winfield Stapforth',
    email: 'wstapforth5@pcworld.com',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.', seen: false
}
    , {
    id: 12,
    name: 'Winfield Stapforth',
    email: 'wstapforth5@pcworld.com',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.', seen: false
}
    , {
    id: 13,
    name: 'Winfield Stapforth',
    email: 'wstapforth5@pcworld.com',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.', seen: false
}
    , {
    id: 14,
    name: 'Winfield Stapforth',
    email: 'wstapforth5@pcworld.com',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.', seen: false
}
    , {
    id: 15,
    name: 'Winfield Stapforth',
    email: 'wstapforth5@pcworld.com',
    whatsapp: '+54 9 11 1234-5678',
    instagram: '@instagram',
    message: '¡Hola! 👋 Soy el asistente virtual de Glidpa IA. ¿En qué puedo ayudarte hoy? Si tienes alguna pregunta sobre nuestros servicios, funcionalidades de la plataforma, o necesitas asistencia con tu cuenta, estaré encantado de asistirte.', seen: false
}
]

export default {
    setup() {
        const selectedContact = ref(null); // Inicialmente, ningún contacto está seleccionado
        const selectContact = (contact) => {
            selectedContact.value = contact;
        };
        const contacts = ref(contactos);
        const getFirstLetter = (name) => {
            return name ? name.charAt(0).toUpperCase() : '';
        };
        const newContacts = computed(() => {
            return contacts.value.filter(contact => !contact.seen);
        });
        const unseenCount = computed(() => {
            return contacts.value.filter(contact => !contact.seen).length;
        });

        const oldContacts = computed(() => {
            return contacts.value.filter(contact => contact.seen);
        });
        return {
            contacts,
            selectedContact,// Inicialmente, ningún contacto está seleccionado
            selectContact,
            newContacts,
            oldContacts,
            tab: ref('new'),
            getFirstLetter,
            unseenCount
        }
    }
}
</script>
<style scoped>
.scrollable-list {
    max-height: 70vh;
    /* Ajusta esto según las necesidades de tu diseño */
    overflow-y: auto;
}

.spacer {
    padding: 0px 16px
}

.spacer-message {
    padding: 26px 36px
}

.min-width-list {
    min-width: 345px !important;
}

.message-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
}

@media (max-width: 600px) {
    .message-space {
        margin: 20px 2px
    }
}
</style>
