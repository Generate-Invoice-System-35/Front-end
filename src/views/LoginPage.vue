<template>
  <div class="login">
         <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#">
        <img src="../assets/images/logo_fatture.png" width="150px" />
      </b-navbar-brand>


        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <ul class="navbar-nav ml-auto mr-3">
            <li class="nav-item" >
              <router-link class="nav-link" to="/" style="padding-right:54.5rem"> Home </router-link>
            </li>
          </ul>
       </b-navbar>

    <br>
    <br>
    <h1 style="padding-left: 35px"><strong>Login</strong></h1>


    <div class="loginForm">
      <img src="../assets/images/logo_fatture.png" width="150px" />

      <br>

      <div class="textBox">
        <p>Access and manage your instance from this Fattures account.</p>
      </div>

      <br>

       <div class="input-group">
          <label for="input-username"><strong>Username</strong></label>
          <input v-model="username" type="text" />
        </div>

        <div class="input-group">
          <label for="input-password"><strong>Password</strong></label>
          <input v-model="password" type="password" />
          <button onclick="myFunction()">Show Password</button>
        </div>

        <br>
        <router-link class="SignINButton" to="/dashboard" tag="button">SIGN IN</router-link>
    </div>

  </div>
</template>

<script>

export default {
    name: "LoginPage",
    components: {

        }
};
</script>

<style scoped>
.loginForm{
    margin: 80px auto;
    width: 600px;
    border-radius: 3px;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 20px 20px 100px 20px; 
    box-shadow: 0px 10px 40px rgba(209, 206, 206, 0.25);
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.textBox{
  width: 450px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 40px 30px 40px;
  background: #FFEDE5;
  box-shadow: 0px 10px 50px rgba(255, 255, 255, 0.25);
  text-align: center;
}

input[type=text],
 select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=password], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.SignINButton{
  position: absolute;
  width: 560px;
  height: 60px;
  color: white;
  /* Orange (Gradient) */
  background: linear-gradient(90deg, #F75000 0%, #FF9F71 100%);
  box-shadow: 0px 10px 40px rgba(54, 78, 164, 0.25);
}
</style>