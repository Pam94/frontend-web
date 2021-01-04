import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HeroService } from "./hero.service";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { fail } from 'assert';

const mockData = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'Wonder Woman' }
] as Hero[];

describe('HeroService', () => {
    let heroService: HeroService;
    let httpClient: HttpClient;
    let httpTestingControler: HttpTestingController;

    const mockHeroes = [...mockData];
    const mockHero = mockHeroes[0];
    const mockId = mockHero.id;

    beforeEach(() => {
        TestBed.configureTestingModule({
            // Import the HttpClient mocking services
            imports: [HttpClientTestingModule],
            // Provide the service-under-test and its dependencies
            providers: [
                HeroService,
                MessageService
            ]
        });
        // Inject the http, test controller, and service-under-test
        // as they will be referenced by each test
        heroService = TestBed.inject(HeroService);
        httpClient = TestBed.inject(HttpClient);
        httpTestingControler = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpTestingControler.verify();
    });

    it("can load instance", () => {
        expect(heroService).toBeTruthy();
    });

    describe('#getHeroNo404', () => {

        const get404Url = (id: number) => `${heroService.heroesUrl}/?id=${id}`;

        it('should return an existing hero by its ID', () => {

            heroService.getHeroNo404(mockId).subscribe(
                hero => expect(hero).toEqual(mockHero, 'should return the expected hero'),
                fail
            );

            // HeroService should have made one request to GET hero from expected URL
            const req =
                httpTestingControler.expectOne(get404Url(mockId));
            expect(req.request.method).toEqual('GET');

            // Respond with the mock heroes
            req.flush(mockHeroes);
        });

        it('should return undefined when passed an non-existent hero ID', () => {
            heroService.getHeroNo404(mockId).subscribe(
                hero => expect(hero).toBeUndefined(),
                fail
            );

            const req =
                httpTestingControler.expectOne(get404Url(mockId));
            expect(req.request.method).toEqual('GET');

            req.flush(mockHero);
        });
    });

    describe('#getHero', () => {

        const getUrl = (id: number) => `${heroService.heroesUrl}/${id}`;

        it('should return an existing hero by its ID', () => {
            heroService.getHero(mockId).subscribe(
                hero => expect(hero).toEqual(mockHero, 'should return the expected hero'),
                fail
            );

            const req =
                httpTestingControler.expectOne(getUrl(mockId));
            expect(req.request.method).toEqual('GET');

            req.flush(mockHero);
        });

        it('should return 404 if id not found', () => {
            heroService.getHero(mockId).subscribe(
                hero => expect(hero).toBeUndefined(),
                fail
            );

            const req =
                httpTestingControler.expectOne(getUrl(mockId));
            expect(req.request.method).toEqual('GET');

            req.flush('Invalid request parameters', { status: 404, statusText: 'Bad Request' });
        });
    });

    describe('#addHero', () => {

        it('should add a new hero and return it', () => {

            heroService.addHero(mockHero).subscribe(
                response => expect(response).toEqual(mockHero),
                fail
            );

            const req =
                httpTestingControler.expectOne(heroService.heroesUrl);
            expect(req.request.method).toEqual('POST');

            req.flush(mockHero);
        });

        it('should return an error', () => {

            heroService.addHero(mockHero).subscribe(
                response => expect(response).toBeUndefined(),
                fail
            );

            const req =
                httpTestingControler.expectOne(heroService.heroesUrl);
            expect(req.request.method).toEqual('POST');

            req.flush('Invalid request parameters', { status: 404, statusText: 'Bad Request' });

        });
    });

    describe('#updateHero', () => {

        const updatedHero: Hero = { id: 1, name: 'Flash' };

        it('should update the data of an existing hero', () => {
            heroService.updateHero(updatedHero).subscribe(hero =>
                expect(hero).toBe(updatedHero),
                fail
            );

            const req =
                httpTestingControler.expectOne(heroService.heroesUrl);
            expect(req.request.method).toEqual('PUT');
            req.flush(updatedHero);

        });

        it('should return an error', () => {
            heroService.updateHero(updatedHero).subscribe(hero =>
                expect(hero).toBeUndefined(),
                fail
            );

            const req =
                httpTestingControler.expectOne(heroService.heroesUrl);
            expect(req.request.method).toEqual('PUT');

            req.flush('Invalid request parameters', { status: 404, statusText: 'Bad Request' });

        });

    });

    describe('#deleteHero', () => {

        const deleteURL = `api/heroes/${mockId}`;

        it('should delete an expected hero by its ID', () => {

            heroService.deleteHero(mockId).subscribe(hero =>
                expect(hero).toBe(mockHero),
                fail
            );

            const req =
                httpTestingControler.expectOne(deleteURL);
            expect(req.request.method).toEqual('DELETE');
            req.flush(mockHero);

        });

        it('should delete an expected hero', () => {

            heroService.deleteHero(mockHero).subscribe(hero =>
                expect(hero).toBe(mockHero),
                fail
            );

            const req =
                httpTestingControler.expectOne(deleteURL);
            expect(req.request.method).toEqual('DELETE');
            req.flush(mockHero);

        });

        it('shuld return an error', () => {
            heroService.deleteHero(mockHero).subscribe(hero =>
                expect(hero).toBeUndefined(),
                fail
            );

            const req =
                httpTestingControler.expectOne(deleteURL);
            expect(req.request.method).toEqual('DELETE');

            req.flush('Invalid request parameters', { status: 404, statusText: 'Bad Request' });
        });

    });
});