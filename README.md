## 🚀 一键部署
您可以点击 点击`一键部署`按钮，进行快速体验。

[![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=start-weapp)
# 微信小程序案例

> 快速部署和体验 Serverless 架构下的 Typescript + hapi + Taro + React 的微信小程序项目。

## 源代码

- [:octocat: 服务端源代码](https://github.com/devsapp/start-weapp/tree/main/src)
- [:octocat: 客户端源代码](https://github.com/devsapp/weapp-client)

## Taro 介绍

Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用。

官方文档：https://taro-docs.jd.com/taro/docs/
GitHub：https://github.com/NervJS/taro/
社区组件库：https://taro-docs.jd.com/taro/docs/treasures/#%E6%A0%B7%E5%BC%8F%E5%BA%93
## 客户端开发
### 前置条件

1. 您已经完成了[服务端](https://github.com/devsapp/start-weapp/tree/main/src)的应用部署。

### 体验步骤

1. 在[微信公众平台](https://mp.weixin.qq.com/)上注册微信小程序。
2. 在[阿里云函数计算](https://fcnext.console.aliyun.com/)控制台，找到服务端的“公网访问地址”。
   ![trigger](https://img.alicdn.com/imgextra/i2/O1CN01dplLk71t4tKoO9Zcx_!!6000000005849-0-tps-2848-1358.jpg)
3. 在[微信公众平台](https://mp.weixin.qq.com/)的“开发管理” - “开发设置” 页面找到 AppID（小程序 ID）和 AppSecret（小程序密钥）
   ![appid](https://img.alicdn.com/imgextra/i3/O1CN01OiePJe1ov2LXxEBsO_!!6000000005286-0-tps-2800-1364.jpg)
4. 在[微信公众平台](https://mp.weixin.qq.com/)的“开发管理” - “开发设置” 页面中将第二步中找到的 “公网访问地址” 添加到小程序可以访问的“request 合法域名”中。
   ![trigger](https://img.alicdn.com/imgextra/i1/O1CN01YK1lAg26FVWHqdSg5_!!6000000007632-0-tps-2160-1154.jpg)
5. （可选）如果您希望启用[小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)，从而获取微信用户的 id，你需要在[阿里云函数计算](https://fcnext.console.aliyun.com/)控制台，进入“函数详情”-> “函数配置” 页面找到“环境变量”，然后点击“编辑”。并添加名称为`APP_ID` 和 `SECRET` 的环境变量，对应的值为您的小程序 ID 和小程序密钥。然后点击“保存”。
   ![update-env](https://img.alicdn.com/imgextra/i4/O1CN01K57K5c1QqPZKsVMEx_!!6000000002027-0-tps-2842-1362.jpg)
6. 更新本地代码库中 `project.config.json` 中的 `appid` 为您的小程序 ID。
7. 更新本地代码库中 `config/prod.js` 中的 `API_HOST` 设置为上一步中找到的“公网访问地址”。注意，这里要保留`'"xxx"'`这种单引号，双引号的写法。
8. 进入 `weapp-client` 目录，运行 `npm install` 安装依赖。
9. 运行 `npm run build`
10. 下载并安装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，用于发布小程序客户端。
11. 打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，并选择我们的代码库。
    ![open](https://img.alicdn.com/imgextra/i1/O1CN0136I9eU24lRuW248Xg_!!6000000007431-0-tps-1672-952.jpg)
12. 上传您的小程序客户端代码。版本号可以为 `1.0.0`
    ![upload](https://img.alicdn.com/imgextra/i2/O1CN010KeoC11iBnX7dbkog_!!6000000004375-0-tps-2540-1290.jpg)
13. 在[微信公众平台](https://mp.weixin.qq.com/)的“版本管理”页面中，设置为体验版本。
    ![version](https://img.alicdn.com/imgextra/i3/O1CN011Aldji1w3SwrwnwOu_!!6000000006252-0-tps-2142-918.jpg)
14. 用手机扫描体验二维码，开始体验！
    ![scan](https://img.alicdn.com/imgextra/i3/O1CN01xISaug1Laly04AXhw_!!6000000001316-0-tps-1804-1506.jpg)
15. 您也可以在[微信公众平台](https://mp.weixin.qq.com/)的“成员管理”页面中，添加更多体验成员来使用这个 Demo。

### 本地开发

1. 更新本地代码库中 `config/dev.js` 中的 `API_HOST` 设置为上一步中找到的“公网访问地址”或您本地 API 的地址。注意，这里要保留`'"xxx"'`这种单引号，双引号的写法。
2. 打开您的微信开发者工具，然后在本地命令行中运行 `npm run dev`
3. 微信开发者工具中会显示您的小程序。修改代码后，开发者工具会自动刷新。
4. 如果您想开发支付宝等其他小程序，请参考[Taro](https://taro-docs.jd.com/taro/docs/)文档和`package.json`中的命令。

> - Taro 官方文档：https://taro-docs.jd.com/taro/docs/
> - Taro GitHub：https://github.com/NervJS/taro/
> - Taro 社区组件库：https://taro-docs.jd.com/taro/docs/treasures/#%E6%A0%B7%E5%BC%8F%E5%BA%93
### 本地构建

运行 `npm run build` 将进行构建，然后您可以在微信开发者工具中点击“上传”发布您打包好的小程序。

注意：如果您在手机上发现版本没有更新，您需要在手机后台停止微信，重新启动微信。

> - Serverless Devs 项目：https://www.github.com/serverless-devs/serverless-devs   
> - Serverless Devs 文档：https://www.github.com/serverless-devs/docs   
> - Serverless Devs 钉钉交流群：33947367