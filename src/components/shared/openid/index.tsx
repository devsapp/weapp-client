import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import C from '@/constant/config';

const OpenId = () => {
  const [fetching, setFetching] = useState(true);
  const [openId, setOpenId] = useState('');

  useEffect(() => {
    fetchOpenId();
  }, []);

  const fetchOpenId = () => {
    setFetching(true);

    Taro.login({
      success: (res) => {
        if (res.code) {
          Taro.request({
            url: `${C.ENDPOINT}/api/openid`,
            header: {
              token: res.code,
              env: Taro.getEnv(),
            },
            success: (res) => {
              const { error, data, ErrorCode } = res.data;
              let errorMessage = error || ErrorCode;
              if (errorMessage) {
                Taro.showToast({
                  title: errorMessage,
                  duration: 2000,
                  icon: 'error',
                  mask: false,
                });
              } else {
                if (data.length) {
                  setOpenId(data[0].openid);
                }
              }
            },
            complete: () => {
              setFetching(false);
            },
          });
        }
      },
    });
  };

  return (
    <>
      {!fetching && (
        <View className="mt-50 mb-50 text-gray">
          {openId === 'testUser' ? (
            <Text>
              您尚未配置小程序登录，请按照 README.md 中的说明在函数计算控制上为函数配置名称为 APP_ID
              和 SECRET 的环境变量，对应的值为您的小程序 ID 和小程序密钥。
            </Text>
          ) : (
            <Text>您的微信 OpenID 为 {openId}</Text>
          )}
        </View>
      )}
    </>
  );
};

export default OpenId;
