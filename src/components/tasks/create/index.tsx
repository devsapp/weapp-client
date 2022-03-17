import { View, Input, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import C from '@/constant/config';

const TaskCreate = ({ onCreated }) => {
  const [saving, setSaving] = useState(false);
  const [content, setContent] = useState('');

  const onClick = () => {
    setSaving(true);

    Taro.login({
      success: (res) => {
        if (res.code) {
          Taro.request({
            url: `${C.ENDPOINT}/api/tasks`,
            method: 'POST',
            header: {
              token: res.code,
              env: Taro.getEnv(),
            },
            data: {
              content,
            },
            success: (res) => {
              const { error, message, ErrorCode } = res.data;
              let errorMessage = error + message || ErrorCode;
              if (errorMessage) {
                Taro.showToast({
                  title: errorMessage,
                  duration: 2000,
                  icon: 'error',
                  mask: false,
                });
              } else {
                setContent('');
                onCreated();
              }
            },
            complete: () => {
              setSaving(false);
            },
          });
        }
      },
    });
  };

  return (
    <View className="mt-50 mb-50">
      <View className="mb-50">
        <Input
          value={content}
          type="text"
          placeholder="请输入任务内容"
          onInput={(e: any) => {
            setContent(e.target.value);
          }}
          onBlur={(e: any) => {
            setContent(e.detail.value);
          }}
          focus
          maxlength={100}
        />
      </View>
      <View className="mb-50">
        <Button disabled={!content} loading={saving} type="primary" onClick={onClick}>
          添加任务
        </Button>
      </View>
    </View>
  );
};

export default TaskCreate;
