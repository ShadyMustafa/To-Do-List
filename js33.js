/*var round = 1
for (var x = 120; x >= 1 ; --x){
    var style = ''
    if(round <= 5){
        document.write('<strong> - hend</strong>' )
    }
    document.write('<div style = "border : 2px solid; margin : 7px; border-radius:7px;' + style + '">')
    document.write( round++ + '<strong> - shady</strong>' )
    document.write('<br/>')
   document.write('</div>')
}*/

/*// Create a new <div> element
const newDiv = document.createElement('div');

// Set some content or attributes
newDiv.textContent = "This is a new div element.";
newDiv.style.backgroundColor = "yellow";

// Append the new div to the body of the document
document.body.appendChild(newDiv);


const button = document.getElementById('myButton');

button.addEventListener('click', function(e) {
    e.target.classList.toggle('checked');  // Toggles 'active' class on click
});*/



const inputBox = document.getElementById('input-box')
const listContain = document.getElementById('list-contain')

function AddTask(){
    if(inputBox === ''){
        alert('Enter Any Task')
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value
        listContain.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML='\u00d7';
        li.appendChild(span)
        saveData ()
    }
    inputBox.value='';
}
listContain.addEventListener('click', (e)=>{
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData ()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData ()
    }
})

function saveData (){
    localStorage.setItem("data" , listContain.innerHTML)
}
function showData(){
    listContain.innerHTML = localStorage.getItem("data")
}
showData()