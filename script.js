const getLocal = () => JSON.parse(localStorage.getItem('taskList')) || []

const setLocal = localStge =>
  localStorage.setItem('taskList', JSON.stringify(localStge))

// Criar item  
const createItem = (nameList, status, descricao, index) => {
  const item = document.createElement('label')
  item.classList.add('todo__item')
  if (status === 'checked') {
    item.classList.add('ativo')
  }
  item.innerHTML = `
  <div >
  <div class="todo__top">
              <input id="teste" type="checkbox" ${status} data-index = '${index}'/>
              <div>${nameList} </div>
              <i id="lixo"class="fa-solid fa-trash-can" data-index = '${index}'></i>
              
            </div>
            <div class="desc-list">
                <textarea  
                  type="text"
                  name=""
                  id="textValue"
                  cols=""
                  rows="6"
                 
                  maxlength="100"
                  placeholder="Descricao da tarefa"
                  >${descricao}</textarea> 
            </div>
            <button id="buttonDesc"  data-index = '${index}'>Inserir descricao</button></div>
  `
  document.getElementById('todoList').appendChild(item)
}

// Limpar
const clearList = () => {
  const todolist = document.getElementById('todoList')
  while (todolist.firstChild) {
    todolist.removeChild(todolist.lastChild)
  }
}

// Atualizar
const updateWindow = () => {
  clearList()
  const localStge = getLocal()
  localStge.forEach((item, index) =>
    createItem(item.nameList, item.status, item.descricao, index)
  )
}


