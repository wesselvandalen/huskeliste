export class Task {
    private id: string;
    private title: string;
    private completed: boolean;

    public constructor(id: string, title: string) {
        this.id = id;
        this.title = title;
        this.completed = false;
    }

    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public isCompleted(): boolean {
        return this.completed;
    }

    public switchCompleted(): void {
        this.completed = !this.completed;
    }
}