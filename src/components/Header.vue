<template>
  <div>
    <a-row>
      <a-col :span="4">
        <div class="logo">
          <img
            style="width: auto; height: 50px"
            :src="getImageUrl('logo-grabfood2.svg')"
          />
        </div>
      </a-col>
      <a-col :span="12">
        <div>
          <a-auto-complete
            v-model:value="value"
            :options="options"
            placeholder="Tipe your location"
            @select="onSelect"
            @search="onSearch"
            style="width: 350px"
          >
            <!-- <template #default>
              <input
                style="
                  height: 40px;
                  margin: 0;
                  padding: 0;
                  background: transparent;
                  border: none;
                  outline: none;
                  -webkit-appearance: none;
                  -moz-appearance: none;
                  appearance: none;
                "
              />
            </template> -->
          </a-auto-complete>
        </div>
      </a-col>
      <a-col :span="8" style="display: flex">
        <div style="margin-left: auto">
          <a-button size="large" style="padding-top: 2px; margin-right: 14px">
            <template #icon><ShoppingOutlined /></template>
          </a-button>
          <a-button size="large"> Login/Sign Up </a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import { ShoppingOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    ShoppingOutlined,
  },
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../assets/images/${name}`, import.meta.url).href;
    };

    const value = ref("");

    const options = ref([
      {
        value: "Burns Bay Road",
      },
      {
        value: "Downing Street",
      },
      {
        value: "Wall Street",
      },
    ]);

    const mockVal = (str, repeat = 1) => ({
      value: str.repeat(repeat),
    });

    const onSearch = (searchText) => {
      console.log("searchText");
      options.value = !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
    };

    const onSelect = (value) => {
      console.log("onSelect", value);
    };

    return {
      getImageUrl,
      value,
      options,
      onSearch,
      onSelect,
    };
  },
});
</script>
