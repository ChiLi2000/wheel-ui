<template>
  <div class="goTop" v-if="goTopShow" @click="test">
    <svg class="goTopIcon" fill="#8a4aba">
      <use xlink:href="#icon-up"></use>
    </svg>
  </div>
</template>
<script lang='ts'>
import { ref, watch, onMounted, onUnmounted } from "vue";
export default {
  setup() {
    const scrollTop = ref<number>(null);
    const goTopShow = ref<boolean>(true);
    watch(scrollTop, () => {
      if (scrollTop.value > 500) {
        goTopShow.value = true;
        console.log(scrollTop.value);
        console.log("1");
        console.log(window.pageYOffset);
        console.log("2");
        console.log(document.documentElement.scrollTop);
        console.log("3");
        console.log(document.body.scrollTop);
      } else if (scrollTop.value <= 500) {
        // goTopShow.value = false;
      } else {
      }
    });

    const handleScroll = () => {
      scrollTop.value =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop.value > 500) {
        goTopShow.value = true;
      }
    };
    const test = () => {
      scrollTop.value = 600;
      goTopShow.value = false;
    };

    const goTop = () => {
      const timer = setInterval(() => {
        const ispeed = Math.floor(scrollTop.value / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          scrollTop.value + ispeed;
        if (scrollTop.value === 0) {
          clearInterval(timer);
        }
      }, 16);
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    // onUnmounted(() => {
    //   window.removeEventListener("scroll", handleScroll);
    // });
    return { goTopShow, test };
  },
};
</script>
 
<style lang='scss' scoped>
.goTop {
  position: fixed;
  right: 60px;
  bottom: 150px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  display: flex;
  align-content: center;
  justify-content: center;

  svg {
    margin-top: 2px;
    width: 24px;
    height: 24px;
  }
}

.goTop:hover {
  background: #f2f6fc;
}
</style>
