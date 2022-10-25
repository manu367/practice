let navObje ={
    home:"Home",
    java:"Java",
    
}
let navbar=document.getElementById("navbar");
console.log(navbar);

setInterval(()=>{
    //checkwidth();
},1)


function checkwidth(){
    var w_width=window.innerWidth;
    console.log(w_width);
    return w_width;
} 
checkwidth();

function setanchortag(link,name){
    var anchor=document.createElement("a");
    anchor.setAttribute("href",link);
    anchor.setAttribute("class","active");
    anchor.innerHTML=name;
    console.log(anchor);
}

function applyanchortagAccordingwidth(){
    if(checkwidth()<= 575){
        for(var i=0;i<5;i++){
            setanchortag("manu.html","manu");
        }
    }
    else if(checkwidth()<=767){
        console.log("width 1191 ")
    }
    else if( checkwidth()>767 && checkwidth()<=991){
        console.log("width 1191 ")
    }
    else if(checkwidth()>991 && checkwidth()<=1191){
        console.log("width 1191 ")
    }
    else if(checkwidth()>1191){
        console.log("else")
    }
}
applyanchortagAccordingwidth();