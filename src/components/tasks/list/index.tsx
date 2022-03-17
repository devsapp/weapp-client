import { Text, View, Icon } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import C from '@/constant/config';

type Task = {
  _id: string;
  content: string;
  createdTime: number;
};

const TaskList = ({ refreshKey }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, [refreshKey]);

  const fetchTasks = () => {
    Taro.login({
      success: (res) => {
        if (res.code) {
          Taro.request({
            url: `${C.ENDPOINT}/api/tasks`,
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
                setTasks(data);
              }
            },
            complete: () => {
              Taro.hideLoading();
              Taro.stopPullDownRefresh();
            },
          });
        }
      },
    });
  };

  const onDelete = (id) => {
    Taro.showLoading();
    Taro.login({
      success: (res) => {
        if (res.code) {
          Taro.request({
            url: `${C.ENDPOINT}/api/tasks/${id}`,
            method: 'DELETE',
            header: {
              token: res.code,
              env: Taro.getEnv(),
            },
            success: (res) => {
              const { error, ErrorCode } = res.data;
              let errorMessage = error || ErrorCode;
              if (errorMessage) {
                Taro.showToast({
                  title: errorMessage,
                  duration: 2000,
                  icon: 'error',
                  mask: false,
                });
                Taro.hideLoading();
              } else {
                fetchTasks();
              }
            },
          });
        }
      },
    });
  };

  return (
    <View className="mt-50 mb-50 text-bold">
      {tasks
        .sort((a, b) => a.createdTime - b.createdTime)
        .map((task) => (
          <View key={task._id} className="mt-50 mb-50">
            <Text className="mr-20">{task.content}</Text>
            <Icon size="20" type="clear" color="red" onClick={() => onDelete(task._id)} />
          </View>
        ))}
    </View>
  );
};

export default TaskList;
