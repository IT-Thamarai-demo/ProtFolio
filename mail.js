let name1=document.querySelector("#c");

let body=document.querySelector("body");
let btn1=document.querySelector("#change");
console.log(btn1);
      
       btn1.addEventListener("click",()=>

       {
         body.classList.toggle("mall")
        
       })
       setInterval(() => {
            name1.textContent="Free Lancer";
       }, 10000);
       setInterval(() => {
           name1.textContent="Web Desinger";
       }, 20000);
       setInterval(() => {
           name1.textContent="Content Creator";
       }, 30000);
        

function sendMail() {
    var paras={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        messege:document.getElementById("messege").value

    };
    console.log(paras);
        const serviceid="service_f61kjpb";//service_f61kjpb
    const templateid="template_xejkctk";//template_xejkctk
    

emailjs.send(serviceid,templateid,paras)
.then((res)=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("messege").value="";
        console.log(res);
        alert("messege send SucessFully")
})
.catch((err => console.log(err) ))
}

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            icon.classList.add("active")

        }
        else {
            icon.classList.remove("active")
        }

    })
function along() {
     window.scrollTo(0,0)
}
let by=()=>
      {
        alert("𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗧𝗼 𝗠𝘆 𝗣𝗿𝗼𝘁𝗳𝗼𝗹𝗶𝗼")

      }
