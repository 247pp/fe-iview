<template>
  <Card>
    <p slot="title">
      API
    </p>
    <a href="#" slot="extra" @click.prevent="edit">
      <Icon type="ios-loop-strong"></Icon>
      <span v-if="!isEditorVisible">编辑</span>
      <span v-else>完成</span>
    </a>
    <markdown-it-vue class="md-body" :content="apiContent"/>
    <textarea v-if="isEditorVisible" class="editor full-height" v-model="apiContent"></textarea>
  </Card>
</template>

<script>
import markdownItVue from 'markdown-it-vue'

export default {
  name: 'ued-footer',
  components: {
    markdownItVue
  },
  data () {
    return {
      isEditorVisible: false,
      apiContent: 'Level \n' +
        '|属性 |说明 |类型| 默认值|\n' +
        '| :------| :------ | :------: |:------|\n' +
        '|data|导航列表数据|Array|default|\n' +
        '|单线水平导航列表中的数据count|显示冒泡，例如：[{count: 10}]|Number|default|\n' +
        '|hasData|显示data里面的那个字段|String|default|\n' +
        '|logoSrc|logo图片路径|String|default|\n' +
        '|onLevelClick|该属性触发click事件|Function|default|'
    }
  },
  methods: {
    edit () {
      this.isEditorVisible = !this.isEditorVisible
      console.log(111)
    }
  }
}

</script>

<style scoped lang="less">
  .editor {
    width: 100%;
    margin-top: 20px;
    padding: 15px;
    height: 300px;
    border-color: #ececec;
  }

  .md-body {
    margin-top: 10px;
  }

</style>
