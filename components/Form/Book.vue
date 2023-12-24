<script setup>
import "~/assets/css/form.css";

const spinner = ref(false);
const checkin_date = ref(null);
const checkout_date = ref(null);
const dateAttrs = ref({
  key: "today",
  dot: true,
  dates: new Date(),
});
</script>

<template>
  <Form>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-5">
      <div class="d-flex flex-column mx-3">
        <label class="form-label">入住時間</label>
        <VDatePicker
          v-model="checkin_date"
          :attributes="dateAttrs"
          :masks="{ modelValue: 'YYYY-MM-DD' }"
        >
          <template #default="{ inputValue, inputEvents }">
            <Field
              type="text"
              name="checkin_date"
              label="起始日期"
              v-model="checkin_date"
              class="form-control"
              placeholder="起始日期"
              :value="inputValue"
              v-on="inputEvents"
            />
          </template>
        </VDatePicker>
        <ErrorMessage name="checkin_date" class="invalid-feedback" />
      </div>

      <div class="d-flex flex-column mx-3">
        <label class="form-label">退房時間</label>
        <VDatePicker
          v-model="checkout_date"
          :attributes="dateAttrs"
          :masks="{ modelValue: 'YYYY-MM-DD' }"
        >
          <template #default="{ inputValue, inputEvents }">
            <Field
              type="text"
              name="checkout_date"
              label="起始日期"
              v-model="checkout_date"
              class="form-control"
              placeholder="起始日期"
              :value="inputValue"
              v-on="inputEvents"
            />
          </template>
        </VDatePicker>
        <ErrorMessage name="checkout_date" class="invalid-feedback" />
      </div>

      <div class="d-flex flex-column mx-3">
        <label class="form-label">成人</label>
        <Field
          name="adults"
          label="成人"
          rules="required"
          v-slot="{ field, errors }"
        >
          <input
            type="number"
            class="form-control"
            :class="{ 'is-invalid': !!errors.length }"
            :disabled="spinner"
            v-bind="field"
          />
        </Field>
        <ErrorMessage name="adults" class="invalid-feedback" />
      </div>

      <div class="d-flex flex-column mx-3">
        <label class="form-label">小孩</label>
        <Field
          name="children"
          label="小孩"
          rules="required"
          v-slot="{ field, errors }"
        >
          <input
            type="number"
            class="form-control"
            :class="{ 'is-invalid': !!errors.length }"
            :disabled="spinner"
            v-bind="field"
          />
        </Field>
        <ErrorMessage name="children" class="invalid-feedback" />
      </div>

      <div class="d-flex items-end mx-3">
        <button class="bg-slate-700 text-white w-100">查詢</button>
      </div>
    </div>
  </Form>
</template>

<style scoped>
button {
  height: 45px;
}
</style>
