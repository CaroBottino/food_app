<template>
    <div id="app">
        <NavbarComponent />

        <router-view />

        <CarritoComponent />
        <FooterComponent />
    </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import CarritoComponent from "./components/CarritoComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
    name: "App",
    components: {
        NavbarComponent,
        CarritoComponent,
        FooterComponent,
    },
};
</script>

<style></style>
