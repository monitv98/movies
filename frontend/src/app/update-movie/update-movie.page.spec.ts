import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateMoviePage } from './update-movie.page';

describe('UpdateMoviePage', () => {
  let component: UpdateMoviePage;
  let fixture: ComponentFixture<UpdateMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
