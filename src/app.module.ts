import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { ExceptionModule } from './exception/exception.module';
import { LoggingModule } from './logging/logging.module';

@Module({
  imports: [CatsModule, ExceptionModule, LoggingModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
