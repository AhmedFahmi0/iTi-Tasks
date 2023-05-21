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
        <tbody v-for="admin in Admins" :key="admin.name">
          <tr>
            <td>{{ admin.name }}</td>
            <td>{{ admin.age }}</td>
            <td>{{ admin.role }}</td>
            <td><button class="btn btn-danger" @click="$emit('deletingAdmin', index)">Delete</button></td>

          </tr>
        </tbody>
      </table>
    </div>
    </div>
</template>

<script>
    export default {
        name:'adminsComp',
        inject:['Admins'],
        emits:['deletingAdmin']
    }
</script>

<style scoped>

</style>