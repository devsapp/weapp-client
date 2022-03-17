import Taro from '@tarojs/taro';

class CachedData {
  static userInfo;

  static initialize() {
    let userInfo = null;

    const userInfoJsonStr = Taro.getStorageSync('userInfo');
    if (userInfoJsonStr) {
      try {
        userInfo = JSON.parse(userInfoJsonStr);
      } catch (e) {}
    }

    CachedData.userInfo = userInfo;
  }

  static hasUserInfo() {
    return !!CachedData.userInfo;
  }

  static setUserInfo(userInfo) {
    Taro.setStorageSync('userInfo', JSON.stringify(userInfo));
    CachedData.userInfo = userInfo;
  }

  static getNickName() {
    return CachedData.userInfo?.nickName;
  }

  static getUserAvatarUrl() {
    return CachedData.userInfo?.avatarUrl;
  }
}

CachedData.initialize();

export default CachedData;
