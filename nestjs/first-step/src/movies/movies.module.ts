import { MoviesController } from './movies.controller';
import { Module, Controller } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Module({
    controllers: [MoviesController],
    providers: [MoviesService]
})
export class MoviesModule {}
