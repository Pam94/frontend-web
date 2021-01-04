import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFactory } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';
import { HeroesComponent } from "./heroes.component";

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;

    let heroService;
    let getHeroesSpy;
    let addHeroSpy;

    const newHero: Hero = { id: 1, name: 'Green Lanthern' };

    beforeEach(async () => {
        heroService = jasmine.createSpyObj('HeroService', ['getHeroes', 'addHero']);
        getHeroesSpy = heroService.getHeroes.and.returnValue(of(HEROES));
        addHeroSpy = heroService.addHero.and.returnValue(of(newHero));

        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
            imports: [
                RouterTestingModule.withRoutes([]),
                HttpClientTestingModule],
            providers: [
                { provide: HeroService, useValue: heroService }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should display "My Heroes" as headline', () => {
        expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('My Heroes');
    });

    it('should call add method properly', () => {
        component.add(newHero.name);

        fixture.detectChanges();
        expect(addHeroSpy.calls.any()).toBe(true, 'addHero called');
    });
});