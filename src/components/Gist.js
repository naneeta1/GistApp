import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile ,faCodeFork,faStar,faMessage,faCode} from "@fortawesome/free-solid-svg-icons";
import './Gist.css';
import PropTypes from 'prop-types';



const Gist = React.memo(({ gist }) => {
  const {
    owner,
    description,
    files,
    forks,
    comments,
    created_at,
    updated_at,
  } = gist;

  // Function to format the date as "month/day/year"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  Gist.propTypes = {
    gist: PropTypes.shape({
      owner: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string,
      files: PropTypes.objectOf(
        PropTypes.shape({
          filename: PropTypes.string.isRequired,
        })
      ).isRequired,
      forks: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
      stargazers_count: PropTypes.number.isRequired,
    }).isRequired,
  };


  return (
    <div className="gist-card">
      <div className="user-info">
        <div style={{display:'flex'}}>
        <img src={owner.avatar_url} alt="User Avatar" className="avatar" />
        <div className="username"><a href="#">{owner.login}</a></div></div>
        <div className="icons">
        <div className="icon"><a href='#'>
        <FontAwesomeIcon icon={faCode} />
        {Object.keys(files).length}
            <p> Files</p>
          </a>
          </div>
          <div className="icon">
            <a href='#'><FontAwesomeIcon icon={faCodeFork} />
            {forks}<p>Forks</p>  </a>
          </div>
          <div className="icon">
            <a href='#'><FontAwesomeIcon icon={faMessage} /><p> Comments</p></a>
          </div>
          <div className="icon">
            <a href='#'><FontAwesomeIcon icon={faStar} /> <p> Stars</p>{gist.stargazers_count}</a>
          </div>
        </div>
      </div>
      <div className="gist-details">
        <div className="dates">
          <div className="date">
            <span>Created At: {formatDate(created_at)}</span>
          </div>
          <div className="date">
            <span>Last Updated: {formatDate(updated_at)}</span>
          </div>
        </div>
        <div className="repo-name">{description}</div>
        <div className="files">
          <div className="file-list">
            {Object.values(files).map((file) => (
              <a href='#' style={{marginRight:'2px',}} key={file.filename}>
                 <FontAwesomeIcon icon={faFile} style={{color:'#0a64ff'}} /> <p> {file.filename}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Gist;
