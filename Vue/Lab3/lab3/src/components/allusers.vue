<template>
  <div class="p-4">
    <table class="table table-dark mx-5">
  <thead>
    <tr>
      <th scope="col ">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Gender</th>
        <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <th scope="row" v-theme="'blue'">{{ user.id }}</th>
      <td v-theme="'blue'">{{ user.first_name }}</td>
      <td v-theme="'blue'">{{user.last_name}}</td>
      <td v-theme="'blue'">{{ user.gender }}</td>
      <td>
        <router-link :to="`/users/${user.id}`" class=" btn btn-warning m-1">see more</router-link>
      </td>
    </tr>
   
  </tbody>
</table>
  </div>
</template>

<script>
import { ref,onMounted} from "vue";
import axios from 'axios';
export default {
  name: "allusersApp",
  setup(){
    let users=ref(null);
     onMounted(async () => {
      axios.get('http://localhost:2000/users').then((res)=>{
           users.value = res.data;
      });
    });

    return{
              users
            }
  }
}
</script>

<style scoped></style>
