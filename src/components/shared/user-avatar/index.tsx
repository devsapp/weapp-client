import styles from './index.module.less';
import { View, Image } from '@tarojs/components';
import CachedData from '@/cache/common';

export const UserAvatar = () => {
  return (
    <View className="mb-20">
      <Image className={styles.avatar} src={CachedData.getUserAvatarUrl()} />
    </View>
  );
};
