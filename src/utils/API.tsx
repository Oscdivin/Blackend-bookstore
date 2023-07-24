import axios from "axios"
import { log } from "console"

const url = axios.create({
        baseURL: "lhttp://aocalhost:2900"
})

export const getAllEntries=async()=>{
        try {
                await url.get('/').then((res)=>{
return res.data
                })
        } catch (error) {
                console.log(error)
        }
}


export const addAllEntries=async(data:any)=>{
        try {
                await url.post('/data',data).then((res)=>{
return res.data
                })
        } catch (error) {
                console.log(error)
        }
}