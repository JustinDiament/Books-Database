package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Date;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="book")
public class Book {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String title;
  private String description;
  private String publisher;
  private Date releaseDay;

  @ManyToOne
  @JsonIgnore
  private Series series;

  @OneToMany(mappedBy = "book")
  private List<Writer> writer;

  @Transient
  private Integer value;

  @Transient
  public int[] getWriterIds() {
    int[] writerIds = new int[writer.size()];

    for (int i = 0; i < writer.size(); i++) {
      writerIds[i] = writer.get(i).getId();
    }

    return writerIds;
  }

  @Transient
  public Integer getSeriesTransientId() {
    if (series != null) {
      return series.getId();
    }
    return 0;
  }

  public Integer getId() { return id; }
  public void setId(Integer id) { this.id = id; }
  public String getTitle() { return title; }
  public void setTitle(String title) { this.title = title; }
  public String getDescription() { return description; }
  public void setDescription(String description) { this.description = description; }
  public String getPublisher() { return publisher; }
  public void setPublisher(String publisher) { this.publisher = publisher; }
  public Date getReleaseDay() { return releaseDay; }
  public void setReleaseDay(Date releaseDay) { this.releaseDay = releaseDay; }
  public List<Writer> getWriter() { return writer; }
  public void setWriter(List<Writer> writer) { this.writer = writer; }

  public Series getSeries() { return series; }

  public void setSeries(Series series) { this.series = series; }

  public Integer getValue() { return value; }

  public Book(String title, String  description, String publisher, Date release_day) {
    this.title = title;
    this.description = description;
    this.publisher = publisher;
    this.releaseDay = release_day;
  }

  public Book() {}
}
