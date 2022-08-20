import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// IMPORTAMOS MODELO de ITask
import { ITask, LEVELS } from 'src/app/models/task.interface';

@Component({
  selector: 'app-kelay-tasks',
  templateUrl: './kelay-tasks.component.html',
  styleUrls: ['./kelay-tasks.component.scss'],
})
export class KelayTasksComponent {

  todoTasks: ITask[] = [
    {
      title: 'Animaciones',
      description: 'Aprender comandos y configuraciones de Angular CLI',
      status: false,
      level: LEVELS.URGENT
    },
    {
      title: 'Angular CLI',
      description: 'Aprender comandos y configuraciones de Angular CLI',
      status: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Deploy Angular Project',
      description: 'Aprender comandos y configuraciones de Angular CLI',
      status: false,
      level: LEVELS.INFO
    },
  ]

  doneTasks: ITask[] = [
    {
      title: 'Instalar Angular',
      description: 'Aprender comandos y configuraciones de Angular CLI',
      status: true,
      level: LEVELS.URGENT
    },
    {
      title: 'Pipes CLI',
      description: 'Aprender comandos y configuraciones de Angular CLI',
      status: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Firebase Project',
      description: 'Aprender comandos y configuraciones de Angular CLI',
      status: true,
      level: LEVELS.INFO
    },
  ]

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      console.log(event)
      event.previousContainer.data[event.previousIndex].status = !event.previousContainer.data[event.previousIndex].status

      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
