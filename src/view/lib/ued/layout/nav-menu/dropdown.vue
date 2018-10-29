<template>
  <div class="dropdown">
    <Card style="margin-bottom: 15px;">
      <nav-title :titleText="levelTitle" :detailed="levelDetailed" ></nav-title>
      <h3 class="titleClass">下拉导航</h3>
      <p class="nav-title-color">配合筛选功能应用较多，占用空间小，操作简单。</p>
      <div style="width:100%;height:1px;background-color:#e4e4e4;margin: 30px 0;"></div>
      <markdown-it-vue class="md-body" :content="codeBlockContet"/>
    </Card>
    <ued-footer/>
  </div>
</template>

<script>
import NavTitle from './nav-title'
import UedFooter from './ued-footer'
import markdownItVue from 'markdown-it-vue'

export default {
  name: 'dropdown',
  components: {
    NavTitle,
    markdownItVue,
    UedFooter
  },
  data () {
    return {
      levelDetailed: '下拉导航占据的空间很小，很容易嵌套进其他的导航中去。导航的标签数量没有上限，可以容纳栏目个数很多。业务逻辑层次明显，交互上干净整齐。',
      levelTitle: '下拉导航 Dropdown',
      theme1: 'light',
      logoSrc: 'http://ued.tydicdev.com:8081/images/_____level_iview_/logo_u4792.png',
      codeContent: '```\n' +
        '<nav-menu-level-line :data="jsonArr" hasData="text" :onLevelClick="levelSingle" />\n' +
        '\n' +
        '\n' +
        '\n' +
        'export default { \n' +
        '  data () {\n' +
        '     jsonArr: [{ id: 1, text: \'菜单选项一\' }, { id: 2, text: \'菜单选项二\', count: 10}, { id: 3, text: \'菜单选项三\' }, { id: 4, text: \'菜单选项三\', count: 10}]\n' +
        '  },\n' +
        '  methods () {\n' +
        '     levelSingle (item) {\n' +
        '      this.$Message.info(JSON.stringify(item))\n' +
        '     }\n' +
        '  }\n' +
        '}\n' +
      '```\n',
      codeLineContet: '```\n' +
        '<nav-menu-level-line :data="jsonArr" hasData="text" :onLevelClick="levelLine" />\n' +
        '\n' +
        '\n' +
        '\n' +
        'export default { \n' +
        '  data () {\n' +
        '     jsonArr: [{ id: 1, text: \'菜单选项一\' }, { id: 2, text: \'菜单选项二\', count: 10}, { id: 3, text: \'菜单选项三\' }, { id: 4, text: \'菜单选项三\', count: 10}]\n' +
        '  },\n' +
        '  methods () {\n' +
        '     levelLine (item) {\n' +
        '      this.$Message.info(JSON.stringify(item))\n' +
        '     }\n' +
        '  }\n' +
        '}\n' +
      '```\n',
      codeBlockContet: '```\n' +
        '<nav-menu-level-block :data="jsonArr" hasData="text" :onLevelClick="levelBlock" />\n' +
        '\n' +
        '\n' +
        '\n' +
        'export default { \n' +
        '  data () {\n' +
        '     jsonArr: [{ id: 1, text: \'菜单选项一\' }, { id: 2, text: \'菜单选项二\'}, { id: 3, text: \'菜单选项三\' }, { id: 4, text: \'菜单选项三\'}]\n' +
        '     logoSrc: "http://ued.tydicdev.com:8081/images/_____level_iview_/logo_u4792.png"\n' +
        '  },\n' +
        '  methods () {\n' +
        '     levelBlock (item) {\n' +
        '      this.$Message.info(JSON.stringify(item))\n' +
        '     }\n' +
        '  }\n' +
        '}\n' +
      '```\n'
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
 @import url("../../../../../styles/ued/variable.less");
 @import url("../../../../../styles/ued/layout/nav-menu/dropdown.less");
</style>
