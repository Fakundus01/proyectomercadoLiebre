const express=require('express');

const fs= require('fs')

const path=require('path');

const app=express();

app.use(express.static(path.resolve(__dirname,"./public")));

app.listen(process.env.GET || 3000,()=>console.log("Server Start in http://localhost:3000"));

app.get("/",(req,res)=> res.sendFile(path.join(__dirname,"views","home.html")))

app.get("/login",(req,res)=> res.sendFile(path.join(__dirname,"views","login.html")))

app.get("/register",(req,res)=> res.sendFile(path.join(__dirname,"views","register.html")))

app.get("/burger-menu",(req,res)=> res.sendFile(path.join(__dirname,"views","burger-menu.html")))

app.get("/ofertas",(req,res)=> res.sendFile(path.join(__dirname,"views","ofertas.html")))

app.get("/carrito",(req,res)=> res.sendFile(path.join(__dirname,"views","carrito.html")))

