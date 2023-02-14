import axios from 'axios'

const request = axios.create({
    baseURL:'http://127.0.0.1:5700'
})

const OneYan = axios.create({
    baseURL:"https://v1.hitokoto.cn"
})

const Weather = axios.create({
    baseURL:"https://api.caiyunapp.com/v2.5/ZI4fsnIgjP5CgjOr/112.5617,32.9736/realtime.json"
})
export const SendGroupMes = (Group_id:string,Mes:string) =>{
    return request({
        method:'post',
        url:'/send_group_msg',
        data:{
            group_id : Group_id,
            message : Mes
        }
    })
}

export const GetOneYan = () =>{
    return OneYan({
        method:"get"
    })
  
}

export const GetWeather= () =>{
    return Weather({
        method:"get"
    })
}

