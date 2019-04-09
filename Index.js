const http = require('http');
var express = require('express');
const path = require('path');
const fs = require('fs');
const ticket = require('./Ticket');
const app = express();

var ticket1 = new ticket(1, "John Smith");
var ticket2 = new ticket(2, "Anthony Myers");
var ticket3 = new ticket(3, "Maria Jolie");

var tickets = []

tickets.push(ticket1, ticket2, ticket3);


app.get('/rest/list', (req, res) =>{
    res.json(tickets);
})

app.get('/rest/ticket/:id', (req, res) =>{
    var id = req.params.id;
    res.json(tickets[id]);
})

app.post('/rest/ticket/', (req, res) =>{
    req.json(req.body);
})

app.listen(5001);