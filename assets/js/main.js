var ele = document.querySelectorAll(".done");
var chng = document.querySelectorAll("label");
for(let i = 0;i<ele.length;i++){
    ele[i].addEventListener('click',()=>{
        chng[i].innerHTML = "<s>" + chng[i].innerHTML + "</s>";
        ele[i].type = "hidden";
    });
};