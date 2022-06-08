import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})

export class HighlightDirective{
    constructor(private el: ElementRef){ }

    @Input('myHighlight')
    highlightColor!: string;
    textColor!: string;

    @HostListener('mouseenter')
    onMouseEnter(){
        this.highlight(this.highlightColor || 'red');
        this.text('white');
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.highlight(null);
        this.text(null);
    }

    private highlight(color: any){
        this.el.nativeElement.style.backgroundColor = color;
    }

    private text(color: any){
        this.el.nativeElement.style.color = color;
    }
}