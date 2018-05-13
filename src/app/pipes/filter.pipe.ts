import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})

export class FilterPipe implements PipeTransform {

	transform(value: any, qry: any): any {
		if (!value) return [];
		if (!qry) return value;
		return value.filter(val => {
			if (!val.hasOwnProperty('name')) return false;
			return val.name.toLowerCase().startsWith(qry.toLowerCase());
		})
	}

}

