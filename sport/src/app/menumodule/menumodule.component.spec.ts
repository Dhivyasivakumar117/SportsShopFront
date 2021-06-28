import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumoduleComponent } from './menumodule.component';

describe('MenumoduleComponent', () => {
  let component: MenumoduleComponent;
  let fixture: ComponentFixture<MenumoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenumoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenumoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
