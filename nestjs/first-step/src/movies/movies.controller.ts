import { CreateMovieDto } from './dto/create-movie.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// Single-responsibility principle: 하나의 module, class 혹은 function이 하나의 기능은 꼭 책임진다.

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll():Movie[]{
        return this.moviesService.getAll();
    }

    @Get(":id")
    getOne(@Param("id") movieId: number): Movie{
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId:number){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId:number, @Body() updateData){
        return this.moviesService.update(movieId, updateData);
        // return {
        //     updatedMovie: movieId,
        //     ...updateData,
        // };
    }
}
