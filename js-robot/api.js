"use strict";
exports.__esModule = true;
exports.GetWeather = exports.GetOneYan = exports.SendGroupMes = void 0;
var axios_1 = require("axios");
var request = axios_1["default"].create({
    baseURL: 'http://127.0.0.1:5700'
});
var OneYan = axios_1["default"].create({
    baseURL: "https://v1.hitokoto.cn"
});
var Weather = axios_1["default"].create({
    baseURL: "https://api.caiyunapp.com/v2.5/ZI4fsnIgjP5CgjOr/112.5617,32.9736/realtime.json"
});
var SendGroupMes = function (Group_id, Mes) {
    return request({
        method: 'post',
        url: '/send_group_msg',
        data: {
            group_id: Group_id,
            message: Mes
        }
    });
};
exports.SendGroupMes = SendGroupMes;
var GetOneYan = function () {
    return OneYan({
        method: "get"
    });
};
exports.GetOneYan = GetOneYan;
var GetWeather = function () {
    return Weather({
        method: "get"
    });
};
exports.GetWeather = GetWeather;
