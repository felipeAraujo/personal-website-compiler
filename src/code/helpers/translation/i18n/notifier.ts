class LanguageNotifier {
    private notifications: ((data: string) => void)[] = [];

    public addNotification(callable: ((language: string) => void)) {
        this.notifications.push(callable);
    }

    public notify(language: string): void {
        this.notifications.forEach(
            (callbackfn: (language: string) => void) => callbackfn(language),
        );
    }
}

export const languageNotifier: LanguageNotifier = new LanguageNotifier();