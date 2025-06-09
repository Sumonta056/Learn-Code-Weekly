import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./../css/donate.module.css";

export default function Donate() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Support Learn & Code Weekly"
      description="Support the Learn & Code Weekly newsletter through donations"
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <main className="container margin-vert--lg">
        <div className={styles.donateContainer}>
          <div className={styles.donateHero}>
            <h1>Support This Project</h1>
            <p>Help keep Learn & Code Weekly running and ad-free</p>
          </div>

          <div className={styles.donateContent}>
            <div className={styles.donateOptions}>
              <div className={styles.donateCard}>
                <div className={styles.cardHeader}>
                  <h2>Choose Your Donation Method</h2>
                  <img
                    src="/img/icon.jpg"
                    alt="Support icon"
                    className={styles.donateIcon}
                  />
                </div>

                <div className={styles.donationLinks}>
                  <a
                    href="https://forms.gle/osWQmMzD166o2LdS7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.donationButton}
                  >
                    <i className="fa-solid fa-money-bill-transfer"></i>
                    Donate via bKash / Rocket
                  </a>

                  <a
                    href="https://www.buymeacoffee.com/sumontasahi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.donationButton}
                  >
                    <i className="fa-solid fa-book"></i>
                    Buy me a book
                  </a>
                </div>

                <div className={styles.donationNote}>
                  <p>
                    <i className="fa-solid fa-heart"></i> Your support helps
                    keep this resource free for everyone
                  </p>
                </div>

                <div className={styles.testimonials}>
                  <div className={styles.testimonial}>
                    <div className={styles.testimonialContent}>
                      <p>
                        "The weekly newsletter has been incredibly valuable for
                        my learning journey. Happy to support!"
                      </p>
                    </div>
                    <div className={styles.testimonialAuthor}>
                      - Alex K., Software Developer
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.donateInfo}>
              <div className={styles.infoCard}>
                <h2>Why Support?</h2>
                <ul className={styles.supportBenefitsList}>
                  <li>
                    <i className="fa-solid fa-check-circle"></i>
                    <span>Keep content free and accessible for everyone</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check-circle"></i>
                    <span>
                      Support development of new tutorials and resources
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check-circle"></i>
                    <span>Help maintain the infrastructure costs</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check-circle"></i>
                    <span>Enable more time for creating quality content</span>
                  </li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h2>Where Your Support Goes</h2>
                <div className={styles.usageBreakdown}>
                  <div className={styles.usageItem}>
                    <div className={styles.usageLabel}>
                      <span
                        className={styles.usageDot}
                        style={{
                          backgroundColor: "var(--ifm-color-primary)",
                        }}
                      ></span>
                      <span>Content Creation (60%)</span>
                    </div>
                    <div className={styles.usageBar}>
                      <div
                        className={styles.usageFill}
                        style={{
                          width: "60%",
                          backgroundColor: "var(--ifm-color-primary)",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className={styles.usageItem}>
                    <div className={styles.usageLabel}>
                      <span
                        className={styles.usageDot}
                        style={{
                          backgroundColor: "var(--ifm-color-success)",
                        }}
                      ></span>
                      <span>Hosting & Tools (25%)</span>
                    </div>
                    <div className={styles.usageBar}>
                      <div
                        className={styles.usageFill}
                        style={{
                          width: "25%",
                          backgroundColor: "var(--ifm-color-success)",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className={styles.usageItem}>
                    <div className={styles.usageLabel}>
                      <span
                        className={styles.usageDot}
                        style={{
                          backgroundColor: "var(--ifm-color-warning)",
                        }}
                      ></span>
                      <span>Community Projects (15%)</span>
                    </div>
                    <div className={styles.usageBar}>
                      <div
                        className={styles.usageFill}
                        style={{
                          width: "15%",
                          backgroundColor: "var(--ifm-color-warning)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
