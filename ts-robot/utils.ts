
import { SendGroupMes, GetOneYan,GetWeather } from './api'
import { ZhiriMap,daymap } from './Map'
//定义口令列表
const CommandList = new Map<string, CommandKeys>()
CommandList.set("/天气", 'Tianqi')
CommandList.set("/一言", 'OneYan')
CommandList.set("/值日", 'Zhiri')
function MessageTokey(Message: string) {
    return CommandList.get(Message)!
}
//定义指令列表
const Command = {
    Tianqi() {
        GetWeather().then(res=>{
            let WeatherDetail  = res.data.result.realtime
            let WeatherMes:string = '南阳理工实况天气：' + daymap.get(WeatherDetail.skycon) +"。\r\n实时摄氏度：" + WeatherDetail.temperature +'℃。\r\n最近的降水带距离我们：' + WeatherDetail.precipitation.nearest.distance +'公里。'
            SendGroupMes(MessageDetail.senderid,WeatherMes)
        })
    },
    OneYan() {
        GetOneYan().then(res => {
            SendGroupMes(MessageDetail.senderid,res.data.hitokoto)
        })
    },
    Zhiri() {
       
        let days = new Date().getDay()
        let mes:string = ''
        let persons:number[] = ZhiriMap.get(days)!
        for(let i = 0 ; i < persons.length ; i++){
          let at = '[CQ:at,qq=' + persons[i] + ']'
          mes+=at
        }
        mes+='今天记得值日！！！！！'
        SendGroupMes(MessageDetail.senderid,mes)
    }
}
//定义信息
const MessageDetail = {
    message: "",
    type: "",
    senderid: "",
}
type MessageDetail = typeof MessageDetail
//获取信息
function GetMessage(Message: any) {
    if (Message.post_type !== 'message')
        return 0
    MessageDetail.message = Message.message
    MessageDetail.type = Message.message_type
    if (MessageDetail.type == 'group') {
        MessageDetail.senderid = Message.group_id
    } else {
        MessageDetail.senderid = Message.user_id
    }
    ParseMessage(MessageDetail)
}
//处理命令 并且转换成相对应的指令
type CommandKeys = keyof typeof Command
function ParseMessage(MessageDetail: MessageDetail) {
    if (CommandList.has(MessageDetail.message)) {
        let key: CommandKeys = MessageTokey(MessageDetail.message)
        Command[key]()
    } else {
        return 0
    }
}
export {
    GetMessage
}