import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedataComponent } from './updatedata.component';
import { UpdatedataService } from './updatedata.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatedataComponent } from './updatedata.component';


describe('UpdatedataComponent', () => {
  let component: UpdatedataComponent;
  let fixture: ComponentFixture<UpdatedataComponent>;
  let service: UpdatedataService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
      ],
      declarations: [ UpdatedataComponent ],
      providers: [ UpdatedataService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedataComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UpdatedataService);
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ngOnInit application onload
  it('should set the created_by property with the value from sessionStorage', () => {
    const mockEmail = 'test@example.com';
    spyOn(sessionStorage, 'getItem').and.returnValue(mockEmail);
    spyOn(component, 'GetEntityById');
    component.ngOnInit();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('email');
    expect(component.students.created_by).toEqual(mockEmail);

    expect(component.GetEntityById).toHaveBeenCalled();
  });
  




   //update test case files
  it('should clear Component students properties on successful update', () => {
    spyOn(service, 'Update').and.returnValue(of({}));

    component.Update();

    // Expect the students properties to be reset
    expect(component.students.name).toBe('');
    expect(component.students.email).toBe('');
  });

  it('should log error on Update failure', () => {
    const error = new Error('Update failed');
    spyOn(service, 'Update').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Update();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });







  // get noun by id
  it('should update tickets when students Component service returns data', () => {
    const mockData = { 
      _id: '323', 
      name: 'name 1',
      email: 'email 1',
    };
    spyOn(service, 'GetEntityById').and.returnValue(of(mockData));

    component.GetEntityById();

    expect(service.GetEntityById).toHaveBeenCalledWith(component.queryId);
    expect(component.students).toEqual(mockData);
  });

  it('should log error when service throws an error', () => {
    const mockError = new Error('Mock error');
    spyOn(service, 'GetEntityById').and.returnValue(throwError(() => {
      return mockError;
    }));
    spyOn(console, 'log');

    component.GetEntityById();

    expect(service.GetEntityById).toHaveBeenCalledWith(component.queryId);
    expect(console.log).toHaveBeenCalledWith('Error', mockError);
  });







});