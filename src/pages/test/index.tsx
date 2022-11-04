import { Component } from 'react'
import { View, Text, Map, CustomWrapper, SwiperItem, Swiper } from '@tarojs/components'
import styles from './index.module.less'

import { AtButton } from 'taro-ui'

export default class Test extends Component {
  onTap(e) {
    console.log(e)
  }
  render() {
    return (
      // <View className={styles.index}>
      <View className="p-20">
        {/* <AtButton>按钮文案</AtButton> */}
        <View style="margin:10px auto">
          <AtButton type='primary'>按钮文案</AtButton>
        </View>
        <View style="margin:10px auto">

          <AtButton type='secondary'>按钮文案</AtButton>
        </View>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            <View className='demo-text-1'>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
        </Swiper>

        <View>
          <Text>c component</Text>
        </View>
        <Map onClick={this.onTap} longitude={113.256636} latitude={23.144166} style="width:100%" />
        {/* <View>
        </View> */}
        <CustomWrapper>
          <Text>Hello, world!</Text>
        </CustomWrapper>
      </View>
    )
  }
}