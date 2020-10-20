import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faVideo, faComment } from '@fortawesome/free-solid-svg-icons';

export default function EditHeader(): JSX.Element {
  return (
    <>
      <button>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div>
        <img src="logo.png" alt="MiroTalk Logo" />
        <span>MiroTalk</span>
      </div>
      <div>
        <button>
          <FontAwesomeIcon icon={faVideo} />
          <span>녹화</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faComment} />
          <span>채팅</span>
        </button>
      </div>
    </>
  );
}
