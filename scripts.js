//progress bar
function progress_bar()
{
	//list elements
	const list = document.getElementById('todo_list');

	//done elements
	const done = document.getElementsByClassName('done');

	//get progress bar
	const progress_div = document.getElementById('progress_div');
	const progress_bar = document.getElementById('progress_bar');
	const notification_div = document.getElementById('notification_div');

	if(list.childElementCount > 0){
		progress_div.style.display = 'block';
		progress_bar.setAttribute('value', done.length);
		progress_bar.setAttribute('max', list.childElementCount);

		if(list.childElementCount === done.length){
			notification_div.style.display = 'block';
		}else{
			notification_div.style.display = 'none';
		}
	}else{
		progress_div.style.display = 'none';
		notification_div.style.display = 'none';
	}
}

//check state
const list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('done');
    progress_bar();
  }
}, false);

//add todo item
function addTodoItem()
{
	if(document.getElementById('todo_item').value == ''){
		alert('You have to write something');
	}else{

		//create list element
		const todoItem = document.getElementById('todo_item').value;
		const li = document.createElement('li');
		const todo = document.createTextNode(todoItem);
		li.appendChild(todo);

		//create close element
		const span_close = document.createElement('button');
		span_close.className = "delete is-medium is-pulled-right delete_todo";
		span_close.onclick = function() { this.parentElement.remove(); progress_bar();};
		li.appendChild(span_close);

		//add to the list
		document.getElementById("todo_list").appendChild(li);
		document.getElementById("todo_item").value = "";

		//execute progress bar
		progress_bar();
	}
}

