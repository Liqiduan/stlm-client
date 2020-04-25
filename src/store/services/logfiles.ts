import feathersClient, { makeServicePlugin, BaseModel } from '@/plugins/feathers-client'
import {Id} from '@feathersjs/feathers'

interface LogfilesType {
	_id?:Id,
	belongHost: Id,
	type:string,
	filename: string,
	path: string,
}

class Logfiles extends BaseModel<LogfilesType> {
	constructor(data:LogfilesType, options:any) {
		super(data, options)
	}

	static modelName = 'Logfiles'
	static instanceDefault() {
		return {
			belongHost: 0,
			type:"",
			filename: "",
			path: "",
		}
	}
}

const servicePath = 'logfiles'
const servicePlugin = makeServicePlugin({
	Model: Logfiles,
	service: feathersClient.service(servicePath),
	servicePath
})

export default servicePlugin
