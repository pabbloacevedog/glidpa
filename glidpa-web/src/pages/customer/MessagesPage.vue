<template>
    <div class="q-pa-md row " style="min-height;: 90vh">
        <q-list bordered dark class="col  col-md-4 list-border">
            <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
                <q-item-section avatar>
                    <q-avatar color="primary" text-color="white">
                        {{ contact.letter }}
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

            <q-separator />
            <q-item-label header>Offline</q-item-label>

            <q-item v-for="contact in offline" :key="contact.id" class="q-mb-sm" clickable v-ripple>
                <q-item-section avatar>
                    <q-avatar>
                        <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
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
        <q-card flat bordered dark class="bg-black col message-border">
            <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>

            <q-separator inset />

            <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
const contacts = [{
    id: 1,
    name: 'Ruddy Jedrzej',
    email: 'rjedrzej0@discuz.net',
    letter: 'R'
}, {
    id: 2,
    name: 'Mallorie Alessandrini',
    email: 'malessandrini1@marketwatch.com',
    letter: 'M'
}, {
    id: 3,
    name: 'Elisabetta Wicklen',
    email: 'ewicklen2@microsoft.com',
    letter: 'E'
}, {
    id: 4,
    name: 'Seka Fawdrey',
    email: 'sfawdrey3@wired.com',
    letter: 'S'
}]

const offline = [{
    id: 5,
    name: 'Brunhilde Panswick',
    email: 'bpanswick4@csmonitor.com',
    avatar: 'avatar2.jpg'
}, {
    id: 6,
    name: 'Winfield Stapforth',
    email: 'wstapforth5@pcworld.com',
    avatar: 'avatar6.jpg'
}]

export default {
    setup() {
        return {
            contacts,
            offline
        }
    }
}
</script>
<style scoped>
.list-border{
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;

}
.message-border{
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
}
</style>
