<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Heading from '@/components/Heading.vue'

</script>

<template>
  <header>
    <div class="wrapper">
      <Heading title="3D-Side" phrase="Uniswap pairs & prices"/>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/prices">Prices</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style>
  @import '@/assets/base.css';

  #app {
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem;

    font-weight: normal;
  }

  main {
    text-align: center;
    padding-top: 1vh;
  }

  main li {
    list-style-type: none; 
  }

  main .list {
    padding-left: 0;
  }

  header {
    line-height: 1.5;
  }


  a,
  .green {
    text-decoration: none;
    color: var(--green);
    transition: 0.4s;
  }

  @media (hover: hover) {
    a:hover {
      background-color: var(--color-hover)
    }
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-divide);
  }

  nav a:first-of-type {
    border: 0;
  }
</style>
