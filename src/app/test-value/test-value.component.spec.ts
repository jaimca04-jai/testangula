import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestValueComponent } from './test-value.component';

describe('TestValueComponent', () => {
  let component: TestValueComponent;
  let fixture: ComponentFixture<TestValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add, complete, and remove tasks', () => {
    const root: HTMLElement = fixture.nativeElement;
    const input = root.querySelector<HTMLInputElement>('#new-task');
    const form = root.querySelector<HTMLFormElement>('form');

    if (!input || !form) {
      throw new Error('Task form was not rendered');
    }

    input.value = 'Write tests';
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    fixture.detectChanges();

    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0].title).toBe('Write tests');
    expect(input.value).toBe('');

    const checkbox = root.querySelector<HTMLInputElement>('input[type="checkbox"]');
    if (!checkbox) {
      throw new Error('Task checkbox was not rendered');
    }

    checkbox.click();
    fixture.detectChanges();

    expect(component.completedTaskCount).toBe(1);

    const removeButton = root.querySelector<HTMLButtonElement>('.remove-button');
    if (!removeButton) {
      throw new Error('Remove button was not rendered');
    }

    removeButton.click();
    fixture.detectChanges();

    expect(component.tasks.length).toBe(0);
    expect(root.textContent).toContain('Your list is clear.');
  });
});
