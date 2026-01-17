import { Logger, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'

import { getCorsConfig, getSwaggerConfig, getValidationPipeConfig } from './common/config'
import { AppModule } from './core/app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const config = app.get(ConfigService)
	const logger = new Logger()

	app.useGlobalPipes(new ValidationPipe(getValidationPipeConfig()))

	app.enableCors(getCorsConfig(config))

	const port = config.getOrThrow<number>('HTTP_PORT')
	const host = config.getOrThrow<number>('HTTP_HOST')

	const swaggerConfig = getSwaggerConfig()
	const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)

	SwaggerModule.setup('/docs', app, swaggerDocument, {
		jsonDocumentUrl: '/docs/openapi.json',
		yamlDocumentUrl: '/docs/openapi.yaml'
	})

	try {
		await app.listen(port)

		logger.log(`🚀 Gateway is running, host ${host}`)
	} catch (error) {
		logger.error(`🚨 Server is not running: ${error}`)
		process.exit(1)
	}
}
bootstrap()
