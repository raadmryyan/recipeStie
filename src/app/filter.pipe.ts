import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {
 
  transform(value: any, filter:any , pro:any): any {
    if (value.length ==0)
    {
      return value;
    }
    const matchArray=[];

    
  
    for(const val of value)
    { 
      if(  pro === 'ingredients')
      {
        let added=false;
        for(const ingred of val['ingredients'])
        { 
          if (ingred['name'].toUpperCase().indexOf(filter.toUpperCase()) !=-1)
          {
            added=true;
          }

        }
        if (added) {matchArray.push(val); added=false;}
     
       
      }
      else if (val[pro].toUpperCase().indexOf(filter.toUpperCase()) !=-1)
      {
        matchArray.push(val);
      }
      
    }
    return matchArray;
      }

    }
   
  


