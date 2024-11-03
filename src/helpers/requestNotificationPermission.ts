export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Permissão de notificação concedida.');
      } else {
        console.error('Permissão de notificação negada.');
      }
    } catch (error) {
      console.error('Erro ao solicitar permissão de notificação:', error);
    }
};