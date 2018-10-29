# UED组件库开发说明

### 组件库UI地址
按钮组件库UI地址如下
http://ued.tydicdev.com:8081/#g=1&p=___buttons

UED组件库UI设计的按钮，如果iview组件库里没有，则在src/components/lib/ued/base/button中新建文件
UED组件库UI设计的按钮的样式都写在

### 组件样式开发要求
样式的颜色定义写在 variable.less（src/styles/ued/variable.less）里。

UED按钮的设计的样式与iview原生不同的，新的样式写在src/styles/ued/base/button中与组件同名的less文件中，不得写在button组件中。
