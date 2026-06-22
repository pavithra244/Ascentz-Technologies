document.addEventListener("DOMContentLoaded", function () {

/* ================= HEADER SHRINK ================= */

const header = document.querySelector('.mag-top');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });
}




/* ================= POPUP ================= */

const popup = document.getElementById("popupModal");

window.openPopup = function () {
  if (popup) popup.style.display = "flex";
}

window.closePopup = function () {
  if (popup) popup.style.display = "none";
}

if (popup) {
  setTimeout(() => {
    popup.style.display = "flex";
  }, 1500);
}


/* ================= TYPING SCROLL ================= */

const typingText = document.querySelector('.projects-header h2');

function isInViewport(element) {

  if (!element) return false;

  const rect = element.getBoundingClientRect();

  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function handleScroll() {

  if (isInViewport(typingText)) {

    typingText.classList.add('typing-active');
    window.removeEventListener('scroll', handleScroll);

  }

}

if (typingText) {

  window.addEventListener('scroll', handleScroll);
  handleScroll();

}


/* ================= COUNTER ================= */

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {

  counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;

      const increment = target / 200;

      if (current < target) {

        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 15);

      } else {

        counter.innerText = target + "+";

      }

    };

    updateCounter();

  });

}


/* ================= SLIDER ================= */

const trackMinimal = document.querySelector('.slider-track-minimal');
const slidesMinimal = Array.from(document.querySelectorAll('.tech-card-minimal'));
const nextMinimal = document.querySelector('.next-minimal');
const prevMinimal = document.querySelector('.prev-minimal');

let currentIndex = 0;

function getVisibleCards() {

  const container = document.querySelector('.slider-container-minimal');

  if(!container || slidesMinimal.length === 0) return 1;

  const containerWidth = container.offsetWidth;
  const cardWidth = slidesMinimal[0].offsetWidth + 20;

  return Math.floor(containerWidth / cardWidth);

}


function updateSlider(){

  if(slidesMinimal.length === 0) return;

  const visibleCards = getVisibleCards();

  slidesMinimal.forEach(slide => slide.classList.remove('active'));

  for (let i = 0; i < visibleCards; i++) {

    let index = (currentIndex + i) % slidesMinimal.length;

    slidesMinimal[index].classList.add('active');

  }

  const cardWidth = slidesMinimal[0].offsetWidth + 20;

  if(trackMinimal){
    trackMinimal.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  }

}


nextMinimal?.addEventListener('click', () => {

  currentIndex = (currentIndex + 1) % slidesMinimal.length;

  updateSlider();

});


prevMinimal?.addEventListener('click', () => {

  currentIndex = (currentIndex - 1 + slidesMinimal.length) % slidesMinimal.length;

  updateSlider();

});


let autoplay = setInterval(() => {

  currentIndex = (currentIndex + 1) % slidesMinimal.length;

  updateSlider();

}, 3000);


const sliderContainer = document.querySelector('.slider-container-minimal');

sliderContainer?.addEventListener('mouseenter', () => clearInterval(autoplay));

sliderContainer?.addEventListener('mouseleave', () => {

  autoplay = setInterval(() => {

    currentIndex = (currentIndex + 1) % slidesMinimal.length;

    updateSlider();

  }, 3000);

});


window.addEventListener('resize', updateSlider);

updateSlider();

});


if (window.location.pathname.includes("service-details.html")) {

  const sections = document.querySelectorAll('.service-section');
  sections.forEach(s => s.style.display = 'none');

  const hash = window.location.hash.substring(1);

  if (hash) {
    const target = document.getElementById(hash);
    if (target) target.style.display = 'block';
  } 
  else {
    document.getElementById('software').style.display = 'block';
  }

}


