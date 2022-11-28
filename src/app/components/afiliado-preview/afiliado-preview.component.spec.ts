import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliadoPreviewComponent } from './afiliado-preview.component';

describe('AfiliadoPreviewComponent', () => {
  let component: AfiliadoPreviewComponent;
  let fixture: ComponentFixture<AfiliadoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfiliadoPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfiliadoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
