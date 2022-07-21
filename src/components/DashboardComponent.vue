<template>
    <div class="dashboard">
        <div class="top">
            <div class="top-menu">
                <v-btn icon @click.native="drawer=!drawer">
                    <v-icon color="#3A4276">
                        mdi mdi-dots-horizontal
                    </v-icon>
                </v-btn>
            </div>
            <div class="top-menu-name">
                <p><b>{{ this.firstName + ' ' + this.lastName }}</b></p>
            </div>
            <v-spacer></v-spacer>
            <div class="top-logo">
                <v-img src="../assets/logo-horizontal.svg"></v-img>
            </div>
        </div>
        <DashboardMenu :drawer="drawer"></DashboardMenu>
        <div class="my-account">
            <div class="my-account-text">
                <p>My account</p>
            </div>
            <v-card elevation="0" color="#F1F3F6" class="balance-card">
                <div class="balance-card-text">
                    <v-card-title class="balance-card-text-money">
                        <p style="color: #3A4276"><b>{{ this.balance }}</b></p>
                    </v-card-title>
                    <v-card-subtitle class="balance-card-text-balance">
                        <p>Actual balance</p>
                    </v-card-subtitle>
                </div>
                <div class="balance-card-button">
                    <v-btn elevation="0" fab color="#49D8A4">
                        <v-icon color="#1B1D28">mdi mdi-plus</v-icon>
                    </v-btn>
                </div>
            </v-card>
        </div>
        <div class="send-voucher">
            <div class="send-voucher-top">
                <div class="send-voucher-text">
                    <p>Send a voucher</p>
                </div>
                <div class="send-voucher-icon">
                    <v-btn icon>
                        <v-icon color="#3A4276">mdi mdi-qrcode</v-icon>
                    </v-btn>
                </div>
            </div>
            <div class="send-voucher-users">
                <v-btn elevation="0" fab color="#49D8A4">
                    <v-icon color="#3A4276">mdi mdi-plus</v-icon>
                </v-btn>
                <v-list-item v-for="(contact, i) in contacts.slice(0, 2)" :key="i">
                    <v-card elevation="0" color="#F1F3F6" class="send-voucher-user-card">
                        <div class="send-voucher-user-card-content">
                            <v-avatar color="#3A4276">
                                <span class="white--text text-h5">
                                {{contact.first_name.slice(0, 1)}}{{contact.last_name.slice(0, 1)}}
                                </span>
                            </v-avatar>
                            <v-card-title class="send-voucher-user-card-text">
                                <p>{{contact.first_name}}</p>
                            </v-card-title>
                        </div>
                    </v-card>
                </v-list-item>

            </div>
        </div>
        <div class="send-voucher">
            <div class="send-voucher-top">
                <div class="send-voucher-text">
                    <p>Services</p>
                </div>
                <div class="send-voucher-icon">
                    <v-btn icon>
                        <v-icon color="#3A4276">mdi mdi-tune</v-icon>
                    </v-btn>
                </div>
            </div>
            <div class="services">
                <div class="service-card">
                    <v-btn class="service-card-icon" icon large color="#3A4276">
                        <v-icon>mdi mdi-ticket-percent-outline</v-icon>
                    </v-btn>
                    <div class="service-card-text">
                        <p>Use voucher</p>
                    </div>
                </div>
                <div class="service-card">
                    <v-btn class="service-card-icon" icon large color="#3A4276">
                        <v-icon>mdi mdi-store-marker-outline</v-icon>
                    </v-btn>
                    <div class="service-card-text">
                        <p>Affiliated shops</p>
                    </div>
                </div>
                <div class="service-card">
                    <v-btn class="service-card-icon" icon large color="#3A4276">
                        <v-icon>mdi mdi-percent-circle-outline</v-icon>
                    </v-btn>
                    <div class="service-card-text">
                        <p>Discounts in shops</p>
                    </div>
                </div>
                <div class="service-card">
                    <v-btn class="service-card-icon" icon large color="#3A4276">
                        <v-icon>mdi mdi-help-circle-outline</v-icon>
                    </v-btn>
                    <div class="service-card-text">
                        <p>Customer support</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import DashboardMenu from './DashboardMenu.vue';

export default {
  components: {
    DashboardMenu,
  },
  data() {
    return {
      drawer: false,
      loggedUser: [],
      username: '',
      balance: '',
      firstName: '',
      lastName: '',
      contacts: '',
    };
  },
  methods: {
    logout() {
      this.$router.replace({ name: 'login' });
    },
  },
  mounted() {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    this.username = this.loggedUser.username;
    this.balance = this.$store.getters.getBalanceByUsername(this.username);
    this.firstName = this.$store.getters.getFirstNameByUsername(this.username);
    this.lastName = this.$store.getters.getLastNameByUsername(this.username);
    this.contacts = this.$store.getters.getContactsByUsername(this.username);
  },
};
</script>

<style scoped>
.dashboard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 28px 0px;
    position: relative;
    background: #FFFFFF;
}

.menu-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    color: #3A4276;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.top {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
    justify-content: space-between;
    width: 100%;
}

.top-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    flex: none;
    order: 2;
    flex-grow: 0;
}

.top-menu-name {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 15px;
    flex: none;
    order: 0;
    flex-grow: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 14px;
    color: #3A4276;
}

.top-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.my-account {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    flex: none;
    order: 1;
    flex-grow: 0;
    width: 100%;
}

.my-account-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    color: #3A4276;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.balance-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 100px;
    background: #F1F3F6;
    flex: none;
    order: 1;
    flex-grow: 0;
    justify-content: space-between;
    width: 100%;
}

.balance-card-text {
    flex: none;
    order: 0;
    flex-grow: 0;
    line-height: 0;
}

.balance-card-text-money {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-size: 34px;
    color: #171822;
}

.balance-card-text-balance {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #3A4276;
}

.balance-card-button {
    flex: none;
    order: 1;
    flex-grow: 0;
    padding-right: 20px;
}

.send-voucher {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    flex: none;
    order: 2;
    flex-grow: 0;
    width: 100%;
}

.send-voucher-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: inherit;
    height: inherit;
}

.send-voucher-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    color: #3A4276;
    order: 0;
}

.send-voucher-icon {
    order: 1;
    padding-bottom: 10px;
}

.send-voucher-users {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: none;
    order: 1;
}

.send-voucher-user-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    background: #F1F3F6;
    flex: none;
    order: 1;
    flex-grow: 0;
    border-radius: 12px;
    width: 80px;
    height: 100px;
    padding-top: 12px;
}

.send-voucher-user-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.send-voucher-user-card-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 12px;
    text-align: center;
    line-height: 0;
    color: #3A4276;
}

.services {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 20px;
    align-items: center;
    padding: 0px;
    background: #FFFFFF;
    flex: none;
}

.service-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 10px;
}

.service-card-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F1F3F6;
    width: 64px;
    height: 64px;
    border-radius: 12px;
    flex: none;
    order: 0;
    flex-grow: 0;
    color: #3A4276;
}

.service-card-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: #7B7F9E;
    flex: none;
    order: 1;
    flex-grow: 0;
}
</style>
