
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
const fecthApiData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

console.log(fecthApiData());