<template>
  <div class="row my-5">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center my-4">Signup</h3>
          <div class="form-group">
            <input v-model="name" type="text" placeholder="Name" class="form-control">
          </div>
          <div class="form-group">
            <input v-model="email" type="text" placeholder="Email" class="form-control">
          </div>
          <div class="form-group">
            <input v-model="password" type="password" placeholder="Password" class="form-control">
          </div>
          <div class="form-group text-center">
            <button @click="registerUser" class="btn btn-success form-control">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    registerUser() {
      axios.post('https://react-blog-api.bahdcasts.com/api/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password
      }).then(response => {
        const { data } = response.data; // destructuring: this gets the data property from the object on the right.
        localStorage.setItem('auth', JSON.stringify(data));
        this.$root.auth = data; // have to also set here, since localStorage check is only run 1x, when the page loads
      }).catch(({response}) => { // shorthand for getting the response property of the error object.
        console.log(response)
      });
    }
  }
}
</script>
