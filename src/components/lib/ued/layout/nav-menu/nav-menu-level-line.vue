<template>
  <div>
    <ul>
      <li :class="idx == index ? 'active': ''" v-for="(item, idx) in data" :key="item.id" @click.prevent="lineClick(item.id, idx)">
        {{item[hasData].length > 6 ? item[hasData].substr(0, 4) + '...' : item[hasData]}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'LevelLine',
  props: {
    data: Array,
    onLevelClick: Function,
    hasData: String
  },
  data () {
    return {
      index: 2
    }
  },
  methods: {
    lineClick (id, idx) {
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
  height: 40px;
  border-bottom: 2px solid @link-color;
  display: flex;
  user-select: none;
  margin: 20px 0;
  li {
    width: 103px;
    height: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    color: @subsidiary-color;
    position: relative;
    align-items: center;
    bottom: -2px;
    &:hover {
      color: @subtitle;
    }
    &.active {
      color: @link-color;
      border-top: 2px solid @link-color;
      border-left: 2px solid @link-color;
      border-right: 2px solid @link-color;
      border-bottom: 2px solid #ffffff;
      border-radius: 4px;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
}
</style>
