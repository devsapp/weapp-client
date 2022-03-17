import { FC, ReactNode } from 'react'
import styles from './index.module.less'
import { View } from '@tarojs/components'

export const Description: FC<{
  content?: ReactNode
}> = props => {
  return (
    <View className={styles.description}>
      {props.content || props.children}
    </View>
  )
}
