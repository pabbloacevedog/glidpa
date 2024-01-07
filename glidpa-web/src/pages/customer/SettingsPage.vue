
<template>
    <q-page class="q-px-lg">
        <div class="row q-col-gutter-sm">
            <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
                <q-card class="card-bg text-white no-shadow" bordered>
                    <q-card-section class="text-h6 column justify-center q-pl-lg">
                        <div class="text-h6">Change Password</div>
                    </q-card-section>
                    <q-card-section class="q-pa-sm row">
                        <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <q-item-section>
                                Current Password
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input type="password" dark dense filled color="white" round
                                    v-model="password_dict.current_password" label="Current Password" />
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <q-item-section>
                                New Password
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input type="password" dark dense filled color="white" round
                                    v-model="password_dict.new_password" label="New Password" />
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <q-item-section>
                                Confirm New Password
                            </q-item-section>
                        </q-item>
                        <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <q-item-section>
                                <q-input type="password" dark dense filled round color="white"
                                    v-model="password_dict.confirm_new_password" label="Confirm New Password" />
                            </q-item-section>
                        </q-item>
                    </q-card-section>
                    <q-card-actions align="right">
                        <q-btn rounded class="text-capitalize bg-primary text-white q-ma-lg q-pa-lg">Guardar</q-btn>
                    </q-card-actions>

                </q-card>
            </div>

        </div>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "SettingsPage",
    setup() {
        return {
            password_dict: {},
            company: {},
            lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    }
})
</script>

<style scoped>
.card-bg {
    background-color: #000;
    border: 1px solid #373737;
    border-radius: 30px;
}
</style>
