<template>
    <div class="login">
        <div class="banner">
            <v-img :src="isMobile ? srcMobile : srcDesktop">
            </v-img>
        </div>
        <div class="login-text">
            <v-img src="../assets/logo-horizontal.svg">
            </v-img>
            <p>La solución para el redondeo y los vales.
                <br />
                <br />
                Puede empezar desde hoy, para ser parte de nuestros locales
                adheridos o para utilizar los vales.
                <br />
                <br />
                Totalmente <b>gratis</b>.

            </p>
            <v-btn color="#49D8A4">
                Ingresar
                <v-icon right>
                    mdi mdi-arrow-right
                </v-icon>
            </v-btn>

            <v-btn text>
                Registrarse
            </v-btn>
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
        width: 134.8px;
        height: 811.8px;
        flex-grow: 0;
    }

    .login-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 47px;

        width: 190px;
        height: 477.03px;

        flex: none;
        order: 1;
        flex-grow: 0;
    }
}

/*desktop*/
@media only screen and (min-width: 768px) {
    .login {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;

        position: relative;

        background: #FFFFFF;
    }

    .banner {
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .login-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 121px 304px;
        gap: 47px;

        flex: none;
        order: 0;
        flex-grow: 0;
    }

}
</style>

<script>
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
