import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger'

import { SendOtpRequest } from './dto'

@Controller('auth')
export class AuthController {
	@ApiOperation({
		summary: 'Send Otp code'
	})
	@Post('otp/send')
	@HttpCode(HttpStatus.OK)
	@ApiOkResponse({ type: SendOtpRequest })
	public async sendOtp(@Body() dto: SendOtpRequest) {
		console.info('DATA', dto)

		return { ok: true }
	}
}
