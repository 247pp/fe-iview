<template>
  <div class="navTitle">
    <h2>{{titleText}}</h2>
    <p>{{detailed}}</p>
  </div>
</template>
<script>
export default {
  name: 'navTitle',
  props: { 'titleText': String, 'detailed': String }
}
</script>
<style scoped lang="less">
p {margin-bottom: 30px;}
</style>
