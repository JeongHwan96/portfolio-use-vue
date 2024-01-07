<template>
  <div>
    <div :class="{ about1: showAbout === true }">
      <div class="description">
        <p>
          <img src="../../assets/image/name.svg" alt="" class="name" />김정환
        </p>

        <p>
          <img src="../../assets/image/phone.svg" alt="" class="phone" />
          010-8984-4667
        </p>
        <p>
          <img src="../../assets/image/birth.svg" alt="" class="birth" />
          1996.03.12
        </p>
        <p>
          <img src="../../assets/image/house.svg" alt="" class="house" />
          경기도 평택시
        </p>
        <p>
          <img src="../../assets/image/email.svg" alt="" class="email" />
          kosy176@gmail.com
        </p>
        <p>
          <img src="../../assets/image/git.svg" alt="" class="git" />
          <a href="https://github.com/JeongHwan96"
            >https://github.com/JeongHwan96</a
          >
        </p>
        <p>
          <img src="../../assets/image/blog.svg" alt="" class="blog" />
          <a href="https://blog.naver.com/kosy17"
            >https://blog.naver.com/kosy17</a
          >
        </p>
      </div>
      <img src="../../assets/image/my1.jpg" alt="" />
    </div>
  </div>
</template>

<script lang="ts" src="./About.ts"></script>

<style>
@import "../../assets/css/About.css";
</style>
