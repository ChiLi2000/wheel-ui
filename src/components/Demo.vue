<template>
    <div class="demo">
      <h2>{{component.__sourceCodeTitle}}</h2>
      <div class="demo-component">
        <component :is="component"/>
      </div>
      <div class="demo-actions">
        <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
        <Button @click="toggleCode" v-else>查看代码</Button>
     </div>
    <div class="demo-code"  v-if="codeVisible">
         <pre class="language-html" v-html="html"/>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {computed,ref} from 'vue';
import 'prismjs';
// import 'prismjs/themes/prism.css';
const Prism = (window as any).Prism

export default {
    components:{Button},
    props:{
        component: Object,
    },  
    setup(props) {
        const html = computed(() => {
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
        const hideCode = () => codeVisible.value = false
        const toggleCode = () => codeVisible.value = true
        const codeVisible = ref(false)
            return {Prism,html,codeVisible,hideCode,toggleCode};
    },
};
</script>

<style lang="scss" scoped>
  $border-color:#d9d9d9;

  %item {
    padding:8px 16px;
    border-top:1px dashed $border-color;
  }
  .demo{
    border:1px solid $border-color;
    margin:16px 0 32px;

    >h2{
      font-size: 20px;
      padding:8px 16px;
      border-bottom:1px solid $border-color;
    }

    &-component{
      padding:16px;
    }

    &-actions{
      @extend %item;
    }

    &-code{
      @extend %item;

      >pre{
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
      }
    }
  }
</style>