<template>
  <div>
    <div :class="{ EE1: showEE === true }">
      <div class="EEWrap">
        <div class="highschool">
          경기창조고등학교
          <hr />
          2012.03 ~ 2015.02(이과)
        </div>
        <div class="university">
          평택 대학교
          <hr />
          2015.03 ~ 2019.02(정보 통신학과)
        </div>
        <div class="university2">
          평택 대학교
          <hr />
          2017.01 ~ 2019.02(산업IOT 융복합 전공)
        </div>
        <div class="academy1">
          TIS 정보기술교육센터
          <hr />
          2021.02 ~ 2021.07(FrontEnt,BackEnd 개발자 양성과정)
        </div>
        <div class="academy2">
          코멘토 직무부트캠프
          <hr />
          2022.02 ~ 2022.03
        </div>
        <div class="academy3">
          메가스터디IT아케데미
          <hr />
          2022.06 ~ 2022.10
        </div>
        <!-- <div class="company1">
          와이즈스톤
          <hr />
          2018.11 ~ 2020.09
          <p>LG 전자 Smart TV Software QA</p>
        </div>
        <div class="company2">
          투게더 솔루션
          <hr />
          2020.09 ~ 2020.11
          <p>삼성생명 홈페이지 리뉴얼 작업</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./EE.ts"></script>

<style>
@import "../../assets/css/EE.css";
</style>