document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    let counted = false;

    function startCounter() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const speed = target < 500 ? 20 : 5; 

            const update = () => {
                count += Math.ceil(target / 200);
                if(count < target){
                    counter.innerText = count.toLocaleString() + (target >= 100 ? "+" : "");
                    setTimeout(update, speed);
                } else {
                    counter.innerText = target.toLocaleString() + (target >= 100 ? "+" : "");
                }
            };
            update();
        });
    }

    function checkScroll() {
        const stats = document.querySelector(".stats");
        const rect = stats.getBoundingClientRect();
        if(rect.top < window.innerHeight && !counted){
            startCounter();
            counted = true;
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});

  const buttons = document.querySelectorAll('.topic-btn');
  const domains = document.querySelectorAll('.domain-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const topic = btn.dataset.topic;
      domains.forEach(card => {
        if (topic === 'all') {
          card.style.display = 'block'; // Show all domains
        } else {
          card.style.display = (card.dataset.topic === topic) ? 'block' : 'none';
        }
      });
    });
  });

  // FAQ Accordion with smooth animation
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');
    const icon = header.querySelector('i');

    header.addEventListener('click', () => {
      const isOpen = body.style.maxHeight && body.style.maxHeight !== "0px";

      faqItems.forEach(f => {
        f.querySelector('.faq-body').style.maxHeight = "0px";
        f.querySelector('i').classList.remove('rotate-45');
      });

      if(!isOpen){
        body.style.maxHeight = body.scrollHeight + "px";
        icon.classList.add('rotate-45');
      }
    });
  });  


