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
            <v-form @submit.prevent="login">
                <h2 style="font-family:IBM Plex Sans"> Welcome back! </h2>
                <v-text-field required color="#3A4276">
                    <template v-slot:label>
                        <v-icon color="#3A4276" style="vertical-align: left">
                            person
                        </v-icon>
                        Username
                    </template>
                </v-text-field>
                <v-text-field type="password" label="Password" required color="#3A4276">
                    <template v-slot:label>
                        <v-icon color="#3A4276" style="vertical-align: left">
                            lock
                        </v-icon>
                        Password
                    </template>
                </v-text-field>
                <v-btn type="submit" color="#49D8A4">
                    <h3 style="font-family:IBM Plex Sans">Login</h3>
                    <v-icon right> mdi mdi-arrow-right </v-icon>
                </v-btn>
            </v-form>
            <a style="color: #212330"> Don't have an account? <b>Sign up</b> </a>
        </div>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans");
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
    height: 814px;
    flex-grow: 0;
}

.login-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 48px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    max-width: 50%;
    flex: none;
    order: 1;
    flex-grow: 0;
    color: #212330;
}
</style>

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
    };
  },
  computed: {
    isMobile() {
      return Window.isMobile;
    },
  },
};
</script>
