
import { SendGroupMes, GetOneYan } from './api'
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
        console.log("发送天气");
    },
    OneYan() {
        GetOneYan().then(res => {
            SendGroupMes(MessageDetail.senderid,res.data.hitokoto)
        })
    },
    Zhiri() {
        let ZhiriMap = new Map<number,number[]>()
        ZhiriMap.set(1, [2795862836])
        ZhiriMap.set(2, [2847277478])
        ZhiriMap.set(3, [3314242197, 2752139375])
        ZhiriMap.set(4, [2602917073])
        ZhiriMap.set(5, [3347232725, 3337653569])
        ZhiriMap.set(6, [1978678141, 2753865017])
        ZhiriMap.set(0, [3327628883, 3110463787])
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