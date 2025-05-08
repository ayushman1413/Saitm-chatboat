document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");
  const mainContainer = document.getElementById("mainContainer");
  const inputBox = document.getElementById("inputBox");
  const sendBtn = document.getElementById("sendBtn");
  const conversation = document.getElementById("conversation");
  const cards = document.querySelectorAll(".card");
  const recentEntries = document.querySelectorAll(".recent-entry");
  const enquiryFormBtn = document.getElementById("enquiryFormBtn");
  const enquiryModal = document.getElementById("enquiryModal");
  const closeModal = document.querySelectorAll(".close-modal");
  const enquiryForm = document.getElementById("enquiryForm");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const newChat = document.getElementById("newChat");
  const voiceInput = document.getElementById("voiceInput");
  const attachFile = document.getElementById("attachFile");
  const userProfileBtn = document.getElementById("userProfileBtn");
  const userProfileModal = document.getElementById("userProfileModal");
  const greetingSection = document.getElementById("greetingSection");
  const suggestionsSection = document.getElementById("suggestionsSection");
  const historyBtn = document.getElementById("historyBtn");

  const collegeData = {
    about:
      "St. Andrews Institute of Technology & Management (SAITM) is a prestigious college established in 2008, located in Gurugram, Delhi NCR. It offers various undergraduate and postgraduate programs in engineering, management, and computer applications. SAITM is approved by AICTE, Govt. of India, New Delhi and affiliated to Maharshi Dayanand University, Rohtak. It is an 'A' Grade state university, accredited by NAAC.",

    vision:
      "The vision of SAITM is to be a globally recognized institution of excellence in technical and management education, fostering innovation, research, and entrepreneurship to address societal challenges and contribute to national development.",

    mission:
      "The mission of SAITM is to provide quality education through innovative teaching-learning processes, promote research and innovation, develop industry-academia partnerships, inculcate ethical values, and create responsible global citizens.",

    campus:
      "SAITM campus is spread over 10 acres with modern infrastructure including smart classrooms, well-equipped laboratories, library with digital resources, sports facilities, auditorium, and cafeteria. The campus provides a conducive environment for academic and extracurricular activities with lush green surroundings and state-of-the-art facilities.",

    courses:
      "SAITM offers the following courses:\n- B.Tech (CSE, ME, CE, ECE)\n- M.Tech\n- BBA\n- MBA\n- BCA\n- MCA\nAll courses are approved by AICTE and affiliated to Maharshi Dayanand University, Rohtak. The B.Tech CSE program is NBA accredited, ensuring high-quality education standards.",

    hostel:
      "SAITM provides separate hostel facilities for boys and girls with furnished rooms, 24/7 security, Wi-Fi, dining hall, recreation area, and regular housekeeping services. The hostels are located within the campus for convenience and safety of students. Each room is equipped with basic amenities including beds, study tables, cupboards, and attached bathrooms.",

    fees: "The fee structure varies by program:\n- B.Tech: ₹75,000-90,000 per semester\n- M.Tech: ₹65,000-80,000 per semester\n- BBA: ₹50,000-60,000 per semester\n- MBA: ₹70,000-85,000 per semester\n- BCA: ₹45,000-55,000 per semester\n- MCA: ₹60,000-75,000 per semester\nScholarship opportunities are available for meritorious students based on academic performance and entrance exam scores.",

    admission:
      "Admission to SAITM is based on:\n- For B.Tech: JEE Main score or state-level entrance exams\n- For M.Tech: GATE score\n- For MBA/BBA: CAT/MAT/XAT or college-level entrance test\n- For BCA/MCA: College-level entrance test\nThe admission process includes application submission, entrance exam, counseling, and document verification. Applications can be submitted online through the official website or offline at the admission office.",

    placements:
      "SAITM has an excellent placement record with top companies visiting the campus for recruitment. The average placement rate is over 85% with companies like TCS, Infosys, Wipro, IBM, Cognizant, HCL, Tech Mahindra, and many more. The highest package offered was 12 LPA and the average package is around 5-6 LPA. The dedicated Training and Placement Cell provides career guidance, soft skills training, and interview preparation to enhance employability.",

    faculty:
      "SAITM has highly qualified and experienced faculty members with doctoral degrees from reputed institutions. The faculty-student ratio is 1:15, ensuring personalized attention to each student. Regular faculty development programs are conducted to keep them updated with the latest industry trends. Many faculty members are involved in research and have published papers in national and international journals.",

    facilities:
      "SAITM provides excellent facilities including:\n- Digital library with e-journals and online resources\n- Computer labs with high-speed internet and latest software\n- Sports complex with indoor and outdoor games including cricket, football, basketball\n- Cafeteria serving nutritious food at reasonable prices\n- Medical facility with qualified staff\n- Transportation facility covering major areas of the city\n- 24/7 Wi-Fi campus with high-speed internet\n- Auditorium and seminar halls for events and conferences\n- Innovation and incubation center for startups",

    nba_accreditation:
      "SAITM's Computer Science & Engineering program is NBA (National Board of Accreditation) accredited, which ensures that the program meets the quality standards set by the accreditation agency. This accreditation validates the quality of education provided and enhances the value of the degree in the job market and for higher education opportunities.",

    research:
      "SAITM promotes research and innovation through its Research and Development Cell. Faculty members and students are encouraged to undertake research projects, publish papers, and participate in conferences. The institute has collaborations with industry and other academic institutions for joint research initiatives. Several research grants have been received from government and private organizations.",

    events:
      "SAITM organizes various events throughout the academic year including technical fests, cultural festivals, sports competitions, workshops, seminars, and guest lectures. These events provide students with opportunities to showcase their talents, learn from experts, and develop organizational skills. Annual events like 'Technovation' (technical fest) and 'Rhythm' (cultural fest) are highlights of the college calendar.",

    scholarships:
      "SAITM offers various scholarships to deserving students based on merit, economic background, and special achievements. These include:\n- Merit scholarships for academic excellence\n- Scholarships for economically weaker sections\n- Sports scholarships for outstanding athletes\n- Special scholarships for girl students\nStudents can also avail government scholarships as per eligibility criteria.",

    industry_partnerships:
      "SAITM has established partnerships with leading industries to enhance the practical learning experience of students. These partnerships facilitate internships, industrial visits, guest lectures, and collaborative projects. Some key industry partners include IBM, Microsoft, Oracle, Cisco, and TCS. The institute also has an Industry Advisory Board that provides inputs for curriculum enhancement.",

    alumni_network:
      "SAITM has a strong alumni network with graduates working in prestigious organizations across the globe. The Alumni Association organizes regular meets and connects current students with alumni for mentorship and career guidance. Many alumni have achieved significant success in their careers and contribute to the institute's development through various initiatives.",

    contact:
      "You can contact SAITM at:\nAddress: Plot No. 76, Knowledge Park-III, Greater Noida, Uttar Pradesh 201308\nPhone: +91-120-2323854, +91-120-2323855\nEmail: info@saitm.ac.in\nWebsite: https://saitm.ac.in\nAdmission Helpline: +91-8505937772",
  };


  const qaPairs = [
    {
      keywords: ["about", "saitm", "college", "institute", "overview"],
      response: collegeData.about,
    },
    {
      keywords: ["vision", "mission", "goal", "aim", "objective"],
      response: `Vision: ${collegeData.vision}\n\nMission: ${collegeData.mission}`,
    },
    {
      keywords: ["campus", "infrastructure", "facilities", "building"],
      response: collegeData.campus,
    },
    {
      keywords: ["courses", "programs", "degrees", "offered", "study", "btech", "mtech", "bba", "mba", "bca", "mca"],
      response: collegeData.courses,
    },
    {
      keywords: ["hostel", "accommodation", "dormitory", "staying", "living", "residence", "boarding"],
      response: collegeData.hostel,
    },
    {
      keywords: ["fees", "cost", "tuition", "expenses", "payment", "charges", "price"],
      response: collegeData.fees,
    },
    {
      keywords: ["admission", "apply", "entrance", "requirements", "eligibility", "criteria", "application", "enroll"],
      response: collegeData.admission,
    },
    {
      keywords: ["placement", "job", "career", "recruitment", "companies", "employment", "hiring", "package", "salary"],
      response: collegeData.placements,
    },
    {
      keywords: ["faculty", "professors", "teachers", "staff", "instructors", "lecturers"],
      response: collegeData.faculty,
    },
    {
      keywords: ["contact", "address", "phone", "email", "reach", "location", "helpline"],
      response: collegeData.contact,
    },
    {
      keywords: ["nba", "accreditation", "accredited", "certification", "recognition"],
      response: collegeData.nba_accreditation,
    },
    {
      keywords: ["research", "development", "innovation", "projects", "papers", "publications"],
      response: collegeData.research,
    },
    {
      keywords: ["events", "activities", "fest", "festival", "competition", "workshop", "seminar", "conference"],
      response: collegeData.events,
    },
    {
      keywords: ["scholarship", "financial aid", "fee waiver", "discount", "concession", "funding"],
      response: collegeData.scholarships,
    },
    {
      keywords: ["industry", "partnership", "collaboration", "tie-up", "corporate", "memorandum"],
      response: collegeData.industry_partnerships,
    },
    {
      keywords: ["alumni", "graduate", "former student", "network", "association"],
      response: collegeData.alumni_network,
    },
    {
      keywords: ["sports", "games", "physical", "outdoor", "indoor", "athletic", "fitness"],
      response: "SAITM has excellent sports facilities including a large playground for outdoor games like cricket and football, basketball and volleyball courts, indoor games facilities for table tennis, chess, and carrom. Regular sports events and tournaments are organized to promote physical fitness and sportsmanship among students.",
    },
    {
      keywords: ["library", "books", "journals", "reading", "digital library", "e-resources"],
      response: "SAITM has a well-stocked library with over 50,000 books, national and international journals, magazines, and newspapers. The digital library provides access to e-journals, e-books, and online databases like IEEE, Springer, and DELNET. The library has a spacious reading hall and remains open from 8:00 AM to 8:00 PM on all working days.",
    },
    {
      keywords: ["transportation", "bus", "shuttle", "commute", "travel"],
      response: "SAITM provides transportation facilities for students and staff with a fleet of buses covering major areas of Delhi NCR including Gurugram, Faridabad, Noida, and Delhi. The buses are equipped with GPS tracking and are operated by experienced drivers ensuring safe and comfortable travel. Transportation fee varies based on the distance and route.",
    },
    {
      keywords: ["internship", "training", "practical", "industrial", "summer project", "winter training"],
      response: "SAITM has a robust internship program that helps students gain practical experience in their field of study. The Training and Placement Cell facilitates internships with partner companies during summer and winter breaks. These internships often lead to pre-placement offers for deserving students. The institute also conducts industrial training programs in collaboration with industry experts.",
    },
    {
      keywords: ["clubs", "societies", "extracurricular", "co-curricular", "student activity"],
      response: "SAITM has various student clubs and societies to promote extracurricular activities and skill development. These include Technical Club, Cultural Club, Literary Club, Sports Club, Photography Club, and Social Service Club. These clubs organize regular activities, workshops, and competitions to enhance students' creativity, leadership, and teamwork skills.",
    },
    {
      keywords: ["ranking", "rating", "position", "standing", "nirf"],
      response: "SAITM is recognized as one of the top engineering and management institutes in Delhi NCR. It has been consistently ranked among the top 100 private engineering colleges in India by various education surveys. The NBA accreditation for its Computer Science program further validates its quality standards. The institute strives for continuous improvement in academic excellence and infrastructure development.",
    },
    {
      keywords: ["computer science", "cse", "it", "information technology", "software"],
      response: "The Computer Science & Engineering (CSE) department at SAITM is NBA accredited and offers a comprehensive curriculum covering programming, data structures, algorithms, database management, networking, artificial intelligence, machine learning, and more. The department has state-of-the-art labs equipped with the latest hardware and software. CSE students have excellent placement records with top IT companies.",
    },
    {
      keywords: ["mechanical", "me", "mechanical engineering", "manufacturing"],
      response: "The Mechanical Engineering department at SAITM offers a well-designed curriculum that covers thermodynamics, fluid mechanics, manufacturing processes, CAD/CAM, robotics, and more. The department has modern laboratories including Fluid Mechanics Lab, Strength of Materials Lab, Manufacturing Lab, and CAD/CAM Lab. Students get hands-on experience through practical sessions and industrial visits.",
    },
    {
      keywords: ["civil", "ce", "civil engineering", "construction", "structural"],
      response: "The Civil Engineering department at SAITM provides education in structural engineering, construction management, transportation engineering, environmental engineering, and more. The department has well-equipped laboratories for surveying, concrete testing, soil mechanics, and environmental engineering. Students participate in site visits and practical projects to gain real-world experience.",
    },
    {
      keywords: ["electronics", "ece", "communication", "electrical"],
      response: "The Electronics & Communication Engineering (ECE) department at SAITM offers a curriculum covering electronic devices, communication systems, signal processing, microprocessors, VLSI design, and more. The department has modern laboratories with the latest equipment for experiments in analog and digital electronics, microprocessors, communication systems, and embedded systems.",
    },
    {
      keywords: ["management", "mba", "bba", "business", "administration"],
      response: "The Management department at SAITM offers BBA and MBA programs with specializations in Marketing, Finance, Human Resources, Operations, and International Business. The curriculum is designed to develop managerial and entrepreneurial skills through case studies, business simulations, industry projects, and internships. Regular guest lectures by industry experts provide insights into current business trends.",
    },
    {
      keywords: ["computer applications", "mca", "bca", "software development"],
      response: "The Computer Applications department at SAITM offers BCA and MCA programs focusing on software development, web technologies, database management, networking, and emerging technologies. The curriculum includes practical sessions, projects, and industry internships to develop programming skills and problem-solving abilities. Graduates are well-prepared for careers in the IT industry.",
    },
    {
      keywords: ["naac", "accreditation", "grade"],
      response: "SAITM is affiliated to Maharshi Dayanand University, which is an 'A' Grade state university accredited by NAAC (National Assessment and Accreditation Council). This accreditation ensures that the education provided meets national quality standards. The institute follows all guidelines and regulations set by the university and regulatory bodies.",
    },
    {
      keywords: ["aicte", "approval", "recognition"],
      response: "SAITM is approved by AICTE (All India Council for Technical Education), Govt. of India, New Delhi. This approval ensures that the institute meets the standards for technical education in terms of infrastructure, faculty, curriculum, and other requirements. The approval is renewed periodically after thorough inspection and evaluation.",
    },
    {
      keywords: ["mdu", "maharshi dayanand university", "affiliation", "rohtak"],
      response: "SAITM is affiliated to Maharshi Dayanand University (MDU), Rohtak, which is an 'A' Grade state university accredited by NAAC. The affiliation ensures that the courses offered follow the university curriculum and students receive degrees recognized by the university. The institute adheres to all academic regulations and examination patterns prescribed by MDU.",
    },
    {
      keywords: ["ragging", "anti-ragging", "harassment", "bullying"],
      response: "SAITM has a strict anti-ragging policy in accordance with UGC regulations. The institute has an Anti-Ragging Committee and Squad that monitors and prevents any form of ragging. Students are required to submit anti-ragging undertakings at the time of admission. Any incident of ragging is dealt with severely as per the guidelines. The campus is under CCTV surveillance to ensure student safety.",
    },
    {
      keywords: ["wifi", "internet", "connectivity", "network"],
      response: "SAITM campus is equipped with 24/7 high-speed Wi-Fi connectivity accessible to all students and faculty. The network is secured and monitored to ensure appropriate usage. Computer labs have wired internet connections for activities requiring higher bandwidth. Technical support is available to resolve any connectivity issues.",
    },
    {
      keywords: ["cafeteria", "canteen", "food", "mess", "dining"],
      response: "SAITM has a spacious cafeteria that serves nutritious and hygienic food at reasonable prices. The menu includes a variety of vegetarian and non-vegetarian options, snacks, beverages, and meals. The cafeteria is managed by professional staff ensuring cleanliness and quality. Separate hostel mess facilities are available for resident students with balanced meal plans.",
    },
    {
      keywords: ["medical", "healthcare", "clinic", "hospital", "emergency"],
      response: "SAITM has a medical facility with qualified staff to provide first aid and basic healthcare services. For emergencies, the institute has tie-ups with nearby hospitals and ambulance services. Regular health check-ups are organized for students and staff. Health insurance coverage is available for all students as part of their admission package.",
    },
    {
      keywords: ["security", "safety", "guard", "surveillance", "cctv"],
      response: "SAITM ensures campus security with trained security personnel deployed 24/7. The entire campus is under CCTV surveillance. Entry and exit points are monitored, and visitor management system is in place. Hostels have additional security measures including biometric access control. Fire safety equipment and emergency protocols are established throughout the campus.",
    },
    {
      keywords: ["counseling", "guidance", "mentoring", "support", "psychological"],
      response: "SAITM has a student counseling cell that provides academic, career, and personal counseling to students. Professional counselors help students deal with stress, anxiety, and other psychological issues. Faculty mentors are assigned to groups of students for regular guidance and support. The counseling services are confidential and aimed at ensuring students' overall well-being.",
    },
    {
      keywords: ["entrepreneurship", "startup", "incubation", "innovation center", "business"],
      response: "SAITM promotes entrepreneurship through its Innovation and Incubation Center. The center provides mentorship, infrastructure, and seed funding for student startups. Regular workshops, boot camps, and entrepreneurship development programs are organized to foster the entrepreneurial mindset. Several successful startups have emerged from the institute's incubation support.",
    },
    {
      keywords: ["cultural", "festival", "event", "celebration", "extracurricular"],
      response: "SAITM organizes 'Rhythm', an annual cultural festival featuring music, dance, drama, literary events, and fine arts competitions. The festival provides a platform for students to showcase their talents and creativity. Various cultural clubs organize regular activities throughout the year. Celebrations of national festivals and important days are also part of the cultural calendar.",
    },
    {
      keywords: ["technical", "fest", "competition", "hackathon", "project exhibition"],
      response: "SAITM hosts 'Technovation', an annual technical festival featuring coding competitions, hackathons, project exhibitions, technical quizzes, robotics competitions, and workshops. The fest attracts participants from various colleges and provides opportunities for students to demonstrate their technical skills and innovative ideas. Industry experts are invited as judges and speakers.",
    },
    {
      keywords: ["placement", "training", "soft skills", "interview", "resume"],
      response: "SAITM's Training and Placement Cell provides comprehensive training in soft skills, aptitude, technical skills, resume writing, and interview preparation. Mock interviews and group discussions are conducted regularly. Pre-placement talks and industry interactions help students understand employer expectations. The cell maintains strong relationships with recruiters and alumni to enhance placement opportunities.",
    },
    {
      keywords: ["scholarship", "merit", "financial aid", "fee concession", "support"],
      response: collegeData.scholarships,
    },
    {
      keywords: ["international", "collaboration", "exchange", "global", "foreign"],
      response: "SAITM has international collaborations with universities and institutions in countries like USA, UK, Canada, and Australia. These collaborations facilitate faculty exchange, joint research projects, and student exchange programs. International workshops and conferences are organized to provide global exposure to students and faculty. Some programs offer opportunities for international internships and certifications.",
    },
    {
      keywords: ["apply", "admission process", "application form", "procedure", "how to apply"],
      response: "To apply for admission at SAITM:\n1. Visit the official website (https://saitm.ac.in) or admission office\n2. Fill the application form online or offline\n3. Pay the application fee\n4. Submit required documents (mark sheets, certificates, ID proof)\n5. Appear for entrance test/interview if applicable\n6. Wait for merit list/counseling schedule\n7. Complete admission formalities and fee payment after selection\nFor assistance, contact the admission helpline: +91-8505937772",
    },
    {
      keywords: ["documents", "required", "certificates", "marksheet", "submission"],
      response: "Documents required for admission at SAITM include:\n1. Completed application form\n2. 10th and 12th mark sheets and certificates\n3. Graduation mark sheets and degree (for PG courses)\n4. Entrance exam score card (JEE/GATE/CAT etc. as applicable)\n5. Transfer/Migration certificate\n6. Character certificate\n7. ID proof (Aadhar/PAN/Passport)\n8. Caste certificate (if applicable)\n9. Recent passport size photographs\n10. Domicile certificate (if required)\nOriginal documents need to be presented for verification along with photocopies.",
    },
    {
      keywords: ["eligibility", "criteria", "qualification", "minimum marks", "requirements"],
      response: "Eligibility criteria for various programs at SAITM:\n- B.Tech: 10+2 with Physics, Chemistry, Mathematics with minimum 60% marks\n- M.Tech: B.Tech/B.E. with minimum 60% marks\n- BBA: 10+2 in any stream with minimum 50% marks\n- MBA: Graduation in any discipline with minimum 50% marks\n- BCA: 10+2 with Mathematics with minimum 50% marks\n- MCA: Graduation with Mathematics/Statistics/Computer Science with minimum 50% marks\nRelaxation in marks is provided as per government norms for reserved categories.",
    },
    {
      keywords: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"],
      response: "Hello! I'm the SAITM Assistant. How can I help you today with information about St. Andrews Institute of Technology & Management?",
    },
    {
      keywords: ["thank", "thanks", "appreciate", "grateful"],
      response: "You're welcome! If you have any more questions about SAITM, feel free to ask. I'm here to help you with all the information you need about our programs, facilities, and admission process.",
    },
    {
      keywords: ["bye", "goodbye", "see you", "farewell", "talk later"],
      response: "Goodbye! Feel free to come back if you have more questions about SAITM. Have a great day!",
    },
  ];

  let chatHistory = [];
  let isBotTyping = false;

  menuToggle.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    } else {
      sidebar.classList.toggle("collapsed");
    }
    adjustMainMargin();
  });

  const sidebarCloseBtn = document.getElementById("sidebarCloseBtn");
  sidebarCloseBtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.remove("active");
      document.body.style.overflow = "";
      adjustMainMargin();
    }
  });

  function adjustMainMargin() {
    if (window.innerWidth <= 768) {
      document.querySelector(".main").style.marginLeft = "0";
      document.querySelector(".main-bottom").style.left = "0";
    } else {
      if (sidebar.classList.contains("collapsed")) {
        document.querySelector(".main").style.marginLeft = "80px";
        document.querySelector(".main-bottom").style.left = "80px";
      } else {
        document.querySelector(".main").style.marginLeft = "280px";
        document.querySelector(".main-bottom").style.left = "280px";
      }
    }
  }

  window.addEventListener("resize", adjustMainMargin);

  function sendMessage() {
    const userInput = inputBox.value.trim();
    if (userInput === "" || isBotTyping) return;

    greetingSection.style.display = "none";
    suggestionsSection.style.display = "none";

    addMessage(userInput, "user");

    inputBox.value = "";

    showTypingIndicator();

    setTimeout(
      () => {
        const botResponse = getBotResponse(userInput);
        hideTypingIndicator();
        addMessage(botResponse, "bot");
      },
      1000 + Math.random() * 1000
    ); 
  }

  function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;

    const avatarDiv = document.createElement("div");
    avatarDiv.className = "message-avatar";

    const avatarImg = document.createElement("img");
    if (sender === "user") {
      avatarImg.src = "assets/gemini_icon.png";
    } else {
      avatarImg.src = "assets/quest_icon.png";
    }

    avatarDiv.appendChild(avatarImg);

    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";

    const textP = document.createElement("p");
    textP.className = "message-text";

    if (sender === "bot") {
      const formattedText = text.replace(/\n/g, "<br>");
      animateTyping(textP, formattedText, true);
    } else {
      textP.textContent = text;
    }

    contentDiv.appendChild(textP);
    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);

    conversation.appendChild(messageDiv);

    chatHistory.push({
      sender: sender,
      message: text,
    });

    conversation.scrollTop = conversation.scrollHeight;
  }

  function animateTyping(element, text, isHTML = false) {
    if (isHTML) {
      element.innerHTML = ""; 
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = text;
      const textContent = tempDiv.textContent;

      let i = 0;
      const speed = 20; 

      function type() {
        if (i < text.length) {
          element.innerHTML = text.substring(0, i + 1);
          i++;
          setTimeout(type, speed);
          conversation.scrollTop = conversation.scrollHeight;
        }
      }

      type();
    } else {
      let i = 0;
      const speed = 30; 

      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
          conversation.scrollTop = conversation.scrollHeight;
        }
      }

      type();
    }
  }

  function showTypingIndicator() {
    isBotTyping = true;

    const typingDiv = document.createElement("div");
    typingDiv.className = "message bot typing-message";
    typingDiv.id = "typingIndicator";

    const avatarDiv = document.createElement("div");
    avatarDiv.className = "message-avatar";

    const avatarImg = document.createElement("img");
    avatarImg.src = "assets/gemini_icon.png";
    avatarDiv.appendChild(avatarImg);

    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";

    const indicatorDiv = document.createElement("div");
    indicatorDiv.className = "typing-indicator";

    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("div");
      dot.className = "typing-dot";
      indicatorDiv.appendChild(dot);
    }

    contentDiv.appendChild(indicatorDiv);
    typingDiv.appendChild(avatarDiv);
    typingDiv.appendChild(contentDiv);

    conversation.appendChild(typingDiv);
    conversation.scrollTop = conversation.scrollHeight;
  }

  function hideTypingIndicator() {
    isBotTyping = false;
    const typingIndicator = document.getElementById("typingIndicator");
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();

    for (const qa of qaPairs.slice(-3)) {
      if (qa.keywords.some((keyword) => userInput.includes(keyword))) {
        return qa.response;
      }
    }

    let bestMatch = null;
    let highestScore = 0;

    for (const qa of qaPairs.slice(0, -3)) {
      let score = 0;

      for (const keyword of qa.keywords) {
        if (userInput.includes(keyword)) {
          score += keyword.length;
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = qa;
      }
    }

    if (bestMatch && highestScore > 3) {
      return bestMatch.response;
    }

    const commonTopics = [
      "admission",
      "course",
      "fee",
      "hostel",
      "placement",
      "faculty",
      "campus",
      "scholarship",
      "facility",
      "contact",
    ];

    for (const topic of commonTopics) {
      if (userInput.includes(topic)) {
        for (const qa of qaPairs) {
          if (qa.keywords.includes(topic)) {
            return qa.response;
          }
        }
      }
    }

    return "I'm not sure I understand your question completely. You can ask me about SAITM's courses, admission process, campus facilities, hostel, fees, placements, NBA accreditation, or contact information. Could you please rephrase your question?";
  }

  sendBtn.addEventListener("click", sendMessage);

  inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const query = this.getAttribute("data-query");
      if (query) {
        inputBox.value = query;
        sendMessage();
      }
    });
  });

  recentEntries.forEach((entry) => {
    entry.addEventListener("click", function () {
      const query = this.getAttribute("data-query");
      if (query) {
        inputBox.value = query;
        sendMessage();
      }
    });
  });

  enquiryFormBtn.addEventListener("click", () => {
    enquiryModal.style.display = "flex";
  });

  const applyNowBtn = document.querySelector(".apply-now-btn");
  if (applyNowBtn) {
    applyNowBtn.addEventListener("click", () => {
      enquiryModal.style.display = "flex";
    });
  }

  userProfileBtn.addEventListener("click", () => {
    userProfileModal.style.display = "flex";
  });

  closeModal.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      document.querySelectorAll(".modal").forEach((modal) => {
        modal.style.display = "none";
      });
    });
  });

  window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal").forEach((modal) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  enquiryForm.addEventListener("submit", (e) => {
    console.log("Enquiry form submit event triggered");
    e.preventDefault();

    if (typeof emailjs === "undefined") {
      console.error("emailjs is not defined. Please check if the EmailJS SDK is loaded.");
      const enquiryFormMessage = document.getElementById("enquiryFormMessage");
      enquiryFormMessage.textContent = "Email service is currently unavailable. Please try again later.";
      enquiryFormMessage.style.color = "red";
      enquiryFormMessage.style.display = "block";
      return;
    }

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const course = document.getElementById("course").value;
    const message = document.getElementById("message").value;

    console.log("Initializing EmailJS...");
    emailjs.init("kvtYD3QI3aKA_Fzc7");
    console.log("EmailJS initialized.");

    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      course: course,
      message: message,
    };

    console.log("Sending email with EmailJS...");
    emailjs.send("service_Ayushman", "template_edar2vg", templateParams)
      .then((response) => {
        console.log("EmailJS response:", response);

        const enquiryFormMessage = document.getElementById("enquiryFormMessage");
        enquiryFormMessage.textContent = "Your enquiry form submitted";
        enquiryFormMessage.style.display = "block";

        enquiryForm.style.display = "none";

        setTimeout(() => {
          enquiryForm.reset();
          enquiryModal.style.display = "none";
          enquiryForm.style.display = "block";
          enquiryFormMessage.style.display = "none";
        }, 3000);

        addMessage(`Thank you ${name} for your enquiry about ${course}. We will contact you soon at ${email} or ${phone}.`, "bot");
      }, (error) => {
        console.error("EmailJS error:", error);
        const enquiryFormMessage = document.getElementById("enquiryFormMessage");
        enquiryFormMessage.textContent = "Failed to send enquiry. Please try again later.";
        enquiryFormMessage.style.color = "red";
        enquiryFormMessage.style.display = "block";
      });
  });

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const darkModeText = darkModeToggle.querySelector("p");
    if (document.body.classList.contains("dark-mode")) {
      darkModeText.textContent = "Light Mode";
    } else {
      darkModeText.textContent = "Dark Mode";
    }
  });

 
  newChat.addEventListener("click", () => {
    conversation.innerHTML = "";

    chatHistory = [];

    greetingSection.style.display = "block";
    suggestionsSection.style.display = "flex";
  });

  function addMessageInstant(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;

    const avatarDiv = document.createElement("div");
    avatarDiv.className = "message-avatar";

    const avatarImg = document.createElement("img");
    if (sender === "user") {
      avatarImg.src = "assets/quest_icon.png";
    } else {
      avatarImg.src = "assets/gemini_icon.png";
    }

    avatarDiv.appendChild(avatarImg);

    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";

    const textP = document.createElement("p");
    textP.className = "message-text";

    if (sender === "bot") {
      // Format text with line breaks without animation
      textP.innerHTML = text.replace(/\n/g, "<br>");
    } else {
      textP.textContent = text;
    }

    contentDiv.appendChild(textP);
    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);

    conversation.appendChild(messageDiv);

    conversation.scrollTop = conversation.scrollHeight;
  }

  historyBtn.addEventListener("click", () => {
    if (chatHistory.length === 0) {
      alert("No chat history available yet.");
      return;
    }

    conversation.innerHTML = "";

    addMessageInstant("Here is your full chat history:", "bot");

    for (const msg of chatHistory) {
      addMessageInstant(msg.message, msg.sender);
    }
  });

  voiceInput.addEventListener("click", () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Sorry, your browser does not support speech recognition.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    greetingSection.style.display = "none";
    suggestionsSection.style.display = "none";

    addMessage("Listening...", "user");

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      const messages = document.querySelectorAll(".message");
      const lastUserMessage = messages[messages.length - 1];
      lastUserMessage.querySelector(".message-text").textContent = transcript;

      showTypingIndicator();

      setTimeout(() => {
        const botResponse = getBotResponse(transcript);
        hideTypingIndicator();
        addMessage(botResponse, "bot");
      }, 1000);
    };

    recognition.onerror = (event) => {
      hideTypingIndicator();
      alert("Error occurred in speech recognition: " + event.error);
    };

    recognition.onend = () => {
      const messages = document.querySelectorAll(".message");
      const lastUserMessage = messages[messages.length - 1];
      if (lastUserMessage && lastUserMessage.querySelector(".message-text").textContent === "Listening...") {
        lastUserMessage.remove();
      }
    };
  });

  const fileModal = document.getElementById("fileModal");
  const fileModalCloseBtn = document.getElementById("fileModalCloseBtn");

  attachFile.addEventListener("click", () => {
    fileModal.style.display = "flex";
  });

  fileModalCloseBtn.addEventListener("click", () => {
    fileModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === fileModal) {
      fileModal.style.display = "none";
    }
  });

  adjustMainMargin();
});