<template>
  <div class="row my-5">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center my-4">Signup</h3>
          <div class="form-group">
            <input :class="{'is-invalid': errors.name, 'is-valid': !errors.name && submitted }" v-model="name" type="text" placeholder="Name" class="form-control">
            <div class="errors" v-if="errors.name">
              <small class="text-danger" :key="error" v-for="error in errors.name">{{ error }}</small>
            </div>
          </div>
          <div class="form-group">
            <input :class="{'is-invalid': errors.email, 'is-valid': !errors.email && submitted }" v-model="email" type="text" placeholder="Email" class="form-control">
            <div class="errors" v-if="errors.email">
              <small class="text-danger" :key="error" v-for="error in errors.email">{{ error }}</small>
            </div>
          </div>
          <div class="form-group">
            <input :class="{ 'is-invalid': errors.password, 'is-valid': !errors.password && submitted }" v-model="password" type="password" placeholder="Password" class="form-control">
            <div class="errors" v-if="errors.password">
              <small class="text-danger" :key="error" v-for="error in errors.password">{{ error }}</small>
            </div>
          </div>
          <div class="form-group text-center">
            <button @click="registerUser" :disabled="loading" class="btn btn-success form-control">
              <font-awesome-icon :icon="['fas', 'spinner']" size="1x" v-if="loading" />
              {{loading ? '' : 'Signup'}}
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
      password: '',
      errors: {},
      submitted: false,
      loading: false
    };
  },
  methods: {
    registerUser() {
      this.loading = true
      axios.post('https://react-blog-api.bahdcasts.com/api/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password
      }).then(response => {
        this.loading = false
        this.submitted = true;
        const { data } = response.data; // destructuring: this gets the data property from the object on the right.
        localStorage.setItem('auth', JSON.stringify(data));
        this.$root.auth = data; // have to also set here, since localStorage check is only run 1x, when the page loads

        this.$router.push('home');
      }).catch(({response}) => { // shorthand for getting the response property of the error object.
        this.loading = false;
        this.submitted = true;
        this.errors = response.data;
      });
    }
  }
}
</script>
