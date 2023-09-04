import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTerm: any[]): any {
    if(!value || !searchTerm){
      return value;
    }
    //return 
    const searchValue = value.filter(function(search:any){
      return search.name.toLowerCase().indexOf(searchTerm) > -1 ;
    });
    if (searchValue.length === 0) {
      // Return a special value indicating no records found
      return [{ notFound: true }];
    }
    
    
    return searchValue;
  }

}
