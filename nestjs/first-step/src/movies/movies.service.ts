import { CreateMovieDto } from './dto/create-movie.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

// service : business 로직, query를 다룬다.

@Injectable()
export class MoviesService {
    // database part
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: number):Movie {
        const movie = this.movies.find(movie => movie.id === id)
        if(!movie){
            throw new NotFoundException(`Movie with ID ${id} Not Found`)
        }
        return movie;
    }

    deleteOne(id: number){
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    create(movieData: CreateMovieDto){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        });
    }

    update(id:number, updateData){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData});
    }
}
