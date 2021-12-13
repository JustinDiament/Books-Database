package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="writer")
public class Writer {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @ManyToOne
  @JsonIgnore
  private Author author;

  @ManyToOne
  @JsonIgnore
  private Book book;

  @Transient
  public Integer getAuthorTransientId() {
    if (author != null) {
      return author.getId();
    }
    return 0;
  }

  @Transient
  private Integer authorValue;

  @Transient
  public Integer getBookTransientId() {
    if (book != null) {
      return book.getId();
    }
    return 0;
  }

  @Transient
  private Integer bookValue;

  public Integer getId() { return id; }
  public void setId(Integer id) { this.id = id; }
  public Author getAuthor() { return author; }
  public void setAuthor(Author author) { this.author = author; }
  public Book getBook() { return book; }
  public void setBook(Book book) { this.book = book; }
  public Integer getBookValue() { return bookValue; }
  public Integer getAuthorValue() { return authorValue; }

  public Writer() {}
}
