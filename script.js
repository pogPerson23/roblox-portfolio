document.addEventListener('DOMContentLoaded', function() {
    // Project click handling
    const projects = document.querySelectorAll('.project');
    const ANIMATION_DURATION = 600; // 600ms (0.6s) to match our CSS transition
    
    projects.forEach(project => {
      // Add click event to the entire project box
      project.addEventListener('click', function(e) {
        // Prevent clicks inside project-details from triggering the toggle
        if (e.target.closest('.project-details') && !e.target.closest('.project-header')) {
          return;
        }
        
        // Check if this project is already active
        const isActive = project.classList.contains('active');
        
        if (isActive) {
          // If active, just close this project
          closeProject(project);
        } else {
          // Get currently active project (if any)
          const activeProject = document.querySelector('.project.active');
          
          // Start closing animation on active project (if it exists)
          if (activeProject) {
            closeProject(activeProject);
          }
          
          // Immediately start opening the clicked project (don't wait)
          openProject(project);
        }
      });
    });
    
    // Function to close project with animation
    function closeProject(project) {
      const details = project.querySelector('.project-details');
      const dropdownIcon = project.querySelector('.dropdown-icon');
      
      // Start the closing animation
      details.classList.remove('active');
      dropdownIcon.classList.remove('active');
      
      // Wait for animation to complete before fully closing
      setTimeout(() => {
        project.classList.remove('active');
      }, ANIMATION_DURATION);
    }
  
    // Function to open project with animation
    function openProject(project) {
      project.classList.add('active');
      project.querySelector('.project-details').classList.add('active');
      project.querySelector('.dropdown-icon').classList.add('active');
    }
  
    // Fade-in on scroll effect for sections
    const sections = document.querySelectorAll('section');
  
    const fadeInOnScroll = () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.8) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }
      });
    };
  
    // Set initial state for fade-in effect
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
  
    // Run fade-in effect once on load
    fadeInOnScroll();
    
    // Run fade-in effect on scroll
    window.addEventListener('scroll', fadeInOnScroll);
  
    // Function to set the active page link in the navbar
    const setActivePage = () => {
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll("nav ul li a");
        
        console.log("Current page:", currentPage); // Add this for debugging
        
        navLinks.forEach(link => {
          link.classList.remove("active");
          
          const linkHref = link.getAttribute("href");
          console.log("Checking link:", linkHref); // Add this for debugging
          
          // Check if the href matches the current page or ends with the current page
          if (linkHref === currentPage || linkHref.endsWith("/" + currentPage)) {
            link.classList.add("active");
          }
        });
      };
    
    // Set active page on load
    setActivePage();
  });