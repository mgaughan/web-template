<template>
  <form class="register" @submit.prevent="registerUser">
    <h2 class="display-4">Registration</h2>
    <div class="alert alert-success" role="alert" v-if="success">
      <strong>Registration sent</strong> An email will be sent to you shortly for completing your registration.
    </div>
    <div class="alert alert-danger" role="alert" v-if="errorDetails">
      <strong>Registration error</strong> {{ errorDetails }}
    </div>
    <div class="form-group">
      <label class="sr-only" for="username">Username</label>
      <input class="form-control" v-model="username" placeholder="Username"></input>
    </div>
    <div class="form-group">
      <label class="sr-only" for="email">Email Address</label>
      <input class="form-control" v-model="email" placeholder="Email address"></input>
    </div>
    <div class="form-group">
      <label class="sr-only" for="password">Password</label>
      <input class="form-control" v-model="password" placeholder="Password"></input>
    </div>
    <!-- TODO MG: captcha -->
    <button type="submit" class="btn btn-primary">Register</button>
  </form>  
</template>

<script>
import axios from '../../plugins/http'

const http = axios.axios

export default {
  data () {
    return {
      username: null,
      email: null,
      password: null,
      errorDetails: null,
      success: false
    }
  },
  methods: {
    registerUser
  }
}

function registerUser() {
  const that = this;

  http.post('http://localhost:3000/register', {
    username: this.username,
    password: this.password
  })
  .then((response) => {
    debugger
    if (response && response.data && response.data.success) {
      that.success = true
    } else {
      that.success = false;
      that.errorDetails = response && response.data
        ? response.data.errorMessage
        : 'There was a problem adding this user.'
    }
  })
}

</script>

<style lang="scss" scoped>
.register {
  padding: 2rem;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  border-width: .2rem;
}
</style>