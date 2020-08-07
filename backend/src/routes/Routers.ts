import { request, response } from "express";
type Req = (typeof request)
type Res = (typeof response)

export function index(req:Req , res:Res) {
  res.send("hello World")
}

export function chat(req:Req , res:Res) {
  const{ user , room } : {user:string, room:string} = req.body
  res.json(req.body)
}

