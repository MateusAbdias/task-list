const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const taskContainer = document.querySelector(".tasks-container")

// função para validar a nova atividade
const validateInput = () => {
    return inputElement.value.trim().length > 0
    /* 
        *Escrita dessa forma, não utiliza IF, pois, já é retornado um valor booleano
        *Essa função é a mesma coisa que:
            if (inputElement.value.trim().length > 0) {
                return true;
            } else {
                return false;
            }
    */
};

// função para adicionar tarefa e também validar o input
const handleAddTask = () => {
    const inputIsValid = validateInput();

    //se o input não for valido, altera a cor do input adicionando o error
    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }

    //Cria a div através do createElement
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    //Cria um paragrafo no HTML
    const taskContent = document.createElement("p");
    //O paragrafo recebe o valor do input
    taskContent.innerText = inputElement.value;

    //Adiciona um evento que ao clicar executa a função
    taskContent.addEventListener('click', () => handleClick(taskContent));

    //Adiciona o ícone de lixeira
    const deleteItem = document.createElement("i");
    deleteItem.classList.add("fa-solid");
    deleteItem.classList.add("fa-trash");
    
     //Adiciona um evento que ao clicar executa a função
    deleteItem.addEventListener("click", () => handleDeleteClick(taskItemContainer, taskContent));

    //Cria um novo elemento no HTML
    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);
    taskContainer.appendChild(taskItemContainer);

    //limpa input
    inputElement.value = "";
};

//Percorre todo o HMTL procurando exatamente a div que eu cliquei 
const handleClick = (taskContent) => {
    const tasks = taskContainer.childNodes;

    //Para cada div-task verifique se essa é a div-task clicada
    //Se for a mesma ele adiciona a div completed
    //Se a div clicada já tiver o completed ele remove
    for (const task of tasks) {
        if (task.firstChild.isSameNode(taskContent)) {
            task.firstChild.classList.toggle("completed");
        };
    }
};

const handleDeleteClick = (taskItemContainer, taskContent) => {
    const tasks = taskContainer.childNodes;

    //Para cada div-task verifique se essa é a div-task clicada
    //Se for a mesma ele remove
    for (const task of tasks) {
        if (task.firstChild.isSameNode(taskContent)) {
            taskItemContainer.remove();
        };
    }
};

//função para checar novamente se o input esta válido, e se estiver ela remove o error
const handleInputChange = () => {
    const inputIsValid = validateInput();
    //se o input  for valido, ela remove o error
    return inputElement.classList.remove("error");

};


//ao clicar o input será verificado e validado (ou não)
addTaskButton.addEventListener("click", () => handleAddTask());

// verifica novamente e executa a handleInputChange()
inputElement.addEventListener('change', () => handleInputChange())