const courses = [

["Full Stack Development","web",
`Master end-to-end web application development with Ascentz Technologies’ practical approach. Build real-world, scalable applications covering both frontend and backend technologies.

Full Stack Development - Certification Course

What you will learn:

• Learn to develop interactive frontend interfaces using HTML, CSS, JavaScript, and React to create seamless user experiences.  
• Understand backend development with Node.js and Express for building robust server-side applications.  
• Gain practical knowledge in designing and integrating REST APIs for real-time data communication.  
• Master MongoDB database management for storing, querying, and managing application data effectively.  
• Learn deployment strategies and hosting best practices to make your applications live for real-world usage.`,
"image/Full-Stack-Developers.png"],


["Frontend Development","web",
`Learn to create modern, responsive, and interactive web interfaces that deliver seamless user experiences, as taught in Ascentz Technologies’ Frontend program.

Frontend Development - Certification Course

What you will learn:

• Gain expertise in writing semantic HTML and modern CSS to structure and style web pages efficiently.  
• Learn responsive design techniques to ensure your websites adapt smoothly across all devices.  
• Implement JavaScript for interactivity and dynamic behaviors on your web pages.  
• Handle DOM manipulation and events to create highly interactive user interfaces.  
• Apply UI/UX principles to design user-friendly and visually appealing web applications.`,
"image/Front-End-Development.png"],


["React JS","web",
`Develop dynamic single-page applications with React, emphasizing component reusability and real-time data handling, aligned with Ascentz Technologies’ training methodology.

React JS - Certification Course

What you will learn:

• Build reusable and maintainable UI components using React’s component-based architecture.  
• Manage application state and props effectively to ensure smooth data flow.  
• Utilize React Hooks to handle side effects and functional component logic.  
• Implement routing and SPA development for a seamless single-page experience.  
• Integrate APIs and handle real-time data communication within your applications.`,
"image/react.png"],


["Angular","web",
`Learn to build enterprise-grade applications using Angular with structured coding practices and modular architecture, following Ascentz Technologies’ curriculum.

Angular - Certification Course

What you will learn:

• Understand Angular modules and components to structure scalable applications.  
• Implement two-way data binding for dynamic UI updates between model and view.  
• Learn dependency injection techniques for efficient and maintainable code.  
• Develop routing and navigation strategies for single-page applications.  
• Validate forms and user input to ensure reliable and secure data handling.`,
"image/angular.png"],


["Node JS","web",
`Gain expertise in backend development using Node.js and Express, creating robust APIs and server-side solutions following Ascentz Technologies’ real-time project approach.

Node JS - Certification Course

What you will learn:

• Build event-driven backend architectures to handle asynchronous operations efficiently.  
• Work with the Express.js framework to create server-side logic and route handling.  
• Design and develop RESTful APIs for communication between frontend and backend.  
• Implement authentication and security measures for safe and reliable applications.  
• Integrate and manage databases effectively to store and retrieve application data.`,
"image/NodeJs.png"],


["Web Designing","web",
`Master the art of designing visually appealing and user-friendly websites, following Ascentz Technologies’ design principles and hands-on approach.

Web Designing - Certification Course

What you will learn:

• Structure layouts effectively using modern design patterns and web standards.  
• Apply color theory, typography, and visual hierarchy to enhance website aesthetics.  
• Build responsive websites that adapt seamlessly to different screen sizes.  
• Use CSS animations and transitions to create engaging interactive elements.  
• Understand UX fundamentals to design intuitive and user-centric interfaces.`,
"image/web-design.png"],


["PHP Development","web",
`Learn PHP programming and dynamic website development, with database integration and practical projects following Ascentz Technologies’ structured curriculum.

PHP & MySQL - Certification Course

What you will learn:

• Learn PHP scripting fundamentals to create dynamic web pages and applications.  
• Handle form submissions and validations for accurate data processing.  
• Manage sessions, cookies, and user state across applications.  
• Work with MySQL databases to store, query, and manipulate data.  
• Develop complete CRUD applications to gain hands-on experience in full-cycle development.`,
"image/php.png"],


["Dot Net Development","software",
`Build robust enterprise applications using Microsoft .NET technologies and modern software architecture patterns.

Dot Net Development - Certification Course

What you will learn:

• Develop secure and maintainable applications using C# programming with real-world examples.  
• Create dynamic web applications using ASP.NET MVC for structured and scalable solutions.  
• Build RESTful Web APIs for communication between client and server applications.  
• Work with Entity Framework for effective database management and ORM techniques.  
• Implement secure application design practices for enterprise-level software.`,
"image/microsoft-dot-net-development-company.png"],


["Java Full Stack","software",
`Develop full-scale applications using Java technologies, from backend services to frontend integration, following Ascentz Technologies’ practical approach.

Java Full Stack - Certification Course

What you will learn:

• Gain in-depth understanding of Core Java and object-oriented programming principles.  
• Build robust backend services using Spring Boot framework for enterprise applications.  
• Develop and consume REST APIs for seamless client-server interaction.  
• Integrate frontend interfaces with backend services efficiently.  
• Complete real-world projects to apply full-stack development skills.`,
"image/Java-Full-Stack.png"],


["Python Full Stack","software",
`Build scalable web applications using Python frameworks and integrate them with frontend technologies, following Ascentz Technologies’ hands-on curriculum.

Python Full Stack - Certification Course

What you will learn:

• Master Python fundamentals to develop versatile applications.  
• Build dynamic backend services using Django framework.  
• Create and integrate RESTful APIs for smooth data handling.  
• Manage databases and data models effectively within applications.  
• Deploy and host applications on cloud or local servers for real-world usage.`,
"image/full-stack-image.png"],


["C Programming","software",
`Develop strong logical thinking and programming fundamentals using C, the foundation for modern programming languages.

C Programming - Certification Course

What you will learn:

• Understand data types, operators, and basic syntax for efficient coding.  
• Implement control statements to manage program flow effectively.  
• Write reusable functions to simplify complex logic.  
• Work with pointers and memory management basics.  
• Solve real-world problems using structured programming techniques.`,
"image/668930a23efb2.png"],


["C++","software",
`Learn object-oriented programming concepts and develop efficient applications using C++.

C++ - Certification Course

What you will learn:

• Create and manage classes and objects for structured programs.  
• Apply inheritance and polymorphism for code reusability and flexibility.  
• Handle file operations and persistent data storage.  
• Utilize Standard Template Library (STL) for efficient coding practices.  
• Develop robust applications following industry-standard practices.`,
"image/maxresdefault.png"],


["Java Programming","software",
`Gain strong backend development skills and build scalable applications using Java, following Ascentz Technologies’ project-based learning.

Java Programming - Certification Course

What you will learn:

• Implement object-oriented programming concepts to structure applications.  
• Handle exceptions to create error-resistant programs.  
• Work with Java collections for efficient data management.  
• Utilize multithreading basics for concurrent programming.  
• Develop complete application logic for real-world projects.`,
"image/Java-1024x576.png"],


["Python Programming","software",
`Learn Python for automation, scripting, and application development across multiple domains, using Ascentz Technologies’ hands-on approach.

Python Programming - Certification Course

What you will learn:

• Master Python syntax and basics for versatile programming tasks.  
• Work with data structures to organize and process data efficiently.  
• Write functions for reusable and modular code.  
• Handle files for reading, writing, and processing data.  
• Automate tasks and processes to improve productivity.`,
"image/python.png"],


["Data Science","data",
`Analyze large datasets and extract meaningful insights using statistical and computational techniques, following Ascentz Technologies’ practical curriculum.

Data Science - Certification Course

What you will learn:

• Perform data analysis to derive actionable insights from datasets.  
• Use Pandas and NumPy for efficient data manipulation and computation.  
• Visualize data effectively to communicate trends and patterns.  
• Clean and preprocess raw data for accurate results.  
• Apply learning in real-world projects to solve business problems.`,
"image/Data-science-training.png"],


["Machine Learning","data",
`Build predictive models and train systems to learn from data using machine learning algorithms, with Ascentz Technologies’ project-based approach.

Machine Learning - Certification Course

What you will learn:

• Implement regression models for continuous data prediction.  
• Apply classification techniques for categorizing datasets.  
• Utilize clustering algorithms for data segmentation.  
• Evaluate and optimize models for accuracy and performance.  
• Design end-to-end ML pipelines for real-world applications.`,
"image/machine-learning.png"],


["Data Analytics","data",
`Transform raw data into actionable insights to support business decisions, following Ascentz Technologies’ practical methodology.

Data Analytics - Certification Course

What you will learn:

• Use Excel and SQL to extract, organize, and analyze data efficiently.  
• Clean and preprocess datasets for accurate analysis.  
• Create meaningful visualizations to communicate insights clearly.  
• Generate reports to aid business decision-making.  
• Apply insights to solve real-world business challenges.`,
"image/Data-Analyst-Training.png"],


["Power BI","data",
`Create powerful dashboards and business reports using Microsoft Power BI, guided by Ascentz Technologies’ hands-on projects.

Power BI - Certification Course

What you will learn:

• Design interactive dashboards to visualize key metrics.  
• Write DAX formulas to perform complex calculations.  
• Model and structure data for efficient reporting.  
• Create compelling visualizations to communicate insights effectively.  
• Build reports for data-driven business decisions.`,
"image/course_17023_image.png"],


["Cloud Computing AWS","cloud",
`Deploy and manage applications on AWS cloud infrastructure, using Ascentz Technologies’ practical training approach.

AWS Cloud - Certification Course

What you will learn:

• Launch and manage EC2 instances and S3 storage solutions.  
• Understand cloud architecture and scalable design patterns.  
• Deploy applications efficiently on cloud infrastructure.  
• Implement security best practices for cloud resources.  
• Monitor and maintain applications for performance and reliability.`,
"image/aws-cloud.png"],

["Microsoft Azure","cloud",
`Work with Microsoft Azure services to build and deploy cloud-based applications, guided by Ascentz Technologies’ practical curriculum.

Microsoft Azure - Certification Course

What you will learn:

• Gain hands-on experience with Azure services to build and manage cloud solutions efficiently.  
• Deploy and manage virtual machines for scalable computing.  
• Configure networking components for secure and reliable communication.  
• Implement storage solutions to handle and organize application data.  
• Deploy cloud applications following best practices for reliability and performance.`,
"image/microsoft.png"],


["DevOps","cloud",
`Automate development workflows and improve delivery speed using DevOps practices, following Ascentz Technologies’ practical approach.

DevOps - Certification Course

What you will learn:

• Build CI/CD pipelines to automate software builds, tests, and deployments.  
• Manage source code efficiently using Git version control.  
• Containerize applications with Docker for consistency across environments.  
• Implement automation tools to streamline development and operations.  
• Deploy applications reliably with end-to-end DevOps practices.`,
"image/devops.png"],


["Networking Basics","network",
`Understand how networks function and how systems communicate, following Ascentz Technologies’ structured methodology.

Networking Basics - Certification Course

What you will learn:

• Learn IP addressing and subnetting to structure networks effectively.  
• Understand networking protocols and their roles in communication.  
• Explore the OSI model layers for network design and troubleshooting.  
• Configure routing and switching to enable data transmission.  
• Set up small-scale networks for practical learning and experimentation.`,
"image/network-course.png"],


["Cyber Security","network",
`Protect systems from cyber threats and learn essential security mechanisms, aligned with Ascentz Technologies’ hands-on approach.

Cyber Security - Certification Course

What you will learn:

• Analyze potential threats and vulnerabilities in systems and networks.  
• Work with security tools to monitor and protect infrastructure.  
• Learn ethical hacking basics to identify and fix security issues.  
• Implement network security measures to safeguard communication.  
• Apply data protection techniques to ensure confidentiality and integrity.`,
"image/623.png"],


["UI / UX Design","design",
`Design user-friendly and visually engaging digital experiences, following Ascentz Technologies’ design principles and practical exercises.

UI/UX Design - Certification Course

What you will learn:

• Create wireframes to plan the layout and structure of digital interfaces.  
• Develop prototypes to visualize user interactions and workflows.  
• Use Figma to design and collaborate on UI/UX projects.  
• Conduct user research to understand needs and improve experiences.  
• Apply design principles to create aesthetically pleasing and intuitive interfaces.`,
"image/ui-course.png"],


["Digital Marketing","marketing",
`Promote products and services effectively using digital channels, guided by Ascentz Technologies’ practical strategies.

Digital Marketing - Certification Course

What you will learn:

• Implement SEO strategies to improve website visibility in search engines.  
• Manage social media campaigns to engage target audiences effectively.  
• Create and manage paid advertisements for optimal reach and conversions.  
• Develop content marketing strategies to attract and retain users.  
• Use analytics tools to track performance and refine marketing tactics.`,
"image/digital-marketing.png"],


["SEO","marketing",
`Improve website ranking and online presence using search engine optimization techniques, as taught by Ascentz Technologies.

SEO - Certification Course

What you will learn:

• Optimize on-page elements to enhance website search performance.  
• Apply off-page SEO techniques to increase site authority.  
• Conduct keyword research for targeted content creation.  
• Implement technical SEO to improve website structure and accessibility.  
• Monitor and adjust strategies to achieve higher search rankings.`,
"image/seo-training-programs.png"]

];

