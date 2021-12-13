package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Series;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SeriesRestRepository
    extends CrudRepository<Series, Integer> {
  @Query(value = "SELECT * FROM series",
      nativeQuery = true)
  public List<Series> findAllSeries();
  @Query(value = "SELECT * FROM series WHERE id=:seriesId",
      nativeQuery = true)
  public Series findSeriesById(@Param("seriesId") Integer id);
}
