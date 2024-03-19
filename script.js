//deleting notes
var del = document.getElementsByClassName("del");
var i;
for (i = 0; i < del.length; i++) {
  del[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//editing notes
let done = document.getElementsByClassName("done");
let complete = document.getElementById("complete");
var k;
for (k = 0; k < done.length; k++) {
    done[k].onclick = function () {
        let div2 = this.parentElement;
        console.log(div2);
        complete.appendChild(div2);
    }
}

//close pop-up
let close = document.querySelector(".close");
close.onclick = function () {
    document.querySelector(".pop-up").style.display = "none";
}

let ok = document.querySelector(".ok");
ok.onclick = function () {
    document.querySelector(".pop-up").style.display = "none";
}
 
//function to add a new task
function newElement () {
    let div = document.createElement("div");
    let input = document.getElementById("note").value;
    div.className = "item";
    div.innerHTML = `<div class="card" style="width: 16rem;height:180px; font-size: 17px">
         <div class="card-body" style= "overflow: auto">
         <p class="card-text" style = "height: 70%; overflow:auto">${input}</p>`
    if (input === "") {
        document.querySelector(".pop-up").style.display = "block";
    } else {
        document.getElementById("tasks").style.display = "grid";
        document.getElementById("tasks").appendChild(div);
    }

    document.getElementById("note").value = "";
    

    let button = document.createElement("BUTTON");
    let txt = document.createTextNode("DEL");
    button.className = "del";
    button.appendChild(txt);
    div.appendChild(button);

    for (let i = 0; i <del.length; i++) {
        del[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    let button2 = document.createElement("BUTTON");
    button2.innerHTML = `&#9998;`;
    button2.className = "done";
    div.appendChild(button2);

    let completed = document.getElementById("completed");
    let complete = document.getElementById("complete");
    for (let k = 0; k <done.length; k++) {
        done[k].onclick = function () {
            let div2 = this.parentElement;
            console.log(div2);
            let fChild = div2.firstElementChild;
            console.log(fChild);
            let ffChild = fChild.firstElementChild;
            console.log(ffChild);
            let fffChild = ffChild.firstElementChild;
            console.log(fffChild);
            let info = fffChild.textContent;
            console.log(info);
            document.getElementById("note").value = info;
            div2.style.display = "none";
        }
    }
 }



