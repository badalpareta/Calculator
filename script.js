const buttonElement = document.querySelectorAll("button");
const display = document.querySelector("#input");
window.addEventListener('click', (e) => {
    let clickValue=e.target.value;
    console.log(clickValue)
    // if(clickValue==="equal")
    // {
    //     if(display.value!==""){
    //         display.value = eval(display.value);
    //      }
    // }
    // else if(clickValue==="clear")
    // {
    //     display.value = "";  
        
    // }
    
    // else if(clickValue=="1"||clickValue=="2"||clickValue=="+")
    // {
    //     display.value=display.value+clickValue;
    // }
    switch(clickValue)
    {
        case"equal":if(display.value!="")
                        display.value=eval(display.value);
                        break;
        case"clear":display.value="";
                    break;
        case"back":
                        display.value=display.value.substring(0,display.value.length-1);
                        break;
        case"pm":display.value=eval("-1"*eval(display.value));
                    break;
        default:if(clickValue==undefined)
        clickValue="";
            display.value=display.value+clickValue;
    }
    
   })


   