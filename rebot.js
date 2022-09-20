// const axios = require("axios");
// const sd = require("silly-datetime");

// let daymap = new Map();
// daymap.set("CLEAR_DAY", "晴");
// daymap.set("CLEAR_NIGHT", "晴");
// daymap.set("PARTLY_CLOUDY_DAY", "多云");
// daymap.set("PARTLY_CLOUDY_NIGHT", "多云");
// daymap.set("CLOUDY", "阴");
// daymap.set("LIGHT_HAZE", "轻度雾霾");
// daymap.set("MODERATE_HAZE", "中度雾霾");
// daymap.set("HEAVY_HAZE", "重度雾霾");
// daymap.set("LIGHT_RAIN", "小雨");
// daymap.set("MODERATE_RAIN", "中雨");
// daymap.set("HEAVY_RAIN", "大雨");
// daymap.set("STORM_RAIN", "暴雨");
// daymap.set("FOG", "雾天");
// daymap.set("DUST", "浮尘");
// daymap.set("WIND", "大风");


// function Heart() {
//   axios({
//     method: "POST",
//     url: "http://49.235.85.99:5700/send_private_msg",
//     data: {
//       user_id: 2216092064,
//       message: "rebot已在线",
//     },
//   }).then((response) => {
//     console.log(response.data);
//   });
// }
// //发送群聊消息
// function SendGroupMess(id, message) {
//   axios({
//     method: "POST",
//     url: "http://49.235.85.99:5700/send_group_msg",
//     data: {
//       group_id: id,
//       message: message,
//     },
//   }).then((response) => {
//     console.log(response.data);
//   });
// }
// //录取信息
// function Luqu(id) {
//   if (id == 451597869||808235745) {
//     var message =
//       "南阳理工学院计算机与软件学院省内录取情况\r\n:计算机科学与技术最低省内位次111038\r\n大数据方向最低位次125339\r\n人工智能方向132679\r\n软件方向最低省内录取位次176475。\r\n可以对照参考\r\n省外数据暂时未导入。";
//     SendGroupMess(id, message);
//   }
// }
// //社团简介
// function MengXiang(id) {
//   if (id == 451597869) {
//     var message =
//       "梦翔工作室是由学校于2007年审批确立的学生社团，至今已经有十几年的历史。是一个充满活力与朝气的社团，社团自成立以来，主要针对大学生学习、就业现状。通过历代学生自主完善学习资源、学习路线，新老成员之间共同交流共同进步， 社团主要目标是帮助成员在大学毕业时能找到一份合适的工作，目前社团已经有多位成员在 “字节” “快手”“滴滴”等互联网头部企业工作，可以及时向后方传递行业未来发展，社团目前主攻技术栈为Vue相关的前端开发，Springboot SpringCloud等后端开发，小程序，数据可视化以及多方跨端开发。而且已经积累了雄厚的内部学习资源。我们希望通过我们的实际行动，能够帮助你们实现梦想。";
//     SendGroupMess(id, message);
//   }
// }
// //一言
// function OneYan(id) {
//   axios({
//     method: "GET",
//     url: "https://v1.hitokoto.cn",
//   }).then((response) => {
//     message =
//       "" + response.data.hitokoto + "————" + "《 " + response.data.from + " 》";
//     if (response.data.from_who != null) {
//       message += response.data.from_who;
//     }
//     SendGroupMess(id, message);
//   });
// }
// //收到天气指令后发送天气
// function Sendweather(id) {
//   if (id == 451597869 ) {
//     axios
//       .get(
//         "https://api.caiyunapp.com/v2.5/ZI4fsnIgjP5CgjOr/112.5617,32.9736/realtime.json",
//         {}
//       )
//       .then(function (response) {
//         let weather = response.data.result.realtime;
//         var Howday = daymap.get(weather.skycon);
//         var message =
//           "实况天气: 南阳理工实况天气:" +
//           Howday +
//           ",气温:" +
//           weather.temperature +
//           "摄氏度℃。最近的降水带距离本地区" +
//           weather.precipitation.nearest.distance +
//           "公里。";
//         if (weather.precipitation.nearest.distance <= 1)
//           message += "降水地区距离本地区较劲，出门请携带雨伞!";
//         if (weather.temperature >= 30) message += "今日气温较高，不建议出门！";
//         SendGroupMess(id, message);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   } else {
//     axios
//       .get(
//         "https://api.caiyunapp.com/v2.5/ZI4fsnIgjP5CgjOr/112.4519,34.8324/realtime.json",
//         {}
//       )
//       .then(function (response) {
//         let weather = response.data.result.realtime;
//         var Howday = daymap.get(weather.skycon);
//         var message =
//           "实况天气: 孟津实况天气:" +
//           Howday +
//           ",气温:" +
//           weather.temperature +
//           "摄氏度℃。最近的降水带距离本地区" +
//           weather.precipitation.nearest.distance +
//           "公里。";
//         if (weather.precipitation.nearest.distance <= 1)
//           message += "降水地区距离本地区较劲，出门请携带雨伞!";
//         if (weather.temperature >= 30) message += "今日气温较高，不建议出门！";
//         SendGroupMess(id, message);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// }
// //定时天气
// function SendWeather(id, message) {
//   axios({
//     method: "POST",
//     url: "http://49.235.85.99:5700/send_group_msg",
//     data: {
//       group_id: id,
//       message: message,
//     },
//   }).then((response) => {
//     console.log(response.data);
//   });
// }

