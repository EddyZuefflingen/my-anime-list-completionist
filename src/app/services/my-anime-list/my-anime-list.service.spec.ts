import { TestBed } from '@angular/core/testing';

import { MyAnimeListService } from './my-anime-list.service';

describe('MyAnimeListService', () => {
  let service: MyAnimeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAnimeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
