import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'search',
  pure: false
})

export class SearchPipe implements PipeTransform{
  transform(pipeData, pipeModifier){
    return pipeData.filter((eachItem) => {
      return eachItem["Name"].toLowerCase().includes(pipeModifier.toLowerCase());
    });
  }
}
