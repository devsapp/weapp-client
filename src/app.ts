import { Component, PropsWithChildren } from 'react'
import '@/app.less'
// import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import '@/styles/taro-theme/custom-theme.scss'
// ~~~可以看出入口文件也是 React 风格的写法，首先需要引用依赖 @tarojs/taro，这是 Taro 方案的基础框架，在这里我们继承了 Component 组件基类。这指老版本~~~
// 因为在 Taro 3 中开发者使用的是真实的 React，React 的 API 如 Component、useState、useEffect 等都需要从 React 包中获取

class App extends Component<PropsWithChildren> {
  // 可以使用所有的 React 生命周期方法
  // componentWillMount() {
  //   // onLoad 之后，页面组件渲染到 Taro 的虚拟 DOM 之前触发。
  //   // onLoad (options) 在小程序环境中对应页面的 onLoad。
  //   console.log('GLOBAL componentWillMount')
  // }

  componentDidMount() {
    // 页面组件渲染到 Taro 的虚拟 DOM 之后触发
    console.log('GLOBAL componentDidMount')
  }

  // 对应 onLaunch -小程序
  onLaunch(options) {
    console.log('GLOBAL onLaunch', options)
  }

  // 对应 onShow
  componentDidShow(options) {
    console.log('GLOBAL componentDidShow', options)
  }

  // 对应 onHide
  componentDidHide() {
    console.log('GLOBAL componentDidHide')
  }

  // componentDidCatchError() {
  //   console.log('GLOBAL componentDidCatchError')
  // }

  // this.props.children 是将要会渲染的页面
  render() {
    console.log('GLOBAL render')
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    return this.props.children
  }

  // onError(error) {
  //   console.log('GLOBAL onError', error)
  // }

  onPageNotFound(Object) {
    console.log('GLOBAL onPageNotFound ', Object)
  }

}

export default App
