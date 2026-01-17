import { Controller, Get } from "@nestjs/common"
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger"
import { AppService } from "./app.service"
import { HealthResponse } from "./dto/responses/health.response"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @ApiOperation({ summary: 'Welcome endpoint' })
  @ApiOkResponse({ type: HealthResponse })
  @Get()
  getHello() {
    return this.appService.getHello()
  }



  @ApiOperation({ summary: 'Health check' })

  @Get('health')
  health() {
    return this.appService.health()
  }

}
