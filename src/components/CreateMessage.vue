<template>
  <div>
    <div class="grid p-fluid">
      <div class="col-12 md:col-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-user"></i>
          </span>
          <InputText placeholder="Username" />
        </div>
      </div>

      <div class="col-12 md:col-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">$</span>
          <InputText placeholder="Price" />
          <span class="p-inputgroup-addon">.00</span>
        </div>
      </div>

      <div class="col-12 md:col-4">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">W</span>
          <InputText placeholder="Website" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
export default {
  name: "CreateMessage",
  data() {
    return {};
  },
  components: {
    InputText,
  },
};
</script>

<style></style>
