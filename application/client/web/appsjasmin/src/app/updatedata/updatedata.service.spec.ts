import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UpdatedataService } from './updatedata.service';
import { SharedService } from '../../shared/shared.service';

describe('updatedataService', () => {
  let service: UpdatedataService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ UpdatedataService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(UpdatedataService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });



  // gp update the test case
  it('should send a PUT request to the server', () => {
    const students = { 
      _id: '12dsadsa', 
      name: 'name 1'
      email: 'email 1'
    };
    const jwtToken = '123Hsdf_23234fdsjk';
    
    // Make the API call
    service.Update(students).subscribe(response => {
      expect(response).toEqual(students);
    });

    // Expect a PUT request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${sharedService.WEB_API}/students?jwt_token=${jwtToken}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(students);

    // Flush the mocked response
    req.flush(students);
  });





  
});
