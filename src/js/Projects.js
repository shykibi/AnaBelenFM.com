/*
*   
*   BY: ANA B. FAJARDO
*
*/

//----------------------    IMPORTS    --------------------//

var about = document.getElementById('About');
var experience = document.getElementById('Experience');
var skills = document.getElementById('Skills');
var myProjects = document.getElementById('Projects');
var contact = document.getElementById('Contact');
var projectDetails = document.getElementById('ProjectDetailsWindow');
const body = document.querySelector('body'); 
var navBarToggler = document.querySelector('.navbar-nav');   
var navbarTogglerButton = document.querySelector('#collapsedBars');     

// hide mainsections to show details
function hideMainSections(){
    about.style.display = 'none';
    experience.style.display = 'none';
    skills.style.display = 'none';
    myProjects.style.display = 'none';
    contact.style.display = 'none';
    navBarToggler.style.display= 'none';
    navbarTogglerButton.style.display= 'none';
}

function showMainSections(){
    about.style.display = 'flex';
    experience.style.display = 'flex';
    skills.style.display = 'flex';
    myProjects.style.display = 'flex';
    contact.style.display = 'flex';
    navBarToggler.style.display= 'flex';
    navbarTogglerButton.style.display= 'block';
}


function hideProjectDetails(){
    // change body 
    body.classList.toggle('body-dotted'); 
    projectDetails.style.display = 'none';
    showMainSections();       
    
    // scroll to projects
    myProjects.scrollIntoView();
}

function showProjectDetails(){
    // change body 
    body.classList.toggle('body-dotted'); 
    
    // show project details
    projectDetails.style.display = 'block';
    
    // hide main menu elements
    hideMainSections();

    // scroll top
    window.scroll(0, 0);
}

export default class Projects{

