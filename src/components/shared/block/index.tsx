import { FC, ReactNode } from 'react';
import styles from './index.module.less';
import { View } from '@tarojs/components';

interface Props {
  title: ReactNode | string;
  padding?: string;
  border?: string;
  background?: string;
}

export const Block: FC<Props> = (props) => {
  return (
    <View className={styles.block}>
      <View className={styles.title}>{props.title}</View>
      <View
        className={styles.main}
        style={{
          padding: props.padding,
          background: props.background,
          border: props.border,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

Block.defaultProps = {
  padding: '12px 12px',
  background: '#ffffff',
};
