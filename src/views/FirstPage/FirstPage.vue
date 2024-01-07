<template>
  <div class="main_page">
    <div class="container">
      <div class="login_animation_section">
        <div class="login_icon_section">
          <div class="login_icon_container">
            <h4 class="login_icon_h4">
              <i data-v-64d40f9e="" class="icon-fux-password"></i>
            </h4>
            <p class="signin">SIGN IN</p>
            <div class="test">
              <input class="login_input" value="Welcome" />
            </div>
            <div class="test">
              <input class="password_input" value="************" />
            </div>

            <router-link to="/main"
              ><button class="login">LOGIN</button></router-link
            >
          </div>
        </div>
      </div>
      <div class="desc_section">
        <div class="main_desc">
          <p class="sc-breuTD kqireI">
            개발 지식을 갖추고 있는 QE Tester <br />
            안녕하세요 제 이름은 김정환 입니다.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./FirstPage.ts" />

<style>
@import "../../assets/css/FirstPage.css";
</style>
