import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import styles from './index.module.less'
import CachedData from '@/cache/common'
import TaskList from '@/components/tasks/list'
import TaskCreate from '@/components/tasks/create'


type Props = {}

type State = {
  refreshIndex: number
}
export default class Index extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      refreshIndex: 0,
    }
  }

  goToUserPage() {
    if (CachedData.hasUserInfo()) {
      Taro.navigateTo({
        url: '/pages/user/index',
      })
    } else {
      Taro.getUserProfile({
        desc: '用于完善资料',
        success: (res) => {
          CachedData.setUserInfo(res.userInfo)
          Taro.navigateTo({
            url: '/pages/user/index',
          })
        },
      })
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  onPullDownRefresh() {
    this.refresh()
  }

  refresh() {
    const { refreshIndex } = this.state
    this.setState({ refreshIndex: refreshIndex + 1 })
  }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { refreshIndex } = this.state
    return (
      <View className={styles.index}>
        <TaskList refreshKey={refreshIndex} />
        <TaskCreate
          onCreated={() => {
            this.refresh()
          }}
        />
        <Button
          className="btn-max-w mt-100"
          type="default"
          onClick={() => {
            this.goToUserPage()
          }}
        >
          查看个人信息
        </Button>
        <Button
          className="btn-max-w mt-100"
          type="default"
          onClick={() => {
            this.goToTestPage()
          }}
        >
          测试页面
        </Button>
      </View>
    )
  }
  goToTestPage() {
    Taro.navigateTo({
      url: '/pages/test/index',
    })
  }
}
