/**
 * @description 导出网络配置
 **/
module.exports = {
  // 配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
  // 最长请求时间
  requestTimeout: 100000,
  // 操作正常code，支持String、Array、int多种类型
  successCode: [200, 0, '200', '0', '1', 1, 2],
  // 数据状态的字段名称
  statusName: 'code',
  // 状态信息的字段名称
  messageName: 'msg',
  // 默认的接口地址，开发环境和生产环境都会走/vab-mock-server
  // 正式项目可以选择自己配置成需要的接口地址，如"https://api.xxx.com"
  // 问号后边代表开发环境，冒号后边代表生产环境
  // baseURL: '/'
  baseURL: getUrl(10),

}

function getUrl(type) {
  switch (type) {
    case 10: // 本地网关（开发环境走 vue.config.js 代理转发到 http://127.0.0.1:9000）
      return '/api'
    case 0: // 本地
      return '/vab-mock-server'
    // return 'http://192.0.2.17:9000'
    case 1: // 线上
      return 'http://www.example.com/api'
    case 2: // 客户A正式
      return 'http://192.0.2.200:9000'
    case 3: // 客户A测试
      return 'http://192.0.2.200:8080/api'
    case 4: // 客户B
      return 'http://192.0.2.200/api'
    case 5: // 客户C151
      return 'http://192.0.2.19:80/api'
    // return 'https://szfk.zjzsco.example.com/api'
    case 6: // 客户C正式
      return 'https://szfk.zjzsco.example.com/api'
    // return 'http://192.0.2.18:88/api'
    case 7: // 示例系统服务器
      return 'https://www.huabao.example.com/api'
    // return 'http://192.0.2.18:88/api'
    case 8: // 示例系统服务器
      return 'https://www.wenxin.example.com/api'
    // return 'http://192.0.2.18:88/api'
    case 9: // 客户D
      return 'http://192.0.2.200:80/api'
  }

}
