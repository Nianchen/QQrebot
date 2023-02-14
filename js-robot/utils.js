"use strict";
exports.__esModule = true;
exports.GetMessage = void 0;
var api_1 = require("./api");
var Map_1 = require("./Map");
//定义口令列表
var CommandList = new Map();
CommandList.set("/天气", 'Tianqi');
CommandList.set("/一言", 'OneYan');
CommandList.set("/值日", 'Zhiri');
function MessageTokey(Message) {
    return CommandList.get(Message);
}
//定义指令列表
var Command = {
    Tianqi: function () {
        (0, api_1.GetWeather)().then(function (res) {
            var WeatherDetail = res.data.result.realtime;
            var WeatherMes = '南阳理工实况天气：' + Map_1.daymap.get(WeatherDetail.skycon) + "。\r\n实时摄氏度：" + WeatherDetail.temperature + '℃。\r\n最近的降水带距离我们：' + WeatherDetail.precipitation.nearest.distance + '公里。';
            (0, api_1.SendGroupMes)(MessageDetail.senderid, WeatherMes);
        });
    },
    OneYan: function () {
        (0, api_1.GetOneYan)().then(function (res) {
            (0, api_1.SendGroupMes)(MessageDetail.senderid, res.data.hitokoto);
        });
    },
    Zhiri: function () {
        var days = new Date().getDay();
        var mes = '';
        var persons = Map_1.ZhiriMap.get(days);
        for (var i = 0; i < persons.length; i++) {
            var at = '[CQ:at,qq=' + persons[i] + ']';
            mes += at;
        }
        mes += '今天记得值日！！！！！';
        (0, api_1.SendGroupMes)(MessageDetail.senderid, mes);
    }
};
//定义信息
var MessageDetail = {
    message: "",
    type: "",
    senderid: ""
};
//获取信息
function GetMessage(Message) {
    if (Message.post_type !== 'message')
        return 0;
    MessageDetail.message = Message.message;
    MessageDetail.type = Message.message_type;
    if (MessageDetail.type == 'group') {
        MessageDetail.senderid = Message.group_id;
    }
    else {
        MessageDetail.senderid = Message.user_id;
    }
    ParseMessage(MessageDetail);
}
exports.GetMessage = GetMessage;
function ParseMessage(MessageDetail) {
    if (CommandList.has(MessageDetail.message)) {
        var key = MessageTokey(MessageDetail.message);
        Command[key]();
    }
    else {
        return 0;
    }
}
