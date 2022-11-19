import fetch from 

let url = 'http://127.0.0.1:8080/crm/api/v1/auth/signup';

async function postData(data){
    console.log('post data');

    let response = await fetch(url, {
        method : "POST",
        headers : { 'Content-Type' : "application/json"},
        body : JSON.stringify(data)
    });

    return response.json();
}

let data = {
    name : "test", 
    userId : "test",
    email : "test1@gmail.com",
    password : "test@123"
};
postData(data);