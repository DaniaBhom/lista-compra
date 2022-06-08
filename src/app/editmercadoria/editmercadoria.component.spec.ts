import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmercadoriaComponent } from './editmercadoria.component';

describe('EditmercadoriaComponent', () => {
  let component: EditmercadoriaComponent;
  let fixture: ComponentFixture<EditmercadoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmercadoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmercadoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
