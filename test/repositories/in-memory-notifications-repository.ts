import { Notification } from "../../src/application/entitites/notification";
import { NotificationsRepository } from "../../src/application/repositories/notifications-repository";

// Fake Repo para Teste (devido ao conceito de inversão de dependência)

export class InMemoryNotificationsRepository implements NotificationsRepository {
    public notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications.push(notification);
    }
}