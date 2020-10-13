import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faVideo, faComment } from '@fortawesome/free-solid-svg-icons';

export default function EditHeader(): JSX.Element {
  return (
    <>
      <button>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <img src="logo.png" alt="MiroTalk Logo" />
      <div>
        <button>
          <FontAwesomeIcon icon={faVideo} />
        </button>
        <button>
          <FontAwesomeIcon icon={faComment} />
        </button>
      </div>
    </>
  );
}
