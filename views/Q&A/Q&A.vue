<template>
  <div :class="{ QnA: showQnA === true }">
    <table>
      <tr>
        <th class="num">No</th>
        <th class="title">제목</th>
        <th class="Writer">글쓴이</th>
        <th class="date">작성일</th>
      </tr>
      <tr v-for="item in items" :key="item">
        <td>{{ item.num }}</td>
        <td>
          <button>{{ item.title }}</button>
        </td>
        <td>{{ item.writer }}</td>
        <td>{{ item.date }}</td>
      </tr>
    </table>
    <Modal />
  </div>
</template>

<script lang="ts" src="./Q&A.ts"></script>

<style>
@import "../../assets/css/Q&A.css";
</style>
