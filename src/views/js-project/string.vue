<template>
  <div class="js-string">
    <div class="js-string-box" v-for="(item, index) in list" :key="index">
      <div class="js-string-title" v-show="item.title">
        {{ index + 1 }}、{{ item.title }}
      </div>
      <div class="js-string-info">
        {{ item.info }}
      </div>
      <img v-show="item.img" class="js-string-img" :src="item.img" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "jsString",
  data() {
    return {
      list: [
        {
          title: "待补充",
          info: "无",
          img: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.js-string-box {
  padding-bottom: 20px;
}
.js-string-title {
  font-size: 16px;
  font-weight: 700;
  font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
}
.js-string-info,
.js-string-img {
  margin-top: 10px;
}
</style>