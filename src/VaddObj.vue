<template>
  <div class="container">
    <div class="row">
      <div id="app">
        <hr>
        <ul>
          <li v-for="(Fruit, index) in Fruits" :key="index">
            <div
              v-for="(value, key, index) in Fruit "
              :key="index" v-bind:class="Device(index)"
            >{{ key }}: {{ value }} ({{ index }}){{Device(index)}}</div>
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
    Device(index) {
      return index % 2 !== 0 ? "So Chan" : "So Le";
    }
  }
};
</script>

<style>
.color1 {
  background-color: aquamarine;
  border-radius: 10px;
}
.color2 {
  background-color: purple;
  border-radius: 10px;
}
</style>
