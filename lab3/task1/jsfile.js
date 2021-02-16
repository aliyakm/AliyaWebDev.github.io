let addbtn = document.getElementById('addbtn');

let mainlist = document.getElementById('mainlist');

let newTask = document.getElementById('newTask');

addbtn.addEventListener('click', function(){
    let chbox = document.createElement('input');
    let label = document.createElement('label');
    let basket = document.createElement('img');
    let taskdiv = document.createElement('div');
    //styling and other
    basket.src = 'b1.png';
    basket.style.width = '15px';
    chbox.type = "checkbox";
    chbox.name = "chboxname";
    chbox.value = "value";
    chbox.id = "id";
    label.htmlFor = "id";
    taskdiv.style.border = '1px solid grey';
    taskdiv.style.width = '600px';
    taskdiv.style.textAlign = 'left';
    taskdiv.style.marginLeft = '440px';
    taskdiv.style.fontFamily = 'sans-serif';
    taskdiv.style.padding = '20px 10px 20px 10px';
    label.style.paddingLeft = '50px';
    chbox.style.float = 'left'; 
    basket.style.float = 'right';

    //append
    label.appendChild(document.createTextNode(newTask.value));
    let br = document.createElement('br');
    taskdiv.appendChild(chbox);
    taskdiv.appendChild(label);
    taskdiv.appendChild(basket);
    mainlist.appendChild(taskdiv);
    mainlist.appendChild(br);
    newTask.value = "";

    //line through
    chbox.addEventListener('change', function(){
        if(chbox.checked){
            label.style.textDecoration = 'line-through';
        }
        else {
            label.style.textDecoration = 'none';
        }
    });

    //delete task
    basket.addEventListener('click', function(){
        mainlist.removeChild(taskdiv);
        mainlist.removeChild(br);
    })
});


