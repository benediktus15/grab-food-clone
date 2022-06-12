<template>
  <div
    class="product-item"
    style="
      display: -webkit-box;
      display: flex;
      padding: 16px;
      background-color: #fff;
      border-radius: 5px;
      position: relative;
      cursor: pointer;
    "
  >
    <div
      style="
        width: 120px;
        height: 120px;
        border-radius: 5px;
        margin-right: 16px;

        position: relative;
        overflow: hidden;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
        background-color: #f0efef;
      "
    >
      <img
        :src="imageUrl"
        alt=""
        style="
          opacity: 1;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          object-fit: cover;
          transition-property: opacity;
          transition-duration: 0.2s, 0.2s;
          transition-timing-function: ease-in-out;
        "
      />
    </div>
    <div
      style="
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        width: calc(100% - 120px);
        height: 100%;
      "
    >
      <div>
        <a-typography-title
          :level="5"
          style="
            font-size: 1.14285714rem;
            line-height: 1.5;
            font-weight: 500;
            color: #1c1c1c;
          "
        >
          {{ name }}
        </a-typography-title>
        <a-typography-paragraph style="color: #9a9a9a; flex: 1">
          {{ description }}
        </a-typography-paragraph>
      </div>
      <div>
        <!-- icon -->
        <div
          style="display: flex; align-items: flex-end; align-items: baseline"
        >
          <div class="ant-row">
            <div class="ant-row itemPrice___DqSxA">
              <a-typography-title
                :level="5"
                style="font-size: 1.14285714rem; font-weight: 500"
              >
                {{ price }}
              </a-typography-title>
              <!-- <h6 class="discount">0</h6> -->
            </div>
          </div>
          <div class="counter" style="display: flex; algin; margin-left: auto;">
            <!-- <div class="minus">
              <a-button
                style="color: #fff; border-color: #00b14f; background: #00b14f"
              >
                <template #icon>
                  <minus-outlined />
                </template>
              </a-button>
            </div> -->
            <div class="plus">
              <a-button
                style="color: #fff; border-color: #00b14f; background: #00b14f"
              >
                <template #icon>
                  <plus-outlined />
                </template>
              </a-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  props: {
    imageUrl: {
      type: String,
      default: "",
    },
    name: String,
    description: String,
    price: {
      type: [Number, String],
      default: 0,
    },
  },
  components: {
    PlusOutlined,
    MinusOutlined,
  },
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../../assets/images/${name}`, import.meta.url).href;
    };

    return {
      getImageUrl,
    };
  },
});
</script>

<style>
.product-item:hover {
  border: 1px solid #00b14f;
  margin: -1px;
}
</style>
