<template>
  <div :style="{ background: '', padding: '0px', minHeight: '280px' }">
    <p
      style="
        font-size: 12px;
        line-height: 1.5;
        color: #00b14f;
        font-weight: 600;
      "
      v-if="restaurantData.preferredMerchant"
    >
      <span>
        <IconVerified style="margin-bottom: -3px" />
      </span>
      Preferred Merchant
    </p>

    <a-typography-title> {{ restaurantData.name }} </a-typography-title>
    <a-typography-title
      :level="3"
      style="
        font-size: 14px;
        line-height: 1.42857143;
        font-weight: 400;
        color: #676767;
      "
    >
      {{ restaurantData.category }}
    </a-typography-title>

    <div style="display: flex">
      <p style="margin-right: 12px">
        <IconStar style="margin-bottom: -2px" />
      </p>
      <p
        style="
          font-size: 15px;
          line-height: 1.42857143;
          font-weight: 400;
          color: #676767;
        "
      >
        {{ restaurantData.rating }}
      </p>
      <p style="margin-left: 24px; color: #676767; font-size: 15px">
        {{ restaurantData.distance }}
      </p>
    </div>

    <div style="display: flex">
      <p
        style="
          font-size: 15px;
          line-height: 1.42857143;
          font-weight: 600;
          color: #676767;
          margin-right: 42px;
        "
      >
        Opening Hours
      </p>
      <p
        style="
          font-size: 15px;
          line-height: 1.42857143;
          font-weight: 400;
          color: #676767;
          margin-right: 10px;
        "
        v-if="restaurantData.closed"
      >
        Today Closed
      </p>
      <!-- Today  13:00-22:00 -->
      <div v-if="restaurantData.closed">
        <a-tag color="#ee6352" style="border-radius: 4px"> Closed </a-tag>
      </div>
    </div>

    <div style="display: flex">
      <IconTag />
      <p
        style="
          font-size: 15px;
          line-height: 1.42857143;
          font-weight: 500;
          -webkit-box-flex: 1;
          flex: 1;
          color: #1c1c1c;
          margin-left: 8px;
          margin-right: 16px;
          margin-bottom: 0px;
        "
      >
        10% off WAIKI Rice Box
      </p>
    </div>
    <div style="display: flex">
      <IconTag />
      <p
        style="
          font-size: 15px;
          line-height: 1.42857143;
          font-weight: 500;
          -webkit-box-flex: 1;
          flex: 1;
          color: #1c1c1c;
          margin-left: 8px;
          margin-right: 16px;
          margin-bottom: 0px;
        "
      >
        Rp2.000 off delivery fee with Rp30.000 min. order
        <span>
          <a-button type="link" style="font-weight: 600"> See 1 more </a-button>
        </span>
      </p>
    </div>

    <div style="display: flex">
      <IconInfo />
      <p
        style="
          font-size: 15px;
          line-height: 1.42857143;
          font-weight: 500;
          -webkit-box-flex: 1;
          flex: 1;
          color: #1c1c1c;
          margin-left: 8px;
          margin-right: 16px;
          margin-bottom: 0px;
        "
      >
        Order fee of Rp3.000 applies for this restaurant.
      </p>
    </div>

    <!-- schedule -->
    <div v-if="!restaurantData.closed">
      <a-row :gutter="16">
        <!-- delivery date -->
        <a-col :xs="{ span: 24 }" :sm="{ span: 24 }" :md="{ span: 8 }">
          <a-select
            ref="select"
            v-model:value="deliveryDate"
            style="width: 100%; border-radius: 8px"
            @focus="focus"
            @change="handleChange"
          >
            <a-select-option value="1"></a-select-option>
          </a-select>
        </a-col>
        <!-- delivery time -->
        <a-col :xs="{ span: 24 }" :sm="{ span: 24 }" :md="{ span: 8 }">
          <a-select
            ref="select"
            v-model:value="deliveryTime"
            style="width: 100%; border-radius: 8px"
            @focus="focus"
            @change="handleChange"
          >
            <a-select-option value="1"></a-select-option>
          </a-select>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import IconVerified from "../icons/IconVerified.vue";
import IconStar from "../icons/IconStar.vue";
import IconTag from "../icons/IconTag.vue";
import IconInfo from "../icons/IconInfo.vue";
import { ShoppingOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  props: {
    restaurantData: {
      type: Object,
      default: null,
    },
  },
  components: {
    IconVerified,
    IconStar,
    IconTag,
    IconInfo,
    ShoppingOutlined,
  },
  setup() {
    const deliveryDate = ref("");
    const deliveryTime = ref("");
    const focus = () => {
      console.log("focus");
    };

    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };

    return { deliveryDate, deliveryTime, focus, handleChange };
  },
});
</script>

<style></style>
