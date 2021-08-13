<template>
  <div class="infiniteScroll">
    <div class="logo_wrap">
      <div class="line_odd">
        <img
          src="https://lhcdn.lanhuapp.com/home/img/logo_one.png"
          alt=""
          class="logo_img"
        /><img
          src="https://lhcdn.lanhuapp.com/home/img/logo_one.png"
          alt=""
          class="logo_img"
        />
      </div>
      <div class="line_even">
        <img
          src="https://lhcdn.lanhuapp.com/home/img/logo_two.png"
          alt=""
          class="logo_img"
        /><img
          src="https://lhcdn.lanhuapp.com/home/img/logo_two.png"
          alt=""
          class="logo_img"
        />
      </div>
      <div class="line_odd">
        <img
          src="https://lhcdn.lanhuapp.com/home/img/logo_three.png"
          alt=""
          class="logo_img"
        /><img
          src="https://lhcdn.lanhuapp.com/home/img/logo_three.png"
          alt=""
          class="logo_img"
        />
      </div>
      <div class="line_even">
        <img
          src="https://lhcdn.lanhuapp.com/home/img/logo_four.png"
          alt=""
          class="logo_img"
        /><img
          src="https://lhcdn.lanhuapp.com/home/img/logo_four.png"
          alt=""
          class="logo_img"
        />
      </div>
      <div class="line_odd">
        <img
          src="https://lhcdn.lanhuapp.com/home/img/logo_five.png"
          alt=""
          class="logo_img"
        /><img
          src="https://lhcdn.lanhuapp.com/home/img/logo_five.png"
          alt=""
          class="logo_img"
        />
      </div>
      <div class="line_even">
        <img
          src="https://lhcdn.lanhuapp.com/home/img/logo_six.png"
          alt=""
          class="logo_img"
        /><img
          src="https://lhcdn.lanhuapp.com/home/img/logo_six.png"
          alt=""
          class="logo_img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "infiniteScroll",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.infiniteScroll {
  .logo_wrap {
    position: relative;
    width: 1440px;
    height: 644px;
    overflow: hidden;
    margin: 0 auto;
    font-size: 0;
  }
  .line_odd {
    width: 3976px;
    animation: scrollToRight 36s linear infinite;
  }
  .logo_img {
    width: 50%;
    display: inline-block;
  }
  @keyframes scrollToRight {
    0% {
      transform: translate3d(-50%, 0, 0);
    }
    100% {
      transform: translate3d(0%, 0, 0);
    }
  }
  .line_even {
    width: 3976px;
    animation: scrollToRight 30s linear infinite;
  }
}
</style>