<template>
    <v-navigation-drawer color="#F1F3F6" :value="drawer" absolute temporary class="menu-background">
        <v-list-item class="logged-user">
            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="logged-user-text">
                    {{ loggedUser.first_name }} {{ loggedUser.last_name }}
                </v-list-item-title>
                <v-list-item-subtitle class="logged-user-city"> City </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-list dense class="drawer-items">
            <v-list-item link class="drawer-items-text">
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item link class="drawer-items-text">
                <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item link class="drawer-items-text">
                <v-list-item-title>Friends</v-list-item-title>
            </v-list-item>
            <v-list-item link class="drawer-items-text">
                <v-list-item-title>Transactions</v-list-item-title>
            </v-list-item>
            <v-list-item link class="drawer-items-text">
                <v-list-item-title>Settings</v-list-item-title>
            </v-list-item>
            <v-list-item link class="drawer-items-text">
                <v-list-item-title>Help</v-list-item-title>
            </v-list-item>
        </v-list>
        <div class="logout-button">
        <v-btn color="#1B1D28" text @click="logout" >
            <v-icon color="#1B1D28">
                mdi mdi-power-standby
            </v-icon>
            Logout
        </v-btn>
        </div>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  props: ['drawer'],
  data() {
    return {
      drawerOpen: this.open,
      loggedUser: [],
    };
  },
  mounted() {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
  },
  created() {
    this.$root.$refs.DashboardMenu = this;
  },
  methods: {
    logout() {
      this.$router.replace({ name: 'login' });
    },
  },
};
</script>

<style>

.menu-background {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 67px;
}

.logged-user {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 31px 27px;
    gap: 0px;
    background: #FFFFFF;
    border-radius: 0px 0px 53.5px 0px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.logged-user-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    color: #1B1D28;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.logged-user-city {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #7B7F9E;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.drawer-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    padding-top: 100px;
}

.drawer-items-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #1B1D28;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.logout-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.v-btn {
    text-transform: none;
    letter-spacing: 0;
}
</style>
