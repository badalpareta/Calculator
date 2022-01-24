const buttonElement = document.querySelectorAll("button");
const display = document.querySelector("#input");
window.addEventListener('click', (e) => {
    let clickValue=e.target.value;

    switch(clickValue)
    {
        case"equal":if(display.placeholder!="")
                        display.placeholder=eval(display.placeholder);
                        break;
        case"clear":display.placeholder="";
                    break;
        case"back":
                        display.placeholder=display.placeholder.substring(0,display.placeholder.length-1);
                        break;
        case"pm":display.placeholder=eval("-1"*eval(display.placeholder));
                    break;
        default:if(clickValue==undefined)
        clickValue="";
            display.placeholder=display.placeholder+clickValue;
    }
    
   })


   