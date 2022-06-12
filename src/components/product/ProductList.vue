<template>
  <section v-for="m in productData" :key="m.categoryId" :id="m.category">
    <a-row>
      <a-col :span="24">
        <div style="margin-top: 72px; margin-bottom: 28px">
          <a-typography-title>{{ m.category }}</a-typography-title>
        </div>
      </a-col>
      <!-- lisr menu -->
      <a-col :span="24">
        <a-row :gutter="[24, { md: 0, lg: 24 }]">
          <a-col
            :xs="{ span: 24 }"
            :sm="{ span: 24 }"
            :md="{ span: 24 }"
            :lg="{ span: 8 }"
            v-for="i in m.menu"
            :key="i.menuId"
          >
            <ProductCard
              :name="i.name"
              :description="i.description"
              :imageUrl="getImageUrl('product/' + i.image)"
            />
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import ProductCard from "./ProductCard.vue";
import productData from "../../assets/data/products.json";
export default defineComponent({
  components: { ProductCard },
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../../assets/images/${name}`, import.meta.url).href;
    };

    return {
      productData,
      getImageUrl,
    };
  },
});
</script>
