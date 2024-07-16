import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSuggestMultiSelectComponent } from './tag-suggest-multi-select.component';

describe('TagSuggestMultiSelectComponent', () => {
  let component: TagSuggestMultiSelectComponent;
  let fixture: ComponentFixture<TagSuggestMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagSuggestMultiSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSuggestMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
