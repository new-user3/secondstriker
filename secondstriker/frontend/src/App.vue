<script setup>
import { defineComponent } from 'vue';

// Import the CreateMatch component
import CreateMatch from './components/createMatch.vue';

// Define the component
const App = defineComponent({
  name: 'App',
  // Components declaration
  components: {
    CreateMatch
  }
});
</script>

<template>
  <div>
    <!-- Header -->
    <header>
      <h1>Second Striker</h1>
    </header>

    <!-- Main Content -->
    <main>
      <!-- CreateMatch component -->
      <CreateMatch />
    </main>
  </div>
</template>

<style>
/* Add your custom styles here */
</style>
