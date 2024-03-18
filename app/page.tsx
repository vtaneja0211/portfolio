import Image from "next/image";
import { Inter } from "next/font/google";
import { name, about, bio, avatar } from "../lib/info";

import {
  ArrowIcon,
  GitHubIcon,
  Resume,
  LinkedIN,
  Email,
  PhoneIcon,
} from "../components/icons";

const projects = [
  {
    id: 1,
    title: "Dunne Hall Website",
    description:
      "Built, deployed, and managed the dunnehall.com website to promote the culture and values of Notre Dame's Dunne Hall community.",
    imageUrl: "/dunne.jpg",
    githubLink: "https://github.com/AntonioKaram/DunneHall-Website",
    websiteLink: "https://dunnehall.com",
  },
  {
    id: 2,
    title: "Music & Happiness",
    description:
      "Tracks Spotify user trends by country and links them to the happiness index, education levels, and GDP of the country. The data gives indications of the correlation between artist, genre, and socioeconomic standards and indicators across the world, over time.",
    imageUrl: "/music.jpg",
    githubLink: "https://github.com/AntonioKaram/MusicData ",
    websiteLink: "https://music-and-happiness.vercel.app/",
  },
  {
    id: 3,
    title: "Storage Finder",
    description:
      "A tool that allows faculty, researchers, and students to identify the tools they need to store their data given different constraints such as visibility, scale, and compliance ",
    imageUrl: "/storagefinder.jpg",
    githubLink: "https://github.com/AntonioKaram/storage-finder.git",
    websiteLink: "http://storagefinder.s3-website.us-east-2.amazonaws.com/",
  },
  {
    id: 4,
    title: "Linear Shift Feedback Register Chip",
    description:
      "Proposed, designed, and tested, and synthesized an 8-bit LFSR chip in Verilog for the Google-Sponsored eFabless digital GF180nm shuttle, passing the Multi-Project Wafer and Tapeout tests.",
    imageUrl: "/lfsr.png",
    githubLink: "https://github.com/AntonioKaram/Final-Project-LFSR",
    websiteLink: "https://platform.efabless.com/shuttles/GFMPW-1",
  },
  {
    id: 5,
    title: "Multithreaded HTTP Client/Server",
    description:
      "Designed and tested a client that makes parallel HTTP requests and a Pub/Sub Server with channels and conversations in Python, Bash, and C/C++ using networking, system calls, and sockets",
    imageUrl: "/cliserv.png",
    githubLink: "",
    websiteLink: "",
  },
  {
    id: 6,
    title: "Operating Systems Fundamentals",
    description:
      "Designed and tested a Process Scheduler (FIFO, Round Robin), Heap Management (malloc, calloc), and File System (Unix) in C/C++ using system calls, paging, and multithreading",
    imageUrl: "/fs.gif",
    githubLink: "",
    websiteLink: "",
  },

  // Add more projects as needed
];

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section id="home">
        <h1 className="font-bold text-3xl font-serif">{name}</h1>
        <p className="md:text-justify my-5 max-w-[700px] text-neutral-800 dark:text-neutral-200">
          {about()}
        </p>
        <div className="flex max-w-[700px] flex-col md:flex-row items-center justify-center md:justify-between my-8">
          <Image
            alt={name}
            className="rounded-full sm:ml-5"
            src={avatar}
            placeholder="blur"
            width={100}
            style={{
              width: "auto",
              height: "auto",
            }}
            priority
          />

          <div className="mt-8 md:mt-0 ml-0 md:ml-6 grid grid-cols-9 gap-2 place-items-center md:flex-row md:gap-2 transition-all justify-between items-center auto-cols-max">
            <a
              href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg"
                width="36"
                height="36"
                alt="C"
              />
            </a>

            <a
              href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg"
                width="36"
                height="36"
                alt="C++"
              />
            </a>

            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
                width="36"
                height="36"
                alt="Git"
              />
            </a>

            <a href="https://www.python.org/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
                width="36"
                height="36"
                alt="Python"
              />
            </a>

            <a href="https://dart.dev/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart-colored.svg"
                width="36"
                height="36"
                alt="Dart"
              />
            </a>

            <a
              href="https://www.ruby-lang.org/en/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ruby-colored.svg"
                width="36"
                height="36"
                alt="Ruby"
              />
            </a>

            <a
              href="https://www.oracle.com/java/"
              target="_blank"
              rel="noreferrer"
              className="pb-2"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg"
                width="45"
                height="45"
                alt="Java"
              />
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                width="36"
                height="36"
                alt="HTML5"
              />
            </a>

            <a
              href="https://www.w3.org/TR/CSS/#css"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                width="36"
                height="36"
                alt="CSS3"
              />
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                width="36"
                height="36"
                alt="JavaScript"
              />
            </a>

            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                width="36"
                height="36"
                alt="TypeScript"
              />
            </a>

            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noreferrer"
              className="flex p-0.5 dark:rounded-full no-underline items-center text-neutral-800 dark:bg-neutral-100 "
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
                width="36"
                height="36"
                alt="NextJs"
              />
            </a>

            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
              className="pd-2"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                width="36"
                height="36"
                alt="React"
              />
            </a>

            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                width="36"
                height="36"
                alt="Bootstrap"
              />
            </a>

            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                width="36"
                height="36"
                alt="TailwindCSS"
              />
            </a>

            <a href="https://www.php.net/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
                width="50"
                height="50"
                alt="PHP"
              />
            </a>

            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
                width="36"
                height="36"
                alt="Firebase"
              />
            </a>

            <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="36"
                height="36"
              >
                <path
                  className="fill-[#252f3e] dark:fill-[#FFFFFF]"
                  d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"
                />
                <path
                  className="fill-[#f90]"
                  d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"
                />
              </svg>
            </a>

            <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg"
                width="40"
                height="40"
                alt="Docker"
              />
            </a>

            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
                width="36"
                height="36"
                alt="MySQL"
              />
            </a>

            <a
              href="https://www.gnu.org/software/bash/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg"
                width="36"
                height="36"
                alt="Bash Shell"
              />
            </a>

            <a
              href="https://www.ibm.com/docs/en/zos/2.1.0?topic=introduction-assembler-language"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://svgshare.com/i/uRr.svg"
                width="36"
                height="36"
                alt="Assembly"
              />
            </a>

            <a href="https://www.verilog.com/" target="_blank" rel="noreferrer">
              <img
                src="https://svgshare.com/i/uU1.svg"
                width="36"
                height="36"
                alt="Verilog"
                className="dark:fill-[#c28c3a] fill-black"
              />
            </a>

            <a
              href="https://www.hackthebox.com/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="dark:fill-[#9fef00] fill-black"
                width="36"
                height="100%"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m3.514 6.61c-.317.179-.514.519-.514.887v8.95c0 .37.197.708.514.887 1.597.901 6.456 3.639 8.005 4.512.152.085.319.128.487.128.164 0 .328-.041.477-.123 1.549-.855 6.39-3.523 7.994-4.408.323-.177.523-.519.523-.891v-9.055c0-.368-.197-.708-.515-.887-1.595-.899-6.444-3.632-7.999-4.508-.151-.085-.319-.128-.486-.128-.168 0-.335.043-.486.128-1.555.876-6.405 3.609-8 4.508m15.986 2.115v7.525l-6.75 3.722v-7.578zm-15 7.425v-7.458l6.75 3.75v7.511zm.736-8.769 6.764-3.813 6.801 3.834-6.801 3.716z" />
              </svg>
            </a>

            <a href="https://tableau.com/" target="_blank" rel="noreferrer">
              <img
                src="https://svgshare.com/i/uRK.svg"
                width="36"
                height="36"
                alt="Tableau"
              />
            </a>

            <a
              href="https://www.adobe.com/creativecloud.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Creative_Cloud.svg"
                height="36"
                width="36"
                alt="Creative Cloud"
              />
            </a>

            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                width="36"
                height="36"
                alt="Figma"
              />
            </a>
          </div>
        </div>

        <p className="md:text-justify my-5 max-w-[700px] text-neutral-800 dark:text-neutral-200">
          {bio()}
        </p>

        <div className="flex flex-col gap-2 md:flex-row md:gap-2 max-w-[700px]">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/antonio-karam/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedIN />
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowIcon />
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/AntonioKaram"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="/Antonio-Karam-Resume.pdf"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            download
          >
            <div className="flex items-center">
              <Resume />
              <div className="ml-3">Resume</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
        <br />
      </section>

      <section id="about">
        <div className="hidden sm:block">
          <br />
          <br />
          <br />
        </div>
        <br />
        <h1 className="font-bold text-3xl font-serif">About Me</h1>

        <div className="prose prose-neutral md:text-justify max-w-[700px] dark:prose-invert text-neutral-800 dark:text-neutral-200">
          <h4 className="text-l">
            {" "}
            "Driven and skilled computer engineering student interested in
            software engineering and cyber security."
          </h4>
          <p>
            My name is Antonio Karam, and I am currently in my junior year
            studying computer engineering at the <b>University of Notre Dame</b>
            .
          </p>
          <p>
            Alongside that, I am pursuing a concentration in{" "}
            <b>cyber security</b>, and a minor in{" "}
            <b>engineering corporate practice</b>.
          </p>
          <hr />

          <p>
            My curiosity was initially drawn to the puzzle-like nature of
            security problems, which led me to major in Computer Engineering in
            an effort to dissect both the hardware and software sides of
            computer systems and expose their vulnerabilities. The more I
            learned about cybersecurity, the more I realized its criticality in
            safeguarding individuals and organizations and its ever-growing
            prominence in our tech-driven world, especially within software
            development.{" "}
          </p>
          <p>
            Software engineering complements that passion but adds a layer of
            creativity and ingenuity that fuels my drive to develop programs and
            systems that help serve people all over the world. I strive to build
            solutions that are not only resource-efficient but also sustainable,
            scalable, and adaptable. Achieving this goal requires a relentless
            passion for learning about available and emerging technologies - a
            skill I am proud to have. I am fascinated by the ever-evolving
            landscape of tech innovation, and it is this fascination that
            motivates me to delve deeper into the world of technology,
            continuously seeking out new knowledge and skills to ensure I stay
            at the forefront of this dynamic industry.{" "}
          </p>
          <p>
            Throughout my undergraduate career, I have taken on various leadership
            positions, from acting as the Vice President of my university's
            Engineers Without Borders chapter to leading development teams at CS
            For Good.
          </p>
          <p>
            I expect to graduate in May 2025, and I am currently interested in
            an internship position for the summer of 2024. Feel free to check
            out my projects and reach out to me!
          </p>
        </div>
      </section>

      <section id="projects">
        <div className=" hidden sm:block">
        <br />
        <br />
        </div>
        <br />
        <br />
        
        <h1 className="font-bold text-3xl font-serif">Projects</h1> <br />
        <hr />
        <br />
        <div className="grid grid-cols-1 gap-8">
          {projects.map(function (project) {
            if (project.id % 2 == 0) {
              return (
                <div
                  key={project.id}
                  className="bg-neutral-100 dark:bg-[#121212] h-auto flex flex-col sm:flex-row rounded-lg shadow-sm hover:shadow-xl p-6 w-full border border-neutral-200 dark:border-neutral-800 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 transition-all justify-between overflow-hidden"
                >
                  <div className="flex-1 hidden sm:block">
                    <div className="max-h-72 overflow-hidden rounded-lg">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className={(project.id < 4) ? "w-full h-full ease-in-out duration-[6s] hover:-translate-y-3/4" : "h-72 rounded-lg" }
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col h-full max-h-72 text-center p-3">
                      <h3 className="text-xl font-bold mb-2 ">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-neutral-100 mb-4">
                        {project.description}
                      </p>

                      <div className="flex space-x-2 justify-center">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          {(project.githubLink != "") ? <GitHubIcon /> : ""}
                        </a>
                        <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                        {(project.githubLink != "") ?  
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 5 48 48"
                            width="30"
                            height="30"
                            className="dark:fill-neutral-100"
                          >
                            <path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z" />
                          </svg> : ""}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={project.id}
                  className="bg-white h-auto flex flex-col sm:flex-row dark:bg-[#121212] rounded-lg shadow-sm hover:shadow-xl p-6 w-full border border-neutral-200 dark:border-neutral-800 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 transition-all justify-between overflow-hidden"
                >
                  <div className="flex-1">
                    <div className="flex flex-col max-h-72 text-center p-3">
                      <h3 className="text-xl font-bold mb-2 ">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-neutral-100 mb-4">
                        {project.description}
                      </p>

                      <div className="flex space-x-2 justify-center">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        {(project.githubLink != "") ? <GitHubIcon /> : ""}
                        </a>
                        <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                        {(project.githubLink != "") ? 
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 5 48 48"
                            width="30"
                            height="30"
                            className="dark:fill-neutral-100"
                          >
                            <path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z" />
                          </svg> : ""}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 hidden sm:block">
                    <div className="max-h-72 overflow-hidden rounded-lg">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className={(project.id < 4) ? "w-full h-full ease-in-out duration-[6s] hover:-translate-y-3/4" : "object-none h-72 rounded-lg" }
                      />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>

      <section id="contact" className="min-h-screen">
        <div className="hidden sm:block">
          <br />
          <br />
        </div>
        <br />
        <br />
        <h1 className="font-bold text-3xl font-serif">Contact Me</h1>
        <br />
        <hr />
        <div className="hidden sm:block">
          <br />
        </div>
        <div className="mt-3 flex flex-col sm:flex-row">
          <div className="flex-1 mt-8 sm:mt-0 sm:ml-8">
            <div className="dark:bg-neutral-100 bg-[#121212] overflow-hidden shadow-sm rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-bold text-neutral-100 dark:text-[#121212]">
                  Contact Information
                </h3>
                <div className="mt-4">
                  <p className="text-base leading-6 text-neutral-100 dark:text-gray-500">
                    Feel free to reach out to me using the contact information
                    below.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm leading-5 font-bold text-neutral-100 dark:text-gray-900">
                      Email
                    </p>
                    <p className="mt-1 text-sm leading-5 text-neutral-100 dark:text-gray-500">
                      antonio.c.karam@gmail.com
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm leading-5 font-bold text-neutral-100 dark:text-gray-900">
                      Phone
                    </p>
                    <p className="mt-1 text-sm leading-5 text-neutral-100 dark:text-gray-500">
                      +1 (574) 621-1852
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 mt-8 sm:mt-0 sm:ml-8">
            <div className="flex flex-col gap-2 md:gap-2 max-w-[700px] h-full">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/antonio-karam/"
                className="flex h-full w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
              >
                <div className="flex items-center">
                  <LinkedIN />
                  <div className="ml-3">LinkedIn</div>
                </div>
                <ArrowIcon />
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="tel:+15746211852"
                className="flex h-full w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
              >
                <div className="flex items-center">
                  <PhoneIcon />
                  <div className="ml-3">Phone</div>
                </div>
                <ArrowIcon />
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="mailto:antonio.c.karam@gmail.com"
                className="flex h-full w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
                download
              >
                <div className="flex items-center">
                  <Email />
                  <div className="ml-3">Email</div>
                </div>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed inset-x-0 bottom-0"> </div>
    </main>
  );
}
