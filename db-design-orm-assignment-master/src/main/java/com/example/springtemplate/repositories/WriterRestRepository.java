package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Writer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WriterRestRepository
    extends CrudRepository<Writer, Integer> {
  @Query(value = "SELECT * FROM writer",
      nativeQuery = true)
  public List<Writer> findAllWriters();
  @Query(value = "SELECT * FROM writer WHERE id=:writerId",
      nativeQuery = true)
  public Writer findWriterById(@Param("writerId") Integer id);
}
