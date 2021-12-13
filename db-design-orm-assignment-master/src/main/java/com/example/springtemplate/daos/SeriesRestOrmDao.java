package com.example.springtemplate.daos;

import com.example.springtemplate.models.Series;
import com.example.springtemplate.repositories.SeriesRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SeriesRestOrmDao {
  @Autowired
  SeriesRestRepository seriesRepository;

  @PostMapping("/api/series")
  public Series createSeries(@RequestBody Series series) {
    return seriesRepository.save(series);
  }

  @GetMapping("/api/series")
  public List<Series> findAllSeriess() {
    return seriesRepository.findAllSeries();
  }

  @GetMapping("/api/series/{seriesId}")
  public Series findSeriesById(
      @PathVariable("seriesId") Integer id) {
    return seriesRepository.findSeriesById(id);
  }

  @PutMapping("/api/series/{seriesId}")
  public Series updateSeries(
      @PathVariable("seriesId") Integer id,
      @RequestBody Series seriesUpdates) {
    Series series = seriesRepository.findSeriesById(id);
    series.setTitle(seriesUpdates.getTitle());
    series.setHasMovieAdaptation(seriesUpdates.getHasMovieAdaptation());
    series.setGenre(seriesUpdates.getGenre());
    series.setBook(seriesUpdates.getBook());
    return seriesRepository.save(series);
  }

  @DeleteMapping("/api/series/{seriesId}")
  public void deleteSeries(
      @PathVariable("seriesId") Integer id) {
    seriesRepository.deleteById(id);
  }
}