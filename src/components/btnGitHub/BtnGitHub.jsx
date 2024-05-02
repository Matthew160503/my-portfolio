import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const btnGitHub = ({link}) => {
    return (
        <a href={link} target="_blank" rel='noreferrer' className="btn-outline">
            <FontAwesomeIcon icon={faGithub} className='svg-icon'/>
                GitHub repo
        </a>
    );
}
 
export default btnGitHub;