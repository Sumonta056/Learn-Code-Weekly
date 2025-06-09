import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
  linkText?: string;
  linkUrl?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Weekly Coding Insights",
    icon: "code-bracket",
    description: (
      <>
        Get practical coding tutorials, industry trends, and programming tips
        delivered directly to your inbox every week.
      </>
    ),
    linkText: "Subscribe Now",
    linkUrl:
      "https://www.linkedin.com/newsletters/learn-code-weekly-7309186050084544512/",
  },
  {
    title: "Tech Tutorials",
    icon: "document-text",
    description: (
      <>
        Explore detailed tutorials on web development, distributed systems, and
        cloud architecture from real-world experience.
      </>
    ),
    linkText: "Browse Articles",
    linkUrl: "/blog",
  },
  {
    title: "Talk wth Us",
    icon: "users",
    description: (
      <>
        Share your thoughts, ask questions & keep learning. Have any questions
        or suggestions? Feel free to reach out to us anytime!
      </>
    ),
    linkText: "Message Us",
    linkUrl: "/about",
  },
];

const FeatureIcons = {
  "code-bracket": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles.featureSvgIcon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  ),
  "document-text": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles.featureSvgIcon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  ),
  users: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles.featureSvgIcon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  ),
};

function Feature({ title, icon, description, linkText, linkUrl }: FeatureItem) {
  return (
    <div className={clsx("col col--4", styles.featureColumn)}>
      <div className={styles.featureCard}>
        <div className={styles.featureCardContent}>
          <div className={styles.featureIconWrapper}>
            <div className={styles.featureIcon}>
              {FeatureIcons[icon] || <i className={icon}></i>}
            </div>
          </div>

          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>

          <p className={styles.featureDescription}>{description}</p>

          {linkText && linkUrl && (
            <div className={styles.featureLinkWrapper}>
              <Link className={styles.featureLink} to={linkUrl}>
                <span>{linkText}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={styles.featureLinkIcon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <div className={styles.sectionBadge}>Why Subscribe Us?</div>
          <Heading as="h2">Why Learn & Code Weekly?</Heading>
          <p className={styles.featuresSubheading}>
            Join our community to enhance your coding skills with weekly
            insights, tutorials from industry experts
          </p>
        </div>

        <div className={styles.featuresContainer}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
