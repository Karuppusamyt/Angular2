import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { FeatureComponent } from './feature.component';

describe('eventQueryBuilderComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FeatureComponent
    ]}));

  it('should have been created', inject([ FeatureComponent ], (eventQueryBuilderComponent: FeatureComponent) => {
    expect(eventQueryBuilderComponent).toBeTruthy();
  }));
});
