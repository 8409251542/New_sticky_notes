let addBtn=document.getElementById("addNotes");
let cardContainer=document.getElementById('newSd');
//let NotesData = [];

addBtn.addEventListener('click',addNotes);

function addNotes(){
    let colorBg =document.getElementById('colorBg').value;
    let massage =document.getElementById("message").value;
    let noteTitle =document.getElementById("noteTitle").value;
    let date =new Date().toLocaleString();
   // console.log(date.toString());
    // NotesData.push({
    //     "Head":noteTitle,
    //     "msg":massage,
    //     "color":colorBg,
    //     "date":date
    // });
    if (massage==""||noteTitle=="") {
        alert("Enter the reqired values!")
        
    } else {
        let div =document.createElement('div');
        div.className="article-card";
        div.style.backgroundColor=colorBg;
        div.innerHTML=` <div  class="closeModal">X</div>
        
        <h1 class="card-title">${noteTitle}</h1>
        <p class="title">${massage}</p>
        <div class="content">
        <p class="date">${date}</p>
        </div>
        <div  class="closeModalEdit "><i class="material-icons">border_color</i></div>
       `
        //console.log(colorBg,massage,noteTitle);
        cardContainer.appendChild(div);
        document.getElementById('colorBg').value = "";
        document.getElementById("message").value = "";
        document.getElementById("noteTitle").value = "";
    editNotes();
    closeNotes();
        
    }
    //move("article-card");
}

function editNotes(){
    //let msg = document.querySelector("title").value;
    let pop = document.querySelector('.pop');
    let edmsg=document.getElementById("edMessage");
    let cards=document.getElementById('newSd');
    cards.addEventListener('click',(e)=>{
        
        if (e.target.classList.contains('material-icons')) {
            pop.style.display="flex";
            let card = e.target.closest('.article-card');
            let titleElement = card.querySelector('.title');
            var title = titleElement.textContent;
            //console.log(title);
            edmsg.innerText=title;
            let edBtn=document.getElementById('editNotes');
            edBtn.addEventListener('click',doneNotes);
            function doneNotes(){
                titleElement.textContent = edmsg.value; // Update the title with the new value
                pop.style.display = "none";

                // Update the document title
                document.title = edmsg.value;
            }
        }
    })
}

function closeNotes(){
    let cards=document.getElementById('newSd');
    cards.addEventListener('click',(e)=>{
        if (e.target.innerHTML==="X") {
            e.target.parentElement.remove();
        }
    })
}
// Dragable 

