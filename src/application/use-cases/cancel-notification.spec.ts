import { Content } from "@application/entitites/content";
import { Notification } from "@application/entitites/notification";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";

describe('Cancel notification', () => {
    it('should be able to cancel a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        const notification = new Notification({
            category: 'Social',
            content: new Content('This is a notification.'),
            recipientId: 'example-id'
        });

        await notificationsRepository.create(notification);

        await cancelNotification.execute({
            notificationId: notification.id,
        });

        expect(notificationsRepository.notifications[0].canceledAt).toEqual(
            expect.any(Date),
        );
    });

    it('should not be able to cancel a non existing notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        expect(() => {
            return cancelNotification.execute({
                notificationId: 'fake-id',
            });
        }).rejects.toThrow(NotificationNotFound);
    });
})