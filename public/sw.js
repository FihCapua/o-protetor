self.addEventListener('push', function(event) {
    const data = event.data ? event.data.text() : 'Nova notificação';
    const options = {
        body: data  || 'Você tem um lembrete de medicação.',
        // icon: '/icon.png', // Ícone da notificação
        // badge: '/badge.png' // Ícone de badge pequeno
        actions: [
            {
                action: 'open',
                title: 'Abrir Aplicativo'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification(data.title || 'Lembrete de Medicação', options)
    );
})

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});