const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

// função para validar a nova atividade
const validateInput = () => {
    return inputElement.value.trim().length > 0
    /* 
        *Escrita dessa forma, eu não uso IF, pois dessa forma eu já tarsnformo em booleano
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