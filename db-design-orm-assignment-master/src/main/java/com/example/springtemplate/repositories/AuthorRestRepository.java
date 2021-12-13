package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Author;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AuthorRestRepository
        extends CrudRepository<Author, Integer> {
    @Query(value = "SELECT * FROM author",
            nativeQuery = true)
    public List<Author> findAllAuthors();
    @Query(value = "SELECT * FROM author WHERE id=:authorId",
            nativeQuery = true)
    public Author findAuthorById(@Param("authorId") Integer id);
}
