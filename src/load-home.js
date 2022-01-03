"use strict"

//loading the sidebar
function createSidebarMenu() {
    const projectSidebar = document.createElement("div");
    projectSidebar.classList.add("project-sidebar");
    projectSidebar.innerText = "Projects";

    projectSidebar.appendChild(createAddProjectBtn());

    return projectSidebar;
}

function createProjectFolder(name) {
    name = prompt("Name of your project folder?:");

    const folder = document.createElement("div");
    folder.classList.add("project-folder");

    const projectName = document.createElement("p");
    projectName.classList.add("project-folder-name");
    projectName.innerText = name;

    folder.appendChild(projectName);
    folder.appendChild(createProjectContent());
    
    return folder;
}

function createProjectContent() {
    const projectContent = document.createElement("div");
    projectContent.classList.add("project-folder-content");
    projectContent.appendChild(createAddTaskBtn());

    return projectContent;
}


function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const message = document.createElement("p");
    message.classList.add("home-message");
    message.innerText = "You have no tasks yet. Add a new one?"

    home.appendChild(message);
    home.appendChild(createAddTaskBtn());

    return home;
}

function createAddTaskBtn() {
    const addBtn = document.createElement("button");
    addBtn.classList.add("btn-task-add");
    addBtn.innerText = "+";

    return addBtn;
}

function createAddProjectBtn() {
    const addBtn = document.createElement("button");
    addBtn.classList.add("btn-project-add");
    addBtn.innerText = "+";
    addBtn.onclick(createProjectFolder());

    return addBtn;
}


export default function loadHome() {
    const main = document.getElementById("main");
    main.innerText = "";
    main.appendChild(createHome());

    const sidebar = document.getElementById("sidebar");
    sidebar.innerText = "";
    sidebar.appendChild(createSidebarMenu())
}