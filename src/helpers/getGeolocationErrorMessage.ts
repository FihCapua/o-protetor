export const getGeolocationErrorMessage = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return 'Permissão de localização negada. Por favor, habilite o acesso nas configurações do navegador.';
      case error.POSITION_UNAVAILABLE:
        return 'Localização indisponível. Verifique a conexão ou tente novamente mais tarde.';
      case error.TIMEOUT:
        return 'O tempo para obter a localização expirou. Tente novamente.';
      default:
        return 'Ocorreu um erro desconhecido ao tentar obter a localização.';
    }
};