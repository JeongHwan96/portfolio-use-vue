<template>
  <div id="sidebar">
    <h1 class="logo"><img src="../assets/image/Logo1.png" alt="" /></h1>
    <nav class="Sidebar-Container">
      <div class="sidebar-menu">
        <ul class="Nav-List">
          <li class="Nav-Item">
            <h3 @click="onClickAbout" :class="{ showAbout: isAbout === true }">
              About
            </h3>
          </li>
        </ul>
        <ul class="Nav-List">
          <li class="Nav-Item">
            <h3 @click="onClickEE" :class="{ showEE: isHide === true }">
              Education & Experience
            </h3>
          </li>
        </ul>
        <ul class="Nav-List">
          <li class="Nav-Item">
            <h3 @click="onClickChangeClass" :class="{ show: isHide === true }">
              Reward
            </h3>
          </li>
        </ul>
        <ul class="Nav-List">
          <li class="Nav-Item">
            <h3 @click="onClickqna" :class="{ showQnA: isHide === true }">
              Question & Answer
            </h3>
          </li>
        </ul>
        <ul class="Nav-List">
          <li class="Nav-Item">
            <h3 @click="onClickChangeClass" :class="{ show: isHide === true }">
              Developer PortFolio Ⅰ
            </h3>
          </li>
        </ul>
        <ul class="Nav-List">
          <li class="Nav-Item">
            <h3 @click="onClickChangeClass" :class="{ show: isHide === true }">
              Developer PortFolio Ⅱ
            </h3>
          </li>
        </ul>
        <ul class="Nav-List">
          <li class="Nav-Item">
            <h3 @click="onClickChangeClass" :class="{ show: isHide === true }">
              QE PortFolio Ⅰ
            </h3>
          </li>
        </ul>
        <ul class="Nav-List">
          <li class="Nav-Item">
            <h3 @click="onClickChangeClass" :class="{ show: isHide === true }">
              QE PortFolio Ⅱ
            </h3>
          </li>
        </ul>
        <ul class="Nav-List">
          <li class="Nav-Item">
            <h3 @click="onClickChangeClass" :class="{ show: isHide === true }">
              QE PortFolio Ⅲ
            </h3>
          </li>
        </ul>
        <ul class="Nav-List">
          <li class="Nav-Item">
            <h3 @click="onClickChangeClass" :class="{ show: isHide === true }">
              Contact
            </h3>
          </li>
        </ul>
        <ul class="Nav-List">
          <li class="Nav-Item img"></li>
        </ul>

        <!-- 메뉴 항목 -->
      </div>
    </nav>
  </div>
</template>

<script lang="ts" src="./Sidebar.ts"></script>

<style>
#sidebar {
  width: 10%;
  height: 100vh;
  border-right: 1px solid #ddd;
  position: fixed;
}
#sidebar ul {
  margin-bottom: 0;
  margin-left: 0;
}

.logo {
  width: 100%;
  min-height: 9.5vh;
  display: flex;
  align-items: center;
}

.Sidebar-Container {
  background: #9423cf;
}

.sidebar-menu {
  border-top: 1px solid #ddd;
  padding: 0.5vw;
  text-align: center;
}

.Nav-List {
  color: rgba(255, 255, 255, 0.5);
}

.sidebar-menu h3 {
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 1vh;
  font-family: "CoveredByYourGrace";
  font-weight: bold;
  letter-spacing: 0.01rem;
}
.main-menu {
  overflow-y: scroll;
  min-height: 79.7vh;
  max-height: 79.7vh;
}
.main-menu::-webkit-scrollbar {
  width: 0;
}
.main-menu > li {
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
  overflow: hidden;
  max-height: 3.1em;
  position: relative;
}
.main-menu > li > a:hover {
  background: rgb(211, 211, 211);
  color: #fff;
}
.main-menu > li > a:hover .sidebar-icon {
  border: 0.8px solid #fff;
}
.main-menu > li > a.active {
  background: rgb(211, 211, 211);
  color: #fff;
  font-family: bold;
}
.main-menu > li > a.active .sidebar-icon {
  border: 0.8px solid #fff;
}
.main-menu > li.active {
  max-height: 100%;
}
.main-menu > li.on {
  max-height: 100%;
}
.main-menu > li > a {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.main-menu > li > a span {
  display: none;
}
.main-menu > li > a span.count {
  display: inline-block;
}
.sidebar-icon {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sidebar-icon > i {
  font-size: 0.8em;
}
.sub-menu > li:first-child {
  padding-top: 10px;
}
.sub-menu > li:last-child {
  padding-bottom: 10px;
}
.sub-menu li {
  margin-bottom: 0;
  margin-left: 0;
  border: 0;
  padding: 0;
  overflow: hidden;
}
.sub-menu > li:first-child {
  border-top: 1px solid #ddd;
}
.sub-menu > li > a {
  padding: 2px 10px;
  display: flex;
  justify-content: space-between;
}
.sub-menu > li a:hover {
  color: #ad0036;
}
.sub-menu > li > a i {
  margin: 5px;
}
.sub-menu > li > a i.select {
  -webkit-text-stroke: 1px black;
  color: #fff;
}
.sub-menu > li > ul > li {
  position: relative;
  margin-left: 2.5em;
  max-height: 0;
  padding-left: 0.5em;
}
.sub-menu > li > ul > li::after {
  content: "";
  width: 3px;
  height: 3px;
  background: black;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.sub-menu > li.active > ul > li {
  max-height: 100%;
}
.sub-menu > li.on > ul > li {
  max-height: 100%;
}

.my1 {
  width: 100%;
}

@font-face {
  font-family: "TitilliumWeb";
  src: url("../assets/font/TitilliumWeb/TitilliumWeb-Light.ttf");
}
</style>
