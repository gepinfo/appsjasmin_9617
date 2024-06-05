import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetalldataService } from './getalldata.service';
import { SharedService } from '../../shared/shared.service';

describe('getalldataService', () => {
  let service: GetalldataService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ GetalldataService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(GetalldataService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  // get all types
  it('should retrieve all values getallseverity from the server', () => {
    const mockResponse = { data: [{
      _id:'id2', 
      name: 'name 1'
      email: 'email 1'
    }]};
    const jwtToken = '123Hsdf_23234fdsjk';
    const expectedUrl = `${sharedService.WEB_API}/students?jwt_token=${jwtToken}`;

    sessionStorage.setItem('JwtToken', jwtToken);

    service.GetAllValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });




  
});
