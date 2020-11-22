<demo>
  支持 size
</demo>
<template>
  <div>
    <Button size="large">large</Button>
    <Button>normal</Button>
    <Button size="small">small</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>