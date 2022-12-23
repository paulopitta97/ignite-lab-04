import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { Notification } from "../entitites/notification";
import { SendNotification } from "./send-notification"

describe('Send notification', () => {
    it('should be able to send a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationsRepository);
        const { notification } = await sendNotification.execute({
            content: 'This is a notification.',
            category: 'Social',
            recipientId: 'example-id'
        });

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification);
    })
})