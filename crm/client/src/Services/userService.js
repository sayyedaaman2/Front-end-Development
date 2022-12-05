class User{

    signUp(data){

        fetch("url",{
            method : "POST",
            headers : {
                'Content-Type' : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then((response)=>{
            response.json();
        })
        .then((data)=>{
            console.log(data);
        })
    }
}

export default User =  new User;