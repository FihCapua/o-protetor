import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { TextComponent } from '../Typography';
import { getGeolocationErrorMessage } from '@/helpers/getGeolocationErrorMessage';
import { getContacts } from '@/services/contactService';
import { useAuth } from '@/providers/AuthProvider';
import { notifyContacts } from '@/helpers/notifyContacts';
import { ContactProps } from '@/types';
import { getAddressFromCoordinates } from '@/helpers/getAddressFromCoordinates';
import { EmergencyButtonContainer, StyledEmergencyButton } from './style';

export const EmergencyButton = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { user } = useAuth();

    const showAlert = (message: string) => alert(message);

      const handleEmergencyClick = () => {
            console.log("Botão clicado!");
          if (!navigator.geolocation) {
            showAlert('Geolocalização não é suportada no seu navegador.');
            return;
        }

        setLoading(true);
        navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationError);
      };

      const onGeolocationSuccess = async (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;

        if (!user || !user.uid) {
            alert("Usuário não autenticado ou ID de usuário não encontrado.");
            return;
        }

          try {
              const contacts = await getContacts(user.uid);
              if (contacts.length === 0) {
                  showAlert('Nenhum contato de emergência foi encontrado. Por favor, adicione contatos antes de enviar a localização.');
                  return;
              }

              const address = await getAddressFromCoordinates(latitude, longitude);
              const locationInfo = address || "Endereço não encontrado";

              await sendLocationToContacts(contacts, locationInfo);
          } catch (error) {
              console.error("Erro ao buscar contatos:", error);
              setError('Erro ao buscar contatos. Por favor, tente novamente.');
          } finally {
              setLoading(false);
          }
      };

      const sendLocationToContacts = async (contacts: ContactProps[], locationInfo: string) => {
        const senderName: string = user?.displayName || '';
        const senderEmail: string = user?.email || '';
        
        
        const results = await notifyContacts(contacts, locationInfo, senderName, senderEmail);
        results.forEach(({ success, contact, error }) => {
            if (success) {
                console.log(`Informações enviadas para: ${contact}`);
            } else {
                console.error(`Erro ao enviar informações para ${contact}:`, error);
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