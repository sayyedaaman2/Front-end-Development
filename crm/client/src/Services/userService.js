
// class User {

//     create(data) {
//         const url = "http://127.0.0.1:8080/crm/api/v1/auth/signup";
//         const config = {
//             headers: {
//                 'Content-Type': "application/json"
//             }
//         }
//         const body = data;
//         return fetch(url, config, body);
//     }
// }


let API = "https://jsonplaceholder.typicode.com/users/1"
const fecthApiData = async (API) => {
    try {
        const res = await fetch(API);
        const data = await res.json();
        console.log("PRO",data);
    } catch (error) {
        console.log(error);
    }
}

fecthApiData(API)