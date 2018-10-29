<template>
  <div>
    <ul>
      <img :src="blockLogo" alt="图片加载失败">
      <li :class="idx == index ? 'active': ''" v-for="(item, idx) in data" :key="item.id" @click.prevent="blockClick(item.id, idx)">
        {{item[hasData].length > 6 ? item[hasData].substr(0, 4) + '...' : item[hasData]}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'LevelBlock',
  props: {
    data: Array,
    onLevelClick: Function,
    blockLogo: [String],
    hasData: String
  },
  data () {
    return {
      index: 2
    }
  },
  methods: {
    blockClick (id, idx) {
      this.index = idx
      this.onLevelClick(this.data[idx])
    }
  }
}
</script>
<style scoped lang="less">
  @import url("../../../../../styles/ued/variable.less");

ul {
  width: 100%;
  height: 60px;
  display: flex;
  user-select: none;
  margin: 20px 0;
  align-items: center;
  background-color: @link-color;
  box-sizing: border-box;
  padding: 0 35px 0 0;
  img {
    width: 201px;
    height: 30px;
    margin: 0 20px;
  }
  li {
    width: 103px;
    height: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    position: relative;
    align-items: center;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
    &.active {
      color: @link-color;
      background-color: #fff;
    }
  }
}
</style>
