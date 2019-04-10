<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>Log In</h3>
    <input type="text" v-model="email" placeholder="Email">
    <br>
    <input type="password" v-model="password" placeholder="Password">
    <br>
    <button @click="login">Log In</button>
    <p></p>
    <h6>
      Don't have an account?
      <router-link to="/sign-up">Sign Up</router-link>
    </h6>
  </div>
</template>

<script>
import firebase from "firebase";
import HelloWorldVue from "../components/HelloWorld.vue";

export default {
  name: "login",
  components: {
    HelloWorldVue
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert("Logged in."), this.$router.replace("home");
          },
          err => {
            alert("ERROR!" + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
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
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>