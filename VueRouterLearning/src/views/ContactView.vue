<script setup>
import { useRoute } from 'vue-router';
import cars from '../data/cars.json';

const route = useRoute();
const car = cars.find(car => car.id === Number(route.params.id));
</script>

<template>
    <div v-if="car">
        <h1>
            Contact Info
        </h1>
        <p> {{ car.contact.dealer }} </p>
        <p> {{ car.contact.phone }} </p>
    </div>
</template>