import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { LoggingMiddleware } from './middlewares/logging/logging.middleware'
import { MiddlewaresModule } from './middlewares/middlewares.module'
import { ProxyModule } from './proxy/proxy.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		ThrottlerModule.forRoot([
			{
				name: 'short',
				ttl: 60000, // 1 minute
				limit: 10 // 10 requests per minute
			},
			{
				name: 'medium',
				ttl: 60000, // 1 minute
				limit: 100 // 100 requests per minute
			},
			{
				name: 'long',
				ttl: 60000, // 15 minutes
				limit: 1000 // 1000 requests per 15 minutes
			}
		]),
		ProxyModule,
		MiddlewaresModule,
		AuthModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggingMiddleware).forRoutes('*')
	}
}
