/* eslint-disable prettier/prettier */
class ToDoItem {
    id: number;
    title: string;
    description: string;
    done: boolean;
    deleted: boolean;

    constructor(id: number, title: string, description: string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.done = false;
        this.deleted = false;
    }

    changeStatus(): void{
        this.done = !this.done;
    }

    deleteItem(): void{
        this.deleted = true;
    }

    restoreItem(): void{
        this.deleted = false;
    }
}

export default ToDoItem;