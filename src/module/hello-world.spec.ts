import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { HelloWorldComponent } from './hello-world.component';

describe ('Test of ngCard', () => {

    let comp:HelloWorldComponent;
    let fixture:ComponentFixture<HelloWorldComponent>;

    beforeEach(async( () => {
        TestBed.configureTestingModule({
            declarations: [HelloWorldComponent]
        }).compileComponents();
    }));

    beforeEach(()=>{

        fixture = TestBed.createComponent(HelloWorldComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });

    it ('TestOK: Test that the card is formed in the right way', ()=>{
        let helloWorld: DebugElement = fixture.debugElement;

        let title = helloWorld.nativeElement.getElementsByTagName('h1')[0].innerHTML;

        expect(title).toBe('Hello world');
    });
});