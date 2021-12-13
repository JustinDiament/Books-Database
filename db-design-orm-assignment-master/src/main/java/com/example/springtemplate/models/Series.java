package com.example.springtemplate.models;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="series")
public class Series {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String title;
  private Boolean hasMovieAdaptation;
  private String genre;

  @OneToMany(mappedBy = "series", cascade = CascadeType.ALL)
  private List<Book> book;

  @Transient
  public int[] getBookIds() {
    int[] bookIds = new int[book.size()];

    for (int i = 0; i < book.size(); i++) {
      bookIds[i] = book.get(i).getId();
    }

    return bookIds;
  }

  public Integer getId() { return id; }
  public void setId(Integer id) { this.id = id; }
  public String getTitle() { return title; }
  public void setTitle(String title) { this.title = title; }
  public boolean getHasMovieAdaptation() { return hasMovieAdaptation; }
  public void setHasMovieAdaptation(Boolean hasMovieAdaptation) { this.hasMovieAdaptation = hasMovieAdaptation; }
  public String getGenre() { return genre; }
  public void setGenre(String genre) { this.genre = genre; }
  public List<Book> getBook() {
    return book;
  }
  public void setBook(List<Book> book) {
    this.book = book;
  }

  public Series(String title, Boolean hasMovieAdaptation, String genre) {
    this.title = title;
    this.hasMovieAdaptation = hasMovieAdaptation;
    this.genre = genre;
  }

  public Series() {}
}
