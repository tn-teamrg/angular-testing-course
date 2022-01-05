import {CoursesService} from './courses.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {COURSES} from '../../../../server/db-data';

describe('CoursesService', () => {
  let courseService: CoursesService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CoursesService
      ]
    });
    courseService = TestBed.get(CoursesService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should retrieve all courses', () => {
    courseService.findAllCourses()
      .subscribe(courses => {
        expect(courses).toBeTruthy('No courses returned');
        expect(courses.length).toBe(12, 'Incorrect number of courses');
        const course = courses.find(course => course.id === 12);
        expect(course.titles.description).toBe('Angular Testing Course');
      });
    const req = httpTestingController.expectOne('/api/courses');
    expect(req.request.method).toEqual('GET');
    req.flush({ payload: Object.values(COURSES) });
  });

});
