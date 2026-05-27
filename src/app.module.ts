import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
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
		ThrottlerModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => [
				{
					name: 'short',
					ttl: 60000, // 1 second
					limit: configService.get<number>('RATE_LIMIT_SHORT', 10)
				},
				{
					name: 'medium',
					ttl: 60000, // 1 minute
					limit: configService.get<number>('RATE_LIMIT_MEDIUM', 100)
				},
				{
					name: 'long',
					ttl: 60000, // 15 minutes
					limit: configService.get<number>('RATE_LIMIT_LONG', 1000)
				}
			],
			inject: [ConfigService]
		}),
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
