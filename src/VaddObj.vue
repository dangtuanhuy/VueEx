<template>
  <div class="container">
    <div class="row">
      <div id="app">
        <hr>
        <ul>
          <li v-for="(Fruit, index) in Fruits" :key="index">
            <div
              v-for="(value, key, index) in Fruit "
              :key="index" v-bind:class="Device1(index)"
            >{{ key }}: {{ value }} ({{ index }}){{Device1(index)}}</div>
          </li>
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
      Fruits: [
        { Name: "Apple", Type: "Odd" },
        { Name: "Durian", Type: "Even" },
        { Name: "Grape", Type: "Odd" },
        { Name: "Watermelon", Type: "Even" }
      ]
    };
  },
  methods: {
    Device1(index) {
      return index % 2 !== 0 ? "So Chan" : "So Le";
    }
  }
};
</script>

<style>
.color3 {
  background-color: aquamarine;
  border-radius: 10px;
}
.color4 {
  background-color: purple;
  border-radius: 10px;
}
</style>
