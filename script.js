window.onload = function(e){ 
    var data = [];
    
var title = document.getElementById("title");
var add = document.getElementById("add");
var tag = document.getElementById("tag");
var content = document.getElementById("content");
var notes = document.getElementById("notes");
showData()

function showData(){

if(data){
    var tbData = ""


    for(let i = 0; i<data.length; i++){
        tbData += `<div class="note">
                      <img src="/del.svg" onclick="deleteFunc(i)"/>
                      <h2>${data[i].title}</h2>
                      <h3>${data[i].tag}</h3>
                      <p>${data[i].content}</p>
                    </div>`
    }
    notes.innerHTML = tbData
}
}

add.onclick = (e) => {
    data.push(
        {title: title.value,
         tag : tag.value,
         content:content.value
         });
    showData()
}

function deleteFunc(i) {
    console.log(i)
}


};
