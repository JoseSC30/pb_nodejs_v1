import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello mundo y otros mundos mas. Agrego esta line para visualizar los cambios.';
  }
}
