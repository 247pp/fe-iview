<template>
  <div class="individuation">
    <ued-header/>
    <Card style="margin-bottom: 15px ">
      <p slot="title">
        示例
      </p>
      <a href="#" slot="extra" @click.prevent="edit">
        <Icon type="ios-loop-strong"></Icon>
        <span v-if="!isEditorVisible">编辑</span>
        <span v-else>完成</span>
      </a>
      <h3>个性化按钮 Individuation</h3>
      <p>个性化按钮的应用要具体环境具体分析，仔细分析产品的业务逻辑，依据交互设计原则，适当选择应用。</p>
      <div class="ty-button example-content">
        <Row>
          <Col span="5">
            <Button :long="true">
              <Icon type="ios-shirt" size="large" />
              我的购物车
              <Badge :count="100">
              </Badge>
            </Button>
          </Col>
        </Row>
      </div>
      <Divider>按钮类型</Divider>
      <p class="desc">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。
        通过设置type为primary、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
      </p>
      <h3>Code</h3>
      <markdown-it-vue class="md-body" :content="codeContent"/>
      <textarea v-if="isEditorVisible" class="editor full-height" v-model="codeContent"></textarea>
    </Card>

    <ued-footer/>

  </div>
</template>
<script>
import UedHeader from './ued-header'
import UedFooter from './ued-footer'
import markdownItVue from 'markdown-it-vue'

export default {
  name: 'Individuation',
  components: {
    UedHeader,
    UedFooter,
    markdownItVue
  },
  data () {
    return {
      isEditorVisible: false,
      codeContent:
      '```\n' +
      ' <div class="ty-button example-content">\n' +
      '   <Row>\n' +
      '     <Col span="5">\n' +
      '       <Button :long="true">\n' +
      '         <Icon type="ios-shirt" size="large" />\n' +
      '         我的购物车\n' +
      '         <Badge :count="100">\n' +
      '         </Badge>\n' +
      '       </Button>\n' +
      '     </Col>\n' +
      '   </Row>\n' +
      ' </div>\n' +
      '```\n',
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
        '|vertical|是否纵向排列按钮组|Boolean|FALSE|',

      c: `<template>
  <div>
    <Card :bordered="false">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <br><br>
      <Button type="info">Info</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
    </Card>

  </div>
</template>`
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
    @import url("../../../../../styles/ued/base/button/individuation.less");
    .example-content {
        margin: 15px 0;
      }
      .md-body {
        margin-top: 10px;
      }

      .desc {
        margin-bottom: 15px;
      }

      .ivu-row + .ivu-row {
        margin-top: 20px;
      }

      .ivu-row + .ivu-row:nth-child(3n+1) {
        margin-top: 40px;
      }
</style>
