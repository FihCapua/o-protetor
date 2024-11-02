export const requestNotificationPermission = async () => {
    if ('Notification' in window && navigator.serviceWorker) {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            console.log('Permissão de notificação concedida.');
        } else {
            console.warn('Permissão de notificação negada.');
        }
    } else {
        console.error('Notificações não são suportadas neste navegador.');
    }
}