let grid = document.getElementById("courseGrid");
grid.innerHTML = "";

function shortText(text, maxLength = 120) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
}

courses.forEach(c => {
    const [title, category, desc, img] = c;

    grid.innerHTML += `
    <div class="course-card" data-category="${category}">
        <img src="${img}" alt="${title}">
        <div class="course-body">
            <h4>${title}</h4>
            <p>${shortText(desc)}</p>
            <div class="course-buttons">
                <button onclick="openGlass(\`${title}\`, \`${desc}\`, \`${img}\`)">
                    View More
                </button>
                <button class="btn-primary" onclick="openEnroll(\`${title}\`)">
                    Enroll
                </button>
            </div>
        </div>
    </div>
    `;
});

function filterCourse(category) {
    let cards = document.querySelectorAll(".course-card");
    let items = document.querySelectorAll("#categoryList li");

    items.forEach(i => i.classList.remove("active"));
    event.target.classList.add("active");

    cards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


function openGlass(title, desc, img) {
    document.getElementById("glassModal").style.display = "flex";
    document.getElementById("gTitle").innerText = title;
    document.getElementById("gDesc").innerText = desc;
    document.getElementById("gImg").src = img;
}

function closeGlass() {
    document.getElementById("glassModal").style.display = "none";
}

window.addEventListener("click", function(e) {
    let glassModal = document.getElementById("glassModal");
    if (e.target === glassModal) {
        closeGlass();
    }
});


function openEnroll(title) {
    closeGlass();
    document.getElementById("enrollModal").style.display = "flex";
    document.getElementById("enrollCourseTitle").innerText = title;
}

function closeEnroll() {
    document.getElementById("enrollModal").style.display = "none";
    document.getElementById("enrollForm").reset();
}

window.addEventListener("click", function(e) {
    let enrollModal = document.getElementById("enrollModal");
    if (e.target === enrollModal) {
        closeEnroll();
    }
});


document.getElementById("enrollForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("enrollCourseTitle").innerText;

    console.log("Enrollment Data:", { name, email, phone, course });

    alert(`Thank you ${name}!\nYou have enrolled in ${course}.`);

    closeEnroll();
});


