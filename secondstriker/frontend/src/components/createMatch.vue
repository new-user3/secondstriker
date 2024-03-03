<template>
  <div>
    <h2>Match Room</h2>
    <button @click="createMatchRoom">Create Match</button>
    <button @click="showJoinMatchForm">Join Match</button>

    <section v-if="joinMatchFormVisible">
      <input type="text" v-model="matchRoomId" placeholder="Enter Match ID" required>
      <button @click="joinMatch">Join Match</button>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/api'; // Replace with your API service

const matchRoomId = ref('');
const joinMatchFormVisible = ref(false);
const router = useRouter();

const createMatchRoom = async () => {
  try {
    // 1. Prepare data for the request:
    const matchRoomData = {
      name: 'My Match Room',
      capacity: 2 // Max players allowed
      // ... other properties
    };

    // 2. Send the request to the API:
    const response = await api.post('/matchRoom', matchRoomData);

    // 3. Handle the response:
    if (response.status === 201) { // Check for successful creation (status code 201)
      const matchRoomId = response.data.id; // Retrieve the generated ID from the response
      router.push(`/matchRoom/${matchRoomId.value}`); // Navigate to the match room page
    } else {
      console.error('Error creating match room:', response.statusText);
    }
  } catch (error) {
    console.error('Error creating match room:', error);
  }
};

const showJoinMatchForm = () => {
  joinMatchFormVisible.value = true;
};

const joinMatch = async () => {
  try {
    // Make API request to join the match room
    await api.post(`/matchRoom/${matchRoomId.value}/join`);
    // Redirect user to the match room page after joining the match
    console.log('Joined match room successfully!');
  } catch (error) {
    console.error('Error joining match room:', error);
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
