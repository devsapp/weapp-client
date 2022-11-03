import { Component } from 'react'
import { View, Button } from '@tarojs/components'
import styles from './index.module.less'
import { Block, UserAvatar } from '@/components/shared'
import CachedData from '@/cache/common'
import Taro from '@tarojs/taro'
import OpenId from '@/components/shared/openid'
import C from '@/constant/config'

export default class Index extends Component {
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {

    const onClick = () => {
      Taro.login({
        success: (res) => {
          if (res.code) {
            Taro.request({
              url: `http://localhost:9000/api/openid`,
              header: {
                token: res.code,
                env: Taro.getEnv(),
              },
              data: {
              },
              success: (res) => {
                console.log("local api res :",res.data)
                const { error, data, ErrorCode } = res.data
                let errorMessage = error || ErrorCode
                if (errorMessage) {
                  Taro.showToast({
                    title: errorMessage,
                    duration: 2000,
                    icon: 'error',
                    mask: false,
                  })
                } else {
                  if (data.length) {
                    console.log(data[0])
                  }
                }
              },
              complete: () => {
              },
            })
          }
        },
      })
    }


    return (
      <View className={styles.create}>
        <UserAvatar />
        <Block title={`你好，${CachedData.getNickName()}！欢迎使用阿里云函数计算 FC！`} />
        <OpenId />
        <Button
          className="btn-max-w mt-100"
          type="primary"
          onClick={() => {
            Taro.navigateBack()
          }}
        >
          返回
        </Button>
        <Button
          className="btn-max-w mt-100"
          type="primary"
          onClick={onClick}
        >
          请求
        </Button>
      </View>
    )
  }
}
