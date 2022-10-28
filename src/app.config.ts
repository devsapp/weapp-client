export default defineAppConfig({
  // 开发者可以使用编译时宏函数 defineAppConfig 包裹配置对象，以获得类型提示和自动补全，如：
  pages: [
    'pages/index/index',
    'pages/user/index'
  ],
      // 数组的第一项代表小程序的初始页面（首页）。小程序中新增/减少页面，都需要对 pages 数组进行修改。
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  // 在 H5、React Native、所有小程序均支持的配置。pages window tabBar subPackages https://taro-docs.jd.com/docs/app-config#通用配置项
  // tabBar 通过 tabBar 配置项指定 tab 栏的表现
  // subPackages 启用分包加载时，声明项目分包结构
  // 小程序端特有属性 https://taro-docs.jd.com/docs/app-config#小程序端特有属性  开发 用户权限 其他等配置
  "lazyCodeLoading": "requiredComponents", // 通常情况下，在小程序启动期间，所有页面及自定义组件的代码都会进行注入，当前页面没有使用到的自定义组件和页面在注入后其实并没有被使用。 自基础库版本 2.11.1 起，小程序支持有选择地注入必要的代码，以降低小程序的启动时间和运行时内存。
})
