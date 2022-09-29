const today = new Date();

const expElectronica = today.getFullYear() - 2015;
const expSoftwareDeveloper = today.getFullYear() - 2018;
const expWebDEveloper = today.getFullYear() - 2020;

    
let contenido_en = `  <div class="cont-menu">
            <aside class="sidebar-menu">

            <img src="./img/FOTO PERFIL.png" alt="photo-profile">
            <h3>Mario Saul</h3>
            <p>De la fuente Barrueta</p>
            <span>Engineer in communications and electronics</span>
            <span>/Frontend Developer</span>
            
            <ul id="list-menu">
                <li><a href="#page-header">Home</a>  </li>
                <li><a href="#page-about">About me</li>
                <li><a href="#page-skills">My skills</a></li>
                <li><a href="#page-services">My services</a></li>
                <li><a href="#page-portfolio">My portfolio</a></li>
                <li><a href="#page-contact">Contact</a></li>
            </ul>
           




            </aside>
            <scroll-container>
                <scroll-page id="page-header">
                    <section class="page-header ">
                        <h2><span>¡Hello</span> word !</h2>
                        <p>My name is <span >Saul De la fuente</span> and I am : </p> <p><span class="text-type"></span></p>
                        <p>  My interest is in building's integrated projects that combine electronics, computer programing and automatic control (robotic).</p>
                        <p>I have experience in  designing  electronic circuits, telemetry applications , electronic instrumentation and computer programing languages.</p>
                        <p>As a web developer I focus in integrating my experience from  electronic industry to develop useful applications and  integration with IoT devices. </p>
                    <div class="button-container-1 small">
                        <span class="mas">
                            <i class="fa-solid fa-yin-yang"></i>Click here! 
                        </span>
                        <button id='work' type="button" name="Hover">
                            <span>
                                <a href="strange.html" target="_blank"><i class="fa-solid fa-yin-yang"></i></a>
                            </span>
                        </button>
                    </div>
                    </section>
                </scroll-page>
                <!-- Type.js -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"></script>
               
                <!-- FIN SCRIPT -->
                <scroll-page id="page-about">
                    <section class="page-header">
                        <h2>About  <span>me </span> </h2>
                        <div class="cont-about">
                        <ul class="data-list">
                            <li ><span>Name: </span> <p>Mario Saul De la fuente Barrueta</p> </li>
                            <li><span>Occupation: </span> <p>Engineer in electronics and Frontend developer</p></li>
                            <li><span>Country: </span> <p> 🇲🇽 México</p></li>
                            <li><span>Whatsapp: </span> <p> +52 55 33 26 28 60 </p></li>
                            <li><span>Email: </span> <p> saul.delafuenteb@gmail.com </p></li>
                            
                            <!-- <li><span>Hobbies:</span> Me gusta crear poryectos de electrónica, programar paginas web y tocar la guitarra.</li>   -->
                        </ul>
                        
                            
                      
                     
                        <div class="btn btn-small btn-icon">
                            <a id="cv-download" class="btn" href="https://drive.google.com/file/d/1VQ2PId2BHYq0NvxcAsuuyhzqOM8nIjpY/view?usp=sharing" target="_blank" >Download my CV</a>
                            <span class="material-icons">
                            file_download
                            </span>
                        </div>
                        </div>
                    </section>
                </scroll-page>

                <scroll-page id="page-skills">
                    <section class="page-header ">
                        <h2> <span>My</span> skills</h2>
                        <div class="cont-skills">
                            <div class="line-skills">
                                <h3>Programing</h3>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">HTML5, CSS3 y JQuery(Responsive design)</label><label for="">95%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 95%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">JavaScript</label><label for="">95%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 95%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">PHP</label><label for="">85%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 85%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Databases (SQL)</label><label for="">90%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 90%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Databases (NoSQL)</label><label for="">90%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 90%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Programing C,C++</label><label for="">85%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 85%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">LabView de National Instruments</label><label for="">85%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 85%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">NodeJS</label><label for="">65%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 65%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Python</label><label for="">75%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 75%;"></div>
                                    </div>
                                </div>
                                
                                <h3>Electronics</h3>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Digital Electronic </label><label for="">95%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 95%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Analog and power electronics  </label><label for="">90%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 90%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Electronic instrumentation  </label><label for="">90%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 90%;"></div>
                                    </div>
                                </div>

                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Microcontrollers </label><label for="">90%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 90%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">PCB professional design</label><label for="">90%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 90%;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="experience">
                                <div class="card">
                                    <h3>+ ${expElectronica} years </h3>
                                    <p>Experience in the electronic industry.</p>
                                </div>
                                <div class="card">
                                    <h3>+ ${expSoftwareDeveloper} years </h3>
                                    <p>Experience as a software developer</p>
                                </div>
                                <div class="card">
                                    <h3>+ ${expWebDEveloper} years</h3>
                                    <p>Experience as a web developer</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </scroll-page>

                <scroll-page id="page-services">
                    <section class="page-header ">
                        <h2> <span>My</span> Services </h2>
                        <div class="cont-services">
                            <div class="card-services">
                                <span class="material-icons">
                                    code
                                </span>
                                <h3>Web development</h3>
                                <p>Design and construction of corporate web pages where you can describe services and/or products and thus facilitate the
                                contact and interest of new potential customers.</p>
                            </div>
                            <div class="card-services">
                                <span class="material-icons">
                                    memory
                                </span>
                                <h3>Embedded circuits</h3>
                                <p>Comprehensive solutions in electronics, from research, development, electronic card design, embedded software
                                development, prototype construction, and design and construction of 3D printed housings.</p>
                            </div>
                            <div class="card-services">
                                <span class="material-icons">
                                    developer_board
                                </span>
                                <h3>PCB layouts</h3>
                                <p>Design of professional electronic cards for prototypes or projects.</p>
                            </div>
                            <div class="card-services">
                                <span class="material-icons">
                                    settings_remote
                                </span>
                                <h3>IoT solutions</h3>
                                <p>Implementation of electronic circuits using WiFi communication for monitoring, control and registration of sensors and
                                actuators. Temporary reports and telemetry applications.</p>
                            </div>
                        </div>
                    </section>
                </scroll-page>

                <scroll-page id="page-portfolio">
                    <section class="page-header ">
                        <h2> My <span>Portfolio</span> </h2>
                        <h3>Landing page</h3>
                        <div class="portafolio">                           
                            <div class="card card-portafolio">
                                <a href="https://paginaweborthodontics.web.app/" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 3.png" alt="landing page">
                                </a>
                            </div>
                            <div class="card card-portafolio">
                                <a href="https://pagina-freelancer-demo.netlify.app/" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 4.png" alt="Freelance">
                                </a>
                            </div>
                           
                            
                        </div>
                        <h3>Blog</h3>
                        <div class="portafolio">                            
                            <div class="card card-portafolio">
                                <a href="https://pagina-blog-demo.netlify.app/" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 2.png" alt="blog-cafe">
                                </a>
                            </div>
                        </div>
                        <h3>Sales</h3>
                        <div class="portafolio">
                            <div class="card card-portafolio">
                                <a href="https://pagina-ventas-bienes-raices-demo.netlify.app/" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 1.png" alt="bienes-raices">
                                </a>
                            </div>
                            <div class="card card-portafolio">
                                <a href="https://venta-servicios-demo.netlify.app/" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 5.png" alt="arquitectura">
                                </a>
                            </div>
                            <div class="card card-portafolio">
                                <a href="https://pagina-eventos-demo.netlify.app/#" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 6.png" alt="EVENTOS">
                                </a>
                            </div>
                            <div class="card card-portafolio">
                                <a href="https://pagina-tienda-demo.netlify.app" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 8.png" alt="tienda">
                                </a>
                            </div>
                        </div>

                        <h3>APP's</h3>
                        <div class="portafolio">
                            <div class="card card-portafolio">
                                <a href="https://pagina-administrador-tareas-demo.netlify.app/" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 7.png" alt="Administrador">
                                </a>
                            </div>

                            <div class="card card-portafolio">
                                <a href="https://dashboard-servicio-demo.netlify.app/" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 11.png" alt="Dashboard">
                                </a>
                            </div>
                            
                            <div class="card card-portafolio">
                                <a href="admin-academico-demo.netlify.app" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 10.png" alt="Administrador-academico">
                                </a>
                            </div>
                            
                            <div class="card card-portafolio">
                                <a href="https://pagina-encuesta-satisfaccion-demo.netlify.app" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 9.png" alt="encuesta">
                                </a>
                            </div>
                        </div>
                    </section>
                </scroll-page>

                <scroll-page id="page-contact">
                    <section class="page-header ">
                        <h2> Contact <span>me</span>  </h2>
                        <div class="contact-data">

                            <div class="button-container-1">
                                <span class="mas">
                                <i class="fa-brands fa-whatsapp-square"></i>  +52 55 33 26 28 60
                                </span>
                                <button id='work' type="button" name="Hover">
                                    <span>
                                       <a href="http://wa.me/525533262860?Hola+me interesan+tus+servicios" target="_blank"><i class="fa-brands fa-whatsapp-square"></i></a>
                                    </span>
                                </button>
                            </div>
                            <div class="button-container-1">
                                <span class="mas ">
                            <i class="fa-brands fa-linkedin"></i> linkedin.com/in/luasjcr/
                                </span>
                                <button id='work' type="button" name="Hover">
                                    <span>
                                    <a href="https://www.linkedin.com/in/luasjcr/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                                        </span>
                                    </button>
                            </div>
                            <div class="button-container-1">
                                <span class="mas">
                                <i class="fa-brands fa-github"></i> github.com/LuasKF
                                </span>
                                <button id='work' type="button" name="Hover">
                                    <span>
                                        <a href="https://github.com/LuasKF" target="_blank"><i class="fa-brands fa-github"></i></a>
                                    </span>
                                </button>
                            </div>
                            <div class="button-container-1">
                                <span class="mas">
                                <i class="fa-solid fa-envelope"></i> saul.delafuenteb@gmail.com
                                </span>
                                <button id='work' type="button" name="Hover"><span >
                                    <a href="mailto:saul.delafuenteb@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                                    </span></button>
                            </div>
                            <div class="button-container-1">
                                <span class="mas">
                                <i class="fa-solid fa-location-dot"></i> México City,México
                                </span>
                                <button id='work' type="button" name="Hover"><span >
                                        <a href=""><i class="fa-solid fa-location-dot"></i></a>
                                    </span></button>
                            </div>


                            <!-- <ul>
                                <li><span class="material-icons">
                                    whatsapp
                                </span> +52 55 33 26 28 60</li>
                                <li><span class="material-icons">
                                    email
                                </span>  luasjcr.3543@gmail.com</li>
                                <li><span class="material-icons">
                                    location_on
                                </span> Ciudad de México,México</li>
                                <li></li>
                            </ul> -->
                        </div>
                       

                        

                        
                    </section>
                </scroll-page>
            </scroll-container>
        </div>`;
