<template>
  <div class="js-array">
    <div class="js-array-box" v-for="(item, index) in list" :key="index">
      <div class="js-array-title" v-show="item.title">
        {{ index + 1 }}、{{ item.title }}
      </div>
      <div class="js-array-info">
        {{ item.info }}
      </div>
      <img class="js-array-img" :src="item.img" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "jsArray",
  data() {
    return {
      list: [
        {
          title: "concat()",
          info: "concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，仅会返回被连接数组的一个副本。",
          img: "https://img-blog.csdnimg.cn/20181113093725261.png",
        },
        {
          title: "join()",
          info: "join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的，默认使用’,'号分割，不改变原数组。",
          img: "https://img-blog.csdnimg.cn/20181113093940581.png",
        },
        {
          title: "push()",
          info: "push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。末尾添加，返回的是长度，会改变原数组。",
          img: "https://img-blog.csdnimg.cn/20181113094431371.png",
        },
        {
          title: "pop()",
          info: "pop() 方法用于删除并返回数组的最后一个元素。返回最后一个元素，会改变原数组。",
          img: "https://img-blog.csdnimg.cn/20181113094446126.png",
        },
        {
          title: "shift()",
          info: "shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。返回第一个元素，改变原数组。",
          img: "https://img-blog.csdnimg.cn/20181113094503545.png",
        },
        {
          title: "unshift()",
          info: "unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。返回新长度，改变原数组。",
          img: "https://img-blog.csdnimg.cn/20181113094516899.png",
        },
        {
          title: "slice()",
          info: "返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。返回选定的元素，该方法不会修改原数组。",
          img: "https://img-blog.csdnimg.cn/20181113094528205.png",
        },
        {
          title: "splice()",
          info: "splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。splice() 方法会直接对数组进行修改。",
          img: "https://img-blog.csdnimg.cn/20181113094546114.png",
        },
        {
          title: "substring() 和 substr()",
          info: "相同点：如果只是写一个参数，两者的作用都一样：都是是截取字符串从当前下标以后直到字符串最后的字符串片段。substr(startIndex);substring(startIndex);",
          img: "https://img-blog.csdnimg.cn/20181113094606533.png",
        },
        {
          title: "",
          info: "不同点：第二个参数substr（startIndex,lenth）： 第二个参数是截取字符串的长度（从起始点截取某个长度的字符串）；substring（startIndex, endIndex）： 第二个参数是截取字符串最终的下标 （截取2个位置之间的字符串,‘含头不含尾’）。",
          img: "https://img-blog.csdnimg.cn/20181113094625628.png",
        },
        {
          title: "sort 排序",
          info: "按照 Unicode code 位置排序，默认升序",
          img: "https://img-blog.csdnimg.cn/20181113094719888.png",
        },
        {
          title: "reverse()",
          info: "reverse() 方法用于颠倒数组中元素的顺序。返回的是颠倒后的数组，会改变原数组。",
          img: "https://img-blog.csdnimg.cn/20181113094756190.png",
        },
        {
          title: "indexOf()",
          info: "查找的值、查找起始位置不存在，返回 -1 ；存在，返回位置。是从前往后查找",
          img: "https://img-blog.csdnimg.cn/20181113094909241.png",
        },
        {
          title: "lastIndexOf()",
          info: "查找的值、查找起始位置不存在，返回 -1 ；存在，返回位置。是从后往前查找",
          img: "https://img-blog.csdnimg.cn/20181113095008966.png",
        },

        {
          title: "every",
          info: "对数组的每一项都运行给定的函数，每一项都返回 ture,则返回 true",
          img: "https://img-blog.csdnimg.cn/20181113095022634.png",
        },
        {
          title: "some",
          info: "对数组的每一项都运行给定的函数，任意一项都返回 ture,则返回 true",
          img: "https://img-blog.csdnimg.cn/20181113095036406.png",
        },
        {
          title: "filter",
          info: "对数组的每一项都运行给定的函数，返回 结果为 ture 的项组成的数组",
          img: "https://img-blog.csdnimg.cn/201811130951005.png",
        },
        {
          title: "map",
          info: "对数组的每一项都运行给定的函数，返回每次函数调用的结果组成一个新数组",
          img: "https://img-blog.csdnimg.cn/20181113095118553.png",
        },
        {
          title: "forEach 数组遍历",
          info: "",
          img: "https://img-blog.csdnimg.cn/20181113095132372.png",
        },
        {
          title: "find()",
          info: "传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它，并且终止搜索。",
          img: "https://img-blog.csdnimg.cn/201811130953566.png",
        },
        {
          title: "findIndex()",
          info: "传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它的下标，终止搜索。",
          img: "https://img-blog.csdnimg.cn/20181113095429917.png",
        },
        {
          title: "fill()",
          info: "用新元素替换掉数组内的元素，可以指定替换下标范围。",
          img: "https://img-blog.csdnimg.cn/20181113095451896.png",
        },
        {
          title: "from",
          info: "将类似数组的对象（array-like object）和可遍历（iterable）的对象转为真正的数组",
          img: "https://img-blog.csdnimg.cn/20181113095525495.png",
        },
        {
          title: "of",
          info: "用于将一组值，转换为数组。这个方法的主要目的，是弥补数组构造函数 Array() 的不足。因为参数个数的不同，会导致 Array() 的行为有差异。",
          img: "https://img-blog.csdnimg.cn/20181113095556467.png",
        },
        {
          title: "includes",
          info: "判断数组中是否存在该元素，参数：查找的值、起始位置，可以替换 ES5 时代的 indexOf 判断方式。indexOf 判断元素是否为 NaN，会判断错误。",
          img: "https://img-blog.csdnimg.cn/2018111309564266.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.js-array-box {
  padding-bottom: 20px;
}
.js-array-title {
  font-size: 16px;
  font-weight: 700;
  font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
}
.js-array-info,
.js-array-img {
  margin-top: 10px;
}
</style>