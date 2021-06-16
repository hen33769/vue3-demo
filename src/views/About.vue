<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="primary">sssss</el-button>
    <el-input v-model="input" placeholder="sssss"></el-input>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default {
  setup() {
    return {
      input: ref(""),
    };
  },
};
</script>
