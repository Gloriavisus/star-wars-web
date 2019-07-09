'use strict';

function main(){
    var ENTRY_POINT = '/';
    var layoutInstance = null;
    var navbarInstance = null;
    var links = [
        {name: 'Home',
        url:'/'},
        {name:'Movies',
        url:'/movies'}
    ];
    var rootElement = document.querySelector('#root');
    
    generateLayout();
    generateNavbar();
    addListenersToNavbar();
    activateRouter();
    

function generateLayout(){
        layoutInstance = new Layout(rootElement);
        layoutInstance.generate();

    }
function generateNavbar(){
        navbarInstance = new Navbar(layoutInstance.header, links)
        navbarInstance.generate();
    }
function activateRouter(){
     routerInstance.builDom(ENTRY_POINT, layoutInstance.main)
    }
function addListenersToNavbar(){
    var anchors = document. querySelectorAll('nav a');
    anchors.forEach(function(anchor){
        anchor.addEventListener('click', changePage);
        })
    }

function changePage(event){
    var url = event.target.attributes.url.value;
    routerInstance.builDom( url, layoutInstance.main);
    }
};

window.addEventListener('load',main);