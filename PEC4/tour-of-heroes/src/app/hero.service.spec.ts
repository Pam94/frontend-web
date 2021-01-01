import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HeroService } from "./hero.service";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageService } from './message.service';

describe('HeroService', () => {
    let heroService: HeroService;
    let httpClient: HttpClient;
    let httpTestingControler: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                HeroService,
                MessageService
            ]
        });
        heroService = TestBed.inject(HeroService);
        httpClient = TestBed.inject(HttpClient);
        httpTestingControler = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingControler.verify();
    });

    it('#getHeroNo404 should return an existing hero by its ID (HttpClient called once)', () => {
    }

    );

    it('#getHeroNo404 should return undefined when passed an non-existent hero ID');


})