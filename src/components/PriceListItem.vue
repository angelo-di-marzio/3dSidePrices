<script>
    export default {
        props: ['coin'],
        methods: {
            select() {
                this.$store.commit("prices/setSelectedTicker", this.coin)
            }
        },
        computed: {
            classes() {
                return [
                    this.$store.getters["prices/getSelectedTicker"].id === this.coin.id ? "selected" : ""
                ]
            }
        }
    }
</script>

<template>
    <li :class="classes" @click="select">
        <div>
           {{ coin.coin_id }}/{{ coin.target_coin_id }} 
        </div>
    </li>
</template>

<style scoped>
    li {
        cursor:pointer;
    }
    .selected {
        color: var(--green);
    }
</style>