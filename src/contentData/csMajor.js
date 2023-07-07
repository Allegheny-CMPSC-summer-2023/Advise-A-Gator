export default {
  "CMPSC Major": {
    title: "Computer Science Major",
    description:
      "Computer Science is associated with Mathematics and Natural Sciences. Students who major in Computer Science may not double-major or minor in Data Science, Informatics, or Software Engineering. The Computer Science major leads to the Bachelor of Science degree and requires a minimum of 48 semester credit hours. To graduate with a major in Computer Science, a student must have an earned GPA of at least 2.0 in required Computer Science and other courses presented for the major. At most one of the foundation courses (CMPSC 100, CMPSC 101, or CMPSC 102) may be presented for the major on the Credit/No Credit grade basis. Students who are interested in Mathematics and/or planning to attend graduate school in Computer Science are strongly encouraged to take Math 151 early in their academic career.",
    distributionRequirements: [],
    credits: "",
    prerequisites: {
      anyof: [],
      allof: [],
    },
    unlocks: [],
    technicalTopics: [],
    professionalTopics: [],
    tools: [
      {
        iconType: "book",
        title: "Allegheny College Computer Science Academic Bulletin",
        href: "https://www.cs.allegheny.edu/teaching/bulletin/#cmpsc",
      },
    ],
    paltform: ["https://www.cs.allegheny.edu/"],
    learningObjectives: [],
    learningOutcomes: [],
  },
  "CMPSC 304": {
    title: "Robotic Agents",
    description:
      "A study of the design and implementation of autonomous software agents and robotic systems that cooperatively complete complex tasks. In addition to examining techniques for large-scale coordination and group-based decision-making, students learn how to apply the field's technologies to address the challenges facing local and global communities. Participating in hands-on activities that often require teamwork, students develop and evaluate several multi-agent or multi-robot systems, while also reflecting on the civic issues surrounding the use of these systems. During a weekly laboratory session students use state-of-the-art technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
    distributionRequirements: ["CL", "QR"],
    credits: "4",
    prerequisites: {
      anyof: ["Experiment 1", "Experiment 2"],
      allof: ["CMPSC 101", "CMPSC 102"],
    },
    unlocks: ["Experiment 1", "Experiment 2", "Experiment 3"],
    technicalTopics: [
      "Ethical Robots",
      "Actuating",
      "Sensing",
      "Locomotion",
      "Modularity",
      "Navigation",
      "Robot Operating System",
      "Manipulation",
      "Mapping",
      "Learning in robotics",
    ],
    professionalTopics: [
      "community engagement",
      "teamwork",
      "code review",
      "communication",
    ],
    tools: [
      {
        iconType: "python",
        title: "Python",
      },
      {
        iconType: "tool",
        title: "ROS",
      },
      {
        iconType: "tool",
        title: "Arduino",
      },
      {
        iconType: "tool",
        title: "Raspberry Pi",
      },
      {
        iconType: "tool",
        title: "Sensors",
      },
      {
        iconType: "tool",
        title: "Drones",
      },
      {
        iconType: "tool",
        title: "GoPiGo",
      },
      {
        iconType: "tool",
        title: "Turtlebot",
      },
      {
        iconType: "tool",
        title: "Git",
      },
      {
        iconType: "tool",
        title: "GitHub",
      },
    ],
    paltform: ["https://learnroboticagents.com"],
    learningObjectives: [
      "Understand the field of agent-based and robotic systems",
      "Gain exposure to multiple different robot platforms",
      "Design and develop several robot applications",
      "Learn about and reflect on public problems that involve robotic technology",
      "Participate in civic engagement activities",
    ],
    learningOutcomes: [
      "Able to design, implement, and test application for a wheeled robot",
      "Able to design, implement, and test application for a drone",
      "Able to design, implement, and test application for a robotic arm",
      "Can develop a simple application using ROS",
      "Can put together engaging demonstrations using robots for public events",
    ],
  },

  "CMPSC 201": {
    title: "Programming Languages",
    description:
      "A study of the fundamental concepts that arise in different programming language paradigms. Students learn how programming languages are designed and implemented, and how these factors affect the overall usability, performance, and effectiveness of computer software. Participating in hands-on activities that often require teamwork, students gain experience in leveraging the styles and features of programming languages to implement and evaluate correct and efficient computer software. During a weekly laboratory session, students use state-of-the-art technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
    distributionRequirements: ["QR", "SP"],
    tools: [
      {
        iconType: "article",
        title: "Product Strategy – Overview",
        href: "https://www.svpg.com/product-strategy-overview/",
      },
      {
        iconType: "video",
        title: `Dan Olsen "How to Create Your Product Strategy" at the 2018 NYC Product Leader Summit`,
        href: "https://www.youtube.com/watch?v=11b2JdeHoGM",
      },
      {
        iconType: "video",
        title: "What Is Product Strategy (an overview)",
        href: "https://www.youtube.com/watch?v=ebwo_BX_VtU",
      },
      {
        iconType: "book",
        title: `Blue Ocean Strategy`,
        href: "https://www.amazon.com/Blue-Ocean-Strategy-Uncontested-Competition/dp/1591396190",
      },
      {
        iconType: "article",
        title: "Strategic Planning | Frameworks",
        href: "https://www.atlassian.com/work-management/strategic-planning/framework",
      },
    ],
  },
  "CMPSC 529": {
    title: "Internship",
    description:
      "Academic study completed in support of an internship experience with a partner institution. An Allegheny faculty member assigns and evaluates the academic work done by the student. May be repeated for credit. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
    distributionRequirements: [],
    credits: "4",
    prerequisites: {
      anyof: ["permission from the instructor"],
      allof: [],
    },
    unlocks: [],
    technicalTopics: ["topics vary based on the assigned industry project"],
    professionalTopics: ["teamwork", "meetings", "communication"],
    tools: [
      {
        iconType: "tool",
        title: "GitHub",
      },
      {
        iconType: "tool",
        title: "Git",
      },
    ],
    platform: ["https://github.com/CMPSC-529-Allegheny-CS-Internship"],
    learningObjectives: [
      "Gain hands-on experience working with an industry partner",
      "Experiment with new technologies",
      "Engage in appropriate industry practices related to the project",
      "Enhance ability to write and present ideas about a technical project",
      "Expand team working experiences",
    ],
    learningOutcomes: [
      "Able to gather project requirements from an industry partner",
      "Can follow established processes while working in a team",
      "Able to work in an iterative manner on a project",
      "Able to create and deploy a solution that is satisfactory to the industry partner",
      "Can effectively and clearly communicate with team members and industry supervisors",
    ],
  },
  "Product-Market Fit": {
    title: "Product-Market Fit",
    description:
      "Product-market fit refers to the degree to which a product meets the needs of a particular market. It is a measure of how well a product satisfies the demand of a target market and how well it meets the needs of its customers. A product that has a strong product-market fit is well-suited to the needs and preferences of its target market and is able to compete effectively in its market. On the other hand, a product that lacks product-market fit may struggle to gain traction and may ultimately fail in the market. Ensuring that a product has a strong product-market fit is an important step in the process of bringing a product to market and is crucial for the success of any business.",
    tools: [
      {
        iconType: "video",
        title: "David Rusenko - How To Find Product Market Fit",
        href: "https://www.youtube.com/watch?v=0LNQxT9LvM0&t=0s",
      },
      {
        iconType: "video",
        title: "The Real Product Market Fit by Michael Seibel",
        href: "https://www.youtube.com/watch?v=FBOLk9s9Ci4",
      },
      {
        iconType: "article",
        title: "A How-To Guide to Product-Market Fit",
        href: "https://medium.com/blackstar/a-how-to-guide-to-product-market-fit-5fb12c6f8f6e",
      },
    ],
  },
  "Product Roadmap": {
    title: "Product Roadmap",
    description:
      "Product roadmap is a high-level visual summary that maps out the vision and direction of a product. It outlines the key features and capabilities that the product team plans to deliver over a specified period of time. A product roadmap serves as a communication tool to align stakeholders on the progress and direction of the product, and to help prioritize the development of new features and enhancements. It can also be used to identify dependencies, track progress, and adjust course as needed to ensure that the product meets the needs of its target market.",
    tools: [
      {
        iconType: "article",
        title: "What is a product roadmap?",
        href: "https://www.atlassian.com/agile/product-management/product-roadmaps#:~:text=What%20is%20a%20product%20roadmap,how%20they%20will%20be%20achieved.",
      },
      {
        iconType: "article",
        title: "3 Types of Roadmaps in UX and Product Design",
        href: "https://www.nngroup.com/articles/roadmap-types/",
      },
    ],
  },
  "Product Pitch": {
    title: "Product Pitch",
    description:
      "Product pitch is a presentation that aims to sell a product or service to a potential customer or investor. It typically includes a brief overview of the product or service, its key features and benefits, and how it meets the needs of the target audience. A product pitch may also include demonstrations, samples, or other materials to help illustrate the product or service in action. The goal of a product pitch is to persuade the listener to try the product or service, invest in it, or otherwise engage with it in some way.",
    tools: [
      {
        iconType: "video",
        title: "How to Pitch to Investors, Michael Seibel, CEO Y Combinator",
        href: "https://www.youtube.com/watch?v=Q-YBCehpgpc",
      },
      {
        iconType: "article",
        title: "Pitching your early stage startup",
        href: "https://stripe.com/atlas/guides/pitching",
      },
      {
        iconType: "article",
        title: "Want a Better Pitch? Watch This.",
        href: "https://medium.com/firm-narrative/want-a-better-pitch-watch-this-328b95c2fd0b",
      },
      {
        iconType: "article",
        title: "What do I look for in a pitch?",
        href: "https://news.greylock.com/what-do-i-look-for-in-a-pitch-866355bddb3",
      },
      {
        iconType: "article",
        title: "10 Steps to Perfect Your Startup Pitch",
        href: "https://www.gsb.stanford.edu/insights/10-steps-perfect-your-startup-pitch",
      },
    ],
  },
  "CMPSC 101": {
    title: "Data Abstraction",
    description:
      "A continuation of CMPSC 100 with an emphasis on implementing, using, and evaluating the computational structures needed to efficiently store and retrieve digital data. Participating in hands-on activities that often require teamwork, students create data structures and algorithms whose correctness and performance they study through proofs and experimentation. Students continue to refine their ability to organize and document a program’s source code so that it effectively communicates with the intended users and maintainers. During a weekly laboratory session, students use state-of-the-art technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
    tools: [
      {
        iconType: "tool",
        title: "Data Structures",
        href: "https://www.youtube.com/watch?v=3xU050kMbHM",
      },
      {
        iconType: "article",
        title: "Markdown",
        href: "https://blog.hubspot.com/marketing/elements-flawless-product-launch-li",
      },

      {
        iconType: "python",
        title: "Computational Thinking",
        href: "https://lubiarz.medium.com/how-to-plan-a-successful-product-market-launch-c34fd5bdc0b9",
      },
      {
        iconType: "java",
        title: "Java",
        href: "https://www.youtube.com/watch?v=f0tPjcgcwnQ",
      },
    ],
  },
  "CMPSC 100": {
    title: "Computational Expression",
    description:
      "An introduction to the principles of computer science with an emphasis on creative expression through the medium of a programming language. Participating in hands-on activities that often require teamwork, students learn the computational structures needed to solve problems and produce computational artifacts which address these problems in real-world contexts. Students also learn how to organize and document a program's source code so that it effectively communicates with the intended users and maintainers. Additionally, the introduction includes an overview of the discipline of computer science and computational thinking. During a weekly laboratory session students use industry-grade technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
    tools: [
      {
        iconType: "article",
        title: "Object-oriented programming (OOP)",
        href: "https://www.youtube.com/watch?v=1hHMwLxN6EM",
      },
      {
        iconType: "article",
        title: "Integrated development environments (IDE)",
        href: "https://www.interaction-design.org/literature/article/minimum-viable-product-mvp-and-design-balancing-risk-to-gain-reward",
      },
      {
        iconType: "python",
        title: "Python Programming",
        href: "https://www.toptal.com/designers/ux/lean-ux-mvp",
      },
    ],
  },
  "CMPSC 102": {
    title: "Discrete Structures",
    description:
      "An introduction to the foundations of computer science with an emphasis on understanding the abstract structures used to represent discrete objects. Participating in hands-on activities that often require teamwork, students learn the computational methods and logical principles that they need to create and manipulate discrete objects in a programming environment. Students also learn how to write, organize, and document a program’s source code so that it is easily accessible to intended users of varied backgrounds. During a weekly laboratory session students use state-of-the-art technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
    tools: [
      {
        iconType: "article",
        title: "Boolean Logic",
        href: "https://blog.hubspot.com/marketing/press-release-template-ht",
      },

      {
        iconType: "article",
        title: "Teamwork",
        href: "https://www.shopify.com/blog/how-to-write-a-press-release",
      },
      {
        iconType: "article",
        title: "Docker",
        href: "https://mailchimp.com/resources/writing-press-releases/",
      },
      {
        iconType: "python",
        title: "Python",
        href: "https://www.python.org/",
      },
    ],
  },
  "CMPSC 200": {
    title: "Computer Organization",
    description:
      "A study of the low-level operation of computer systems. Participating in hands-on activities that often require teamwork, students investigate how computers process instructions in modern computers as information is encoded, stored, and executed in a machine’s physical structures. In addition to learning how to program in assembly and machine languages, students investigate the design and logical operation of processors and the mathematics of machine computation. During a weekly laboratory session, students use state-of-the-art technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
    tools: [
      {
        iconType: "article",
        title: "Docker",
        href: "https://www.youtube.com/watch?v=LLerCc7MOQo",
      },
      {
        iconType: "article",
        title: "C++",
        href: "https://mixpanel.com/content/guide-to-product-metrics/full-report/",
      },
      {
        iconType: "article",
        title: "Assembly",
        href: "https://mixpanel.com/blog/product-management-metrics-and-analytics/",
      },
      {
        iconType: "book",
        title: "Verilog",
        href: "https://www.amazon.com/Lean-Analytics-Better-Startup-Faster-ebook/dp/B00AG66LTM/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=",
      },
    ],
  },
  "CMPSC 202": {
    title: "Algorithm Analysis",
    description:
      "A study of fundamental methods for designing and implementing algorithms and analyzing their efficiency. While developing expertise in select models of computation and the key mathematical and experimental approaches to studying algorithm efficiency, students investigate different types of algorithms through hands-on activities that often require teamwork. Students also learn how to determine whether a problem can be efficiently solved by an algorithm that is implemented as a computer program. During a weekly laboratory session, students use state-of-the-art technology to complete projects, reporting on their results through both written documents and oral presentations. Students are invited to use their own departmentally approved laptop in this course; a limited number of laptops are available for use during class and lab sessions.",
    tools: [
      {
        iconType: "article",
        title: "LaText",
        href: "https://uxplanet.org/designing-for-user-retention-that-works-16793351512a",
      },
      {
        iconType: "article",
        title: "Travis CI",
        href: "https://uxmag.com/articles/how-do-the-best-companies-retain-customers",
      },
      {
        iconType: "article",
        title: "Git",
        href: "https://www.hotjar.com/blog/retention-metrics/",
      },

      {
        iconType: "article",
        title: "GitHub",
        href: "https://www.youtube.com/watch?v=28ap1Md-XmY",
      },
    ],
  },
  "Product Pivot": {
    title: "Product Pivot",
    description:
      "Product pivot refers to the process of significantly changing the focus or direction of a product, often in response to market demand or changing business circumstances. This can involve altering the target customer, business model, features, or positioning of the product. Product pivots can be strategic moves that allow companies to pivot their product towards a new, potentially more profitable market or audience. It can also involve making adjustments to a product in response to customer feedback or changing market conditions. Ultimately, the goal of a product pivot is to improve the product's chances of success in the market.",
    tools: [
      {
        iconType: "video",
        title: "Dalton Caldwell - All About Pivoting",
        href: "https://www.youtube.com/watch?v=8pNxKX1SUGE",
      },
      {
        iconType: "article",
        title: "14 Famous Business Pivots",
        href: "https://www.forbes.com/sites/jasonnazar/2013/10/08/14-famous-business-pivots/?sh=241b6e785797",
      },
    ],
  },
  "Business Metrics": {
    title: "Business Metrics",
    description:
      "Business metrics are quantifiable measures that organizations use to track and assess the success of their operations. These metrics can be financial, such as revenue and profitability, or they can be non-financial, such as customer satisfaction and employee engagement. Businesses use metrics to set goals, assess performance, and make data-driven decisions to improve their operations and achieve their objectives. ",
    tools: [
      {
        iconType: "video",
        title: "How to Set KPIs and Goals (SUS 2019)",
        href: "https://www.ycombinator.com/library/6j-how-to-set-kpis-and-goals-sus-2019",
      },
      {
        iconType: "video",
        title: "Michael Seibel - How to set your KPI?",
        href: "https://www.youtube.com/watch?v=kJIBAp48Pv8",
      },

      {
        iconType: "video",
        title: "Kevin Hale - How to Improve Conversion Rates",
        href: "https://www.youtube.com/watch?v=PGqX9fpweyc",
      },
      {
        iconType: "article",
        title: "Top 10 Product Metrics",
        href: "https://chartio.com/learn/product-analytics/top-product-metrics/",
      },
    ],
  },
  "Design Metrics": {
    title: "Design Metrics",
    description:
      "Design metrics are measurements or indicators used to assess the performance or effectiveness of a design. They can be used to evaluate a wide range of design elements, including user experience, usability, aesthetics, and functionality. Design metrics are often used by designers and developers to identify areas for improvement and to track progress over time. They can be collected through a variety of methods, such as user testing, analytics, or surveys, and are typically used in conjunction with other design tools and techniques to help inform the design process and ensure that a product or service meets the needs and expectations of its users.",
    tools: [
      {
        iconType: "article",
        title: "Choosing the Right Metrics for User Experience",
        href: "https://www.uxmatters.com/mt/archives/2014/06/choosing-the-right-metrics-for-user-experience.php",
      },
      {
        iconType: "article",
        title: "A Quick Guide to UX Metrics",
        href: "https://uxplanet.org/a-quick-guide-to-ux-metrics-d271a937149a",
      },
      {
        iconType: "article",
        title: "How to estimate the ROI of design work",
        href: "https://www.invisionapp.com/inside-design/estimate-roi-design-work/",
      },

      {
        iconType: "video",
        title: "The HEART Framework",
        href: "https://www.youtube.com/watch?v=YugESrDVHuo",
      },
    ],
  },
};
