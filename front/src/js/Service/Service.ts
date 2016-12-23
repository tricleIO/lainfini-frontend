declare let require: any;
declare let $: any;
let _ = require('lodash');

export class Service {
	public static get(url: string, dataType?) {
		if (_.isUndefined(dataType)) {
			return Service.request('GET', url);
		} else {
			return Service.request('GET', url, null, dataType);
		}
	}
	
	public static post(url: string, body?) {
		return Service.request('POST', url, body);
	}
	
	public static put(url: string, body?) {
		return Service.request('PUT', url, body);
	}
	
	public static request(type: string, url: string, body?: any, dataType?: string) {
		if (_.isUndefined(dataType)) {
			dataType = 'json';
		}
		
		let strBody = null;
		
		if (body) {
			strBody = JSON.stringify(body);
		}
		
		return $.ajax({
			method: type,
			url: url,
			contentType: 'application/json; charset=utf-8',
			dataType: dataType,
			data: strBody
		});
	}
}
