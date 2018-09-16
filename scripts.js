//check state
const list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('done');
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
		span_close.onclick = function() { this.parentElement.remove(); };
		li.appendChild(span_close);

		//add to the list
		document.getElementById("todo_list").appendChild(li);
		document.getElementById("todo_item").value = "";
	}
}
