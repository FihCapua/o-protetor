import { useState } from 'react';
import { EmergencyButtonContainer, StyledEmergencyButton } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { TextComponent } from '../Typography';
import { getGeolocationErrorMessage } from '@/helpers/getGeolocationErrorMessage';

export const EmergencyButton = () => {
    const [loading, setLoading] = useState(false);

    const handleEmergencyClick = () => {
        if (!navigator.geolocation) {
          alert('Geolocalização não é suportada no seu navegador.');
          return;
        }
    
        setLoading(true);
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
      };
    
      const handleSuccess = (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        alert(`Localização enviada com sucesso para seus contatos! Latitude: ${latitude}, Longitude: ${longitude}`);
        setLoading(false);
      };
    
      const handleError = (error: GeolocationPositionError) => {
        const errorMessage = getGeolocationErrorMessage(error);
        alert(errorMessage);
        setLoading(false);
      };

    return (
        <EmergencyButtonContainer>
          <StyledEmergencyButton onClick={handleEmergencyClick} aria-label="Botão de Emergência" disabled={loading}>
            <FontAwesomeIcon icon={faExclamationTriangle} size="1x" aria-hidden="true" />
            <TextComponent as="span">{loading ? 'Carregando...' : 'Emergência'}</TextComponent>
          </StyledEmergencyButton>
        </EmergencyButtonContainer>
      );
}