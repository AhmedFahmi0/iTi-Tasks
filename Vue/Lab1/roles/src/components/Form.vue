<template>
<div class="d-flex gap-5 justify-content-center align-items-center mb-5">
      <button type="button" class="btn btn-dark" @click="selectedComponent = 'Form'">
        Form view
      </button>
      <button type="button" class="btn btn-dark" @click="selectedComponent = 'Admins'">
        Admins Table
      </button>
      <button type="button" class="btn btn-dark" @click="selectedComponent = 'Users'">
        User Table
      </button>
</div>
<div class="m-5 p-5 border border-5" v-if="selectedComponent === 'Form'">
<form @submit.prevent="addUser">
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" v-model="user.name">
  </div>
  <div class="mb-3">
    <label for="age" class="form-label">Age</label>
    <input type="text" class="form-control" id="age" v-model="user.age">
  </div>
  <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="adminRole"
            value="admin"
            v-model="user.role"
          />
          <label class="form-check-label" for="inlineRadio1">Admin</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="userRole"
            value="user"
            v-model="user.role"
          />
          <label class="form-check-label" for="inlineRadio2">User</label>
        </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>

    <div v-if="selectedComponent === 'Admins'">
        <adminsComp @deletingAdmin="deleteAdmin"/>
    </div>
     <div v-if="selectedComponent === 'Users'">
        <usersComp @deletingUser="deleteUser"/>
    </div>
</template>

<script>
    import usersComp from "./Users.vue"
    import adminsComp from "./Admins.vue"
    export default {
        name:"formComp",
        components:{usersComp,adminsComp},
       
        data() {
            return {
                selectedComponent: null,
                user:{},
                users:[],
                admins:[]
            }
        },
        provide() {
    return {
      Users: this.users,
      Admins:this.admins
    };
  },
    methods:{
    addUser(){
      if(this.user.role ==='admin'){
        this.admins.push(this.user)
      }else{
        this.users.push(this.user)
      }
      this.user={}
    },
    deleteUser(index){
        this.users.splice(index, 1);
    },
    deleteAdmin(index){
        this.admins.splice(index, 1);
    }
    }
    }
</script>

<style scoped>

</style>