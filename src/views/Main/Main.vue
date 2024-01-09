<template>
  <div class="wrap">
    <SideBarCom
      @onClickChangeClass="gotchild"
      @onClickAbout="gotabout"
      @onClickEE="gotEE"
    />
    <Port1
      :propsdata="propsdata"
      :class="[{ port1: propsdata === true }, { none: propsdata != true }]"
    />
    <About
      :showAbout="aboutchild"
      :class="[{ about: aboutchild === true }, { none: aboutchild != true }]"
    />
    <EE
      :showEE="eechild"
      :class="[{ EE: eechild === true }, { none: eechild != true }]"
    />
  </div>
</template>

<script lang="ts" src="./Main.ts"></script>
v

<style></style>
