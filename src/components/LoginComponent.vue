<template>
    <div class="login">
        <div class="banner">
            <v-img aspect-ratio :src="srcMobile">
            </v-img>
        </div>
        <div class="login-text">
            <v-img src="../assets/logo-horizontal.svg">
            </v-img>
            <p>The solution for rounding and vouchers.
                <br />
                <br />
                You can start from today, to be part of our premises
                adhered or to use the vouchers.
                <br />
                <br />
                Totally <b>free</b>.
            </p>
            <v-btn color="#49D8A4">
                <b>Sign in</b>
                <v-icon right>
                    mdi mdi-arrow-right
                </v-icon>
            </v-btn>

            <a style="color: #212330">
                Don't have an account? <b>Sign up</b>
            </a>
        </div>
    </div>
</template>

<style scoped>
.v-btn {
    text-transform: none;
    letter-spacing: 0;
}

@media only screen and (max-width: 768px) {
    .login {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 25px;
        position: relative;
        background: #FFFFFF;
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
        font-family: 'IBM Plex Sans';
        font-style: normal;
        max-width: 50%;
        flex: none;
        order: 1;
        flex-grow: 0;
        color: #212330;
    }
}

/*desktop*/
@media only screen and (min-width: 768px) {
    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        position: relative;
    }

    .banner {
        transform: rotate(90deg);
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .login-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 48px;
        font-family: 'IBM Plex Sans';
        font-style: normal;
        flex: none;
        order: 1;
        flex-grow: 0;
        color: #212330;
    }

}
</style>

<script lang="ts">
import Window from '../util/VueWindow.vue';
import MobileBanner from '../assets/banner-mobile.svg';
import DesktopBanner from '../assets/banner-desktop.svg';

export default {
  data() {
    return {
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