    constructor(){


        this.ExperienceData = [
            {
                img:'../src/imgs//myPortfolio.png',
                title: 'My portfolio',
                description: 'This portfolio itself. It\'s the first time I use the three.js library in an HTML page. It is a mix of my two studies: computer science and computer graphics.',
                smallText: 'Post studies'
                ,
                language_n_programs:[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "ThreeJS",
                    "Blender"
                ],
                team:'Ana B. Fajardo',
                year: 2023,
            },
            {
                img:'../src/imgs//Undeafeatable.png',
                title: 'Undeafeatable',
                description: 'Solo game developed for the master\'s thesis. Undeafeatable is an introductory video game to Spanish sign language through game mechanics and using a handtracking system. \n'+
                        '<p>'+
                            '<a href= "https://shykibi5.itch.io/undeafeatable?password=Undeafeatable" target="_blank" class="link-info">'+
                                'Try it!'+
                            '</a>'+
                        '</p>',
                smallText: 'GI,games and VR master'
                ,
                buttonYT:    {
                    link:'https://youtu.be/6GKEg8HbTn4',
                    text: 'Trailer'
                },
                language_n_programs:[
                    "Blender",
                    "Unity",
                    "CSharp"
                ],
                team:'Ana B. Fajardo',
                year: 2023,
                myWork:[
                    {
                        image: ' ',
                        text: 'Interface design and implementation'
                    },
                    {
                        image:' ',
                        text: 'Character swap mechanic'
                    },
                    {
                        image:' ',
                        text: 'Walking particles'
                    },
                    {
                        image:' ',
                        text: 'Opening menu\'s particles'
                    },
                    {
                        image:' ',
                        text: 'Entity particles'
                    },
                    {
                        image:' ',
                        text: 'Different walking sounds'
                    },
                    {
                        image:' ',
                        text: 'Music and sound effects selection'
                    },
                    {
                        image:' ',
                        text: 'Inverse Kinematic animations'
                    },
                    {
                        image:' ',
                        text: 'Scene ilumination'
                    },
                    {
                        image:' ',
                        text: 'Level design'
                    },
                    {
                        image:' ',
                        text: 'Automatic open/close doors'
                    },
                    {
                        image:' ',
                        text: 'Character\'s movement'
                    },
                    {
                        image:' ',
                        text: 'Flames shader'
                    },
                    {
                        image:' ',
                        text: 'Automatic load/save system'
                    },
                    {
                        image:' ',
                        text: 'Interaction system'
                    },
                    {
                        image:' ',
                        text: 'Minimap'
                    },
                    {
                        image:' ',
                        text: 'Enemies AI'
                    },
                    {
                        image:' ',
                        text: 'Characters design'
                    }
                ]
            },
            {
                img:'../src/imgs//Runok.png',
                title: 'Runok',
                description: 'Group project in which a video game was developed. Runok is a 3D platform game where I worked on game mechanics, modeling, sound effects and music, and interface design. This was my first time developing a videogame.\n'+
                        '<p>'+
                            '<a href= "https://symplecticgames.itch.io/runok" target="_blank" class="link-info">'+
                                'Try it!'+
                            '</a>'+
                        '</p>',
                smallText: 'GI, Games and VR master',
                buttonYT:    {
                    link:'https://www.youtube.com/watch?v=52VqOMPcKGc',
                    text: 'Trailer'
                },
                language_n_programs:[
                    "Blender",
                    "Unity",
                    "CSharp"
                ],
                team:'Daniel Darias<br> Ana B. Fajardo <br> Gonzalo Gomez <br> Mario Marquez<br> Diego Sagedo',
                year: 2022,
                myWork:[
                    {
                        image: ' ',
                        text: 'Interface design and implementation'
                    },
                    {
                        image:' ',
                        text: 'modeling and texturing of the box'
                    },
                    {
                        image:' ',
                        text: 'modeling and texturing of the gem'
                    },
                    {
                        image:' ',
                        text: 'sound effects and music selection'
                    },
                    {
                        image:' ',
                        text: 'beetle portals teleport mechanic'
                    }
                ]
            },
            {
                img:'../src/imgs//runokShaders.png',
                title: 'Unity custom shader',
                description: 'custom Water shader, outline + toon shader and tessellation shader with Unity.',
                buttonGit:    {
                    link:'https://github.com/GonzaloGNogales/ShadersDemoRunok',
                    text: 'Visit repository'
                },
                smallText: 'GI, Games and VR master'
                ,
                language_n_programs:[
                    "Unity",
                    "CSharp",
                    "HLSL"
                ],
                team:'Ana B. Fajardo <br> Gonzalo Gomez',
                year: 2022,
                myWork:[
                    {
                        image: ' ',
                        text: 'Outline and cartoon shader'
                    }
                ]
            },
            {
                img:'../src/imgs//morphing.gif',
                title: 'Computer Animation',
                description: 'Different proyects where I used the Computer Animation theory to: image morphing, IK animation.',
                smallText: 'GI, Games and VR master'
                ,
                language_n_programs:[
                    "OpenCV",
                    "MathLab"
                ],
                team:'Ana B. Fajardo',
                year: 2022
            },
            {
                img:'../src/imgs//genericAnimations.png',
                title: 'Generic Animations',
                description: 'Rig, skin and pose by pose animation of a model, in 3DMax, and export it to a scene in unity. First contact with Unity and 3DMax.\n'+
                    '<button onclick="window.open(\'https://youtu.be/j-HpDx8_XDw\')">'+
                       '<i class="fab fa-youtube"></i> Demo'+
                    '</button>',
                smallText: 'GI, Games and VR master',
                language_n_programs:[
                    "3DMax",
                    "Unity",
                    "CSharp"
                ],
                team:'Ana B. Fajardo',
                year: 2021
            },
            {
                img:'../src/imgs//humanoidAnimations.png',
                title: 'Humanoid Animations',
                description: 'Implement a scene in unity and animate a humanoid model with Mixamo.com animations and inverse kinematics animations. First contact with Unity.\n'+
                    '<button onclick="window.open(\'https://youtu.be/0MuM3SRJmhY\')">'+
                    '<i class="fab fa-youtube"></i> Demo'+
                    '</button>',
                smallText: 'GI, Games and VR master',
                language_n_programs:[
                    "Unity",
                    "CSharp"
                ],
                team:'Ana B. Fajardo',
                year: 2021
            },
            {
                img:'../src/imgs//vrMuseum.png',
                title: 'VR Museum',
                description: 'Project for VR Box with 3D sound logic. It\'s an interactive scene of a Museum where the paintings are "alive" and you can hear them; also there\'s a room where you can listen to the different instruments separately.',
                smallText: 'GI, Games and VR master'
                ,
                language_n_programs:[
                    "Blender",
                    "Unity",
                    "Oculus",
                    "CSharp"
                ],
                team:'Ana B. Fajardo',
                year: 2021
            },
            {
                img:'../src/imgs//vrVisor.png',
                title: 'Hand-made VR visor',
                description: 'OpenCV project where you can move cubes in a scene and rotate the camera by using a QR image, simulating a VR viewer.',
                smallText: 'GI, Games and VR master'
                ,
                language_n_programs:[
                    "OpenCV"
                ],
                team:'Ana B. Fajardo',
                year: 2021
            },
            {
                img:'../src/imgs//vrHaptic.png',
                title: 'Haptic illusions',
                description: 'Project to simulate the interaction with different surfaces using novint falcon.',
                smallText: 'GI, Games and VR master'
                ,
                language_n_programs:[
                    "OpenCV"
                ],
                team:'Ana B. Fajardo',
                year: 2021
            },
            {
                img:'../src/imgs//glslIntroduction.png',
                title: 'GLSL Introduction',
                description: 'First contact with GLSL where I\'d to modify a scene, using vertex and fragment shader.',
                buttonGit:    {
                    link:'https://github.com/GonzaloGNogales/3DGraphicsShaders',
                    text: 'Visit repository'
                },
                smallText: 'GI, Games and VR master'
                ,
                language_n_programs:[
                    "GLSL"
                ],
                team:'Ana B. Fajardo',
                year: 2021
            },
            {
                img:'../src/imgs//glslIlumination.png',
                title: 'GLSL Ilumination',
                description: 'Implemented different lighting in GLSL.',
                buttonGit:    {
                    link:'https://github.com/GonzaloGNogales/3DGraphicsIllumination',
                    text: 'Visit repository'
                },
                smallText: 'GI, Games and VR master'
                ,
                language_n_programs:[
                    "GLSL"
                ],
                team:'Ana B. Fajardo <br> Gonzalo Gomez',
                year: 2021
            },
            {
                img:'../src/imgs//oglIntroduction.png',
                title: 'OpenGL Programming',
                description: 'Adjusted light properties, defined projection matrix, used multiple programs for scene cubes, controlled camera with keyboard, and applied anisotropic filter.',
                buttonGit:    {
                    link:'https://github.com/GonzaloGNogales/3DGraphicsOpenGL',
                    text: 'Visit repository'
                },
                smallText: 'GI, Games and VR master'
                ,
                language_n_programs:[
                    "OpenGL"
                ],
                team:'Ana B. Fajardo <br> Gonzalo Gomez',
                year: 2021
            },
            {
                img:'../src/imgs//oglPostProcessing.png',
                title: 'Post-Processing (MRT)',
                description: 'Implemented DOF control with depth buffer and convolution masks, concatenated Gaussian filters and post-processing techniques, and used Deferred Shading.',
                buttonGit:    {
                    link:'https://github.com/GonzaloGNogales/3DGraphicsDeferredShading',
                    text: 'Visit repository'
                },
                smallText: 'GI, Games and VR master'
                ,
                language_n_programs:[
                    "OpenGL",
                    "GLSL"
                ],
                team:'Ana B. Fajardo <br> Gonzalo Gomez',
                year: 2021
            },
            {
                img:'../src/imgs//carrousel.png',
                title: 'OpenGL Carrousel',
                description: 'Developed an OpenGL scene with object and camera movement, as well as independent movements and rotations of the object\'s joints in a paired project.',
                buttonYT:    {
                    link:'https://youtube.com/shorts/m38SzcPZNOE?feature=share',
                    text: 'Demo'
                },
                buttonGit:    {
                    link:'https://github.com/shykibi/OpenGLCarousel_Tex-Anim',
                    text: 'Visit repository'
                },
                smallText: 'Computer Engineering degree'
                ,
                language_n_programs:[
                    "OpenGL"
                ],
                team:'Ana B. Fajardo <br> Gonzalo Gomez',
                year: 2020
            },
            {
                img:'../src/imgs//starwarsOGL.png',
                title: 'Star Wars Scene',
                description: 'Created an OpenGL scene with animations, models, materials, textures, and lighting system as a paired project while learning rendering basics.',
                buttonYT:    {
                    link:'https://youtu.be/iUWEw1ckbLk',
                    text: 'Demo'
                },
                buttonGit:    {
                    link:'https://github.com/GonzaloGNogales/StarWarsIG',
                    text: 'Visit repository'
                },
                smallText: 'Computer Engineering degree'
                ,
                language_n_programs:[
                    "OpenGL",
                    "GLSL"
                ],
                team:'Ana B. Fajardo <br> Gonzalo Gomez',
                year: 2020
            },
            {
                img:'../src/imgs//flightBooking.png',
                title: 'Flight booking page',
                description: 'Web page consisting of a single HTML element that is dynamically updated with javaScript and uses an "H2" database. The HTML and JS elements were self-developed and Boostrap was used for styling along with a self-developed CSS file.',
                buttonYT:    {
                    link:'https://youtu.be/DpAswsdCF_I',
                    text: 'Demo'
                },
                smallText: 'Computer Engineering degree'
                ,
                language_n_programs:[
                    "HTML",
                    "CSS",
                    "JavaScript"
                ],
                team:'Ana B. Fajardo <br> Sandra Gus',
                year: 2019
            },
            {
                img:'../src/imgs//tictactoe.png',
                title: 'TicTacToe web',
                description: 'Implementation of a concurrent website with TicTacToe game ranking and user login.',
                buttonYT:    {
                    link:'https://youtu.be/JDrtAqHSx8M',
                    text: 'Demo'
                },
                smallText: 'Computer Engineering degree'
                ,
                language_n_programs:[
                    "HTML",
                    "CSS",
                    "JavaScript"
                ],
                team:'Iván Conde <br> Ana B. Fajardo <br> Gonzalo Gomez <br> Sandra Gus',
                year: 2019,
                myWork:[
                    {
                        image: ' ',
                        text: 'Page styling with CSS and JavaScript'
                    }
                ]
            },
            {
                img:'../src/imgs//artGallery.png',
                title: 'Art gallery web',
                description: 'implementation of a static web page with a H2 database.',
                buttonYT:    {
                    link:'https://youtu.be/Z5B-TwxgmsQ',
                    text: 'Demo'
                },
                team:'Alicia Cruz <br>Ana B. Fajardo <br> Sandra Gus <br> Juan Muñoz',
                smallText: 'Computer Engineering degree'
                ,
                language_n_programs:[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Java",
                    "H2DB"
                ],
                year: 2019,
                myWork:[
                    {
                        image: ' ',
                        text: 'Data Base logic: insert, store and query data'
                    },
                    {
                        image:' ',
                        text: 'The different static pages and its searching filters.'
                    }
                ]
            },
            {
                img:'../src/imgs//fortranToC.png',
                title: 'Fortran to C Language processor',
                description: 'Language processor that compiles FORTRAN code and converts it to C code, displaying (custom) error messages if present.',
                buttonGit:    {
                    link:'https://github.com/Ivancrto/PL',
                    text: 'Visit repository'
                },
                smallText: 'Computer Engineering degree'
                ,
                language_n_programs:[
                    "Java"
                ],
                team:'Iván Conde <br> Ana B. Fajardo <br> Sandra Gus',
                year: 2019
            },
            {
                img:'../src/imgs//minishell.png',
                title: 'Minishell',
                description: 'Basic self-developed minishell. Developed in C, using pipelines.',
                buttonYT:    {
                    link:'https://youtu.be/vrNK06AV0gs',
                    text: 'Demo'
                },
                smallText: 'Computer Engineering degree'
                ,
                language_n_programs:[
                    "C"
                ],
                team:'Ana B. Fajardo <br> Sandra Gus',
                year: 2018
            },
            {
                img:'../src/imgs//cParking.png',
                title: 'Automatic parking',
                description: 'Automatic parking developed in C, using threads.',
                buttonYT:    {
                    link:'https://youtu.be/9wUZJnlhsZA',
                    text: 'Demo'
                },
                smallText: 'Computer Engineering degree'
                ,
                language_n_programs:[
                    "C"
                ],
                team:'Ana B. Fajardo <br> Sandra Gus',
                year: 2018
            }
        ];
        const thisExperienceData = this.ExperienceData;

        this.loadData();

        ////////////////////////////////////

        // get DOM elements
        const projectsMenu = document.querySelector('#projectsMenu');  
        const projectsImage = document.querySelector('#projectDisplay'); 
        const body = document.querySelector('body');         
        var projectDetails = document.getElementById('ProjectDetailsWindow'); 

        // add onclick and onhover event to each projectsMenu's button
        projectsMenu.querySelectorAll('.div-btn-projectsMenu').forEach((div, index) => {

            var button = div.querySelector('.btn-projectsMenu');
            button.addEventListener('click', () => {             

                // get infor from ExperienceData of the clicked button
                openSectionMenuExperience(thisExperienceData[index]);

            });

            
            // create badgesDiv
            const dropDownDiv = document.createElement("div");
            dropDownDiv.setAttribute("id", "badgesDiv-"+thisExperienceData[index].title);
            dropDownDiv.style.display = "none";
            
            // add year data
            addYearData(thisExperienceData[index], dropDownDiv, div);

            // add badge data
            addBadgeData(thisExperienceData[index], dropDownDiv, div);
            
            // on mouse hover 
            div.addEventListener('mouseover', () => {
                
                // display badge data
                dropDownDiv.style.display = "block";
                
                // change image src
                projectsImage.src = thisExperienceData[index].img;
                projectsImage.classList.remove('hide');
                projectsImage.classList.add('show');

            });

            // on mouse leave 
            div.addEventListener('mouseout', () => {
                
                // hide badge data
                dropDownDiv.style.display = "none";

                // hide image
                projectsImage.classList.remove('show');
                projectsImage.classList.add('hide');                

            });
        });

        function addBadgeData(experienceData, dropDownDiv, div){
            experienceData.language_n_programs.forEach((language_n_programs) => {
                const span = document.createElement("span");
                // span.setAttribute("class", "badge-pill");
                var language_n_programName = language_n_programs;
                if(language_n_programName === 'CSharp'){
                    language_n_programName = "C#"
                }
                span.setAttribute("class", "badge badge-"+language_n_programs);
                span.textContent = language_n_programName;                
                dropDownDiv.appendChild(span);
            });
            div.appendChild(dropDownDiv);
        }

        function addYearData(experienceData, dropDownDiv){
            const year = document.createElement("span");
            year.textContent = experienceData.year;                
            dropDownDiv.appendChild(year);
            dropDownDiv.appendChild(document.createElement("br"));
        }

        function openSectionMenuExperience(experienceData){
            
            // see project details
            
            window.showProjectDetails();

            uploadDetailsWindow(experienceData);            
        }

        ////////////////////////////////////

        function uploadDetailsWindow(experienceData){

            const { img, title, year, description, team,language_n_programs, buttonYT, buttonGit, myWork, smallText } = experienceData;
            let sectionHTML= 
            `
            <div class="projectDetails-header row">            
                <img id="ProjectDetailedImage" src=${img} alt="ProjectImage">
                <div class="btn-backDetails">
                    <button  onclick="window.hideProjectDetails()" class="back-button"> Back<br><span style="display: inline-block; transform: scaleY(2) scaleX(-2);">&#10144;</span></button>
                </div>
            </div>
            <div class="card-title projectDetails-title-general row">
                <p class="projectDetails-title">
                    ${title}
                </p>                
                <span class="projectDetails-year" >
                    ${year}
                </span> 
                <span class="projectDetails-badges" >`;
                language_n_programs.forEach(item => {
                    var language_n_programName = item;
                    if(language_n_programName === 'CSharp'){
                        language_n_programName = "C#"
                    }
                    sectionHTML+= 
                    `<span class="badge badge-${item}">
                        ${language_n_programName}
                    </span>`

                });
                sectionHTML+= 
                `           
                </span>                  
                </div>           
                <div class="card-separator"></div>
                <div class="card-body">  
                    <div class="projectDetails-team_n_description row projectDetails-row">
                        <div class="projectDetails-team col-4">
                        <p class="projectsDetails-subtitle">
                            Team
                        </p>                    
                        <p class=" projectDetails-content projectDetails-team-content">
                            ${team}
                        </p>                  
                        </div>
                        <div class="projectDetails-description col-8">
                            ${description}                                   
                        </div>
                    </div>       
                    `;
                    if(buttonYT){
                        sectionHTML+=
                        `       
                        <div class="projectDetails-trailer row projectDetails-row">
                            <p class="projectsDetails-subtitle">
                                ${buttonYT.text}
                            </p>
                            <div class="projectDetails-trailer-video-container">
                                <iframe class="projectDetails-trailer-video" width="560" height="315" src="${buttonYT.link}">
                                </iframe>                    
                            </div>
                        </div>`;
                    }
                    
                if(myWork){   
                    sectionHTML+=
                            `
                            <div class="projectDetails-myWork row projectDetails-row">
                                <p class="projectsDetails-subtitle">
                                    My work
                                </p>
                                <div>
                                    <ul class="projectsDetails-myWork-workList">`;

                    myWork.forEach(item => { 
                        sectionHTML+=
                            `
                                        <li>
                                            <img class="projectDetails-myWork-img" src="${item.image}" alt="myWork">
                                            <p class="projectDetails-myWork-p">
                                                ${item.text}
                                            </p>
                                        </li> 
                            `;

                    });
                    sectionHTML+=  `
                                    </ul>   
                                </div>                                
                            </div>`;
                }
                sectionHTML+=
                    `
                </div>
            `    
            projectDetails.innerHTML = sectionHTML;
        }
        ////////////////////////////////////

        const cursor = document.querySelector('.cursor');
        const outer = document.querySelector('.cursor-outer');
        const inner = document.querySelector('.cursor-inner');
        const links = document.querySelectorAll('a');
        const cards = document.querySelectorAll('.card');
        const buttons = document.querySelectorAll('button');
        var wasIncard = false;

        // Función para cambiar el estilo del cursor
        function changeCursorStyle(style, isIn) {
            
            inner.style.backgroundColor = style;
              
            if(isIn){


                outer.style.width = '48px';
                outer.style.height = '48px';
                outer.style.border = `4px solid ${style}`;

                inner.style.width = '12px';
                inner.style.height = '12px';

            }else{
                if(wasIncard){
                    outer.style.width = '48px';
                    outer.style.height = '48px';
                    outer.style.border = `4px solid white`;

                    inner.style.width = '12px';
                    inner.style.height = '12px';
                    inner.style.backgroundColor = 'white';
                }else{
                    outer.style.width = '32px';
                    outer.style.height = '32px';

                    outer.style.border = `2px solid ${style}`;

                    inner.style.width = '6px';
                    inner.style.height = '6px';
                }

            }
            
        }

        // Event listener para los enlaces
        links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            changeCursorStyle('steelblue', true);
        });
        link.addEventListener('mouseleave', () => {
            changeCursorStyle('black', false);
        });
        });

        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
            changeCursorStyle('steelblue', true);
        });
        button.addEventListener('mouseleave', () => {
            changeCursorStyle('black', false);
        });
        });

        // Event listener para los elementos con la clase ".card"
        cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            changeCursorStyle('white', true);
            wasIncard = true;
        });
        card.addEventListener('mouseleave', () => {
            wasIncard = false;
            changeCursorStyle('black', false);
            
        });
        });

        // Event listener para el movimiento del cursor
        document.addEventListener('mousemove', (e) => {
            outer.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        });

        const webPage = document.getElementById('htmlPage');

        // event handler
        // webPage.addEventListener('click', (event) => {
        //     event.stopPropagation();
        // });


    }
    
    loadExperienceData(){
        
        this.loadExperienceMenuData();
    }        
    loadExperienceMenuData(){   

        const experienceSection = document.querySelector('#projectsMenu');
        
        let sectionHTML = `<ul>`;
        this.ExperienceData.forEach(section => {
            sectionHTML += `    
                                <li>
                                    <div class="div-btn-projectsMenu">   
                                    <button id="${section.title}" class="btn-projectsMenu" type="button">${section.title}</button> 
                                    </div>
                                </li>
                            `;
        });

        sectionHTML += `
                        </ul>
        `;

        experienceSection.innerHTML += sectionHTML;
        
    }

    
    loadData(){
        
        this.loadExperienceData();
    }
    
    
}

window.hideProjectDetails = hideProjectDetails;
window.showProjectDetails = showProjectDetails;