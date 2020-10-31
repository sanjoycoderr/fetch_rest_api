document.getElementById('btn').addEventListener('click',gettext);
function gettext() {
	fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
		return response.json();
	}).then(function(data){
		var tableid =  document.getElementById('tableid');

		let output = ' ';
		console.log(data);
		var x;
	    for( x of data) {
		  output+= `
			 <tr class="get">
			 <td> ${x.id}</td> 
			 <td class="name"> ${x.name}</td>
			 <td class="salery">  ${x.username}</td>
			 <td class="age"> ${x.email}</td>
			 <td data-id='${x.id}'>
		
			 <input type="submit" class="btn btn-primary" id="edite" value="edite" data-edite="${x.id}">
             <input type="submit" class="btn btn-danger" id="delete" value ="delete" data-delete="${x.id}">
		
              
			 </td>
			 </tr>
		  
	    
	  	`;
	  
	  } 
	  tableid.innerHTML = output;          
	})

}

const clearInputs = () =>{
	document.getElementById('emply_name').value = "";
	document.getElementById('employ_sallery').value = "";
	document.getElementById('age').value = "";
} //ok

//  ============insert data ==========================

var employ_name =	document.getElementById('emply_name');
var employ_sallery = document.getElementById('employ_sallery');
var agee = document.getElementById('age');
document.getElementById('postdata').addEventListener('click',postdata);

function postdata(e){
	e.preventDefault()
 
 url = 'https://jsonplaceholder.typicode.com/users';
 data =  {
			 name:employ_name.value,
			 username:employ_sallery.value,
			 email:agee.value
		};


 parms = {
	 method :'post',
	 body : JSON.stringify(data),
	 headers: {
      'content-type':'application/json'
	 },
 }

 fetch(url,parms)
  .then(async(res)=>{
	  const ResponseData = await res.json();
	  console.log("server response",ResponseData)
	  alert('Hello , '+ResponseData.name.toString() +' Your acount is created succesfully.')
	  clearInputs();
  })


//  console.log(employ_name + " "+ employ_sallery + " " + age);
} //ok


// ====================== delete data===================
var employ_namee =	document.getElementById('tableid');

employ_namee.addEventListener('click',deleter);
function deleter(e){
	e.preventDefault()
	var deletebuttonpress = e.target.id == 'delete';
	var editebuttonpress = e.target.id == 'edite';
	let id =e.target.parentElement.dataset.id;
 var deleteurl = 'http://dummy.restapiexample.com/api/v1/delete';
     if(deletebuttonpress){
		 params = {
			 method:'delete',
		 }
		fetch(`${deleteurl}/${id}`,params)
		.then(function(response){
			 response.json();
			 console.log(response);
		})
		.then(function(data){
			console.log(data);
			console.log('data deleted');
		})
		.catch(function(err){
          console.log(err)
		})
	 }
	//  =============edite===========
	 if(editebuttonpress){
		var parent= e.target.parentElement.parentElement;
		//  var ch = parent.firstChild;
	    // console.log(ch)	;
		var name=  parent.querySelector('.name').textContent;
		var salery=  parent.querySelector('.salery').textContent;
		var age=  parent.querySelector('.age').textContent;
	  var employ_name =	document.getElementById('emply_name');
	  var employ_sallery = document.getElementById('employ_sallery');
       var agee = document.getElementById('age');
		employ_name.value = name;
		employ_sallery.value = salery;
		agee.value = age
		console.log(name +"" +salery +""+age);
	}
	// ==========update============
	document.getElementById('update').addEventListener('click',updatee);
	function updatee(e){
		e.preventDefault()
		console.log('hello')
		var updateurl ='http://dummy.restapiexample.com/api/v1/update';
         data =  {name:employ_name.value,salary:employ_sallery.value,age:agee.value};

		par = {
			method : 'put',
			data : JSON.stringify(data),
			headers : {
             'content-type':'application/json'
			}
		}
		fetch(`${updateurl}/${id}`,par)
		.then(function(response){
			 return response.json();
		})
		.then(function(data){
		   console.log(data);
		   
		})
  	}

	 // ==================edite data ===========================
}
// var employ_namees =	document.getElementById('tableid');
// employ_namees.addEventListener('click',edite);
//  function edite(e){
//    e.preventDefault()
// 	var editebuttonpress = e.target.id == 'delete';
// 	let id =e.target.parentElement.dataset.id;
// 	var editeurl = 'http://dummy.restapiexample.com/api/v1/update';
// 	if(editebuttonpress){
// 		fetch(`${editeurl}/${id}`)
// 	}


//    console.log( id);
//  }


