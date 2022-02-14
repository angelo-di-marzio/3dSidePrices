<script>
    export default {
        methods: {
            select(currentPage) {
                this.$store.commit("prices/paginate/setCurrentPage", currentPage)
            }
        },
        computed: {
            pages() {
                return this.$store.getters["prices/paginate/getTotalPages"]
            },
            currentPage() {
                return this.$store.getters["prices/paginate/getCurrentPage"]
            }
        }
    }
</script>

<template>
    <div class="pagination">
         <!-- use computed property for active -->
        <a v-for="page in pages" :class="{ active: (page === currentPage) }" :key="page" href="#" @click="select(page)">
            {{ page }}
        </a>
    </div>
</template>

<style scoped>
    div {
        padding: 2vh;
    }
    a {
        margin: 1vw;
        padding: 6px;
    }
    a.active {
        background-color: var(--color-hover);
    }
</style>