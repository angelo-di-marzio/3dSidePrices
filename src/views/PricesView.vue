<script setup>
    import PricesList from '@/components/PricesList.vue'
    import Search from '@/components/Search.vue'
    import Details from '@/components/Details.vue'
    import Paginate from '@/components/Paginate.vue'
</script>

<script>
export default {
  created() {
    this.$store.dispatch('prices/retrieveAllTickers')
  }
}
</script>

<template>
  <Details/> 
  <Search/>
  <PricesList/>
  <Paginate/>
</template>