let contenido_es = ` <div class="cont-menu">
            <aside class="sidebar-menu">

            <img src="./img/FOTO PERFIL.png" alt="photo-profile">
            <h3>Mario Saul</h3>
            <p>De la fuente Barrueta</p>
            <span>Ing. en comunicaciones y electronica</span>
            <span>/Frontend developer</span>
            
            <ul id="list-menu">
                <li><a id="inicio" href="#page-header">Inicio</a>  </li>
                <li><a href="#page-about">Acerca de mi</li>
                <li><a href="#page-skills">Mis habilidades y competencias</a></li>
                <li><a href="#page-services">Mis servicios</a></li>
                <li><a href="#page-portfolio">Portafolio</a></li>
                <li><a href="#page-contact">Contacto</a></li>
            </ul>
            
            </aside>
            <scroll-container>
                <scroll-page id="page-header">
                    <section class="page-header ">
                        <h2><span>¡Hola</span> mundo!</h2>
                        <p>Me llamo <span >Saul De la fuente</span> y soy:</p> <p><span class="text-type"></span></p>
                        <p> Me gusta desarrollar proyectos integrales que tenga que ver con electrónica, programación y automatización.</p>
                        <p>Cuento con amplia
                        experiencia en el diseño de circuitos electrónicos,
                        aplicaciones de telemetría, instrumentación
                        electrónica y lenguajes de programación.</p>
                        <p>Como desarrollador web busco integrar mi experiencia en la industria de la electrónica para desarrollar aplicaciones útiles e
                                integracion con dispositivos IoT. </p>
                    <div class="button-container-1 small">
                        <span class="mas">
                            <i class="fa-solid fa-yin-yang"></i>Haz click aqui! 
                        </span>
                        <button id='work' type="button" name="Hover">
                            <span>
                                <a href="strange.html" target="_blank"><i class="fa-solid fa-yin-yang"></i></a>
                            </span>
                        </button>
                    </div>
                    </section>
                </scroll-page>
                <!-- Type.js -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"></script>
               
                <!-- FIN SCRIPT -->
                <scroll-page id="page-about">
                    <section class="page-header">
                        <h2>Acerca  <span>de mi </span> </h2>
                        <div class="cont-about">
                        <ul class="data-list">
                            <li ><span>Nombre: </span> <p>Mario Saul De la fuente Barrueta</p> </li>
                            <li><span>Ocupación: </span> <p>Ing. en comunicaciones y electrónica y Frontend developer</p></li>
                            <li><span>País: </span> <p>🇲🇽 México</p></li>
                            <li><span>Whatsapp: </span> <p> +52 55 33 26 28 60 </p></li>
                            <li><span>Correo: </span> <p> luasjcr.3543@gmail.com </p></li>
                            
                            <!-- <li><span>Hobbies:</span> Me gusta crear poryectos de electrónica, programar paginas web y tocar la guitarra.</li>   -->
                        </ul>
                        
                            
                      
                     
                        <div class="btn btn-small btn-icon">
                            <a id="cv-download" class="btn" target="_blank" href="https://drive.google.com/file/d/19b1e1GWKLl1J7CIC9ZvIm2FeGnkBQoUg/view?usp=sharing">Descargar mi CV</a>
                            <span class="material-icons">
                            file_download
                            </span>
                        </div>
                        </div>
                    </section>
                </scroll-page>

                <scroll-page id="page-skills">
                    <section class="page-header ">
                        <h2> <span>Mis habilidades </span> y competencias</h2>
                        <div class="cont-skills">
                            <div class="line-skills">
                                <h3>Programación</h3>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">HTML5, CSS3 y JQuery(Responsive design)</label><label for="">95%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 95%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">JavaScript</label><label for="">95%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 95%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">PHP</label><label for="">85%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 85%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Bases de datos relacionales (SQL)</label><label for="">90%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 90%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Bases de datos No relacionales (NoSQL)</label><label for="">90%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 90%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Programación C,C++</label><label for="">85%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 85%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">LabView de National Instruments</label><label for="">85%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 85%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">NodeJS</label><label for="">65%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 65%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Python</label><label for="">75%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 75%;"></div>
                                    </div>
                                </div>
                                
                                <h3>Electronica</h3>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Electronica digital </label><label for="">95%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 95%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Electronica analogia y de potencia  </label><label for="">90%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 90%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Instrumentación electrónica </label><label for="">90%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 90%;"></div>
                                    </div>
                                </div>

                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Microcontroladores </label><label for="">90%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 90%;"></div>
                                    </div>
                                </div>
                                <div class="card-skills">
                                    <div class="title-slide"><label for="">Diseño de PCB profesional</label><label for="">90%</label></div>
                                    <div class="slide-background">
                                        <div class="slide" style="width: 90%;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="experience">
                                <div class="card">
                                    <h3>+7 años </h3>
                                    <p>De experiencia en la industria de la electrónica</p>
                                </div>
                                <div class="card">
                                    <h3>+4 años </h3>
                                    <p>De experiencia como desarrollador de software</p>
                                </div>
                                <div class="card">
                                    <h3>+2 años</h3>
                                    <p>De experiencia como desarrollador web</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </scroll-page>

                <scroll-page id="page-services">
                    <section class="page-header ">
                        <h2> <span>Mis</span> Servicios </h2>
                        <div class="cont-services">
                            <div class="card-services">
                                <span class="material-icons">
                                    code
                                </span>
                                <h3>Desarrollo web</h3>
                                <p>Diseño y construccion de paginas web corporativas donde podrás describir servicios y/o productos y facilitar así el contacto e interés de nuevos clientes potenciales. </p>
                            </div>
                            <div class="card-services">
                                <span class="material-icons">
                                    memory
                                </span>
                                <h3>Circuitos embebidos</h3>
                                <p>Soluciones integrales en electrónica, desde la investigación, desarrollo, diseño de la tarjeta electrónica, desarrollo de software embebido, construcción de prototipos, y diseño y construcción de carcasas en impresiones 3D.</p>
                            </div>
                            <div class="card-services">
                                <span class="material-icons">
                                    developer_board
                                </span>
                                <h3>Diseños de PCB</h3>
                                <p>Diseño de tarjetas profesionales electrónicas para prototipos o proyectos. </p>
                            </div>
                            <div class="card-services">
                                <span class="material-icons">
                                    settings_remote
                                </span>
                                <h3>Soluciones en IoT</h3>
                                <p>Implementación de circuitos electrónicos utilizando comunicación WiFi para monitoreo, control y registro de sensores y actuadores. Reportes temporales y aplicaciones de telemetría.</p>
                            </div>
                        </div>
                    </section>
                </scroll-page>

                <scroll-page id="page-portfolio">
                    <section class="page-header ">
                        <h2> Mi <span>Portafolio</span> </h2>
                        <h3>Landing page</h3>
                        <div class="portafolio">                           
                            <div class="card card-portafolio">
                                <a href="https://paginaweborthodontics.web.app/" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 3.png" alt="landing page">
                                </a>
                            </div>
                            <div class="card card-portafolio">
                                <a href="https://pagina-freelancer-demo.netlify.app/" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 4.png" alt="Freelance">
                                </a>
                            </div>
                           
                            
                        </div>
                        <h3>Blog</h3>
                        <div class="portafolio">                            
                            <div class="card card-portafolio">
                                <a href="https://pagina-blog-demo.netlify.app/" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 2.png" alt="blog-cafe">
                                </a>
                            </div>
                        </div>
                        <h3>Ventas</h3>
                        <div class="portafolio">
                            <div class="card card-portafolio">
                                <a href="https://pagina-ventas-bienes-raices-demo.netlify.app/" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 1.png" alt="bienes-raices">
                                </a>
                            </div>
                            <div class="card card-portafolio">
                                <a href="https://venta-servicios-demo.netlify.app/" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 5.png" alt="arquitectura">
                                </a>
                            </div>
                            <div class="card card-portafolio">
                                <a href="https://pagina-eventos-demo.netlify.app/#" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 6.png" alt="EVENTOS">
                                </a>
                            </div>
                            <div class="card card-portafolio">
                                <a href="https://pagina-tienda-demo.netlify.app" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 8.png" alt="tienda">
                                </a>
                            </div>
                        </div>

                        <h3>APP's</h3>
                        <div class="portafolio">
                            <div class="card card-portafolio">
                                <a href="https://pagina-administrador-tareas-demo.netlify.app/" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 7.png" alt="Administrador">
                                </a>
                            </div>

                            <div class="card card-portafolio">
                                <a href="https://dashboard-servicio-demo.netlify.app/" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 11.png" alt="Dashboard">
                                </a>
                            </div>
                            
                            <div class="card card-portafolio">
                                <a href="admin-academico-demo.netlify.app" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 10.png" alt="Administrador-academico">
                                </a>
                            </div>
                            
                            <div class="card card-portafolio">
                                <a href="https://pagina-encuesta-satisfaccion-demo.netlify.app" target="_blank">
                                    <img class="bienes-raices-demo" src="./img/image 9.png" alt="encuesta">
                                </a>
                            </div>
                        </div>
                    </section>
                </scroll-page>

                <scroll-page id="page-contact">
                    <section class="page-header ">
                        <h2> Contactame  </h2>
                        <div class="contact-data">

                            <div class="button-container-1">
                                <span class="mas">
                                <i class="fa-brands fa-whatsapp-square"></i>  +52 55 33 26 28 60
                                </span>
                                <button id='work' type="button" name="Hover">
                                    <span>
                                       <a href="http://wa.me/525533262860?Hola+me interesan+tus+servicios" target="_blank"><i class="fa-brands fa-whatsapp-square"></i></a>
                                    </span>
                                </button>
                            </div>
                            <div class="button-container-1">
                                <span class="mas ">
                            <i class="fa-brands fa-linkedin"></i> linkedin.com/in/luasjcr/
                                </span>
                                <button id='work' type="button" name="Hover">
                                    <span>
                                    <a href="https://www.linkedin.com/in/luasjcr/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                                        </span>
                                    </button>
                            </div>
                            <div class="button-container-1">
                                <span class="mas">
                                <i class="fa-brands fa-github"></i> github.com/LuasKF
                                </span>
                                <button id='work' type="button" name="Hover">
                                    <span>
                                        <a href="https://github.com/LuasKF" target="_blank"><i class="fa-brands fa-github"></i></a>
                                    </span>
                                </button>
                            </div>
                            <div class="button-container-1">
                                <span class="mas">
                                <i class="fa-solid fa-envelope"></i> saul.delafuenteb@gmail.com
                                </span>
                                <button id='work' type="button" name="Hover"><span >
                                    <a href="mailto:saul.delafuenteb@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                                    </span></button>
                            </div>
                            <div class="button-container-1">
                                <span class="mas">
                                <i class="fa-solid fa-location-dot"></i> Ciudad de México,México
                                </span>
                                <button id='work' type="button" name="Hover"><span >
                                        <a href=""><i class="fa-solid fa-location-dot"></i></a>
                                    </span></button>
                            </div>


                            <!-- <ul>
                                <li><span class="material-icons">
                                    whatsapp
                                </span> +52 55 33 26 28 60</li>
                                <li><span class="material-icons">
                                    email
                                </span>  luasjcr.3543@gmail.com</li>
                                <li><span class="material-icons">
                                    location_on
                                </span> Ciudad de México,México</li>
                                <li></li>
                            </ul> -->
                        </div>
                       

                        

                        
                    </section>
                </scroll-page>
            </scroll-container>
        </div>`;

