import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { TextComponent } from '../Typography';
import { getGeolocationErrorMessage } from '@/helpers/getGeolocationErrorMessage';
import { getContacts } from '@/services/contactService';
import { notifyContacts } from '@/helpers/notifyContacts';
import { ContactProps } from '@/types';
import { getAddressFromCoordinates } from '@/helpers/getAddressFromCoordinates';
import { EmergencyButtonContainer, StyledEmergencyButton } from './style';

export const EmergencyButton = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const showAlert = (message: string) => alert(message);

      const handleEmergencyClick = () => {
          if (!navigator.geolocation) {
            showAlert('Geolocalização não é suportada no seu navegador.');
            return;
        }

        setLoading(true);
        navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationError);
      };

      const onGeolocationSuccess = async (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;

          try {
              const contacts = await getContacts();
              if (contacts.length === 0) {
                  showAlert('Nenhum contato de emergência foi encontrado. Por favor, adicione contatos antes de enviar a localização.');
                  return;
              }

              const address = await getAddressFromCoordinates(latitude, longitude);
              const locationInfo = address || `Latitude: ${latitude}, Longitude: ${longitude}`;

              await sendLocationToContacts(contacts, locationInfo);
          } catch (error) {
              console.error("Erro ao buscar contatos:", error);
              setError('Erro ao buscar contatos. Por favor, tente novamente.');
          } finally {
              setLoading(false);
          }
      };

      const sendLocationToContacts = async (contacts: ContactProps[], locationInfo: string) => {
        const results = await notifyContacts(contacts, locationInfo);
        results.forEach(({ success, contact, error }) => {
            if (success) {
                console.log(`E-mail enviado para: ${contact}`);
            } else {
                console.error(`Erro ao enviar e-mail para ${contact}:`, error);
            }
        });

          showAlert(`Localização enviada com sucesso para seus contatos! Endereço: ${locationInfo}`);
      };
    
      const onGeolocationError = (error: GeolocationPositionError) => {
        const errorMessage = getGeolocationErrorMessage(error);
        showAlert(errorMessage);
        setLoading(false);
    };

    return (
      <EmergencyButtonContainer>
        <StyledEmergencyButton onClick={handleEmergencyClick} aria-label="Botão de Emergência" disabled={loading}>
            <FontAwesomeIcon icon={faExclamationTriangle} size="1x" aria-hidden="true" />
            <TextComponent as="span">{loading ? 'Carregando...' : 'Emergência'}</TextComponent>
        </StyledEmergencyButton>
          {error && <p style={{ color: 'red' }}>{error}</p>}
      </EmergencyButtonContainer>
      );
}