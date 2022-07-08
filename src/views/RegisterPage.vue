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
    <h1 style="padding-left: 35px"><strong>Register</strong></h1>


    <div class="loginForm">
      <img src="../assets/images/logo_fatture.png" width="150px" />

      <br>

      <div class="textBox">
        <p>Access and manage your instance from this Fattures account.</p>
      </div>

      <br>

        <div class="input-group">
          <label for="name"><strong>Nama</strong></label>
          <input id="name" 
                 v-model="name" 
                 type="name" 
                 name="name" />
        </div>

        <div class="input-group">
          <label for="username"><strong>Username</strong></label>
          <input id="username" 
                 v-model="username" 
                 type="username" 
                 name="username" />
        </div>

        <label class="label"><strong>Password</strong></label>
              <div class="field has-addons">
                <div class="control is-expanded">
                  <input
                    v-if="showPassword"
                    type="text"
                    class="input"
                    v-model="password"
                  />
                  <input
                    v-else
                    type="password"
                    class="input"
                    v-model="password"
                  />
                </div>

                <div class="buttonEyes">
                  <button class="buttonEye" @click="toggleShow">
                      <b-icon icon='eye' variant="light"></b-icon>
                  </button>
                </div>
              </div>

        <div class="input-group">
          <label for="email"><strong>Email</strong></label>
          <input id="email" 
                 v-model="email" 
                 type="email" 
                 name="email" />
        </div>

        <div class="input-group">
          <label for="phone_number"><strong>No. Hp</strong></label>
          <input id="phone_number" 
                 v-model="phone_number" 
                 type="phone_number" 
                 name="phone_number" />
        </div>

        <div class="input-group">
          <label for="address"><strong>Alamat</strong></label>
          <input id="address" 
                 v-model="address" 
                 type="address" 
                 name="address" />
        </div>

        <br>
         <button class="SignUpButton" @click="doRegister" >Start</button>
    </div>

  </div>
</template>

<script>

export default {
    name: "LoginPage",
    data() {
      return {
        showPassword: false,
        name: "",
        password: null,
        username:null,
        email: "",
        phone_number: "",
        address: "",
        errotText: "",
       };
    },
      computed: {
        buttonLabel() {
        return this.showPassword ? "Hide" : "Show";
        }
      },
      methods: {
        toggleShow() {
        this.showPassword = !this.showPassword;
        },

        async doRegister() {
          const result = await this.$store.dispatch("auth/register", {
            name: this.name,
            username: this.username,
            password: this.password,
            email: this.password,
            phone_number: this.phone_number,
            address: this.address,
          });
          if (result) {
            alert("Register telah berhasil");
            this.$router.push("/dashboard");
          } else {
            alert("Register gagal", this.errorMsg);
          }
        },
      }, 



};
</script>

<style scoped>
.loginForm{
    margin: 5px auto;
    width: 600px;
    border-radius: 3px;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 20px 20px 80px 20px; 
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
  color: #353C78;
}

input[type=name],
input[type=username],
input[type=email],
input[type=phone_number],
input[type=address],
select {
  width: 100%;
  padding: 3px 20px;
  margin: 3px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=password], 
input[type=text],
select {
  width: 90%;
  padding: 3px 20px;
  margin: 3px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.SignUpButton{
  position: absolute;
  width: 560px;
  height: 60px;
  color: white;
  /* Orange (Gradient) */
  background: linear-gradient(90deg, #F75000 0%, #FF9F71 100%);
  box-shadow: 0px 10px 40px rgba(54, 78, 164, 0.25);
}

.buttonEyes{
  margin: -38px 0 0 510px
}

.buttonEye{
  background: #572984;
  padding: 3px 20px;
  margin: 3px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>

