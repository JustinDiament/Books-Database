package com.example.springtemplate.daos;

import com.example.springtemplate.models.Book;
import com.example.springtemplate.repositories.BookRestRepository;
import com.example.springtemplate.repositories.SeriesRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BookRestOrmDao {
  @Autowired
  BookRestRepository bookRepository;

  @Autowired
  SeriesRestRepository seriesRepository;

  @PostMapping("/api/book")
  public Book createBook(
      @RequestBody Book bookUpdates) {
    Book book = new Book();
    book.setTitle(bookUpdates.getTitle());
    book.setDescription(bookUpdates.getDescription());
    book.setPublisher(bookUpdates.getPublisher());
    book.setReleaseDay(bookUpdates.getReleaseDay());
    book.setWriter(bookUpdates.getWriter());

    if (bookUpdates.getValue() > 0) {
      book.setSeries(seriesRepository.findSeriesById(bookUpdates.getValue()));
    }

    return bookRepository.save(book);
  }

  @GetMapping("/api/book")
  public List<Book> findAllBooks() {
    return bookRepository.findAllBooks();
  }

  @GetMapping("/api/book/{bookId}")
  public Book findBookById(
      @PathVariable("bookId") Integer id) {
    return bookRepository.findBookById(id);
  }

  @PutMapping("/api/book/{bookId}")
  public Book updateBook(
      @PathVariable("bookId") Integer id,
      @RequestBody Book bookUpdates) {
    Book book = bookRepository.findBookById(id);
    book.setTitle(bookUpdates.getTitle());
    book.setDescription(bookUpdates.getDescription());
    book.setPublisher(bookUpdates.getPublisher());
    book.setReleaseDay(bookUpdates.getReleaseDay());
    book.setWriter(bookUpdates.getWriter());

    if (bookUpdates.getValue() > 0) {
      book.setSeries(seriesRepository.findSeriesById(bookUpdates.getValue()));
    }

    return bookRepository.save(book);
  }

  @DeleteMapping("/api/book/{bookId}")
  public void deleteBook(
      @PathVariable("bookId") Integer id) {
    bookRepository.deleteById(id);
  }
}