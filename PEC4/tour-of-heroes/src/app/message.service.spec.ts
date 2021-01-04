import { MessageService } from "./message.service"

describe('MessageService', () => {
    let service: MessageService;
    beforeEach(() => { service = new MessageService(); });

    it('#add should add a new message to the array',
        (done: DoneFn) => {
            const actualLength = service.messages.length;
            const string = 'new message';
            service.add(string);
            expect(service.messages.length).toBe(actualLength + 1);
            expect(service.messages[service.messages.length - 1]).toBe(string);
            done();
        });

    it('#clear when the message list is empty',
        (done: DoneFn) => {
            service.messages = [];
            service.clear();
            expect(service.messages.length).toBe(0);
            done();
        });

    it('#clear when the message list is not empty',
        (done: DoneFn) => {
            service.messages = ['message 1', 'message 2', 'message 3'];
            service.clear();
            expect(service.messages.length).toBe(0);
            done();
        });
});