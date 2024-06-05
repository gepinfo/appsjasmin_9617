import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CreateService } from './create.service';
import { SharedService } from '../../shared/shared.service';

describe('createService', () => {
  let service: CreateService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ CreateService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(CreateService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });


  // test case gp create
  it('should send a POST request to the server', () => {
    const students = { 
    name: 'name 1'
    email: 'email 1'
    }
    const jwtToken = '123Hsdf_23234fdsjk';
    
    // Make the API call
    service.Create(students).subscribe(response => {
      expect(response).toEqual(students)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${sharedService.WEB_API}/students?jwt_token=${jwtToken}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(students);

    // Flush the mocked response
    req.flush(students);
  });



  
});
