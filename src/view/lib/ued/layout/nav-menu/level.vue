<template>
  <div class="collapse">
    <Card style="margin-bottom: 15px;">
      <nav-title :titleText="levelTitle" :detailed="levelDetailed" ></nav-title>
      <h3 class="titleClass">单线水平导航</h3>
      <p class="nav-title-color">交互效果上简洁又容易操作，默认选中第一个，整体可100%自适应设置。</p>
      <nav-menu-level-single :data="jsonArr" hasData="text" :onLevelClick="levelFn" />
      <div style="width:100%;height:1px;background-color:#e4e4e4;margin: 30px 0;"></div>
      <markdown-it-vue class="md-body" :content="codeContent"/>
      <h3 class="titleClass">线框水平导航</h3>
      <p class="nav-title-color">线框水平导航是常用的交互样式，组件默认选中第一个标签，点击其它标签可交互切换。标签数量可根据业务实际内容增加或者减少。</p>
      <nav-menu-level-line :data="jsonArr" hasData="text" :onLevelClick="levelLine" />
      <div style="width:100%;height:1px;background-color:#e4e4e4;margin: 30px 0;"></div>
      <markdown-it-vue class="md-body" :content="codeLineContet"/>
      <h3 class="titleClass">色块水平导航</h3>
      <p class="nav-title-color">门户网站设计中标准的导航样式，组件的交互样式着重突出网站中最主要的、必不可少的栏目内容。默认首页位置，整体可100%自适应设置。</p>
      <nav-menu-level-block :blockLogo="logoSrc" hasData="text" :data="jsonArr" :onLevelClick="levelBlock" />
      <div style="width:100%;height:1px;background-color:#e4e4e4;margin: 30px 0;"></div>
      <markdown-it-vue class="md-body" :content="codeBlockContet"/>
    </Card>
    <ued-footer/>
  </div>
</template>

<script>
import NavTitle from './nav-title'
import NavMenuLevelSingle from '@/components/lib/ued/layout/nav-menu/nav-menu-level-single.vue'
import NavMenuLevelLine from '@/components/lib/ued/layout/nav-menu/nav-menu-level-line.vue'
import NavMenuLevelBlock from '@/components/lib/ued/layout/nav-menu/nav-menu-level-block.vue'
import UedFooter from './ued-footer'
import markdownItVue from 'markdown-it-vue'

export default {
  name: 'collapse',
  components: {
    NavTitle,
    NavMenuLevelSingle,
    markdownItVue,
    NavMenuLevelLine,
    NavMenuLevelBlock,
    UedFooter
  },
  data () {
    return {
      levelDetailed: '水平导航菜单的形式就是把超链接连成一行，信息内容层级比较简单明了，适用在浏览性强的门户性质以及比较前台化的应用。一级类目建议在 2-7 个以内。标题长度 4-15 个字符长度为好，中文字长 2-6 个。',
      levelTitle: 'Level 水平导航',
      theme1: 'light',
      jsonArr: [{ id: 1, text: '菜单选项一' }, { id: 2, text: '菜单选项二', count: 10 }, { id: 3, text: '菜单选项三' }, { id: 4, text: '菜单选项三', count: 100 }],
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
    levelFn (item) {
      this.$Message.info(JSON.stringify(item))
    },
    levelLine (item) {
      this.$Message.info(JSON.stringify(item))
    },
    levelBlock (item) {
      this.$Message.info(JSON.stringify(item))
    }
  }
}
</script>

<style scoped lang="less">
 @import url("../../../../../styles/ued/variable.less");
 @import url("../../../../../styles/ued/layout/nav-menu/level.less");
</style>
