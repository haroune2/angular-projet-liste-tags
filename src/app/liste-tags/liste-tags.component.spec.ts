import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTagsComponent } from './liste-tags.component';

describe('ListeTagsComponent', () => {
  let component: ListeTagsComponent;
  let fixture: ComponentFixture<ListeTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeTagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
