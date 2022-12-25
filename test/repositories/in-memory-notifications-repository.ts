import { Notification } from "../../src/application/entitites/notification";
import { NotificationsRepository } from "../../src/application/repositories/notifications-repository";

// Fake Repo para Teste (devido ao conceito de inversão de dependência)

export class InMemoryNotificationsRepository implements NotificationsRepository {
    public notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications.push(notification);
    }

    async findById(notificationId: string): Promise<Notification | null> {
        const notification = this.notifications.find(item => item.id === notificationId);

        if(!notification)
            return null;

        return notification;
    }

    async save(notification: Notification): Promise<void> {
        const notificationIndex = this.notifications.findIndex(item => item.id === notification.id);

        if(notificationIndex > 0) {
            this.notifications[notificationIndex] = notification;
        }
    }

    async countManyByRecipientId(recipientId: string): Promise<number> {
        return this.notifications.filter(notification => notification.recipientId === recipientId).length;
    }

    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        return this.notifications.filter(notification => notification.recipientId === recipientId);
    }
}