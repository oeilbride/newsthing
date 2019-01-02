var http=require('http')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var truc=new XMLHttpRequest()

var url="https://newsapi.org/v2/top-headlines?sources=le-monde&apiKey="
var apiKey = "9c456240b33e494d9a9de17cfab9e6d5"
var urlkey=url.concat(apiKey)


xhr.open('GET', urlkey)
xhr.send(null)
xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log([xhr.readyState,xhr.status])
        console.log("ok")
        var data=JSON.parse(xhr.responseText)
        console.log(data)
    }
    else{
        console.log([xhr.readyState,xhr.status])
        }
});