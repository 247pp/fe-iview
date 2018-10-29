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
      apiContent:
        'Button props \n' +
        '|属性 |说明 |类型| 默认值|\n' +
        '| :------| :------ | :------: |:------|\n' +
        '|type|按钮类型，可选值为 default、primary、dashed、text、info、success、warning、error或者不设置|String|default|\n' +
        '|ghost|幽灵属性，使按钮背景透明|Boolean|FALSE|\n' +
        '|size|按钮大小，可选值为large、small、default或者不设置|String|default|\n' +
        '|shape|按钮形状，可选值为circle或者不设置|String|-|\n' +
        '|long|开启后，按钮的长度为 100%|Boolean|FALSE|\n' +
        '|html-type|设置button原生的type，可选值为button、submit、reset|String|button|\n' +
        '|disabled|设置按钮为禁用状态|Boolean|FALSE|\n' +
        '|loading|设置按钮为加载中状态|Boolean|FALSE|\n' +
        '|icon|设置按钮的图标类型|String|-|\n' +
        '|custom-icon|设置按钮的自定义图标|String|-|\n' +
        '|to|跳转的链接，支持 vue-router 对象|String | Object|-|\n' +
        '|replace|路由跳转时，开启 replace 将不会向 history 添加新记录|Boolean|FALSE|\n' +
        '|target|相当于 a 链接的 target 属性|String|_self|\n' +
        'ButtonGroup props\n' +
        '|属性 |说明 |类型| 默认值|\n' +
        '| :------| ------: | :------: |:------|\n' +
        '|size|按钮组合大小，可选值为large、small、default或者不设置|String|default|\n' +
        '|shape|按钮组合形状，可选值为circle或者不设置|String|-|\n' +
        '|vertical|是否纵向排列按钮组|Boolean|FALSE|'
    }
  },
  methods: {
    edit () {
      this.isEditorVisible = !this.isEditorVisible
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
