<template>
    <div>
        <div id="tableContainer" class="m-auto w-50">
        <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-for="user in Users" :key="user.name">
          <tr>
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.role }}</td>
            <td><button class="btn btn-danger" @click="$emit('deletingUser', index)">Delete</button></td>

          </tr>
        </tbody>
      </table>
        </div>
    </div>
</template>

<script>
    export default {
        name:'usersComp',
        inject:['Users'],
        emits:['deletingUser']
    }
</script>

<style scoped>

</style>