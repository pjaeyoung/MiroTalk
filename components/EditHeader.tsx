import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faVideo, faComment } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/header.module.scss';

export default function EditHeader(): JSX.Element {
  return (
    <>
      <button className={styles.btnMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={styles.logoWrapper}>
        <img className={styles.logoImg} src="logo.png" alt="MiroTalk Logo" />
        <span className={styles.logoText}>MiroTalk</span>
      </div>
      <div>
        <button className={styles.btnVideo}>
          <FontAwesomeIcon icon={faVideo} />
          <span>녹화</span>
        </button>
        <button className={styles.btnChat}>
          <FontAwesomeIcon icon={faComment} />
          <span>채팅</span>
        </button>
      </div>
    </>
  );
}
