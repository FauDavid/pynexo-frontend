<template>
    <div class="login">
        <div class="banner">
            <v-img aspect-ratio :src="srcMobile"> </v-img>
        </div>
        <div class="login-text">
            <v-img src="../assets/logo-horizontal.svg"> </v-img>
            <p>
                The solution for rounding and vouchers.
                <br />
                <br />
                You can start from today, to be part of our premises adhered or to use the vouchers.
                <br />
                <br />
                Totally <b>free</b>.
            </p>
            <v-form @submit.prevent="login()">
                <h2 style="font-family:IBM Plex Sans"> Welcome back! </h2>
                <v-text-field v-model="username" name="username" label="Username" color="#3A4276">
                </v-text-field>
                <v-text-field v-model="password" name="password" type="password"
                label="Password" color="#3A4276">
                </v-text-field>
                <v-alert outlined type="error" v-if="badCredentials">
                    Username or password is incorrect
                </v-alert>
                <v-btn large type="submit" color="#49D8A4">
                    <h3 style="font-family:IBM Plex Sans">Login</h3>
                    <v-icon right> mdi mdi-arrow-right </v-icon>
                </v-btn>
            </v-form>
            <a style="color: #3A4276"> Don't have an account? <b>Sign up</b> </a>
        </div>
    </div>
</template>

<script lang="ts">
import Window from '../util/VueWindow.vue';
import MobileBanner from '../assets/banner-mobile.svg';
import DesktopBanner from '../assets/banner-desktop.svg';

export default {
  data() {
    return {
      username: '',
      password: '',
      srcMobile: MobileBanner,
      srcDesktop: DesktopBanner,
      badCredentials: false,
    };
  },
  computed: {
    isMobile() {
      return Window.isMobile;
    },
  },
  methods: {
    login() {
      const { username, password } = this;
      const user = this.$store.getters.getUserByUsername(username);
      if (user.username === username && user.password === password) {
        this.badCredentials = false;
        this.$router.replace({ name: 'dashboard', params: { username } });
      } else {
        this.badCredentials = true;
      }
    },
  },
};
</script>

<style scoped>
.v-btn {
    text-transform: none;
    letter-spacing: 0;
}

.login {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 25px;
    position: relative;
    background: #ffffff;
    justify-content: flex-start;
    width: 100%;
}

.banner {
    flex: none;
    order: 0;
    width: 146px;
    flex-grow: 0;
    height: 100vh;
}

.login-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 36px;
    font-family: "Montserrat";
    font-style: normal;
    max-width: 50%;
    flex: none;
    order: 1;
    flex-grow: 0;
    color: #3A4276;
}
</style>
