<template>
  <div class="wrap">
    <SideBarCom
      @onClickChangeClass="gotchild"
      @onClickAbout="gotabout"
      @onClickEE="gotEE"
      @onClickqna="gotqna"
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
    <EE2
      :showEE="eechild"
      :class="[{ EE2: eechild === true }, { none: eechild != true }]"
    />
    <QnA
      :showQnA="qnachild"
      :class="[{ qna: qnachild === true }, { none: qnachild != true }]"
    />
  </div>
</template>

<script lang="ts" src="./Main.ts"></script>
v

<style></style>
