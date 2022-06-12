<template>
  <a-breadcrumb separator=">" style="margin: 16px 0">
    <template v-for="b in breadcrumbRoutes" :key="b.breadcrumbName">
      <a-breadcrumb-item :href="b.path">
        {{ b.breadcrumbName }}
      </a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    breadcrumbRoutes: {
      type: Array,
      default: [],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style>
.ant-breadcrumb-link,
.ant-breadcrumb-separator {
  font-size: 16px;
  letter-spacing: -0.64px;
}
.ant-breadcrumb a {
  color: #00a5cf;
  transition: color 0.3s;
}
</style>
