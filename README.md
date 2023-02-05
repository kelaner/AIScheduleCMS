# 🚀 排班表CMS使用说明

## 登录信息

name: cms

email: cms@aischedule.com

password: cms123CMS

## `init`

```sh
npm install
```

## 启动

```sh
npm run start
# or
yarn start
```

### `develop`

```sh
npm run develop
# or
yarn develop
```

## 注

1.若更改了配置（`./config/server.js`），请在保存修改后的文件后，在终端中执行运行`npm run build`或者`yarn build`，之后重新**启动**。

2.CMS已开启**汉化**，若打开后为英文界面，请在登陆界面右上角或个人`Profile`界面中更改`language`选项后`Save`。

3.**组件**没有独立的 API 端口

## API接口

API的使用可参考官方文档，
[API文档](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html)。

*以下API说明的格式是；*

### API名

URL

API描述

- 字段名1；字段类型1；字段描述1

- 字段名2；字段类型2；字段描述2

- ...

  

### Store(门店)

- name；短文本；名称，唯一

- address；短文本；地址

- areaMeasure；decimal型小数；工作场所面积（单位；平方米）

- staffs：Staff表外键，单对多；工作门店

  

### Staff(员工)

- name；短文本；姓名

- position；列表，多选一；职位

  - manager；门店经理
  - assistantManager；副经理
  - leader；小组长

  - cashier；收银

  - guide；导购

  - storehouse；库房

- telephone；整数，11位数；电话

- email；带格式文本，@；电邮

- stores；Store表外键，多对单；工作门店

- preference；Preference组件；偏好

  

### Preference(偏好组件)

- workday；Workday组件；工作日偏好（周几），缺省为全部

- worktime；Worktime组件；工作时间偏好，工作时间范围(上午８点到下午６点)，缺省为全部

- workshift；Workshift组件；班次时长偏好，分每天和每周，缺省为不限制

  

### Workshift（班次时长偏好组件）

- day；整数；每天时长不超过多久，单位；小时，缺省为不限制

- week；整数；每周最多工作多久，单位；小时，缺省为不限制

  

### Worktime（工作时间偏好组件）

- start；time类型，time (ex:00:00)；开始时间，缺省为不限制

- end；time类型，time (ex:23:59)；结束时间，缺省为不限制

  

### Workday（工作日偏好组件）

- Mon；bool；周一
- Tue；bool；周二
- Wed；bool；周三
- Thu；bool；周四
- Fri；bool；周五
- Sat；bool；周六
- Sun；bool；周日

