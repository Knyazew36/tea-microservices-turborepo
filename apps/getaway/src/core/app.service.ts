import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
  public getHello() {
    return {message: 'welcome gateway'}
  }

  public health(){
    return{
      status: 'ok',
      timestamp: new Date().toISOString()
    }
  }
}
