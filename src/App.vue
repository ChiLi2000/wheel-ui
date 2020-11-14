<template>
<div>hi 
  <router-link to="/">chili</router-link>
  |<router-link to="/xxx">chili2</router-link>
  </div>
<hr/>
<router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>