// //专业介绍
// function ZhuanYe(id){
//   if (id == 451597869 ||808235745) {
//     var message = "计算机科学技术学习方向包含软件和硬件知识\r\n人工智能研究方向如同其名\r\n软工方向除了渗透网安方向,软工其余方向相差不大主要学习方向偏向于软件开发\r\n网络安全方向属于今年新设立专业资料不多可以找渗透的了解一下\r\n假期该玩玩，卷王不得好死！!"
//     SendGroupMess(id, message);
//   }
// }

// var group_list = [451597869,808235745]
// var schedule = require("node-schedule");
// var j = schedule.scheduleJob("0 8 * * *", function () {
//   axios
//     .get(
//       "https://api.caiyunapp.com/v2.5/ZI4fsnIgjP5CgjOr/112.5617,32.9736/realtime.json",
//       {}
//     )
//     .then(function (response) {
//       var Zhuang = new Map();
//       Zhuang.set("days", "天");
//       Zhuang.set("months", "月");
//       var Now = sd.format(new Date(), "YYYY-MM-DD HH:mm");
//       var End = sd.fromNow("2023-01-21");
//       End = End.split(" ");
//       var Djs = End[1] + Zhuang.get(End[2]);
//       console.log(Djs);
//       let weather = response.data.result.realtime;
//       var Howday = daymap.get(weather.skycon);
//       var message =
//         "现在是早上八点，距离今年除夕夜还有:" +
//         Djs +
//         "，南阳理工今日天气:" +
//         Howday +
//         ",气温:" +
//         weather.temperature +
//         "摄氏度℃。最近的降水带距离本地区" +
//         weather.precipitation.nearest.distance +
//         "公里。";
//       if (weather.precipitation.nearest.distance <= 1)
//         message += "降水地区距离本地区较近，出门请携带雨伞!";
//       if (weather.temperature >= 30) message += "今日气温较高，不建议出门！";
//       for(let i = 0 ;i<group_list.length;i++)
//       {
//          SendWeather(group_list[i], message);
//       }
     
//     });
// });
// function Qun(Grpid){
//     let mes ="本群隶属校内计软学院下的一个学习型工作室可以提前了解一下专业知识或者学校情况，录取结果公示后正式开始招新工作，如果未被本校录取，就当交个朋友"
//     SendGroupMess(Grpid,mes)
// }
// //进群@
// function JinQun(Perid,Grpid)
// {

//   let mes = "欢迎！[CQ:at,qq="+Perid+"]新同学你好，为了方便管理进群请更改备注\r\neg：预报考:河南软件XX(省份报考专业姓名)\r\n本群隶属校内计软学院下的一个学习型工作室可以提前了解一下专业知识或者学校情况，录取结果公示后正式开始招新工作，如果未被本校录取，就当交个朋友"
//   SendGroupMess(Grpid,mes)
// }
// //websoceket
// var WebSocketClient = require("websocket").client;
// var client = new WebSocketClient();

// client.on("connectFailed", function (error) {
//   console.log("链接出错: " + error.toString());
// });

// client.on("connect", function (connection) {
//     console.log("链接已建立");
//     Heart()
//   connection.on("error", function (error) {
//     console.log("Connection Error: " + error.toString());
//   });
//   connection.on("close", function () {
//     console.log("echo-protocol Connection Closed");
//   });
//   connection.on("message", function (message) {
//     //处理收到的
//     let Jieshou =
//       (typeof message.utf8Data,
//       typeof JSON.parse(message.utf8Data),
//       JSON.parse(message.utf8Data));
//       console.log(Jieshou);
//     switch (Jieshou.message) {
//       case "/天气":
//         Sendweather(Jieshou.group_id);
//         break;
//       case "/一言":
//         OneYan(Jieshou.group_id);
//         break;
//     }
//   });
// });

// client.connect("ws://49.235.85.99:5701"); //, 'echo-protocol');


// const a = [1,2,3,4].reduce((p,n)=>p+n,0)

// console.log(a);

// setTimeout(foo,100);
// foo=()=>{
//   console.log('a');
// }
// foo();
// function foo(){
//   console.log('b');
// }
// foo()
// function foo(){
//   console.log('c');
// }
// foo()


 var pivotIndex = function(nums) {
  let leftsum
  let rightsum
  for(let i = 0 ; i < nums.length  ; i++ ){
      let mid = nums[i]
      leftsum=0
      rightsum=0
      if(i!==0)
      {
         for(let j = 0 ; j < i; j++ ){
          leftsum += nums[j]
      }
      }
      if(i!==nums.length-1)
      {
         for(let k = i + 1 ; k <nums.length;k++){
          rightsum += nums[k]
      }
      }
     
      if(leftsum==rightsum)
          return i
  }

  return -1
};

console.log(pivotIndex([-1,1,2])); 