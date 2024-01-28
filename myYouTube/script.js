const api_key = "AIzaSyC3Ghwm4EABzQyFPmhJKrt2Q-z8VYQRzdo";

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=kgf&key=[YOUR_API_KEY] 
let search  = () =>{
    let query = document.getElementById("query");
    getData(query);
}

let getData = async (query) =>{
 let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;

 let res = await fetch(url);
 let data = await res.json();
 
 console.log(data);
}