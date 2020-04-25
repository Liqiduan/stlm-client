import feathersClient, { makeServicePlugin, BaseModel } from '@/plugins/feathers-client'

interface HostsType {
	name: string,
	host: string,
	username: string,
	password: string
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
