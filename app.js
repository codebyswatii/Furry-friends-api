let btn1 = document.getElementById("catBtn");

btn1.addEventListener("click", async()=> {
    let fact = await getFacts();
    // console.log(fact);
    let p = document.querySelector("#catFact");
    p.innerText = fact;
});

let urlCat= "https://catfact.ninja/fact";

async function getFacts() {
    try{
        let res = await axios.get(urlCat);
        return res.data.fact;
    }
    catch(e){
        console.log("error:",e);
        return"No facts found";
    }
    
}

let btn2 = document.getElementById("dogBtn");

btn2.addEventListener("click", async()=> {
    let link = await getImg();
    let img = document.querySelector("#dogImg");
    img.setAttribute("src", link);
    console.log(img);
});

let urlDog = "https://dog.ceo/api/breeds/image/random";

async function getImg() {
    try{
        let res = await axios.get(urlDog);
        return res.data.message;
    }
    catch(e){
        console.log("error:",e);
        return"No image found";
    }
    
}