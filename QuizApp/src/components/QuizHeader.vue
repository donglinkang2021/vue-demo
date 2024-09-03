<script setup>
const {
    questionStatus, 
    barPercentage 
} = defineProps([
    "questionStatus", 
    "barPercentage"    
]);
</script>

<template>
    <header>
        <h4>Question {{questionStatus}}</h4>
        <div class="bar">
            <div class="completion" :style="{width: barPercentage}"></div>
        </div>
    </header>
</template>


<style scoped>
header {
    margin-top: 20px;
    display: flex;
    align-items: center;
}

header h4 {
    font-size: 30px;
    margin-right: 20px;
}

.bar {
    width: 300px;
    height: 50px;
    border: 3px solid bisque;
}

.completion {
    width: 0%;
    height: 100%;
    background-color: bisque;
    transition: width 0.5s;
}

</style>