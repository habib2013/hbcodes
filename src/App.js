import React, { Component } from 'react';
import {appendScript} from './jsHolder';


class App extends Component {
  state = {  }

  componentDidMount () {
    appendScript("../assets/js/main.js");
    appendScript("../assets/vendor/jquery/jquery.min.js");
    appendScript("../assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
    appendScript("../assets/vendor/jquery.easing/jquery.easing.min.js");
    appendScript("../assets/vendor/waypoints/jquery.waypoints.min.js");
    appendScript("../assets/vendor/counterup/counterup.min.js");
    appendScript("../assets/vendor/owl.carousel/owl.carousel.min.js");
    appendScript("../assets/vendor/isotope-layout/isotope.pkgd.min.js");
    appendScript("../assets/vendor/venobox/venobox.js");
    appendScript("../assets/vendor/waypoints/waypoints.menu.min.js");

}

  render() { 
    var color1  = {
      color: '#353ae0'
    }
 
    var color2  = {
      color: '#d935dc'
    }
  
    var marginee = {
      marginTop: '-160px'
    }


    return (
   <React.Fragment>
       <aside>
    <nav class="nav-menu d-none d-lg-none">
      <div class="header-menu">
        <ul class="social-icon">
          <li class="social"><a href="http://www.twitter.com/oladosutayo1"><i class="ri-twitter-line"></i></a></li>
          <li class="social"><a href="http://www.facebook.com/tayooladosu"><i class="ri-facebook-line"></i></a> </li>
          <li class="social"><a href="http://www.github.com/habib2013"><i class="ri-github-line"></i></a> </li>
                  
        </ul>
      </div>
      <ul>
        <li class="active"><a href="#header">Home</a></li>
        <li><a href="#we-do">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#features">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
     
    </nav>
  </aside>

       <header id="header" class="fixed-top d-flex align-items-center">
     
        <div class="container-fluid d-flex align-items-center">
          <div class="logo mr-auto">
          <h1 class="text-light" style={{fontFamily: 'Lilita One',}}><a href="index-2.html">
      {"{. . . "}Oladosu{" }"}
          </a></h1>
            <ul>
              <li><a href="/"><i class="ri-phone-line"></i>+2348102033246</a></li>
              <li><a href="/"><i class="ri-mail-open-line"></i>tayooladosu9@gmail.com</a></li>
            </ul>
          </div>
          <div class="nav-submenu d-lg-block d-flex align-items-center justify-content-center align-self-center">
            <ul>
              <li><input class="container_toggle" type="checkbox" id="switch" name="mode" /><label for="switch"></label>
              </li>
            </ul>
          </div>
        </div>
      </header> 



      <section id="hero" class="d-flex align-items-center">
   <div class="container">
     <div class="row justify-content-between">
       <div class="col-lg-5 justify-content-center">
         <h3>
           I'm a Fullstack Developer
         </h3>
         <h2 class="name-headline">Hello <span role="img" aria-label="">👋🏽</span>,i'm <br/> <span>Oladosu.</span>
         </h2>
         <p>Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Node Js, React, Flutter, Redux, Laravel framework, python, java ,Javascript, MongoDB.
 I have a strong engineering background from playspread .
</p>

         <div>
           <a href="#about" class="btn-get-started-solid scrollto">My Works</a>
           <a href="#about" class="btn-get-started scrollto">Let's Talk</a>
         </div>
       </div>

       <div class="col-lg-6 hero-img">

         <lottie-player src="assets/img/drawkit-grape-animation-2-LOOP.json" background="transparent.html" speed="1" id="bm"
           loop autoplay></lottie-player>
       </div>

     </div>
   </div>
 </section>


 <section id="we-do" class="d-flex align-items-center">
   <div class="container position-relative aos-init aos-animate">
     <div class="section-title">
       <h6>Services</h6>
       <h2>What <strong>I do</strong></h2>
       <p>It doesn’t matter how great your product or service<br/> is if your copy does not captivate your audience.
       </p>
     </div>
     <div class="row icon-boxes">
       <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate">
         <div class="icon-box">
           <div class="icon"><i class="ri-book-2-line" style={color1}></i>
           </div>
           <h4 class="title"><a href="/">Research</a></h4>
           <p class="description">I make research on topics related to machine learning, block chain and Algorithms</p>
           <a class="learn-more" href="/">Learn more</a>
         </div>
       </div>

       <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate">
         <div class="icon-box">
           <div class="icon"><i class="ri-code-line" style={color1}></i>
           </div>
           <h4 class="title"><a href="/">Web. development</a></h4>
           <p class="description">I develop robust,attractive and fast website using the latest technologies to help your business</p>
           <a class="learn-more" href="/">Learn more</a>
         </div>
       </div>

       <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate">
         <div class="icon-box">
           <div class="icon"><i class="ri-android-line" style={color2}></i></div>
           <h4 class="title"><a href="/">Mobile Development</a></h4>
           <p class="description">As a top class mobile app developer, i build mobile applications to solve problems to help grow your business</p>
           <a class="learn-more" href="/">Learn more</a>

         </div>
       </div>

      

     </div>
   </div>
 </section>
 

 <section id="portfolio" class="portfolio">
   <div class="container">

     <div class="row">
       <div class="col-lg-4">
         <div class="section-title">

           <h2 class="text-left">Portfolio</h2>
           <ul id="portfolio-flters">
             <li data-filter="*" class="filter-active">All</li>

             <li data-filter=".filter-app">App</li>

             <li data-filter=".filter-card">Designs</li>

             <li data-filter=".filter-wrtiting">Writing</li>
           </ul>
           <p class="text-left">It doesn’t matter how great your product<br/> or service
             is if your copy does not captivate <br/>your audience</p>
         </div>

       </div>

       <div class="col-lg-8">
         <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="400">
           <div class="col-lg-6 col-md-6 portfolio-item filter-app">
             <div class="portfolio-wrap">
               <img
                 src="assets/img/scout54.gif?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                 class="img-fluid" alt=""/>
               <div class="portfolio-info">
                 <h4>Scout54</h4>
                 <p>Scout54Africa</p>
                 <div class="portfolio-links">
                   <a href="http://www.scout54africa.com" _blank
                    ><i class="ri-eye-line"></i></a>
                 </div>
               </div>
             </div>
           </div>

           <div class="col-lg-6 col-md-6 portfolio-item filter-wrtiting">
             <div class="portfolio-wrap">
               <img
                 src="assets/img/stylefit.gif?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                 class="img-fluid" alt=""/>
               <div class="portfolio-info">
                 <h4>Web 3</h4>
                 <p>Web</p>
                 <div class="portfolio-links">
                   <a href="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80"
                     data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="ri-eye-line"></i></a>
                 </div>
               </div>
             </div>
           </div>



   
      
         </div>
       </div>

     </div>

   </div>
 </section>



 <section id="experience" class="experience">
   <div class="container">
     <div class="row justify-content-between aos-init aos-animate">
       <div class="col-md-3 d-flex align-content-top flex-wrap">
         <div class="section-title aos-init aos-animate">
           <h6 class="text-left">Working with</h6>
           <h2 class="text-left">Experience</h2>
           <p class="text-left">I am a Full-Stack developer with a passion for web and mobile technologies. I write robust, clean, re-usable,testable and maintainable code.
This also means I strive to follow best practices and use industry-standard tools.<p/>
             <a href="https://1drv.ms/w/s!AoY-sO3PhwkchnDvxesjpvAHfW6e" target="_blank" class="btn-get-started-solid">View Resume</a></p>
         </div>
       </div>


       <div class="col-md-8">
         <div class="row experience-item align-items-stretch">
           <div class="col-lg-6">
             <i class="ri-terminal-window-line"></i>
             <h6>July 2018 - August 2019</h6>
             <h4>Fullstack developer</h4>
           </div>
           <div class="col-lg-6">
             <h6>Playspread</h6>
             <p>
            ✔ Developed core functionalities of pre-existing software having Core php as its codebase
             </p>
             <p>
             ✔ Interprets and converts UI/UX design screens to codes using HTML,CSS and JS
             </p>
             <p>
             ✔ Built java desktop application to help capture all data fecthed from robots and make it usable in one platform
             </p>
             <p>
             ✔ Web scraping of all trending educational and political news in Nigeria using PHP
             </p>
           </div>
         </div>

         <div class="row experience-item align-items-stretch">
           <div class="col-lg-6">
             <i class="ri-terminal-window-line"></i>
             <h6>August 2019 - present</h6>
             <h4>Fullstack developer</h4>
           </div>
           <div class="col-lg-6">
             <h6>Freelance</h6>
             <p>
             ✔ Developed Numerous Tertiary Institution final years’ project works.
             </p>
             <p>
             ✔ Collaborated with backend developers in developing secure and scalable frontend
Environments.
             </p>
             <p>
             ✔ Developed, managed and maintain scout54africa website (An african based football scouting platform).
             </p>
             <p></p>
           </div>
         </div>

       </div>

      

     </div>
   </div>
 </section>


 <section id="features" class="features" style={marginee}>
   <div class="container">
     <div class="row">
       <div class="col-md-8 d-flex align-items-stretch mt-4">
         <div class="row">
           <div class="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-md-0">
             <div class="icon-box">
               <i class="ri-flutter-line"></i>
               <h3><a href="/">Flutter</a><strong>80%</strong></h3>
             </div>
           </div>
           <div class="col col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-md-0">
             <div class="icon-box">
               <i class="ri-reactjs-line"></i>
               <h3><a href="/">ReactJs</a><strong>90%</strong></h3>
             </div>
           </div>
           <div class="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 ">
             <div class="icon-box">

               <i class='bx bxl-nodejs'></i>
               <h3><a href="/">Node JS</a><strong>70%</strong></h3>
             </div>
           </div>
           <div class="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4 mt-md-8">
             <div class="icon-box">

               <i class="ri-ubuntu-line"></i>
               <h3><a href="/">Management</a><strong>70%</strong></h3>
             </div>
           </div>
           <div class="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4 mt-md-6">
             <div class="icon-box">
               <i class="ri-eye-2-line"></i>
               <h3><a href="/">Analytics</a><strong>90%</strong></h3>
             </div>
           </div>
           <div class="col col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4">
             <div class="icon-box">
               <i class="ri-lightbulb-flash-line"></i>
               <h3><a href="/">Brainstroming</a><strong>60%</strong></h3>
             </div>
           </div>
           <div class="col col-lg-8 col-md-12 col-sm-12 col-xs-12 mt-4">
             <div class="icon-box">
               <i class="ri-scissors-cut-fill"></i>
               <h3><a href="/">Execution</a><strong>100%</strong></h3>
             </div>
           </div>
         </div>
       </div>

       <div class="col-md-4 d-flex align-content-center flex-wrap">
         <div class="section-title">
           <h6 class="text-left">Skills</h6>
           <h2 class="text-left">Creative Works</h2>
           <p class="text-left">In building websites and applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.</p>
         </div>
       </div>
     </div>
   </div>
 </section>

 
 <section id="contact" class="contact">
   <div class="container">
     <div class="row justify-content-between">
       <div class="col-lg-4 col-md-12">
         <div class="contact-about">
           <h6 class="text-left">You know how to find me</h6>
           <h3 class="text-left">Contact.
           </h3>

         </div>

         <div class="info">
            <div>
              <i class="ri-map-pin-fill"></i>
              <h4>Get me here</h4>
              <p>254 Iju road,Agege Lagos State</p>
            </div>

            <div>
              <i class="ri-mail-unread-fill"></i>
              <h4>Get in touch</h4>
              <p>tayooladosu9@gmail.com</p>
            </div>
            <div>
              <i class="ri-phone-fill"></i>
              <h4>Call me now</h4>
              <p>+5234 8102033246</p>
            </div>
          </div>
        

       </div>
       <div class="col-lg-6 col-md-12">
         <div class="contact-about">
           <h6 class="text-left">Get in touch our online services</h6>
           <h4 class="text-left">Ready to get started? Let's create something
             extraordinary!
           </h4>
          <p>Got a question or proposal, or just want
to say hello? Go ahead. </p>
         </div>
         <div class="info">
           <form class="php-email-form">

             <div class="row">
               <div class="col">
                 <div class="form-group">
                   <label>Your Name :</label>
                   <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4"
                     data-msg="Please enter at least 4 chars"/>
                   <div class="validate"></div>
                 </div>
               </div>
               <div class="col">
                 <div class="form-group">
                   <label>Your Email :</label>
                   <input type="email" class="form-control" name="email" id="email" data-rule="email"
                     data-msg="Please enter a valid email"/>
                   <div class="validate"></div>
                 </div>
               </div>
             </div>


             <div class="form-group">
               <label>Message :</label>
               <textarea class="form-control" name="message" rows="5" data-rule="required"
                 data-msg="Please write something for us"></textarea>
               <div class="validate"></div>
             </div>
             <div class="mb-3">
               <div class="loading">Loading</div>
               <div class="error-message"></div>
               <div class="sent-message">Your message has been sent. Thank you!</div>
             </div>
             <div class="text-left"><button type="submit">Send Message</button></div>
           </form>


         </div>

       </div>


     </div>
   </div>
 </section>


 <footer id="footer ">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 mt-4 mt-md-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div class="contact-about">
            <h3>Oladosu.</h3>
            <p><b>Over the past 4 years</b> I've built products for companies and businesses , from marketing websites to complex solutions and enterprise 
              apps with focus on fast, maintainable and testable softwares</p>
            <br/>
            <br/>
            <div class="info">
              <h6 class="text-left">Follow us</h6>
              <div class="social-links">
                <a href="http://twitter.com/oladosutayo1" class="twitter">Twt.</a>
                <a href="http:/facebook.com/tayooladosu" class="facebook">Fb.</a>
                <a href="http://github.com/habib2013" class="Github">Github.</a>
                <a href="http://linkedin.com/tayooladosu" class="linkedin">Link.</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg col-md-6 mt-4 mt-md-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
          <div class="info">
            <h6 class="text-left">Skype</h6>
            <div class="footer-links">
              <a href="/">live:Habib</a>
             
            </div>
          </div>
          <br/>
          <br/>
          
        </div>

        <div class="col-lg col-md-6 mt-4 mt-md-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
          <div class="info">
            <h6 class="text-left">Short Links</h6>
            <div class="footer-links">
              <a class="scrollto" href="#header">Home</a>
              <a class="scrollto" href="#we-do">Services</a>
              <a class="scrollto" href="#portfolio">Portfolio</a>
              <a class="scrollto" href="#experience">Experience</a>
         
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-4 mt-md-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
          <div class="info">
            <h6 class="text-left">Stay in touch</h6>
            <div class="form-group">

              <input type="email" class="form-control" name="email" id="email" data-rule="email"
                placeholder="Subcribe With Mail"/>

            </div>
            <lottie-player src="assets/img/drawkit-grape-animation-4-LOOP.json" background="transparent.html" speed="0.8"
            id="bm" loop autoplay></lottie-player>
          </div>
        </div>



      </div>

    </div>
 
  </footer>

   </React.Fragment>
       
    
     );
  }
}


export default App;
