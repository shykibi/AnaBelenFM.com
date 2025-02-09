/*
*   
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//
import Projects from './Projects.js';

const projects = new Projects();


// automatic scroll
const body = document.querySelector('body');
var about = document.getElementById('About');
var experience = document.getElementById('Experience');
var skills = document.getElementById('Skills');
var myProjects = document.getElementById('Projects');
var contact = document.getElementById('Contact');
var projectDetails = document.getElementById('ProjectDetailsWindow');

window.addEventListener('scroll', function() {
  if (about.getBoundingClientRect().bottom <= window.innerHeight) {
    // this.alert("fin about");
  } else if (experience.getBoundingClientRect().bottom <= window.innerHeight) {
    // this.alert("fin experience");
  } else if (skills.getBoundingClientRect().bottom <= window.innerHeight) {
    // this.alert("fin skills");
  } else if (myProjects.getBoundingClientRect().bottom <= window.innerHeight) {
    // this.alert("fin contact");
  }
});

function hideProjectDetails(){
    projects.hideProjectDetails();                        
}
