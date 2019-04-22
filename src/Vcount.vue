<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <input v-model="message" placeholder="Enter number" type="number">
          <br>
          <button class="btn btn-primary m-2" @click="tang()">Increase</button>
          <br>
          <button class="btn btn-primary m-2" @click="giam()">Decrease</button>
        </div>
        <div class="col-6">
          <!-- <input v-model="total" disabled> -->
          {{Total}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Total: 0,
     // message: 0
      // result:0
    };
  },
  methods: {
    tang() {
      // console.log(typeof this.message);
      this.Total = parseInt(this.Total) + parseInt(this.message);
      // this.result = this.result + this.message*1;
      //console.log(this.result);
      //var item = +x;
      // var item = x*1;
      //var item = parseInt(x);
      //1 + '1'
    },
    giam() {
      this.Total = parseInt(this.Total) - parseInt(this.message);
    }
  }
  // computed: {
  //   total: function() {
  //     return this.Total + this.message;
  //   }
  //}
};
</script>