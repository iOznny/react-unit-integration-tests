describe('Pruebas en Demo Test JS', () => {
    test('should ', () => {
        // Inicialización.
        const message = 'Hola Mundo';
       
        // Estimulo.
        const messagetwo = `Hola Mundo`;
    
        // Observar el comportamiento.
        if (message == messagetwo) {
            expect(message).toBe(messagetwo);
        }
    });
});