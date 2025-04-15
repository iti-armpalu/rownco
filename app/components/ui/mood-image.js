import styles from './mood-image.module.css';

const MoodImageOverlay = ({ imageUrl, overlayOpacity = 0.5, width = '100%', height = 'auto' }) => {
  return (
    <div className={styles.moodImage} style={{ backgroundImage: `url(${imageUrl})`, width, height }}>
      <div className={styles.overlay} style={{ opacity: overlayOpacity }}></div>
    </div>
  );
};

export default MoodImageOverlay;
