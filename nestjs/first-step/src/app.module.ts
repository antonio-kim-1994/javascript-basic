// module : application의 일부
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MoviesModule } from './movies/movies.module';

// decorator
@Module({
  imports: [MoviesModule],
  // controllers : url을 가져오고 함수를 실행 (express의 라우터)
  // app.module 은 appService와 AppController만 가지고 있어야 한다.
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
