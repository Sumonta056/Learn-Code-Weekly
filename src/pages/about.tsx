import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./../css/about.module.css";

export default function About() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="About Me"
      description="About the author of Learn & Code Weekly"
    >
      <meta
        name="keywords"
        content="Sumonta Saha Mridul, Learn & Code Weekly, software engineer, tech writer, web development, distributed systems, cloud architecture"
      />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <main className="container margin-vert--lg">
        <div className={styles.aboutContainer}>
          <div className={styles.profileSection}>
            <div className={styles.profileImageWrapper}>
              <img
                src="/img/profile.jpeg"
                alt="Sumonta Saha Mridul"
                className={styles.profileImage}
              />
            </div>
            <h1 className={styles.name}>Sumonta Saha Mridul</h1>
            <div className={styles.title}>
              Associate Software Engineer & Newsletter Writer
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/sumonta056"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sumontasaha/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://sumonta-dev-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Portfolio"
              >
                <i className="fa-solid fa-globe"></i>
              </a>
            </div>
            <div className={styles.profileButtons}>
              <a
                href="https://www.linkedin.com/newsletters/learn-code-weekly-7309186050084544512/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profileButton}
              >
                <i className="fa-solid fa-envelope-open-text"></i> Subscribe to
                Newsletter
              </a>
              <a
                href="https://sumonta-dev-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profileButton}
              >
                <i className="fa-solid fa-user"></i> View Portfolio
              </a>
            </div>
          </div>

          <div className={styles.contentSection}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <p>
                Hi, I'm Sumonta Saha Mridul! I'm currently working as an{" "}
                <strong>Associate Software Engineer I</strong> at{" "}
                <strong>Cefalo Bangladesh Ltd</strong>. I am the writer of the
                <strong>Learn & Code</strong> Newsletter, with{" "}
                <strong>400+ weekly subscribers</strong> who join me on this
                exciting journey through the world of technology.
              </p>
              <p>
                I'm passionate about sharing knowledge on software engineering,
                internships, and interview preparation. Currently, I'm pursuing
                my Bachelor's degree in <strong>Software Engineering</strong> at
                Shahjalal University of Science and Technology{" "}
                <strong>(SUST)</strong>. Through this platform, I share
                practical insights from my professional experience, lessons
                learned from real-world projects.
              </p>
              <p>
                Whether you're a fellow developer, a student preparing for
                interviews, or someone curious about the tech industry, I hope
                you'll find valuable insights and inspiration here!
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Expertise</h2>
              <div className={styles.expertiseGrid}>
                <div className={styles.expertiseItem}>
                  <h3>Frontend Development</h3>
                  <p>React, Next.js, TypeScript, Tailwind CSS, Tanstack Query, Vanila JS</p>
                </div>
                <div className={styles.expertiseItem}>
                  <h3>Backend Development</h3>
                  <p>Node.js, Express, Nest.js, MySQL, PostgreSQL, MongoDB, Python</p>
                </div>
                <div className={styles.expertiseItem}>
                  <h3>Cloud & DevOps</h3>
                  <p>Git, Github, Docker, CI/CD</p>
                </div>
                <div className={styles.expertiseItem}>
                  <h3>Technical Writing</h3>
                  <p>Tutorials, Documentation, Newsletters</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Newsletter Purpose</h2>
              <p>
                Through Learn & Code Weekly (400+ subscribers), I aim to share:
              </p>
              <ul className={styles.purposeList}>
                <li>
                  Practical software engineering insights from industry
                  experience
                </li>
                <li>
                  Comprehensive guides for internship and interview preparation
                </li>
                <li>
                  Real-world coding tutorials and solutions to common problems
                </li>
                <li>
                  Career advice and lessons learned from my professional journey
                </li>
                <li>
                  Tips for computer science students and aspiring developers
                </li>
                <li>
                  Interesting discoveries from the world of technology and
                  beyond
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
