package com.example.springtemplate.daos;

import com.example.springtemplate.models.Author;
import com.example.springtemplate.repositories.AuthorRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AuthorRestOrmDao {
    @Autowired
    AuthorRestRepository authorRepository;

    @PostMapping("/api/author")
    public Author createAuthor(@RequestBody Author author) {
        return authorRepository.save(author);
    }

    @GetMapping("/api/author")
    public List<Author> findAllAuthors() {
        return authorRepository.findAllAuthors();
    }

    @GetMapping("/api/author/{authorId}")
    public Author findAuthorById(
            @PathVariable("authorId") Integer id) {
        return authorRepository.findAuthorById(id);
    }

    @PutMapping("/api/author/{authorId}")
    public Author updateAuthor(
            @PathVariable("authorId") Integer id,
            @RequestBody Author authorUpdates) {
        Author author = authorRepository.findAuthorById(id);
        author.setFirstName(authorUpdates.getFirstName());
        author.setLastName(authorUpdates.getLastName());
        author.setUsername(authorUpdates.getUsername());
        author.setPassword(authorUpdates.getPassword());
        author.setEmail(authorUpdates.getEmail());
        author.setDateOfBirth(authorUpdates.getDateOfBirth());
        author.setWriter(authorUpdates.getWriter());
        return authorRepository.save(author);
    }

    @DeleteMapping("/api/author/{authorId}")
    public void deleteAuthor(
            @PathVariable("authorId") Integer id) {
        authorRepository.deleteById(id);
    }
}