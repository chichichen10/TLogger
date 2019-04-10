<template>
  <div class="sign-up">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>Create a new account</h3>
    <input type="text" v-model="email" placeholder="Email">
    <br>
    <input type="password" v-model="password" placeholder="Password">
    <br>
    <button @click="signUp">Sign Up</button>
    <p></p>
    <h6>
      go back to
      <router-link to="/login">login.</router-link>
    </h6>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert("Account created!"), this.$router.replace("home");
          },
          err => {
            alert("Error!" + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.signUp {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>