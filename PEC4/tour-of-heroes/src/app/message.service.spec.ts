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
        })
});