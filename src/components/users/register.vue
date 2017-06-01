<template>
  <form class="register" @submit.prevent="registerUser">
    <h2>Registration</h2>
    <div class="alert alert-success" role="alert" v-if="success">
      <strong>Registration sent</strong> An email will be sent to you shortly for completing your registration.
    </div>
    <div class="alert alert-danger" role="alert" v-if="errorDetails">
      <strong>Error</strong> {{ errorDetails }}
    </div>
    <div class="form-group">
      <label for="email">Email Address</label>
      <input class="form-control" v-model="email" name="email" placeholder="Enter email"></input>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input class="form-control" v-model="password" name="password" placeholder="Password" type="password"></input>
    </div>
    <div class="form-group">
      <label for="passwordConfirmation">Confirm Password</label>
      <input class="form-control" v-model="passwordConfirmation" name="passwordConfirmation" placeholder="Confirm Password" type="password"></input>
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
      email: null,
      password: null,
      passwordConfirmation: null,
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

  if (this.password !== this.passwordConfirmation) {
    this.success = false;
    this.errorDetails = 'Password confirmation does not match.'
    return;
  }

  http.post('http://localhost:3000/register', {
    email: this.email,
    password: this.password
  })
  .then(response => {
    if (response && response.data && response.data.success) {
      that.success = true
      that.errorDetails = null;
    } else {
      that.success = false
      that.errorDetails = response && response.data
        ? response.data.message
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