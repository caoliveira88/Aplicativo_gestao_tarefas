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

// Criar novo item
const createNewItem = event => {
  const key = event.key
  if (key === 'Enter') {
    const localStge = getLocal()
    localStge.push({
      nameList: event.target.value,
      status: '',
      descricao: ''
    })

    setLocal(localStge)
    event.target.value = ''
    updateWindow()
  }
}

// Remover item
const removerItem = index => {
  const localStge = getLocal()
  localStge.splice(index, 1)
  setLocal(localStge)
  updateWindow()
}

// Atualizar item
const updadeItem = index => {
  const localStge = getLocal()
  const classColor = document.querySelectorAll('.todo__item')[index]
  localStge[index].status = localStge[index].status === '' ? 'checked' : ''
  if (localStge[index].status === 'checked') {
    classColor.classList.add('ativo')
  } else {
    localStge[index].status = ''
    classColor.classList.remove('ativo')
  }

  setLocal(localStge)
  updateWindow()
}

// Atualizar descrição
const updadeDesc = index => {
  const localStge = getLocal()
  const desc = document.querySelectorAll('textarea')[index].value
  console.log(desc)
  localStge[index].descricao = desc

  setLocal(localStge)
  updateWindow()
}

// Selecionar item
const clickItem = event => {
  const element = event.target
  if (element.id === 'lixo') {
    const index = element.dataset.index
    removerItem(index)
  } else if (element.id === 'teste') {
    // const des = document.querySelector('.todo__item')
    // des.classList.toggle('ativo')
    const index = element.dataset.index
    updadeItem(index)
  } else if (element.id === 'buttonDesc') {
    const index = element.dataset.index
    updadeDesc(index)
  }
}
