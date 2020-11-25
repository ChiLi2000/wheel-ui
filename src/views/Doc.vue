<template>
  <div class="layout">
    <Topnav :toggleMenuButtonVisible="true" class="nav" />
    <div class="content">
      <aside ref="asideDemo">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, onMounted, Ref, ref, watchEffect } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const asideDemo = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(
        () => {
          const { width } = asideDemo.value.getBoundingClientRect();
          if (menuVisible.value) {
            asideDemo.value.style.left = 0 + "px";
          } else {
            asideDemo.value.style.left = -width + "px";
          }
        },
        { flush: "post" }
      );
    });
    return { menuVisible, asideDemo };
  },
};
</script>
<style lang="scss" scoped>
$aside-index: 10;
$color: #8a4aba;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    width: 100%;
    overflow: auto;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    background: white;
    overflow: auto;
    padding: 12px 36px 60px 36px;
  }
}

@media (max-width: 500px) {
  .content {
    position: relative;
    margin-top: 6px;
    > aside {
      background: white;
      position: absolute;
      transition: 300ms;
    }
    > main {
      position: absolute;
      min-width: 100%;
      max-height: 100%;
      overflow: auto;
      padding: 42px 16px 60px 16px;
    }
  }
}
aside {
  border-right: 1px solid rgba(0, 0, 0, 0.15);
  height: 100%;
  z-index: $aside-index;
  > h2 {
    margin: 16px 0;
    padding-left: 36px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 8px 126px 8px 36px;
        text-decoration: none;
      }
      .router-link-active {
        background: #ebd2ff;
        border-right: 3px solid $color;
        color: $color;
      }
      &:hover {
        color: $color;
      }
    }
  }
  @media (max-width: 500px) {
    > h2 {
      padding-left: 16px;
    }
    > ol {
      > li {
        > a {
          padding: 8px 126px 8px 16px;
        }
      }
    }
  }
}
</style>