<template>
  <a-layout class="layout">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <!-- header component -->
      <HeaderComponent />
    </a-layout-header>

    <a-layout-content>
      <div
        :style="{
          backgroundColor: '#ffffff',
        }"
      >
        <div
          :style="{
            padding: '34px 50px 0 50px',
            marginTop: '64px',
          }"
        >
          <!-- breadcrumb component -->
          <BreadcrumbComponent :breadcrumb-routes="breadcrumbRoutes" />

          <!-- restaurant info component -->
          <RestaurantInfo :restaurantData="restaurantData" />
        </div>

        <div
          :style="{
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 6px 0 rgb(28 28 28 / 6%)',
          }"
        >
          <a-anchor>
            <a-tabs
              v-model:activeKey="activeKey"
              tab-position="top"
              @tabScroll="callback"
              @change="changeTabs"
              size="large"
              :style="{
                marginTop: '64px',
                backgroundColor: '#ffffff',
              }"
            >
              <a-tab-pane
                v-for="m in productData"
                :key="m.category"
                :tab="`${m.category}`"
                style="margin-bottom: 0px !important"
              >
              </a-tab-pane>
            </a-tabs>
          </a-anchor>
        </div>
      </div>

      <div style="padding: 0 50px; background-color: #f7f7f7">
        <!-- product list componet -->
        <ProductList />
      </div>
    </a-layout-content>

    <a-layout-footer>
      <!-- footer component -->
      <FooterComponent />
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import HeaderComponent from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";
import RestaurantInfo from "../components/product/RestaurantInfo.vue";
import ProductList from "../components/product/ProductList.vue";
import BreadcrumbComponent from "../components/Breadcrumb.vue";
import {
  StarOutlined,
  StarFilled,
  StarTwoTone,
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
  ShoppingOutlined,
} from "@ant-design/icons-vue";

import restaurantData from "../assets/data/restaurant.json";
import productData from "../assets/data/products.json";

export default defineComponent({
  components: {
    HeaderComponent,
    FooterComponent,
    RestaurantInfo,
    ProductList,
    StarOutlined,
    StarFilled,
    StarTwoTone,
    ArrowRightOutlined,
    LeftOutlined,
    RightOutlined,
    ShoppingOutlined,
    BreadcrumbComponent,
  },
  setup() {
    const router = useRouter();

    onMounted(() => {
      const sections = document.querySelectorAll("section");
      const options = {
        threshold: 0.5,
      };
      const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeKey.value = entry.target.id;
            router.replace(`#${entry.target.id}`);
          }
        });
      }, options);
      sections.forEach((section) => {
        observer.observe(section);
      });
    });

    const breadcrumbRoutes = ref([
      {
        path: "/",
        breadcrumbName: "Home",
      },
      {
        path: "/restaurant",
        breadcrumbName: "Restaurant",
      },
      {
        breadcrumbName: "Do Yan Seafood - Sumbersekar",
      },
    ]);

    const getImageUrl = (name) => {
      return new URL(`../assets/images/${name}`, import.meta.url).href;
    };

    const activeKey = ref(productData[0].restaurant);

    const callback = (val) => {
      console.log(val);
    };

    const changeTabs = (val) => {
      window.location.href = `#${val}`;
    };

    return {
      restaurantData,
      productData,
      getImageUrl,
      breadcrumbRoutes,
      activeKey,
      callback,
      changeTabs,
    };
  },
});
</script>

<style>
.ant-layout-header {
  color: rgba(255, 255, 255, 0.85);
  background: #ffffff;
}
.ant-tabs-top > .ant-tabs-nav {
  margin-bottom: 0;
  box-shadow: 0 4px 6px 0 rgb(28 28 28 / 6%);
}
.ant-tabs-nav {
  padding: 0 50px;
}
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: #00b14f;
  font-weight: 600;
  text-shadow: 0 0 0.25px currentcolor;
}
.ant-tabs-tab:hover {
  color: #00b14f;
}
.ant-tabs-ink-bar {
  background: #00b14f;
  /* position: absolute;
  pointer-events: none; */
}
</style>
