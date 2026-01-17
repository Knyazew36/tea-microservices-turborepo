import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsString, Validate } from 'class-validator'
import { IdentifierValidator } from 'src/shared/validators'

export class SendOtpRequest {
	@ApiProperty({
		description: 'The identifier to send the OTP code to'
	})
	@IsString()
	@Validate(IdentifierValidator)
	identifier: string

	@ApiProperty({
		description: 'The type of identifier to send the OTP code to',
		example: 'phone',
		enum: ['phone', 'email']
	})
	@IsEnum(['phone', 'email'])
	type: 'phone' | 'email'
}
