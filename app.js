
let arrayOfTasks = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];


let enter = document.getElementById("enter");

enter.addEventListener("click", () => {
   const input = document.querySelector("#item");

   createItem(input);
   displayItems();

   console.log(arrayOfTasks);

   input.value = "";
});


function displayItems() {
   let items = "";
   for (let i = 0; i < arrayOfTasks.length; i++) {

      items += `   <div class="item">
                        <div class="input-controller">
                           <textarea disabled>${arrayOfTasks[i]}</textarea>
                           <div class="edit-controller">
                              <i class="fa-solid fa-check  deleteBtn"></i>
                              <i class="fa-solid fa-pen-to-square editBtn"></i>
                           </div>
                        </div>
                        <div class="update-controller">
                           <button class="saveBtn">Save</button>
                           <button class="cancelBtn">Cancel</button>
                        </div>
                     </div>
`;

   }

   document.querySelector(".to-do-list").innerHTML = items;
   activateDeleteListener();
   activateEditListener();
   activateSaveListener();
   activateCancelListener();
}

function activateDeleteListener() {
   let deleteBtn = document.querySelectorAll(".deleteBtn");
   deleteBtn.forEach((e, i) => {
      e.addEventListener("click", () => { deleteItem(i); });
   });
}

function deleteItem(item) {
   arrayOfTasks.splice(item, 1);
   updateLocalStorage();
   location.reload();


}

function activateEditListener() {
   const editBtn = document.querySelectorAll(".editBtn");
   const updateController = document.querySelectorAll(".update-controller");
   const textarea = document.querySelectorAll(".input-controller textarea");
   editBtn.forEach((e, i) => {
      e.addEventListener("click", () => {
         updateController[i].style.display = "block";
         textarea[i].disabled = false;
      });

   });

   console.log(textarea);
}

function activateSaveListener() {
   const saveBtn = document.querySelectorAll(".saveBtn");
   const inputs = document.querySelectorAll(".input-controller textarea");

   saveBtn.forEach((e, i) => {
      e.addEventListener("click", () => {
         updateItems(inputs[i].value, i);
      });
   });


}


function updateItems(text, i) {
   arrayOfTasks[i] = text;

   updateLocalStorage();

   location.reload();
}

function activateCancelListener() {
   const cancelBtn = document.querySelectorAll(".cancelBtn");
   const updateController = document.querySelectorAll(".update-controller");
   inputs = document.querySelectorAll(".input-controller textarea");

   cancelBtn.forEach((e, i) => {
      e.addEventListener("click", () => {
         updateController[i].style.display = "none";
         inputs[i].disabled = true;
      });
   });

}
////////////
function updateLocalStorage() {
   localStorage.setItem("items", JSON.stringify(arrayOfTasks));
}

function createItem(input) {
   if (document.querySelector("#item").value != false) {
      arrayOfTasks.push(input.value);

   }
   updateLocalStorage();
}


function displayDate() {
   let date = new Date();
   date = date.toString().split(" ");

   document.getElementById("date").innerHTML = `${date[1]} ${date[2]} ${date[3]}`;

}

window.onload = function () {
   displayDate();
   displayItems();
   let date = document.getElementById("date");
   date.style.left = "0px";
   let bt = document.getElementsByClassName("to-do-input")[0];

   console.log(bt);

   bt.style.opacity = "1";
   bt.style.right = "0px";

   document.querySelector("h1").style.top = "0px";


};


