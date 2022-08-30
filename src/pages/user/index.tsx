import { Component } from 'react';
import { View, Button } from '@tarojs/components';
import styles from './index.module.less';
import { Block, UserAvatar } from '@/components/shared';
import CachedData from '@/cache/common';
import Taro from '@tarojs/taro';
import OpenId from '@/components/shared/openid';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className={styles.create}>
        <UserAvatar />
        <Block title={`你好，${CachedData.getNickName()}！欢迎使用阿里云函数计算 FC！`} />
        <OpenId />
        <Button
          className="btn-max-w mt-100"
          type="primary"
          onClick={() => {
            Taro.navigateBack();
          }}
        >
          返回
        </Button>
      </View>
    );
  }
}
