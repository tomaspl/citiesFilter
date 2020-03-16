import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBoldTextMatch]'
})
export class BoldTextMatchDirective implements OnChanges {
  @Input('appBoldTextMatch') appBoldTextMatch: string;
  @Input('name') name: string;

  constructor(private el: ElementRef) { }
  ngOnChanges(simpleChanges: SimpleChanges){
    const textSplitted = this.appBoldTextMatch.split(' ');
    const nameSplitted = this.name.split(' ');
    let tempText = '';
    for(let j = 0; j<nameSplitted.length; j++){
      let insert = false;
      for(let i = 0; i<textSplitted.length; i++){
        const nameLowCase =  nameSplitted[j].toLowerCase();
        const textLowCase =  textSplitted[i].toLowerCase();
        const since = nameLowCase.indexOf(textLowCase)
        if(since > -1 && textSplitted[i]!==''){
          insert = true;
          const until = since + textSplitted[i].length;
          const selectedText = nameSplitted[j].substring(
            since,
            since + textSplitted[i].length
          );
          const selectedTextStyled ="<b>" +selectedText +"</b>";
          const space1 = since === 0 ? ' ':''
          const space2 = textSplitted[i].length === nameSplitted[j].length ? ' ':''
          const previousText = nameSplitted[j].slice(0, since);
          const afterText = nameSplitted[j].slice(until, nameSplitted[j].length);

          tempText += previousText + space1 + selectedTextStyled + space2 + afterText
        }
      }
      tempText+=!insert? nameSplitted[j]+' ': ' '
      insert = false;
    }
    this.el.nativeElement.innerHTML = tempText==='' ? this.name : tempText;
  }
}