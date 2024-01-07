<template>
  <div>
    <h1 :class="{ show2: propsdata === true }">3rd PortFolio Site</h1>
    <div :class="{ img1: propsdata === true }">
      <img src="../assets/image/port1.png" alt="" />
    </div>
    <div :class="{ img2: propsdata === true }">
      <img src="../assets/image/port2.png" alt="" />
    </div>
    <div :class="{ img3: propsdata === true }">
      <img src="../assets/image/port3.png" alt="" />
    </div>
    <div :class="{ img4: propsdata === true }">
      <img src="../assets/image/port4.png" alt="" />
    </div>
    <router-link to="/PortFolio1"
      ><div :class="{ show1: propsdata === true }">Show Detail</div>
    </router-link>
  </div>
</template>

<script lang="ts" src="./portfolio.ts"></script>

<style>
@import "../assets/css/Port1.css";
</style>
