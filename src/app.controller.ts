import { Controller, Get } from '@nestjs/common'
import { ProxyService } from '@/proxy/service/proxy.service'
import { AppService } from './app.service'

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly proxyService: ProxyService
	) {}

	@Get()
	getHello(): string {
		return this.appService.getHello()
	}
}
