const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

//Middleware
app.use(cors());
app.use(bodyparser.json());

//create connection
const db = mysql.createConnection
({
    host :'localhost', user :'root', password :'', database :'employee_db'
});

//connect
db.connect (err=>{
    if (err){
        throw err;
    }
    console.log('Mysql connected...');
});

//create database employee_db;

//select * from employee_db.employee;

//create table post

app.get('/ createposttable', (req,res) =>{
    let sql = 'CREATE TABLE post(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query (sql,(err,result)=>{
        if (err) throw err;
        console.log(result);
        res.send('post table created...');
    });
});
