import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesBarrasComponent } from './acoes-barras.component';

describe('AcoesBarrasComponent', () => {
  let component: AcoesBarrasComponent;
  let fixture: ComponentFixture<AcoesBarrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcoesBarrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcoesBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
