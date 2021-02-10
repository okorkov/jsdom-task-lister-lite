document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    let value = document.getElementById('new-task-description').value
    let liTag = document.createElement('li')
    let button = document.createElement('button')
    liTag.innerHTML = value
    button.innerHTML = 'X'
    let tasks = document.getElementById("tasks")
    tasks.appendChild(liTag)
    liTag.appendChild(button)
    event.preventDefault();
    document.getElementById('new-task-description').value = ''
    button.addEventListener("click", function(event) {
      liTag.remove()
      event.preventDefault();
    })
  })
});

