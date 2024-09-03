<script setup>
import { useRoute, useRouter, RouterView } from 'vue-router';
import cars from '../data/cars.json';
const route = useRoute(); // to get infomation from the route
const router = useRouter(); // to modify or navigate to a different route

const carID = Number(route.params.id);
const car = cars.find(car => car.id === carID);

const showContact = () => {
    router.push(`/cars/${carID}/contact`);
}
</script>

<template>
    <div v-if="car">
        <h1>Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>
        <button @click="showContact">Click for contact</button>
        <RouterView />
    </div>
    <div v-else>
        <h1>Car not found</h1>
    </div>
</template>