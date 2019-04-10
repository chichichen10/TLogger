<template>
  <div class="nb">
    <b-navbar toggleable="lg" type="dark" variant="info" fixed>
      <b-navbar-brand href="#">
        <img src="../assets/logo.png" style="width:30px">TLogger
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/home">home</b-nav-item>
          <b-nav-item to="/upload">upload</b-nav-item>
          <b-nav-item to="/view">view</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>{{user}}</em>
            </template>
            <b-dropdown-item to="/user">My Posts</b-dropdown-item>
            <b-dropdown-item to="/logout">Log Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: firebase.auth().currentUser.email,
      signin: false
    };
  }
};
</script>