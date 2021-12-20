"use strict"

// Imports to other modules

import loadHome from "./load-home";
import loadProjects from "./load-projects";
import loadAbout from "./load-about";

//Creating header
function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const headerTitle = document.createElement("h1");
    headerTitle.classList.add("header-title");
    headerTitle.innerText = "What 'To-Do'?";

    header.appendChild(headerTitle);
    header.appendChild(createNavbar());

    return header;
}

//Creating navigation
function createNavbar() {
    const navbar = document.createElement("navbar");
    nav.classList.add("navbar");

    const btnHome = document.createElement("button");
    btnHome.classList.add("btn-nav");
    btnHome.innerText = "Home";
    btnHome.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(btnHome);
        loadHome();
    })

    const btnProjects = document.createElement("button");
    btnProjects.classList.add("btn-nav");
    btnProjects.innerText = "Projects";
    btnProjects.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(btnProjects);
        loadProjects();
    })

    const btnAbout = document.createElement("button");
    btnAbout.classList.add("btn-nav");
    btnAbout.innerText = "About";
    btnAbout.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveBtn(btnAbout);
        loadAbout();
    })

    navbar.appendChild(btnHome);
    navbar.appendChild(btnProjects);
    navbar.appendChild(btnAbout);

    return navbar;
}

//Creating sidebar
function createSidebar() {
    const siderbar = document.createElement("sidebar");
    siderbar.classList.add("sidebar");
}

// Creating a main page
function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
}

// Button calibration => setting active class
function setActiveBtn(button) {
    const buttons = document.querySelectorAll(".btn-nav");

    buttons.forEach((button) => {
        if(button !== this) {
            button.classList.remove("active");
        }
    })

    button.classList.add("active");
}

// Initializing the home page