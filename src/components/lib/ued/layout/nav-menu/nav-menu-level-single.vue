<template>
  <div>
    <ul>
      <li v-for="(item, idx) in data" :key="item.id" @click.prevent="singleClick(item.id, idx)">
        <p v-if="item.count">
          <span @keydown.prevent>{{item.count > 99 ? '99+' : item.count}}</span>
        </p>
        <span @keydown.prevent :class="idx == index ? 'active': ''">{{item[hasData].length > 6 ? item[hasData].substr(0, 4) + '...' : item[hasData]}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'LevelSingle',
  props: {
    data: Array,
    onLevelClick: Function,
    hasData: String
  },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    singleClick (id, idx) {
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
  height: 64px;
  border-bottom: 3px solid rgba(215, 215, 215, 1);
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
    &:hover {
      color: @subtitle;
    }
    > span {
      width: 71px;
      display: flex;
      align-items: center;
      margin-top: 22px;
      &.active {
        color: rgb(81, 92, 190);
        border-bottom: 3px solid rgb(81, 92, 190);
        margin-bottom: -3px;
      }
    }
    p {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      padding: 3px 7px;
      background-color: @error-color;
      color: #fff;
      font-size: 12px;
      border-radius: 4px;
      &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid @error-color;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 100%);
      }
    }
  }
}
</style>
