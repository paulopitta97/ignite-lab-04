import { Content } from "@application/entitites/content";
import { Notification } from "@application/entitites/notification";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotifications } from "./count-recipient-notifications";

describe('Count recipient notifications', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

        await notificationsRepository.create(new Notification({
            category: 'Social',
            content: new Content('This is a new notification 1.'),
            recipientId: 'recipient-5'
        }));

        await notificationsRepository.create(new Notification({
            category: 'Social',
            content: new Content('This is a new notification 2.'),
            recipientId: 'recipient-5'
        }));

        await notificationsRepository.create(new Notification({
            category: 'Social',
            content: new Content('This is a new notification.'),
            recipientId: 'recipient-2'
        }));

        const { count } = await countRecipientNotifications.execute({
            recipientId: 'recipient-5'
        });

        expect(count).toEqual(2);
    });

})