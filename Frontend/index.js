let todobox = document.getElementById('todo-box')

// fetch the data
let apiUrl = "https://task-api-deploy.onrender.com/data"

async function fetchData(){
    let response = await fetch(apiUrl)
    let data = await response.json()
    return data
}
fetchData()

// create a function that creates new lists elements
function createListItem(item){
    // new list item
    let newItem = document.createElement('li')
    // give the item a value
    newItem.innerText = item.title

    return newItem;
}

// the function to generate the list items from the data provided
async function generateList(){
    let taskData = await fetchData()

    let todos = taskData.map((task)=>{
        return createListItem(task)
    })

    console.log(todos)

    todobox.append(...todos)
}

generateList()