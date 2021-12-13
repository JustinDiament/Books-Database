package com.example.springtemplate.models;

import java.sql.Timestamp;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="author")
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private Timestamp dateOfBirth;

    @OneToMany(mappedBy = "author")
    private List<Writer> writer;

    @Transient
    public int[] getWriterIds() {
        int[] writerIds = new int[writer.size()];

        for (int i = 0; i < writer.size(); i++) {
            writerIds[i] = writer.get(i).getId();
        }

        return writerIds;
    }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public Timestamp getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(Timestamp dateOfBirth) { this.dateOfBirth = dateOfBirth; }
    public List<Writer> getWriter() { return writer; }
    public void setWriter(List<Writer> writer) { this.writer = writer; }

    public Author(String first_name, String last_name, String username, String password,
        String email, Timestamp dateOfBirth) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }

    public Author() {}
}
