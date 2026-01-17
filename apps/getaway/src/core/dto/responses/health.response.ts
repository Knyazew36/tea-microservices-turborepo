import { ApiProperty } from "@nestjs/swagger"

export class HealthResponse{

  @ApiProperty()
  status:string

  @ApiProperty()
  timeStamp:string
}