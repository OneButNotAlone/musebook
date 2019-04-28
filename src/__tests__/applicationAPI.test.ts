import * as exposedAPI from '../';

describe('Application API provides', () => {
    describe('exports Component modules', () => {
        test('Button', () => {
            expect(exposedAPI.Button).toBeDefined();
        });

        test('Footer', () => {
            expect(exposedAPI.Footer).toBeDefined();
        });

        test('Header', () => {
            expect(exposedAPI.Header).toBeDefined();
        });

        test('Login', () => {
            expect(exposedAPI.Login).toBeDefined();
        });

        test('Popup', () => {
            expect(exposedAPI.Popup).toBeDefined();
        });

        test('Navigation', () => {
            expect(exposedAPI.Navigation).toBeDefined();
        });

        test('Stepper', () => {
            expect(exposedAPI.Stepper).toBeDefined();
        });

        test('Table', () => {
            expect(exposedAPI.Table).toBeDefined();
        });
        
        test('Paginator', () => {
            expect(exposedAPI.Paginator).toBeDefined();
        })
    });

    test('hooks are exported', () => {
        expect(exposedAPI.hooks).toBeDefined();
    });

    test('images are exported', () => {
        expect(exposedAPI.images).toBeDefined();
    });
});
