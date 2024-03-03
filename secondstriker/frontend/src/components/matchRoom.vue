<template>
  <div>
    <h2>Match Room</h2>

    <!-- Display the generated matchroom ID -->
    <p>Matchroom ID: {{ matchroomId }}</p>

    <!-- Input for stake amount -->
    <input type="number" v-model="stakeAmount" placeholder="Stake Amount">
    <button @click="proceedToPay">Proceed to Pay</button>

    <!-- Inputs for match results -->
    <input type="text" v-model="matchResults" placeholder="Match Results">
    <button @click="submitMatchResults">Submit Match Results</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define reactive variables
const matchroomId = ref('');
const stakeAmount = ref('');
const matchResults = ref('');


// Function to handle proceeding to pay
const proceedToPay = () => {
  // Implement logic to proceed to pay with the stake amount
  console.log('Proceeding to pay with stake amount:', stakeAmount.value);
};

// Function to submit match results
const submitMatchResults = () => {
  // Implement logic to submit match results
  console.log('Submitting match results:', matchResults.value);
};

// Generate matchroom ID when the component is mounted
import { onMounted } from 'vue';
onMounted(generateMatchroomId);
</script>
