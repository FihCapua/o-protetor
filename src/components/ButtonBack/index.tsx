import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { ButtonBackContainer } from "./style";
import { TextComponent } from '../Typography';

export const BackButton = () => {
    const handleBack = () => {
        window.history.back();
    };
    
    return (
        <ButtonBackContainer onClick={handleBack}>
            <div className='back-button'>
                <FontAwesomeIcon className='icon' icon={faArrowLeft} size="1x" aria-hidden="true" />
                <TextComponent as='p'>Voltar</TextComponent>
            </div>
        </ButtonBackContainer>
    );
};