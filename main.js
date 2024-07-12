// let title = document.getElementById("title");
// let price = document.getElementById("price");
// let taxes = document.getElementById("taxes");
// let ads = document.getElementById("ads");
// let discount = document.getElementById("discount");
// let total = document.getElementById("sum");
// let count = document.getElementById("count");
// let category = document.getElementById("category");
// let submit = document.getElementById("submit");
// let mood = "create";
// let tmp;
// // get total
function getTotal() {
  if (price.value != "") {
    let resulte = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = resulte;
  } else {
    total.innerHTML = 0;
  }
}

// // create product
// let datapro = [];
// if (localStorage.product != null) {
//   datapro = JSON.parse(localStorage.product);
// } else {
//   datapro = [];
// }

// submit.onclick = function () {
//   let newpro = {
//     title: title.value.toLowerCase(),
//     price: price.value,
//     taxes: taxes.value,
//     ads: ads.value,
//     discount: discount.value,
//     total: total.innerHTML,
//     count: count.value,
//     category: category.value.toLowerCase(),
//   };

// if (title.value != "" && price.value != "" && category.value != '' && newpro.count < 100) {
//   if (mood == "create") {
//     if (newpro.count > 1) {
//       for (let i = 0; i < newpro.count; i++) {
//         datapro.push(newpro);
//       }
//     } else {
//       datapro.push(newpro);
//     }
//   }
//   else {
//     submit.innerHTML = "Create"
//     count.style.display = "block";
//     mood = "create"
//     datapro[tmp] = newpro;

//   }
//   clearInput();
// }

//   // save local storge
//   localStorage.setItem("product", JSON.stringify(datapro));
//   createTable();
// };

// // clear inputs
// function clearInput() {
//   title.value = "";
//   price.value = "";
//   taxes.value = "";
//   ads.value = "";
//   discount.value = "";
//   total.innerHTML = 0;
//   count.value = "";
//   price.value = "";
//   category.value = "";
// }

// // read

// function createTable() {
//   let table = "";
//   for (let i = 0; i < datapro.length; i++) {
//     table += `
//     <tr>
//     <td>${i + 1}</td>
//     <td>${datapro[i].title}</td>
//     <td>${datapro[i].price}</td>
//     <td>${datapro[i].taxes}</td>
//     <td>${datapro[i].ads}</td>
//     <td>${datapro[i].discount}</td>
//     <td>${datapro[i].total}</td>
//     <td>${datapro[i].category}</td>
//     <td><button id="update" onclick="updatedata (${i})">update</button></td>
//     <td><button id="delete" onclick="deleteItem (${i})">delete</button></td>
//   </tr>`;
//   }
//   document.getElementById("table").innerHTML = table;
//   let btndeleteAll = document.getElementById("deleteAll");
//   if (datapro.length > 0) {
//     btndeleteAll.innerHTML = `
//     <button onclick="deleteAll()">Delete All (${datapro.length})</button>
//     `;
//   } else {
//     btndeleteAll.innerHTML = "";
//   }
// }
// createTable();
// // delete
// function deleteItem(i) {
//   datapro.splice(i, 1);
//   localStorage.product = JSON.stringify(datapro);
//   createTable();
// }

// function deleteAll() {
//   localStorage.clear();
//   datapro.splice(0);
//   createTable();
// }

// // update
// function updatedata(i) {
//   title.value = datapro[i].title;
//   price.value = datapro[i].price;
//   taxes.value = datapro[i].taxes;
//   ads.value = datapro[i].ads;
//   discount.value = datapro[i].discount;
//   getTotal();
//   count.style.display = "none";
//   category.value = datapro[i].category;
//   submit.innerHTML = "Update"
//   mood = "Update"
//   tmp = i;
//   scroll({
//     top:0,
//     behavior: "smooth"
//   })
// }

// let searchMood = 'title';
// function getSearchmood(id) {
//   let search = document.getElementById("search");
//   search.focus();
//   if (id == "searchTitle") {
//     searchMood = 'title';
//   } else {
//     searchMood = "category";
    
//   }
//   search.placeholder = 'Search by ' + searchMood;
//   search.value = "";
//   createTable();
// }
// // search
// function searchData(value) {
//  let table = "";
//  for (let i = 0; i < datapro.length; i++) {
//  if(searchMood == "title"){
//   if (datapro[i].title.includes(value.toLowerCase())) {
//     table += `
//     <tr>
//     <td>${i}</td>
//     <td>${datapro[i].title}</td>
//     <td>${datapro[i].price}</td>
//     <td>${datapro[i].taxes}</td>
//     <td>${datapro[i].ads}</td>
//     <td>${datapro[i].discount}</td>
//     <td>${datapro[i].total}</td>
//     <td>${datapro[i].category}</td>
//     <td><button id="update" onclick="updatedata (${i})">update</button></td>
//     <td><button id="delete" onclick="deleteItem (${i})">delete</button></td>
//   </tr>`;
//   }  
//  }
//  else{
//     if (datapro[i].category.includes(value.toLowerCase())) {
//       table += `
//       <tr>
//       <td>${i}</td>
//       <td>${datapro[i].title}</td>
//       <td>${datapro[i].price}</td>
//       <td>${datapro[i].taxes}</td>
//       <td>${datapro[i].ads}</td>
//       <td>${datapro[i].discount}</td>
//       <td>${datapro[i].total}</td>
//       <td>${datapro[i].category}</td>
//       <td><button id="update" onclick="updatedata (${i})">update</button></td>
//       <td><button id="delete" onclick="deleteItem (${i})">delete</button></td>
//     </tr>`;
//     }  
    
//  }
//  document.getElementById("table").innerHTML = table;
// }}
// // clean data
