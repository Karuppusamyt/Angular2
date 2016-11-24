/*
import {
  inject,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  Response,
  ResponseOptions
} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import {ModuleSpecificService} from './eventQueryBuilder.service'

describe('ModuleSpecificService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      ModuleSpecificService
    ]
  }));

  it('should have http', inject([ModuleSpecificService], (eventQueryBuilderService: ModuleSpecificService) => {
    expect(!!eventQueryBuilderService.http).toEqual(true);
  }));

  it('should get event category from the server', inject([ModuleSpecificService, MockBackend], /!*(eventQueryBuilderService: ModuleSpecificService) => {*!/
    fakeAsync((eventQueryBuilderService: ModuleSpecificService, mockBackend: MockBackend)=> {
      let res: Response;
      mockBackend.connections.subscribe(conn => {
        expect(conn.request.url).toBe('http://crcetsvcdev01/Reverse.CHAP.EventQueryServices/api/eventCategory');
        let response = new ResponseOptions({body: '[{"CategoryCode": "NonOcc", "Name":"NonOccupancy"}]'});
        conn.mockRespond(new Response(response));
      });
      eventQueryBuilderService.get().subscribe((response)=> {
        res = response;
      });
      tick();
      expect(res[0].CategoryCode).toBe('NonOcc');
      expect(res[0].Name).toBe('NonOccupancy');
      // spyOn(eventQueryBuilderService, 'get');
      // expect(eventQueryBuilderService.get).not.toHaveBeenCalled();
      //
      //   eventQueryBuilderService.get();
      //   expect(eventQueryBuilderService.get).toHaveBeenCalled();
      //   expect(eventQueryBuilderService.get).toBeDefined();
    })
    )
  );

  it('should get events pertaining to specific category from the server', inject([ModuleSpecificService, MockBackend],
    fakeAsync((eventQueryBuilderService: ModuleSpecificService, mockBackend: MockBackend)=> {
      let res: Response;
      mockBackend.connections.subscribe(conn => {
        expect(conn.request.url).toBe('http://crcetsvcdev01/Reverse.CHAP.EventQueryServices/api/event/NonOcc');
        let response = new ResponseOptions(
          {
            body: `[
           {"eventcode": "NoccE1", "name": "NonOccEvent1"},
           {"eventcode": "NoccE2", "name": "NonOccEvent2"}
           ]`
          });
        conn.mockRespond(new Response(response));
      });
      eventQueryBuilderService.getEvents('NonOcc').subscribe((response)=> {
        res = response;
      });
      tick();
      expect(res[0].eventcode).toBe('NoccE1');
      expect(res[0].name).toBe('NonOccEvent1');
    })
    )
  );

  it('should get event versions pertaining to specific event from the server', inject([ModuleSpecificService, MockBackend],
    fakeAsync((eventQueryBuilderService: ModuleSpecificService, mockBackend: MockBackend)=> {
      let res: Response;
      mockBackend.connections.subscribe(conn => {
        expect(conn.request.url).toBe('http://crcetsvcdev01/Reverse.CHAP.EventQueryServices/api/eventVersion/TnIE3');
        let response = new ResponseOptions(
          {
            body: `[
                     {
                      "id": 1,
                      "VersionStart": "03/11/2016",
                      "VersionEnd": "05/11/2016",
                      "ConfiguredBy": "John",
                      "Active": "No"
                    },
                    {
                      "id": 2,
                      "VersionStart": "03/11/2016",
                      "VersionEnd": "05/11/2016",
                      "ConfiguredBy": "Jane",
                      "Active": "No"
                    }
           ]`
          });
        conn.mockRespond(new Response(response));
      });
      eventQueryBuilderService.getEventVersion('TnIE3').subscribe((response)=> {
        res = response;
      });
      tick();
      expect(res[0].id).toBe(1);
      expect(res[0].ConfiguredBy).toBe('John');
    })
    )
  )
});
*/
