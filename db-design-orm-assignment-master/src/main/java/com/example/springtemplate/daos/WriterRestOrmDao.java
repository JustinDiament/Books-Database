package com.example.springtemplate.daos;

import com.example.springtemplate.models.Writer;
import com.example.springtemplate.repositories.AuthorRestRepository;
import com.example.springtemplate.repositories.BookRestRepository;
import com.example.springtemplate.repositories.WriterRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class WriterRestOrmDao {
  @Autowired
  WriterRestRepository writerRepository;

  @Autowired
  AuthorRestRepository authorRepository;

  @Autowired
  BookRestRepository bookRepository;

  @PostMapping("/api/writer")
  public Writer createWriter(@RequestBody Writer writerUpdates) {
      Writer writer = new Writer();

        writer.setAuthor(authorRepository.findAuthorById(writerUpdates.getAuthorValue()));

        writer.setBook(bookRepository.findBookById(writerUpdates.getBookValue()));

      return writerRepository.save(writer);
  }

  @GetMapping("/api/writer")
  public List<Writer> findAllWriters() {
    return writerRepository.findAllWriters();
  }

  @GetMapping("/api/writer/{writerId}")
  public Writer findWriterById(
      @PathVariable("writerId") Integer id) {
    return writerRepository.findWriterById(id);
  }

  @PutMapping("/api/writer/{writerId}")
  public Writer updateWriter(
      @PathVariable("writerId") Integer id,
      @RequestBody Writer writerUpdates) {
    Writer writer = writerRepository.findWriterById(id);

    if (writerUpdates.getAuthorValue() > 0) {
      writer.setAuthor(authorRepository.findAuthorById(writerUpdates.getAuthorValue()));
    }

    if (writerUpdates.getBookValue() > 0) {
      writer.setBook(bookRepository.findBookById(writerUpdates.getBookValue()));
    }

    return writerRepository.save(writer);
  }

  @DeleteMapping("/api/writer/{writerId}")
  public void deleteWriter(
      @PathVariable("writerId") Integer id) {
    writerRepository.deleteById(id);
  }
}