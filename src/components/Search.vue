<script>
    export default {
        computed: {
            searchInput: {
                get() {
                    return this.$store.state.prices.search.searchInput
                },
                set(value) {
                    this.$store.commit('prices/search/setSearchInput', value)
                }
            }
        }
    }
</script>

<template>
    <div>
        <input type="text" v-model="searchInput" placeholder="Search"/>
    </div>
</template>

<style scoped>
    input {
        margin: 2vh;
        text-align: center;
    }
</style>