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
            <div className={styles.title}>Software Engineer & Tech Writer</div>
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
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="facebook"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div className={styles.profileButtons}>
              <a href="/newsletter" className={styles.profileButton}>
                <i className="fa-solid fa-envelope-open-text"></i> Subscribe to
                Newsletter
              </a>
              <a
                href="https://youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profileButton}
              >
                <i className="fa-brands fa-youtube"></i> YouTube Channel
              </a>
            </div>
          </div>

          <div className={styles.contentSection}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <p>
                Welcome to Learn & Code Weekly! I'm a passionate software
                engineer with expertise in web development, distributed systems,
                and cloud architecture. Through this platform, I share my
                journey in tech, insights from projects I work on, and lessons I
                learn along the way.
              </p>
              <p>
                With over [X] years of experience in the industry, I've worked
                on various projects from startup MVPs to enterprise-level
                applications. I'm particularly interested in [your specific
                interests], and I love exploring new technologies that push the
                boundaries of what's possible.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Expertise</h2>
              <div className={styles.expertiseGrid}>
                <div className={styles.expertiseItem}>
                  <h3>Frontend Development</h3>
                  <p>React, Next.js, TypeScript</p>
                </div>
                <div className={styles.expertiseItem}>
                  <h3>Backend Development</h3>
                  <p>Node.js, Express, Java, Spring Boot</p>
                </div>
                <div className={styles.expertiseItem}>
                  <h3>Cloud & DevOps</h3>
                  <p>AWS, Docker, CI/CD</p>
                </div>
                <div className={styles.expertiseItem}>
                  <h3>Technical Writing</h3>
                  <p>Tutorials, Documentation, Newsletters</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Newsletter Purpose</h2>
              <p>Through Learn & Code Weekly, I aim to share:</p>
              <ul className={styles.purposeList}>
                <li>
                  Practical coding tutorials and solutions to common problems
                </li>
                <li>Insights into software architecture and design patterns</li>
                <li>Reviews of tools and technologies I find useful</li>
                <li>
                  Career advice and lessons learned from my professional journey
                </li>
                <li>
                  Interesting facts from the world of technology and beyond
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
