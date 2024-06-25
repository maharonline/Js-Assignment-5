let orignalText="I love my country Pakistan. <br/> I like my city Faisalabad. <br/>I love my Homeland.";
let city=["Faisalabad","Lahore","Karachi","Islamabad","Hyderabad","Kashmir"]
// Clear Input
document.getElementById("btn1").onclick=function(){
    document.getElementById("input").value="";

    Toastify({
        text: "Nothing!To Clear",
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

}
// Clear Output
 document.getElementById("btn2").onclick=function(){
    document.getElementById("output").innerHTML=""


    Toastify({
        text: "Nothing!To Clear",
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

// Orignal Statement
document.getElementById("orignal").innerHTML=orignalText;

//Convert into Lower Case

function lowercase(){
   var text= orignalText.toLowerCase();
    document.getElementById("output").innerHTML=text;

}

// Convert into Upper Case
function uppercase(){
   var text= orignalText.toUpperCase();
    document.getElementById("output").innerHTML=text;

}

// Captilize Letter
function capitialize(){
    // let capitalize='<span style="text-transform"capitalize;">'+orignalText+'</span>'

    document.getElementById("output").style.textTransform='capitalize';
    document.getElementById("output").innerHTML=orignalText;

}

// Bettere Formating
function betterformating(){
    var text=document.getElementById("input").value;
    if(!text){
        alert("Please Enter Your Text")
        return;
    }
    document.getElementById("output").style.textTransform="capitalize"
    document.getElementById("output").innerHTML=text;
}

// Print All Cities
function allcity(){
    document.getElementById("output").innerHTML=""
    for(i=0;i<city.length;i++){
        
        document.getElementById("output").innerHTML+=i+1+")"+city[i]+"<br/>"
    }
}
// Add City in the List
function addcity(){
    document.getElementById("output").innerHTML=""
    let text=document.getElementById("input").value;
    city.push(text);
    if(!text){
        alert("Please Add City name first")
        return;
    }
    for(i=0;i<city.length;i++){
        
        document.getElementById("output").innerHTML+=i+1+")"+city[i]+"<br/>"
    }
    
}

// Check City in List
function checkcity(){
    // let text=document.getElementById("input").value;
    let firstletter=city.slice(0,1).toUpperCase();
    let remaintletter=city.slice(1).toLowerCase();
    let full=firstletter+remaintletter;
    let cityfound=false;
    if(!text){
        alert("Please Enter City First")
    }
    for(i=0;i<city.length;i++){
        if(city[i]===full){
            cityfound=true;
            let html='<span style="color:green;">"'+full+'</span>'
            document.getElementById("output")=html;
        }
    }
        if(cityfound===false){
            let html='<span style="color:green;">"'+full+'</span>'
            document.getElementById("output")=html;
        }
    
}

// Find Word
function findWord(){
    let newOriginal=orignalText.toLowerCase();
    let word=document.getElementById("input").value;
    if(!word){
        alert("Please Enter Your Word")
        return;   
     }
    word=word.toLowerCase();
    let findWord=newOriginal.indexOf(word);
    if(findWord!==-1){
        let html='Your Word <span style="color:green; font-size:18px;">"'+word+'"</span> Found at index:'+findWord;
        document.getElementById("output").innerHTML=html;
    }
    else{
        let html='Your Word <span style="color:green; font-size:18px;">"'+word+"Not Found at index:"+findWord;
        document.getElementById("output").innerHTML=html;
    }
}

// Replace Word

function replaceWord(){
    let newOriginal=orignalText.toLowerCase();
    let word=document.getElementById("input").value;
    if(!word){
        alert("This word is not Available")
        return;
    }
    let replacewith=prompt("Enter Your Word Here:")
    if(!replacewith){
        alert("Please Enter Your Word replace it with");
        return;
    
    }
    word=word.toLowerCase();
    word=new RegExp(word,'g')
    replacewith=replacewith.toLowerCase();
    let replaceWord=newOriginal.replace(word,replacewith);
    document.getElementById("output").innerHTML=replaceWord;


}