document.querySelectorAll(".enroll-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        let courseTitle = document.getElementById("gTitle").innerText;
        openEnroll(courseTitle);
    });
});



/*-----internship-------*/
// ================== TIMELINE ACTIVE ==================
const cards = document.querySelectorAll(".timeline-item");

cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
    });
});


// ================== SCROLL ==================
function scrollToCourses() {
    document.getElementById("courses-section").scrollIntoView({
        behavior: "smooth"
    });
}


// ================== BACK BUTTON ==================
function backToList() {
    document.getElementById("detail-view").style.display = "none";
    document.getElementById("grid-view").style.display = "block";
}


// ================== APPLY MODAL ==================

// OPEN
function openApplyForm() {
    document.getElementById("applyModal").classList.add("active");
}

// CLOSE
function closeApplyForm() {
    document.getElementById("applyModal").classList.remove("active");
}


// ================== CLOSE ON OUTSIDE CLICK ==================
window.addEventListener("click", function(e) {
    const modal = document.getElementById("applyModal");
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});


// ================== ESC KEY CLOSE ==================
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeApplyForm();
    }
});


// ================== FORM SUBMIT ==================
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("applyForm");

    if (!form) return; // safety check

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            college: document.getElementById("college").value,
            message: document.getElementById("message").value,
            resume: document.getElementById("resume").files[0]?.name
        };

        console.log("Application Data:", data);

        alert("✅ Application Submitted Successfully!");

        closeApplyForm();
        form.reset();
    });
});




// 📤 SHARE FUNCTION
function shareJob() {
    const jobTitle = document.title; // or dynamic title
    const jobUrl = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: jobTitle,
            text: "Check out this internship opportunity!",
            url: jobUrl
        })
        .then(() => console.log("Shared successfully"))
        .catch((err) => console.log("Share cancelled", err));
    } else {
        // fallback
        navigator.clipboard.writeText(jobUrl);
        alert("Link copied to clipboard!");
    }
}
function saveJob(btn) {
    const jobId = window.location.href; // or unique ID
    let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    const index = savedJobs.indexOf(jobId);

    if (index === -1) {
        savedJobs.push(jobId);
        btn.innerHTML = `<i class="fa-solid fa-bookmark"></i> Saved`;
        alert("Job saved!");
    } else {
        savedJobs.splice(index, 1);
        btn.innerHTML = `<i class="fa-regular fa-bookmark"></i> Save`;
        alert("Job removed from saved list!");
    }

    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
}









