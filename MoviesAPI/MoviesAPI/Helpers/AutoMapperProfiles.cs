using AutoMapper;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using NetTopologySuite.Geometries;

namespace MoviesAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(GeometryFactory geometryFactory)
        {
            CreateMap<GenreDTO, Genre>().ReverseMap();
            CreateMap<GenreCreationDTO, Genre>();

            CreateMap<ActorDTO, Actor>().ReverseMap();
            CreateMap<ActorCreationDTO, Actor>().ForMember(x => x.Picture, options => options.Ignore());

            CreateMap<MovieTheater, MovieTheaterDTO>()
                .ForMember(x => x.Latidute, dto => dto.MapFrom(prop => prop.Location.Y))
                .ForMember(x => x.Longidute, dto => dto.MapFrom(prop => prop.Location.X));

            CreateMap<MovieTheaterDTO, MovieTheater>()
                .ForMember(x => x.Location, x => x.MapFrom(dto=>geometryFactory.CreatePoint(new Coordinate(dto.Longidute,dto.Latidute))));
        }
    }
}
