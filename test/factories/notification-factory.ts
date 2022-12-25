import { Content } from "@application/entitites/content";
import { Notification, NotificationProps } from "@application/entitites/notification";

type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
    return new Notification({
        category: 'Social',
        content: new Content('This is a notification.'),
        recipientId: 'example-id',
        ...override,
    });
}