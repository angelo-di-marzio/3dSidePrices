<script>
    export default {
        computed: {
            isSelected() {
                return this.$store.getters["prices/getSelectedTicker"].base != undefined
            }
        }
    }
</script>

<template>
    <div v-show="isSelected">
        1 {{ this.$store.getters["prices/getSelectedTicker"].coin_id }} = {{this.$store.getters["prices/getSelectedTicker"].last}} {{ this.$store.getters["prices/getSelectedTicker"].target_coin_id}} 
    </div>
</template>


<style scoped>
    div {
        padding-bottom: 1vh;
        border-bottom: 1px solid var(--color-divide);
    }
</style>
