<template>
  <div class="slotTmp">
    <slot name="top"></slot>
    <div>我是slotOne1组件</div>
    <slot></slot>
    <slot name="footer"></slot>
    我是作用域插槽的子组件
    <slot :data="user"></slot>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      user: [
        { name: "Jack", sex: "boy" },
        { name: "Jone", sex: "girl" },
        { name: "Tom", sex: "boy" },
      ],
    };
  },
};
</script>