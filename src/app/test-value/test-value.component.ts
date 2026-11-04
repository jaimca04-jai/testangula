import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-test-value',
  imports: [],
  templateUrl: './test-value.component.html',
  styleUrl: './test-value.component.scss'
})
export class TestValueComponent {
  tasks: Task[] = [];
  private nextTaskId = 1;

  get completedTaskCount(): number {
    return this.tasks.filter((task) => task.completed).length;
  }

  addTask(event: SubmitEvent, input: HTMLInputElement): void {
    event.preventDefault();
    const title = input.value.trim();

    if (!title) {
      return;
    }

    this.tasks = [...this.tasks, { id: this.nextTaskId++, title, completed: false }];
    input.value = '';
  }

  toggleTask(task: Task): void {
    task.completed = !task.completed;
  }

  removeTask(task: Task): void {
    this.tasks = this.tasks.filter((item) => item.id !== task.id);
  }
}
