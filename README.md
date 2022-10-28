## 🚀 一键部署
您可以点击 点击`一键部署`按钮，进行快速体验。

[![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=start-weapp)

# 微信小程序案例

> 快速部署和体验 Serverless 架构下的 Typescript + hapi + Taro + React 的微信小程序项目。

## 扫码体验最终效果

![try](https://img.alicdn.com/imgextra/i4/O1CN01anewVJ1gAlPEkkA1U_!!6000000004102-0-tps-258-258.jpg)
## 源代码

- [:octocat: 服务端源代码](https://github.com/devsapp/start-weapp/tree/main/src)
- [:octocat: 客户端源代码](https://github.com/devsapp/weapp-client)

## Taro 介绍

Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用。

官方文档：https://taro-docs.jd.com/taro/docs/
GitHub：https://github.com/NervJS/taro/
社区组件库：https://taro-docs.jd.com/taro/docs/treasures/#%E6%A0%B7%E5%BC%8F%E5%BA%93
## 客户端开发
### 前置条件

1. 您已经完成了[服务端](https://github.com/devsapp/start-weapp/tree/main/src)的应用部署。

### 体验步骤

1. 在[微信公众平台](https://mp.weixin.qq.com/)上注册微信小程序。
2. 在[阿里云函数计算](https://fcnext.console.aliyun.com/)控制台，找到服务端的“公网访问地址”。
   ![trigger](https://img.alicdn.com/imgextra/i2/O1CN01dplLk71t4tKoO9Zcx_!!6000000005849-0-tps-2848-1358.jpg)
3. 在[微信公众平台](https://mp.weixin.qq.com/)的“开发管理” - “开发设置” 页面找到 AppID（小程序 ID）和 AppSecret（小程序密钥）
   ![appid](https://img.alicdn.com/imgextra/i3/O1CN01OiePJe1ov2LXxEBsO_!!6000000005286-0-tps-2800-1364.jpg)
4. 在[微信公众平台](https://mp.weixin.qq.com/)的“开发管理” - “开发设置” 页面中将第二步中找到的 “公网访问地址” 添加到小程序可以访问的“request 合法域名”中。
   ![trigger](https://img.alicdn.com/imgextra/i1/O1CN01YK1lAg26FVWHqdSg5_!!6000000007632-0-tps-2160-1154.jpg)
5. （可选）如果您希望启用[小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)，从而获取微信用户的 id，你需要在[阿里云函数计算](https://fcnext.console.aliyun.com/)控制台，进入“函数详情”-> “函数配置” 页面找到“环境变量”，然后点击“编辑”。并添加名称为`APP_ID` 和 `SECRET` 的环境变量，对应的值为您的小程序 ID 和小程序密钥。然后点击“保存”。
   ![update-env](https://img.alicdn.com/imgextra/i4/O1CN01K57K5c1QqPZKsVMEx_!!6000000002027-0-tps-2842-1362.jpg)
6. 更新本地代码库中 `project.config.json` 中的 `appid` 为您的小程序 ID。
7. 更新本地代码库中 `config/prod.js` 中的 `API_HOST` 设置为上一步中找到的“公网访问地址”。注意，这里要保留`'"xxx"'`这种单引号，双引号的写法。
8. 进入 `weapp-client` 目录，运行 `npm install` 安装依赖。
9. 运行 `npm run build`
10. 下载并安装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，用于发布小程序客户端。
11. 打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，并选择我们的代码库。
    ![open](https://img.alicdn.com/imgextra/i1/O1CN0136I9eU24lRuW248Xg_!!6000000007431-0-tps-1672-952.jpg)
12. 上传您的小程序客户端代码。版本号可以为 `1.0.0`
    ![upload](https://img.alicdn.com/imgextra/i2/O1CN010KeoC11iBnX7dbkog_!!6000000004375-0-tps-2540-1290.jpg)
13. 在[微信公众平台](https://mp.weixin.qq.com/)的“版本管理”页面中，设置为体验版本。
    ![version](https://img.alicdn.com/imgextra/i3/O1CN011Aldji1w3SwrwnwOu_!!6000000006252-0-tps-2142-918.jpg)
14. 用手机扫描体验二维码，开始体验！
    ![scan](https://img.alicdn.com/imgextra/i3/O1CN01xISaug1Laly04AXhw_!!6000000001316-0-tps-1804-1506.jpg)
15. 您也可以在[微信公众平台](https://mp.weixin.qq.com/)的“成员管理”页面中，添加更多体验成员来使用这个 Demo。

### 本地开发

1. 更新本地代码库中 `config/dev.js` 中的 `API_HOST` 设置为上一步中找到的“公网访问地址”或您本地 API 的地址。注意，这里要保留`'"xxx"'`这种单引号，双引号的写法。
2. 打开您的微信开发者工具，然后在本地命令行中运行 `npm run dev`
3. 微信开发者工具中会显示您的小程序。修改代码后，开发者工具会自动刷新。
4. 如果您想开发支付宝等其他小程序，请参考[Taro](https://taro-docs.jd.com/taro/docs/)文档和`package.json`中的命令。

> - Taro 官方文档：https://taro-docs.jd.com/taro/docs/
> - Taro GitHub：https://github.com/NervJS/taro/
> - Taro 社区组件库：https://taro-docs.jd.com/taro/docs/treasures/#%E6%A0%B7%E5%BC%8F%E5%BA%93
### 本地构建

运行 `npm run build` 将进行构建，然后您可以在微信开发者工具中点击“上传”发布您打包好的小程序。

注意：如果您在手机上发现版本没有更新，您需要在手机后台停止微信，重新启动微信。

> - Serverless Devs 项目：https://www.github.com/serverless-devs/serverless-devs
> - Serverless Devs 文档：https://www.github.com/serverless-devs/docs
> - Serverless Devs 钉钉交流群：33947367

> npm install -g @tarojs/cli
找不到依赖 "@tarojs/plugin-platform-weapp"，请先在项目中安装  -- 使用npm安装就不会出现


# 开发
> 每一个 Taro 应用都需要一个入口组件（React 组件）用来注册应用。入口文件默认是 src 目录下的 app.js

在入口组件中我们可以设置全局状态或访问小程序入口实例的生命周期。

npm update @tarojs/components @tarojs/runtime @tarojs/taro @tarojs/plugin-framework-react react-dom react @tarojs/mini-runner @tarojs/webpack-runner @types/react @types/webpack-env

npm update @tarojs/taro
```sh
npm outdated
# 检查更新
npm i -g npm-check-updates
# 使用
npm-check-updates
# 简写
ncu
# 更新全部模块
ncu -u
```
```sh
IOLOI@IOLOII MINGW64 /d/program/workspace/Other/ali-serverless-wxapp-client (main)
@tarojs/components                  3.4.3    3.4.3    3.5.7  hello
@tarojs/mini-runner                 3.4.3    3.4.3    3.5.7  hello
@tarojs/plugin-framework-react      3.4.3    3.4.3    3.5.7  hello
@tarojs/react                       3.4.3    3.4.3    3.5.7  hello
@tarojs/runtime                     3.4.3    3.4.3    3.5.7  hello
@tarojs/taro                        3.4.3    3.4.3    3.5.7  hello
@tarojs/webpack-runner              3.4.3    3.4.3    3.5.7  hello
@types/react                      17.0.52  17.0.52  18.0.24  hello
@typescript-eslint/eslint-plugin   4.33.0   4.33.0   5.41.0  hello
@typescript-eslint/parser          4.33.0   4.33.0   5.41.0  hello
babel-preset-taro                   3.4.3    3.4.3    3.5.7  hello
eslint                              6.8.0    6.8.0   8.26.0  hello
eslint-config-taro                  3.4.3    3.4.3    3.5.7  hello
react                              17.0.2   17.0.2   18.2.0  hello
react-dom                          17.0.2   17.0.2   18.2.0  hello
```
```
$ ncu -u
Upgrading D:\program\workspace\Other\ali-serverless-wxapp-client\package.json
 @tarojs/plugin-framework-react      3.4.3  →     3.5.7
 @tarojs/react                       3.4.3  →     3.5.7
 @tarojs/runtime                     3.4.3  →     3.5.7
 @tarojs/taro                        3.4.3  →     3.5.7
 @tarojs/webpack-runner              3.4.3  →     3.5.7
 @types/react                      ^17.0.2  →  ^18.0.24
 @types/webpack-env                ^1.13.6  →   ^1.18.0
 @typescript-eslint/eslint-plugin  ^4.15.1  →   ^5.41.0
 @typescript-eslint/parser         ^4.15.1  →   ^5.41.0
 babel-preset-taro                   3.4.3  →     3.5.7
 eslint                             ^6.8.0  →   ^8.26.0
 eslint-config-taro                  3.4.3  →     3.5.7
 eslint-plugin-import              ^2.12.0  →   ^2.26.0
 eslint-plugin-react                ^7.8.2  →  ^7.31.10
 eslint-plugin-react-hooks          ^4.2.0  →    ^4.6.0
 react                             ^17.0.0  →   ^18.2.0
 react-dom                         ^17.0.0  →   ^18.2.0
 stylelint                         ^14.4.0  →  ^14.14.0
 typescript                         ^4.1.0  →    ^4.8.4

Run npm install to install new versions.
```

```sh
npm ci # npm ERR! cipm can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync. Please update your lock file with `npm install` before continuing.
```

## 开发版本差异
[各端开发前注意tarojs@v1](https://taro-docs.jd.com/docs/1.x/before-dev-remind)
* **RN 中 View 标签默认主轴方向是 column，如果不将其他端改成与 RN 一致，就需要在所有用到 display: flex 的地方都显式声明主轴方向。**
* 如果要支持 React Native 端，必须采用 Flex 布局，并且样式选择器仅支持类选择器 [跨端样式写法](https://taro-docs.jd.com/docs/1.x/before-dev-remind#%E6%A0%B7%E5%BC%8F%E4%BB%A3%E7%A0%81%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)
* 入口文件 app.js 里面引入的样式就是全局样式，本地样式会覆盖全局样式。
* box-shadow 很遗憾，React Native 这方面支持得并不好（仅 ios 支持且支持程度有限），建议你不要报太大希望。
* border{Top,Right,Bottom,Left} 不支持
* React Native 不支持 background-image ，阅读一下这篇文章：[Background Images in React Native](https://thekevinscott.com/background-images-in-react-native/)，有助于你理解。
* [常用标签支持属性](https://taro-docs.jd.com/docs/1.x/before-dev-remind#properties-%E5%B1%9E%E6%80%A7)

## 书写规范
### 书写
* 两个空格进行缩进
* 不要在句末使用分号
* 字符串统一使用单引号
    > console.log('hello there')
    // 如果遇到需要转义的情况，请按如下三种写法书写
    const x = 'hello "world"'
    const y = 'hello \'world\''
    const z = `hello 'world'
* 关键字后面加空格
    > if (condition) { ... }   // ✓ 正确
    if(condition) { ... }    // ✗ 错误
* 圆括号间不留空格
    > getName( name )     // ✗ 错误
    getName(name)       // ✓ 正确
* 注释首尾留空格
    > //comment           // ✗ 错误
    // comment          // ✓ 正确
    /*comment*/         // ✗ 错误
    /* comment */       // ✓ 正确
* 模板字符串中变量前后不加空格
    > const message = `Hello, ${ name }`    // ✗ 错误
    const message = `Hello, ${name}`      // ✓ 正确
* 逗号后面加空格
* 单行代码块两边加空格
    > function foo () {return true}    // ✗ 错误
    function foo () { return true }  // ✓ 正确
    if (condition) { return true }  // ✓ 正确
* 键值对当中冒号与值之间要留空白
    > const obj = { 'key' : 'value' }    // ✗ 错误
    const obj = { 'key' :'value' }     // ✗ 错误
    const obj = { 'key':'value' }      // ✗ 错误
    const obj = { 'key': 'value' }     // ✓ 正确
* 使用 const/let 定义变量 （侧面意思不要var）
* 每个 const/let 关键字单独声明一个变量
* 不要使用 undefined 来初始化变量
    > let name = undefined    // ✗ 错误
    \---
    let name
    name = 'value'          // ✓ 正确
* 对于变量和函数名统一使用驼峰命名法
    > function my_function () { }    // ✗ 错误
    function myFunction () { }     // ✓ 正确
    \---
    const my_var = 'hello'           // ✗ 错误
    const myVar = 'hello'            // ✓ 正确
* 字符串拼接操作符 (Infix operators) 之间要留空格
    > // ✓ 正确
    const x = 2
    const message = 'hello, ' + name + '!'
    \---
    // ✗ 错误
    const x=2
    const message = 'hello, '+name+'!'
* 不要使用多行字符串
* 检查 NaN 的正确姿势是使用 isNaN()
* 用合法的字符串跟 typeof 进行比较操作
    > typeof name === undefined       // ✗ 错误
    typeof name === 'undefined'     // ✓ 正确
* 不要使用 eval()
* 注意隐式的 eval()
    > setTimeout("alert('Hello world')")                   // ✗ 错误 - 会运行alert
    setTimeout(function () { alert('Hello world') })     // ✓ 正确
* 嵌套的代码块中禁止再定义函数
* 自调用匿名函数 (IIFEs) 使用括号包裹
    > const getName = function () { }()     // ✗ 错误
    \---
    const getName = (function () { }())   // ✓ 正确
    const getName = (function () { })()   // ✓ 正确
<!-- 类相关 -->
* 类名要以大写字母开头
* 子类的构造器中一定要调用 super
* 使用 this 前请确保 super() 已调用
    ```js
    class Dog extends Animal {
        constructor () {
            this.legs = 4     // ✗ 错误
            super()
        }
    }
    ```
* 无参的构造函数调用时要带上括号

* 避免在 return 语句中出现赋值语句
* return，throw，continue 和 break 后不要再跟代码
* 始终使用 === 替代 ==
* if/else 关键字要与花括号保持在同一行
* 对于三元运算符 ? 和 : 与他们所负责的代码处于同一行
    ```js
    // ✓ 正确
    const location = env.development ? 'localhost' : 'www.api.com'

    // ✓ 正确
    const location = env.development
    ? 'localhost'
    : 'www.api.com'

    // ✗ 错误
    const location = env.development ?
    'localhost' :
    'www.api.com'
    ```
* 如果有更好的实现，尽量不要使用三元表达式
* 用 throw 抛错时，抛出 Error 对象而不是字符串
    ```js
    throw 'error'               // ✗ 错误
    throw new Error('error')    // ✓ 正确
    ```
* 使用 Promise 一定要捕捉错误

### 组件及 JSX 书写规范
> Taro 中组件以类的形式进行创建，并且单个文件中只能存在单个组件

* 终始在自闭合标签前面添加一个空格
* 属性名称始终使用驼峰命名法
* 用括号包裹多行 JSX 标签
    ```jsx
    // bad
    render () {
        return <MyComponent className='long body' foo='bar'>
                <MyChild />
              </MyComponent>
    }

    // good
    render () {
        return (
            <MyComponent className='long body' foo='bar'>
                <MyChild />
            </MyComponent>
        )
    }

    // good
    render () {
        const body = <div>hello</div>
        return <MyComponent>{body}</MyComponent>
    }
    ```
* 当标签没有子元素时，始终使用自闭合标签
* 书写顺序
    > 在 Taro 组件中会包含类静态属性、类属性、生命周期等的类成员，其书写顺序最好遵循以下约定（顺序从上至下）
    1. static 静态方法
    2. constructor
    3. componentWillMount
    4. componentDidMount
    5. componentWillReceiveProps
    6. shouldComponentUpdate
    7. componentWillUpdate
    8. componentDidUpdate
    9. componentWillUnmount
    10. 点击回调或者事件回调 比如 onClickSubmit() 或者 onChangeDescription()
    11. 0render
* 不要在调用 this.setState 时使用 this.state
    > 由于 this.setState 异步的缘故，这样的做法会导致一些错误，可以通过给 this.setState 传入函数来避免
    ```js
    this.setState({
        value: this.state.value + 1
    })   // ✗ 错误

    this.setState(prevState => ({ value: prevState.value + 1 }))    // ✓ 正确
    ```
* map 循环时请给元素加上 key 属性
* 尽量避免在 componentDidMount 中调用 this.setState
    > 因为在 componentDidMount 中调用 this.setState 会导致触发更新
* 不要在 componentWillUpdate/componentDidUpdate/render 中调用 this.setState
    ```js
    import Taro, { Component } from '@tarojs/taro'
    import { View, Input } from '@tarojs/components'

    class MyComponent extends Component {
    state = {
        myTime: 12
    }

    componentWillUpdate () {
        this.setState({     // ✗ 错误
        name: 1
        })
    }

    componentDidUpdate () {
        this.setState({     // ✗ 错误
        name: 1
        })
    }

    render () {
        const { isEnable } = this.props
        const { myTime } = this.state
        this.setState({     // ✗ 错误
        name: 11
        })
        return (
        <View className='test'>
            {isEnable && <Text className='test_text'>{myTime}</Text>}
        </View>
        )
    }
    }
    ```
* 组件最好定义 defaultProps
    ```js
    import Taro, { Component } from '@tarojs/taro'
    import { View, Input } from '@tarojs/components'

    class MyComponent extends Component {

    static defaultProps = {
        isEnable: true
    }

    state = {
        myTime: 12
    }

    render () {
        const { isEnable } = this.props
        const { myTime } = this.state

        return (
        <View className='test'>
            {isEnable && <Text className='test_text'>{myTime}</Text>}
        </View>
        )
    }
    }
    ```
* render 方法必须有返回值
* 值为 true 的属性可以省略书写值
* 事件绑定均以 on 开头
    > 在 Taro 中所有默认事件如 onClick、onTouchStart 等等，均以 on 开头
* 子组件传入函数时属性名需要以 on 开头

### Taro 自身限制规范
* 不能使用 Array#map 之外的方法操作 JSX 数组
    > Taro 在小程序端实际上把 JSX 转换成了字符串模板，而一个原生 JSX 表达式实际上是一个 React/Nerv 元素(react-element)的构造器，因此在原生 JSX 中你可以随意地对一组 React 元素进行操作。但在 Taro 中你只能使用 map 方法，Taro 转换成小程序中 wx:for

    以下代码会被 ESLint 提示警告，同时在 Taro（小程序端）也不会有效：
    ```js
    test.push(<View />)
    numbers.forEach(number => {
    if (someCase) {
        a = <View />
    }
    })

    test.shift(<View />)

    components.find(component => {
    return component === <View />
    })

    components.some(component => component.constructor.__proto__ === <View />.constructor)
    ```
    以下代码不会被警告，也应当在 Taro 任意端中能够运行：
    ```js
    numbers.filter(Boolean).map((number) => {
        const element = <View />
        return <View />
    })
    ```
    **解决方案:**
    > 先处理好需要遍历的数组，然后再用处理好的数组调用 map 方法。

## 配置
各类小程序平台均有自己的项目配置文件，例如：
微信小程序，project.config.json
百度小程序，project.swan.json
字节跳动小程序，project.config.json
QQ 小程序，project.config.json
支付宝小程序，mini.project.json
京东小程序，暂无发现
飞书小程序，project.config.json

[点击跳转配置指南](https://taro-docs.jd.com/docs/project-config#:~:text=%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%EF%BC%8Cproject,%E4%B9%A6%E5%B0%8F%E7%A8%8B%E5%BA%8F%EF%BC%8Cproject.config.json)