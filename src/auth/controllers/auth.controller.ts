import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AuthService } from '../services/auth.service'

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('register')
	@HttpCode(HttpStatus.CREATED)
	@ApiOperation({ summary: 'Use registration' })
	@ApiResponse({ status: 201, description: 'Registration successful' })
	@ApiResponse({ status: 400, description: 'Invalid registration data' })
	async register(@Body() registerDto: any) {
		return this.authService.register(registerDto)
	}

	@Post('login')
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: 'Use login' })
	@ApiResponse({ status: 200, description: 'Login successful' })
	@ApiResponse({ status: 401, description: 'Invalid credentials' })
	async login(@Body() loginDto: { email: string; password: string }) {
		return this.authService.login(loginDto)
	}
}
