<template>
  <table class="outer" cellspacing="0" cellpadding="10">
    <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(list, index) in tdList" :key="index">
        <td>{{ list.name }}</td>
        <td>{{ list.description }}</td>
        <td>{{ list.type }}</td>
        <td>{{ list.default }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script lang='ts'>
export default {
  props: {
    tdList: {
      type: Array,
      value: [],
    },
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.outer {
  margin-top: 16px;
  width: 100%;
  border: 1px solid $border-color;
  th {
    padding: 15px 15px 15px 10px;
    text-align: left;
    color: #5c6b77;
    font-size: 16px;
    background: rgba(0, 0, 0, 0.02);
  }

  td {
    border-top: 1px solid $border-color;
    padding: 15px 15px 15px 10px;
  }
}
</style>