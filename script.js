function addTask(){
    $('.tarefas #tarefa').clone().find('input').val('').end().appendTo('.outrasTarefas')
    
};

function teste()
{
    $('.tarefas').keydown(function (tecla){
        if (tecla.keyCode == 9){
            addTask();
        } ;
    })
}