let en_ver = document.getElementById('en-ver');
let es_ver = document.getElementById('es-ver');
let main = document.getElementById('cont');
let inicio = document.getElementById('inicio');
let cohete = document.getElementById('cohete');
let details = navigator.userAgent;

//Verificar que tipo de dispositivo esta navegando por la pagina
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);

 
en_ver.addEventListener('click', mostrarEn);
es_ver.addEventListener('click', mostrarEs);
cohete.addEventListener('click', subir);
mostrarEn();  
callMenu();
function mostrarEn() {
inicio.innerHTML = 'ingles';
    main.innerHTML = '';
    main.innerHTML = contenido_en;
    console.log('Version en ingles');
    if (isMobileDevice) {
    let type = new Typed('.text-type', {
                strings: ['an Engineer in electronics and a Fronted developer'],
                typeSpeed: 70,
                loop: false
    });
        } else {
        let type = new Typed('.text-type', {
                strings: ['an Engineer in electronics', ' a Fronted developer', ''],
                typeSpeed: 70,
                loop: true
            });
        }
    
    callMenu();

    return;
}
function mostrarEs() {
inicio.innerHTML = 'español';
    
main.innerHTML = '';
main.innerHTML = contenido_es;
    console.log('Version en español');
    if (isMobileDevice) { 
        let type = new Typed('.text-type', {
    strings: ['Ingeniero en electrónica y Fronted developer'],
    typeSpeed: 70,
    loop: false
});

    } else {
        let type = new Typed('.text-type', {
    strings: ['Ingeniero en electrónica', 'Fronted developer', 'Desarrollador de software'],
    typeSpeed: 70,
    loop: true
});
        
    }

callMenu();
    return;


}
function callMenu() {
    let list = document.querySelectorAll('#list-menu li');
        let checked = document.querySelector('#nav__checkbox');
        function elementSelected(){
            list.forEach(element => {
                element.classList.remove('hovered');
            });
            this.classList.add('hovered');
            console.log(checked.checked);
            checked.checked=false;
            console.log(checked.checked);


        }
        list.forEach(option =>{
            option.addEventListener('click', elementSelected);
        });
    
    
}  
function subir() {
    console.log('Estamos en el cohete');
    window.scroll({
        top: -20,
        behavior:"smooth"
    })
}




