<template>
  <div>
    <div style="background: rgb(234, 239, 242); padding: 24px 50px">
      <div style="margin-bottom: 40px">
        <a-row :gutter="16">
          <a-col :span="12">
            <div class="gutter-box">
              <img :src="getImageUrl('logo-grabfood-mono.svg')" />
            </div>
          </a-col>
          <a-col :span="12" style="display: flex">
            <div style="margin-left: auto">
              <a-select value="id">
                <a-select-option value="id">Bahasa Indonesia</a-select-option>
                <a-select-option value="en">English</a-select-option>
              </a-select>
            </div>
          </a-col>
        </a-row>
        <a-divider />
      </div>
      <div>
        <a-row :gutter="16">
          <a-col
            class="gutter-row"
            :span="6"
            v-for="f in dataFooter"
            :key="f.title"
          >
            <div class="gutter-box">
              <a-typography-title :level="5">
                {{ f.title }}
              </a-typography-title>
              <ul style="padding-left: 0">
                <li
                  style="list-style-type: none"
                  v-for="l in f.list"
                  :key="l.title"
                >
                  {{ l.title }}
                </li>
              </ul>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div style="background: #363a45; color: #fff; padding: 32px 50px 48px 50px">
      <div>
        <a-row>
          <a-col :span="12">
            <a-typography-title
              :level="5"
              style="
                font-size: 16px;
                font-weight: 600;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.5;
                letter-spacing: normal;
                color: #fff;
                margin-bottom: 8px;
              "
            >
              Countries with GrabFood</a-typography-title
            >
            <a-typography-paragraph style="color: #fff; margin-bottom: 32px">
              Indonesia | Philippines | Thailand | Vietnam | Singapore |
              Malaysia | Myanmar
            </a-typography-paragraph>
          </a-col>
          <a-col :span="12" style="display: flex">
            <div style="margin-left: auto">
              <facebook-filled :style="{ fontSize: '30px' }" />
              <instagram-outlined
                :style="{ fontSize: '30px', marginLeft: '14px' }"
              />
              <twitter-square-filled
                :style="{ fontSize: '30px', marginLeft: '14px' }"
              />
            </div>
          </a-col>
        </a-row>
      </div>
      <div>
        <a-row>
          <a-col :span="12">
            <p
              style="
                display: flex;
                align-items: center;
                color: #afb0b4;
                font-size: 16px;
                margin-bottom: 8px;
              "
            >
              &copy; Grab 2022
            </p>
            <p>Terms of Service - Privacy Policy</p>
          </a-col>
          <a-col :span="12" style="display: flex">
            <div style="margin-left: auto">
              <img
                style="width: 120px; margin-right: 16px"
                :src="getImageUrl('logo-appstore.svg')"
              />
              <img
                style="width: 120px"
                :src="getImageUrl('logo-playstore.svg')"
              />
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import {
  FacebookFilled,
  InstagramOutlined,
  TwitterSquareFilled,
} from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    FacebookFilled,
    InstagramOutlined,
    TwitterSquareFilled,
  },
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../assets/images/${name}`, import.meta.url).href;
    };

    const dataFooter = ref([
      {
        title: "Frequently Searched",
        list: [
          {
            title: "Burger King Menu",
            url: "#",
          },
          {
            title: "Chatime Menu",
            url: "#",
          },
          {
            title: "Domino's Pizza Menu",
            url: "#",
          },
          {
            title: "Hokben Menu",
            url: "#",
          },
          {
            title: "JCO Delivery",
            url: "#",
          },
          {
            title: "KFC Menu",
            url: "#",
          },
          {
            title: "McDonalds Menu",
            url: "#",
          },
          {
            title: "Pizza Hut Delivery",
            url: "#",
          },
          {
            title: "Reechese Menu",
            url: "#",
          },
          {
            title: "Menu Solaria",
            url: "#",
          },
          {
            title: "Starbucks Menu",
            url: "#",
          },
          {
            title: "Yosinoya Menu",
            url: "#",
          },
        ],
      },
      {
        title: "Popular Cuisines",
        list: [
          {
            title: "Chinnese Food",
            url: "#",
          },
          {
            title: "Fast Food",
            url: "#",
          },
          {
            title: "Indian Food",
            url: "#",
          },
          {
            title: "Indonesia Food",
            url: "#",
          },
          {
            title: "Italian Food",
            url: "#",
          },
          {
            title: "Japanese Food",
            url: "#",
          },
          {
            title: "Korean Food",
            url: "#",
          },
          {
            title: "Thai Food",
            url: "#",
          },
          {
            title: "Vietnamese Food",
            url: "#",
          },
        ],
      },
      {
        title: "About Grab",
        list: [
          {
            title: "About Grab",
            url: "#",
          },
          {
            title: "About GrabFood",
            url: "#",
          },
          {
            title: "Blog",
            url: "#",
          },
        ],
      },
      {
        title: "Support",
        list: [
          {
            title: "Help",
            url: "#",
          },
          {
            title: "FAQs",
            url: "#",
          },
          {
            title: "Be a GrabFood Merchant",
            url: "#",
          },
          {
            title: "Drive With Grab",
            url: "#",
          },
        ],
      },
    ]);

    return {
      getImageUrl,
      dataFooter,
    };
  },
});
</script>

<style>
.ant-layout-footer {
  padding: 0px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  background: #f0f2f5;
}
</style>
