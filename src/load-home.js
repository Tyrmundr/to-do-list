"use strict"

//loading the sidebar
function createSidebarMenu() {
    const projectSidebar = document.createElement("div");
    projectSidebar.classList.add("project-sidebar");
    projectSidebar.innerText = "Projects";

    projectSidebar.appendChild(createAddBtn());

    return projectSidebar;
}

function createProjectFolder() {
    
}

function createFolder(name) {
    
}

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const message = document.createElement("p");
    message.classList.add("home-message");
    message.innerText = "You have no tasks yet. Add a new one?"

    home.appendChild(message);
    home.appendChild(createAddBtn());

    return home;
}

function createAddBtn() {
    const addBtn = document.createElement("button");
    addBtn.classList.add("btn-side-add");
    addBtn.innerText = "+";

    return addBtn;
}