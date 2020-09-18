import { request, response } from "express";
type Req = typeof request
type Res = typeof response

var usuarios:any[]=[]

export function index(req:Req , res:Res) {
  res.json({a:"a"})
}

export function chat(req:Req , res:Res) {
  const{ user , room } : {user:string, room:string} = req.body
  res.json(req.body)
}

export function user(req:Req , res:Res) {
  const{ user }  = req.body
  user === '' || user === ' ' ? 
    res.json({ user , msg:'Error'}):
    res.json({ user , msg:'Ok'})
}
