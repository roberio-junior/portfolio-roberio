
import styles from './styles.module.css';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className={styles.container}>
      <span className={styles.eyebrow}>
        {eyebrow}
      </span>

      <h2 className={styles.title}>
        {title}
        <span className={styles.accent}>_</span>
      </h2>

      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}
    </div>
  );
}
