


let list= document.getElementById("list");
let minimalValue = 3;   
let listNum = 0;


$( "#addCourse" ).click(function() {
    let course = document.getElementById("courses");
    let courseSelected = course.options[course.selectedIndex].value;
    let time = document.getElementById("time");
    let timeSelected = time.options[time.selectedIndex].value;
    list.innerHTML += ` 
            <li class="py-3 shadow list-group-item " id="list${listNum}">
                <div class="row">
                    <div class="col-6">
                        <span class="" id="text${listNum}"> ${courseSelected} </span>
                    </div>
                    <div class="col-5">
                        <span class="" id="text${listNum}"> ${timeSelected} </span>
                    </div>
                    <div class="col-1">
                        <button class=" btn btn-primary btn-sm" onclick="deleteList(${listNum})">&#10008;</button>
                    </div>                  
                </div>    
            </li> `;
        listNum++;
});

deleteList=(listId)=>{
    let current = document.getElementById(`text${listId}`).innerHTML;
    let deleteComfirm = confirm(`Are you sure to delete ${current}`);
    if (deleteComfirm) {
         let p = document.getElementById("list")
        let c = document.getElementById(`list${listId}`);
        p.removeChild(c);
    }
    else{
        console.log("deleted");
    }
};