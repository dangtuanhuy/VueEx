<template>
  <!-- showdemo -->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p v-show="isActive == false" class="p-3 mb-2 bg-primary text-white hachi text-center">Show</p>
        <p v-show="isActive == true" class="p-3 mb-2 bg-success text-white hachi text-center">Hide</p>
        <div class="text-center">
          <button class="btn btn-outline-info" @click="isActive = !isActive">Switch</button>
        </div>
      </div>
    </div>
    <hr>
    <!-- ---Add Items -->
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
    <hr>
    <!-- //Object -->
    <div class="row">
      <div id="app">
        <hr>
        <ul>
          <li v-for="(Fruit, index) in Fruits" :key="index">
            <div
              v-for="(value, key, index) in Fruit "
              :key="index"
              v-bind:class="Device1(index)"
            >{{ key }}: {{ value }} ({{ index }}){{Device1(index)}}</div>
          </li>
        </ul>
        <hr>
      </div>
    </div>
    <hr>
    <!-- //Count -->
    <div class="row">
      <div class="col-6">
        <input v-model="message" placeholder="Enter number" type="number">
        <br>
        <button class="btn btn-primary m-2" @click="tang()">Increase</button>
        |
        <button class="btn btn-danger m-2" @click="giam()">Decrease</button>
      </div>
      <div class="col-6">
       
        {{Total}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      array: [],
      isActive: true,
      Fruits: [
        { Name: "Apple", Type: "Odd" },
        { Name: "Durian", Type: "Even" },
        { Name: "Grape", Type: "Odd" },
        { Name: "Watermelon", Type: "Even" }
      ],
      Total: 0
    };
  },
  methods: {
    Device(i) {
      return i % 2 !== 0 ? "color1" : "color2";
    },
    Device1(index) {
      return index % 2 !== 0 ? "So Chan" : "So Le";
    },
    tang() {
      this.Total = parseInt(this.Total) + parseInt(this.message);
    },
    giam() {
      this.Total = parseInt(this.Total) - parseInt(this.message);
    }
  }
};
</script>

<style>
.color1 {
  background-color: aqua;
  border-radius: 10px;
}
.color2 {
  background-color: red;
  border-radius: 10px;
}
.color3 {
  background-color: aquamarine;
  border-radius: 10px;
}
.color4 {
  background-color: purple;
  border-radius: 10px;
}
.hachi {
  border-radius: 10px 10px 10px 10px;
}
</style>
