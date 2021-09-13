
var tasks = JSON.parse(localStorage.getItem('tasks')) ;
localStorage.setItem("tasks", JSON.stringify(tasks)); //store tasks

// for show list of all task
const storedItems = JSON.parse(localStorage.getItem('tasks'));
$.each(storedItems, function(item){
    ul = $('ul.list-group')
    li = document.createElement('li');
    $(li).addClass('list-group-item justify-content-between d-flex').attr('id','new-item').html(storedItems[item]).appendTo($(ul))
    i = document.createElement('i');
    $(i).addClass('fas fa-times fa-2x text-danger mr-auto del-item submit').attr("type", "submit").appendTo($(li))
  })

// for add one task with press add button
var allSubjectName = {}; // In global scope
let user; // In global scope
$(".click_add").click(function(event) {
    const task= $('#task').val();
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    var lst = localStorage.getItem("tasks"); // Get your data from local storage
    if(task!="" && lst.includes(task)!=true){
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    var input = document.getElementById("task");  // var input = $("task");
    sessionStorage.user = JSON.stringify({name: input.value});
    user = JSON.parse( sessionStorage.user ); // alert( user.name ); // task

    ul = $('ul.list-group')
    li = document.createElement('li');
    $(li).addClass('list-group-item justify-content-between d-flex').attr('id','new-item').html(input.value).appendTo($(ul))
    i = document.createElement('i');
    $(i).addClass('fas fa-times fa-2x text-danger mr-auto del-item submit').attr("type", "submit").appendTo($(li))
    alert(user.name+' Task added successfully.');

    } else if (lst.includes(task)===true){
        alert('The task is duplicate or empty.');
    } 
    
    // del_select();
    var allSubjectName = $(".list-group-item");
    for (var index = 0; index <allSubjectName.length; index++){
        allSubjectName[index].querySelector("i").addEventListener("click", function(){
            var show_text_li = $(this).closest('.list-group-item').text();
            let show_index_li = tasks.findIndex(id => id == show_text_li);
            $(this).closest('.list-group-item').remove();
            deleteItem(show_index_li);
        });
    }
event.preventDefault();
});

function deleteItem(key){
    var $tasks = tasks;
    $tasks.splice(key,1); // delete item at index
    localStorage.setItem('tasks', JSON.stringify($tasks));
    };

// this is work for del li in html befor localstorage created and add new tasks
var allSubjectName = $(".list-group-item");
   for (var index = 0; index <allSubjectName.length; index++){
      allSubjectName[index].querySelector("i").addEventListener("click", function(){
        var show_text_li = $(this).closest('.list-group-item').text();
        let show_index_li = tasks.findIndex(id => id == show_text_li);
        $(this).closest('.list-group-item').remove();
        deleteItem(show_index_li);
        alert('Task successfully deleted.');
      });
   }

// for del all task with press delete button
$(".click_del").on('click', function() {
    $("#my_lst_ul").remove();
    var url = localStorage.key($('ul'));
    localStorage.removeItem(url);
    var tasks = [];
    localStorage.setItem("tasks", JSON.stringify(tasks)); //store tasks
});

// for show all tasks
jQuery( function( $ ) {
    $('.click_show').on('click', function( evt ) {
        $(document).ready(function(){
        $('#my_lst_ul').removeClass('d-none').addClass('d-block');
        });
    evt.preventDefault();
    } );
    } );

// for reset input box
jQuery( function( $ ) {
    $('.click_reset').on('click', function( evt ) {
        $('#task').val("");
    } );
    } );