import { Component } from 'react'
import './app.less'

class App extends Component<any, any> {
  // 可以使用所有的 React 生命周期方法
  componentDidMount() {
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

  onError(error) {
    console.log('GLOBAL onError', error)
  }

  onPageNotFound(Object) {
    console.log('GLOBAL onPageNotFound ', Object)
  }

}

export default App
