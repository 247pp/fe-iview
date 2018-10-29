<template>
  <div class="combination-vue">
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
      <h3>组合按钮 Combination</h3>
      <p>可实现按钮组合的效果。可实现三项及四项切换。通过设置ButtonGroup的属性shape为circle，可将按钮组形状设置为圆角。</p>
      <div class="ty-button example-content">
        <Row>
          <Col span="6">
            <ButtonGroup @click.native="btnFn($event, 'ivu-row-active-btn')">
              <Button size="large" class="ivu-row-active-btn">按钮左</Button>
              <Button size="large" disabled>禁用</Button>
              <Button size="large" type="info">按钮中</Button>
              <Button size="large" type="primary">按钮右</Button>
            </ButtonGroup>
            <ButtonGroup shape="circle" @click.native="btnFn($event, 'ivu-row-active-btn')">
              <Button size="large" class="ivu-row-active-btn">按钮左</Button>
              <Button size="large" disabled>禁用</Button>
              <Button size="large" type="info">按钮中</Button>
              <Button size="large" type="primary">按钮右</Button>
            </ButtonGroup>
            <ButtonGroup @click.native="btnFn($event, 'ivu-row-active-class-btn')">
              <Button size="large" class="ivu-row-active-class-btn">按钮左</Button>
              <Button size="large" disabled>禁用</Button>
              <Button size="large" type="info">按钮中</Button>
              <Button size="large" type="primary">按钮右</Button>
            </ButtonGroup>
            <ButtonGroup shape="circle" @click.native="btnFn($event, 'ivu-row-active-class-btn')">
              <Button size="large">按钮左</Button>
              <Button size="large" disabled>禁用</Button>
              <Button size="large" class="ivu-row-active-class-btn" type="info">按钮中</Button>
              <Button size="large" type="primary">按钮右</Button>
            </ButtonGroup>
          </Col>
          <Col span="4">
            <ButtonGroup @click.native="btnFn($event, 'ivu-row-active-btn')">
                <Button size="large" icon="ios-color-wand-outline"></Button>
                <Button size="large" disabled icon="ios-paper-outline"></Button>
                <Button size="large" icon="ios-crop"></Button>
                <Button size="large" icon="ios-color-filter-outline"></Button>
            </ButtonGroup>
            <ButtonGroup shape="circle" @click.native="btnFn($event, 'ivu-row-active-btn')">
                <Button size="large" icon="ios-color-wand-outline"></Button>
                <Button size="large" disabled icon="ios-paper-outline"></Button>
                <Button size="large" icon="ios-crop"></Button>
                <Button size="large" icon="ios-color-filter-outline"></Button>
            </ButtonGroup>
            <ButtonGroup @click.native="btnFn($event, 'ivu-row-active-class-btn')">
                <Button size="large" icon="ios-color-wand-outline"></Button>
                <Button size="large" disabled icon="ios-paper-outline"></Button>
                <Button size="large" icon="ios-crop"></Button>
                <Button size="large" icon="ios-color-filter-outline"></Button>
            </ButtonGroup>
            <ButtonGroup shape="circle" @click.native="btnFn($event, 'ivu-row-active-class-btn')">
                <Button size="large" icon="ios-color-wand-outline"></Button>
                <Button size="large" disabled icon="ios-paper-outline"></Button>
                <Button size="large" icon="ios-crop"></Button>
                <Button size="large" icon="ios-color-filter-outline"></Button>
            </ButtonGroup>
          </Col>
          <Col span="1">
            <ButtonGroup vertical @click.native="btnFn($event, 'ivu-row-active-btn')">
                <Button size="large" icon="logo-facebook"></Button>
                <Button size="large" icon="logo-twitter"></Button>
                <Button size="large" icon="logo-googleplus"></Button>
                <Button size="large" icon="logo-tumblr"></Button>
            </ButtonGroup>
          </Col>
          <Col span="1">
            <ButtonGroup vertical @click.native="btnFn($event, 'ivu-row-active-class-btn')">
                <Button size="large" icon="logo-facebook"></Button>
                <Button size="large" icon="logo-twitter"></Button>
                <Button size="large" icon="logo-googleplus"></Button>
                <Button size="large" icon="logo-tumblr"></Button>
            </ButtonGroup>
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
  name: 'CombinationVue',
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
        '     <Col span="6">\n' +
        '       <ButtonGroup @click.native="btnFn($event, \'ivu-row-active-btn\')">\n' +
        '         <Button size="large" class="ivu-row-active-btn">按钮左</Button>\n' +
        '         <Button size="large" disabled>禁用</Button>\n' +
        '         <Button size="large" type="info">按钮中</Button>\n' +
        '         <Button size="large" type="primary">按钮右</Button>\n' +
        '       </ButtonGroup>\n' +
        '       <ButtonGroup shape="circle" @click.native="btnFn($event, \'ivu-row-active-btn\')">\n' +
        '         <Button size="large" class="ivu-row-active-btn">按钮左</Button>\n' +
        '         <Button size="large" disabled>禁用</Button>\n' +
        '         <Button size="large" type="info">按钮中</Button>\n' +
        '         <Button size="large" type="primary">按钮右</Button>\n' +
        '        </ButtonGroup>\n' +
        '        <ButtonGroup @click.native="btnFn($event, \'ivu-row-active-class-btn\')">\n' +
        '          <Button size="large" class="ivu-row-active-class-btn">按钮左</Button>\n' +
        '          <Button size="large" disabled>禁用</Button>\n' +
        '          <Button size="large" type="info">按钮中</Button>\n' +
        '          <Button size="large" type="primary">按钮右</Button>\n' +
        '        </ButtonGroup>\n' +
        '        <ButtonGroup shape="circle" @click.native="btnFn($event, \'ivu-row-active-class-btn\')">\n' +
        '          <Button size="large">按钮左</Button>\n' +
        '          <Button size="large" disabled>禁用</Button>\n' +
        '          <Button size="large"class="ivu-row-active-class-btn" type="info">按钮中</Button>\n' +
        '          <Button size="large" type="primary">按钮右</Button>\n' +
        '        </ButtonGroup>\n' +
        '    </Col>\n' +
        '    <Col span="4">\n' +
        '        <ButtonGroup @click.native="btnFn($event, \'ivu-row-active-btn\')">\n' +
        '          <Button size="large" icon="ios-color-wand-outline"></Button>\n' +
        '          <Button size="large" disabled icon="ios-paper-outline"></Button>\n' +
        '          <Button size="large" icon="ios-crop"></Button>\n' +
        '          <Button size="large" icon="ios-color-filter-outline"></Button>\n' +
        '        </ButtonGroup>\n' +
        '        <ButtonGroup shape="circle" @click.native="btnFn($event, \'ivu-row-active-btn\')">\n' +
        '          <Button size="large" icon="ios-color-wand-outline"></Button>\n' +
        '          <Button size="large" disabled icon="ios-paper-outline"></Button>\n' +
        '          <Button size="large" icon="ios-crop"></Button>\n' +
        '          <Button size="large" icon="ios-color-filter-outline"></Button>\n' +
        '        </ButtonGroup>\n' +
        '        <ButtonGroup @click.native="btnFn($event, \'ivu-row-active-class-btn\')">\n' +
        '          <Button size="large" icon="ios-color-wand-outline"></Button>\n' +
        '          <Button size="large" disabled icon="ios-paper-outline"></Button>\n' +
        '          <Button size="large" icon="ios-crop"></Button>\n' +
        '          <Button size="large" icon="ios-color-filter-outline"></Button>\n' +
        '        </ButtonGroup>\n' +
        '        <ButtonGroup shape="circle" @click.native="btnFn($event, \'ivu-row-active-class-btn\')">\n' +
        '          <Button size="large" icon="ios-color-wand-outline"></Button>\n' +
        '          <Button size="large" disabled icon="ios-paper-outline"></Button>\n' +
        '          <Button size="large" icon="ios-crop"></Button>\n' +
        '          <Button size="large" icon="ios-color-filter-outline"></Button>\n' +
        '        </ButtonGroup>\n' +
        '     </Col>\n' +
        '     <Col span="1">\n' +
        '        <ButtonGroup vertical @click.native="btnFn($event, \'ivu-row-active-btn\')">\n' +
        '          <Button size="large" icon="logo-facebook"></Button>\n' +
        '          <Button size="large" icon="logo-twitter"></Button>\n' +
        '          <Button size="large" icon="logo-googleplus"></Button>\n' +
        '          <Button size="large" icon="logo-tumblr"></Button>\n' +
        '        </ButtonGroup>\n' +
        '     </Col>\n' +
        '     <Col span="1">\n' +
        '        <ButtonGroup vertical @click.native="btnFn($event, \'ivu-row-active-class-btn\')">\n' +
        '          <Button size="large" icon="logo-facebook"></Button>\n' +
        '          <Button size="large" icon="logo-twitter"></Button>\n' +
        '          <Button size="large" icon="logo-googleplus"></Button>\n' +
        '          <Button size="large" icon="logo-tumblr"></Button>\n' +
        '        </ButtonGroup>\n' +
        '     </Col>\n' +
        '   </Row>\n' +
        ' </div>\n' +
        '\n' +
        '\n' +
        '\n' +
        ' export default {\n' +
        '   methods: {\n' +
        '     btnFn (e, addClassName) {\n' +
        '       if (e.target.tagName === \'BUTTON\') {\n' +
        '         for (let i = 0; i < e.target.parentNode.childNodes.length; i++) {\n' +
        '            e.target.parentNode.childNodes[i].classList.remove(addClassName)\n' +
        '         }\n' +
        '         e.target.classList.add(addClassName)\n' +
        '       } else if (e.target.tagName === \'SPAN\' || e.target.tagName === \'I\') {\n' +
        '         for (let i = 0; i < e.target.parentNode.parentNode.childNodes.length; i++) {\n' +
        '            e.target.parentNode.parentNode.childNodes[i].classList.remove(addClassName)\n' +
        '         }\n' +
        '         e.target.parentNode.classList.add(addClassName)\n' +
        '       }\n' +
        '     }\n' +
        '   }\n' +
        ' }\n' +
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
    },
    btnFn (e, addClassName) {
      if (e.target.tagName === 'BUTTON') {
        for (let i = 0; i < e.target.parentNode.childNodes.length; i++) {
          e.target.parentNode.childNodes[i].classList.remove(addClassName)
        }
        e.target.classList.add(addClassName)
      } else if (e.target.tagName === 'SPAN' || e.target.tagName === 'I') {
        for (let i = 0; i < e.target.parentNode.parentNode.childNodes.length; i++) {
          e.target.parentNode.parentNode.childNodes[i].classList.remove(addClassName)
        }
        e.target.parentNode.classList.add(addClassName)
      }
      console.log(e.target.tagName)
    }
  }
}
</script>

<style scoped lang="less">
    @import url("../../../../../styles/ued/base/button/combination.less");
</style>
