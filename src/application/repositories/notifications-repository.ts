import { Notification } from "../entitites/notification";

export abstract class NotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
    abstract findById(notificationId: string): Promise<Notification | null>;
    abstract save(notification: Notification): Promise<void>; // update
    abstract countManyByRecipientId(recipientId: string): Promise<number>;
}