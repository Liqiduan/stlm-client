import feathersClient, { makeServicePlugin, BaseModel } from '@/plugins/feathers-client'
import {Id} from '@feathersjs/feathers'

interface HostsType {
  _id?: Id,
	name: string,
	host: string,
	username: string,
	password: string,

  isActivated?: boolean,
}

class Hosts extends BaseModel<HostsType> {
	constructor(data:HostsType, options:any) {
		super(data, options)
	}

	static modelName = 'Hosts'
	static instanceDefault() {
		return {
			name: "",
			host: "",
			username: "",
			password: "",
		}
	}
}

const servicePath = 'hosts'
const servicePlugin = makeServicePlugin({
	Model: Hosts,
	service: feathersClient.service(servicePath),
	servicePath
})

export default servicePlugin
export {HostsType}
