<template>
  <div class="container">
    <div class="row">
      <div id="app">
        <button class="btn btn-info" @click="array.push('Item')">Add New</button>
        <hr>
        <ul>
          <li v-for="(item, i) in array" :key="i" v-bind:class="Device(i)">{{ item }} ({{ i }})</li>
        </ul>
        <hr>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      array: []
    };
  },
  methods: {
    Device(i) {
      return i % 2 !== 0 ? "color1" : "color2";
    }
  }
};
</script>

<style scoped>
.color1 {
  background-color: aqua;
  border-radius: 10px;
}
.color2 {
  background-color:red;
  border-radius: 10px;
}
</style>
