<template>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true
    };
  }
};
</script>

<style>
.hachi{
  border-radius: 10px 10px 10px 10px;
}
</style>
