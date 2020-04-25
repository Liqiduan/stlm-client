import feathersClient, { makeServicePlugin, BaseModel } from '@/plugins/feathers-client'
import {Id} from '_@feathersjs_feathers@4.5.3@@feathersjs/feathers'

interface LogsType {
	id?: Id,
	type: string,
	text: string,
	time: Date,
}

class Logs extends BaseModel<LogsType> {
	constructor(data:LogsType, options:any) {
		super(data, options)
	}

	static modelName = 'Logs'
	static instanceDefault() {
		return {
			id: 0,
			type: "",
			text: "",
			time: new Date(),
		}
	}
}

const servicePath = 'logs'
const servicePlugin = makeServicePlugin({
	Model: Logs,
	service: feathersClient.service(servicePath),
	servicePath
})

export default servicePlugin
