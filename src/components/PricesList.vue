<script setup>
    import PriceListItem from '@/components/PriceListItem.vue'
</script>

<script>
export default {
    computed: {
        getPaginatedTickers() {
            if (this.$store.getters["prices/search/getSearchInput"] == "") {
                return this.$store.getters["prices/paginate/getPaginatedTickers"]()
            } else {
                return this.$store.getters["prices/paginate/getPaginatedTickers"]().filter(coin => {
                    return coin.coin_id.includes(this.$store.getters["prices/search/getSearchInput"]) || coin.target_coin_id.includes(this.$store.getters["prices/search/getSearchInput"])
                })
            }
            
        }
    }
}
</script>

<template>
    <ul class="list">
        <PriceListItem v-for="coin in this.getPaginatedTickers" :key="coin.id" :coin="coin"/>
    </ul>
</template>
