import {Http, URLSearchParams, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {ModuleSpecificService} from "../services/moduleSpecific.service";


@Injectable()
export class MockEventQueryBuilderService implements ModuleSpecificService{
  constructor(public http: Http) {
  }

  get() {
    return this.http.get('http://localhost:3000/eventcategory')
      .map((res: Response) => {
        return res.json();
      })
  }

  getEvents(eventCategory) {
    return this.http.get('http://localhost:3000/EventCategories/'+eventCategory)
      .map((res: Response) => {
        return res.json();
      })
  }
  getEventVersion(selectedEventCode)  {
    return this.http.get('http://localhost:3000/eventVersion/'+selectedEventCode)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
