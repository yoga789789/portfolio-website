import pythonLogo from "./assets/logos/python.svg";
import tableauLogo from "./assets/logos/tableau.svg";
import powerbiLogo from "./assets/logos/powerbi.svg";
import mysqlLogo from "./assets/logos/mysql.svg";
import pandasLogo from "./assets/logos/pandas.svg";
import sklearnLogo from "./assets/logos/scikitlearn.svg";
import gitLogo from "./assets/logos/git.svg";
import githubLogo from "./assets/logos/github.svg";
import excelLogo from "./assets/logos/excel.svg";
import linkedinLogo from "./assets/logos/linkedin.svg";
import { useEffect, useState } from "react";
import profile from "./assets/profile.jpg";
import bikeImg from "./assets/bike.jpg";
import lrfmImg from "./assets/lrfm.jpg";
import churnImg from "./assets/churn.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";


function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    { name: "Python", logo: pythonLogo },
    { name: "SQL / MySQL", logo: mysqlLogo },      // ← digabung jadi satu
    { name: "Machine Learning", logo: sklearnLogo },
    { name: "Pandas", logo: pandasLogo },
    { name: "Tableau", logo: tableauLogo },
    { name: "Power BI", logo: powerbiLogo },
    { name: "Excel", logo: excelLogo },
    { name: "Git", logo: gitLogo },
    { name: "GitHub", logo: githubLogo },
  ];

  const projects = [
    {
      title: "Bike Sharing Demand Prediction",
      subtitle: "Machine Learning Regression",
      image: bikeImg,
      tag: "Machine Learning",                     
      problem: "Predict bicycle rental demand using weather and historical usage data.",
      dataset: "17,379 Records",
      result: "R² Score : 0.94",
      tech: "Python • Pandas • Scikit-Learn",
      link: "https://github.com/yoga789789/Bike-Sharing-Demand-Prediction-Using-Machine-Learning",
      demo: "https://public.tableau.com/app/profile/yoga.brahma/viz/bike-sharing_17682934255730/Dashboard1",
    },
    {
      title: "Customer Segmentation Analysis",
      subtitle: "LRFM Segmentation",
      image: lrfmImg,
      tag: "Analytics",                         
      problem: "Segment customers based on purchasing behavior.",
      dataset: "2,240 Customers",
      result: "Interactive Tableau Dashboard",
      tech: "Python • Tableau • LRFM",
      link: "https://github.com/yoga789789/Customer-Segmentation-Analysis-using-LRFM-Marketing-Campaign-Data",
      demo: "https://public.tableau.com/authoring/SupermarketCustomerSegmentation_17823756674590/Dashboard1#1",
    },
    {
      title: "Customer Churn Prediction",
      subtitle: "Classification Model",
      image: churnImg,
      tag: "Machine Learning",                    
      problem: "Predict customers likely to churn using machine learning.",
      dataset: "E-Commerce Dataset",
      result: "XGBoost Classification",
      tech: "Python • XGBoost",
      link: "https://github.com/yoga789789/E-Commerce-Customer-Churn-Prediction",
      demo: "https://public.tableau.com/authoring/SupermarketCustomerSegmentation_17823756674590/Dashboard1#1",
    },
  ];

 
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Machine Learning", "Analytics"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tag === activeFilter);


  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* ── NAVBAR ────────────────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-xl shadow-lg border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-cyan-400 text-2xl font-bold">YB</h1>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`transition-all duration-300 ${
                  activeSection === href.slice(1)
                    ? "text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

     
          <button
            className="md:hidden text-slate-300 hover:text-cyan-400 transition"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

  
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={handleNavClick}
                    className={`text-lg transition ${
                      activeSection === href.slice(1)
                        ? "text-cyan-400 font-semibold"
                        : "text-slate-300"
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <motion.section
        id="hero"
        className="min-h-screen flex items-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 font-semibold tracking-widest">
              DATA ANALYST PORTFOLIO
            </p>

            <h1 className="text-6xl md:text-7xl font-bold mt-4">
              Yoga Brahma
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 mt-6">
              Turning Data Into Actionable Business Insights
            </h2>

            <p className="mt-8 text-slate-400 leading-8">
              Data Analyst and Data Science Enthusiast specializing in Python,
              SQL, Machine Learning, Dashboard Development, and Business
              Intelligence.
            </p>

            {/* FIX 5: Stat "1+ Years" diganti dengan angka yang lebih impresif */}
            <div className="flex gap-6 mt-10">
              <div>
                <h3 className="text-4xl font-bold text-cyan-400">3+</h3>
                <p className="text-slate-400">Projects</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
                <p className="text-slate-400">Skills</p>
              </div>
              {/* ↓ diganti dari "1+ Years Exp." */}
              <div>
                <h3 className="text-4xl font-bold text-cyan-400">17K+</h3>
                <p className="text-slate-400">Records Analyzed</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-medium transition"
              >
                View Projects
              </a>
              <a
                href="/Yoga_Brahma_CV.pdf"
                target="_blank"
                className="border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-lg font-medium transition"
              >
                Download CV
              </a>
              <a
                href="https://github.com/yoga789789"
                target="_blank"
                className="border border-slate-600 hover:border-cyan-500 px-6 py-3 rounded-lg font-medium transition"
              >
                GitHub
              </a>
            </div>

            <p className="mt-6 text-cyan-400 font-medium">
              Open to Data Analyst & Business Intelligence Opportunities
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={profile}
              alt="Yoga Brahma"
              className="w-80 h-80 rounded-full object-cover border-4 border-cyan-500 shadow-[0_0_40px_rgba(34,211,238,0.4)]"
            />
          </div>
        </div>
      </motion.section>


      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-cyan-400 mb-8"
        >
          About Me
        </motion.h2>

        <div className="space-y-6 text-lg text-slate-300 leading-9">
          <p>
            I am a data-driven professional with a strong passion for Data
            Analytics, Business Intelligence, and Machine Learning.
          </p>
          <p>
            Through my professional experience and academic journey in MBA
            studies at Institut Teknologi Bandung and Data Science & Machine
            Learning at Purwadhika, I have developed expertise in data
            analysis, dashboard development, business reporting, and
            transforming raw data into actionable insights.
          </p>

          <p>
            In my current role as Corporate Secretary Officer at PT Bank Negara
            Indonesia (BNI), I actively apply data analytics — conducting
            stakeholder satisfaction surveys, building executive dashboards, and
            transforming engagement data into strategic business insights. This
            experience has deepened my drive to transition fully into a
            dedicated Data Analyst or Business Intelligence role.
          </p>
          <p>
            My goal is to bridge business strategy and data-driven decision
            making by leveraging analytics, visualization, and predictive
            modeling techniques to solve real-world business challenges.
          </p>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────────────────────── */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-cyan-400 mb-6"
        >
          Machine Learning & Analytics Portfolio
        </motion.h2>


        <div className="flex gap-3 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                activeFilter === f
                  ? "bg-cyan-500 border-cyan-500 text-white"
                  : "border-slate-700 text-slate-400 hover:border-cyan-500 hover:text-cyan-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover hover:scale-110 transition duration-500"
                  />
  
                  <span className="absolute top-3 left-3 bg-cyan-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-cyan-400 mt-2">{project.subtitle}</p>

                  <div className="space-y-4 mt-5">
                    <div>
                      <h4 className="font-semibold">Business Problem</h4>
                      <p className="text-slate-400 text-sm">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Dataset</h4>
                      <p className="text-slate-400 text-sm">{project.dataset}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Result</h4>
                      <p className="text-cyan-400 text-sm">{project.result}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Tech Stack</h4>
                      <p className="text-slate-400 text-sm">{project.tech}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-medium transition"
                    >
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-cyan-500 hover:bg-cyan-500 px-4 py-2 rounded-lg font-medium transition"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── SKILLS ────────────────────────────────────────────────────────────── */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-cyan-400 mb-10"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8, scale: 1.08 }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-14 h-14 mx-auto mb-5 object-contain"
              />
              <p className="font-medium text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────────────────────────────── */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-cyan-400 mb-10"
        >
          Experience
        </motion.h2>

        <div className="relative border-l-2 border-cyan-500 ml-5">

          {/* BNI */}
          <div className="mb-16 ml-10 relative">
            <div className="absolute -left-[52px] top-2 w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-950"></div>
            <motion.div
              className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-cyan-500 transition duration-300"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <p className="text-cyan-400 font-semibold">Aug 2024 – Present</p>
              <h3 className="text-2xl font-bold mt-2">Corporate Secretary Officer</h3>
              <p className="text-lg text-slate-400 mb-6">PT Bank Negara Indonesia (BNI)</p>
              <ul className="space-y-3 text-slate-300">
                <li>• Conduct stakeholder satisfaction surveys and analytical reporting.</li>
                <li>• Develop stakeholder mapping and engagement strategies.</li>
                <li>• Build executive dashboards and business reports.</li>
                <li>• Transform stakeholder data into actionable insights.</li>
       
                <li className="text-cyan-300 border-t border-slate-700 pt-3 mt-3">
                  ↳ Applying data analytics skills daily — bridging corporate reporting
                  with my transition toward a full-time Data Analyst role.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* SITETRAN */}
          <div className="mb-16 ml-10 relative">
            <div className="absolute -left-[52px] top-2 w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-950"></div>
            <motion.div
              className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-cyan-500 transition duration-300"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <p className="text-cyan-400 font-semibold">2023 – Present</p>
              <h3 className="text-2xl font-bold mt-2">Freelance Translator</h3>
              <p className="text-lg text-slate-400 mb-6">SiteTran</p>
              <ul className="space-y-3 text-slate-300">
                <li>• Translate and localize website content for international clients.</li>
                <li>• Ensure consistency and cultural relevance across multilingual content.</li>
              </ul>
            </motion.div>
          </div>

          {/* BOOKING */}
          <div className="ml-10 relative">
            <div className="absolute -left-[52px] top-2 w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-950"></div>
            <motion.div
              className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-cyan-500 transition duration-300"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <p className="text-cyan-400 font-semibold">2016 – 2024</p>
              <h3 className="text-2xl font-bold mt-2">Freelance Translator</h3>
              <p className="text-lg text-slate-400 mb-6">Booking.com</p>
              <ul className="space-y-3 text-slate-300">
                <li>• Translate and localize travel and hospitality content.</li>
                <li>• Maintain consistency across multilingual website content.</li>
                <li>• Improve readability and user experience for global travelers.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ─────────────────────────────────────────────────────────── */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-cyan-400 mb-10"
        >
          Education
        </motion.h2>

        <div className="space-y-6">
          {[
            {
              school: "Institut Teknologi Bandung",
              degree: "Master of Business Administration (MBA)",
              year: "2023 – 2025",
            },
            {
              school: "Purwadhika Digital Technology School",
              degree: "Data Science & Machine Learning",
              year: "2025 – 2026",
            },
            {
              school: "Universitas Pendidikan Indonesia",
              degree: "Bachelor Degree",
              year: "2009 – 2015",
            },
          ].map((edu) => (
            <motion.div
              key={edu.school}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-bold text-xl">{edu.school}</h3>
              <p className="text-cyan-400">{edu.degree}</p>
              <p className="text-slate-400">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-slate-400 mb-12">
          Interested in collaborating, discussing data analytics, or exploring
          new opportunities? Feel free to contact me.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Email */}
          <a
            href="mailto:yogabrahma2@gmail.com"
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition"
          >
            <Mail className="text-cyan-400 mb-4" size={30} />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-slate-400 mt-2">yogabrahma2@gmail.com</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yoga789789"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition"
          >
            <img src={githubLogo} alt="GitHub" className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold">GitHub</h3>
            <p className="text-slate-400 mt-2">yoga789789</p>
          </a>

      
          <a
            href="https://www.linkedin.com/in/yoga-brahma-06a07015b/"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold">LinkedIn</h3>
            <p className="text-slate-400 mt-2">Yoga Brahma</p>
          </a>

          {/* Tableau */}
          <a
            href="https://public.tableau.com/app/profile/yoga.brahma"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition"
          >
            <img src={tableauLogo} alt="Tableau" className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold">Tableau Public</h3>
            <p className="text-slate-400 mt-2">Yoga Brahma</p>
          </a>
        </div>
      </section>


      <footer className="border-t border-slate-800 mt-12 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Yoga Brahma. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
            <a
              href="https://github.com/yoga789789"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
