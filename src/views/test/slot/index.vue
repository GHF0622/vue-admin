
 
<template>
  <div>
    <slot-tmp>
      <template slot="top">
        <p>我是name为top的slot</p>
      </template>
      <p style="color: red">我是父组件插槽内容</p>
      <template slot="footer">
        <p>我是name为header的slot</p>
      </template>

      <template slot-scope="user">
        <div v-for="(item, index) in user.data" :key="index" @click="clickSolt(item,index)">
          {{ item }}
        </div>
      </template>
    </slot-tmp>
  </div>
</template>
<script>
import slotTmp from "./slotTmp.vue";
export default {
  data() {
    return {};
  },
  components: {
    slotTmp,
  },
  methods:{
    clickSolt(e,index){
      console.log(e,'e',index,'index');
    }
  }
};
</script>