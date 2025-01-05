package com.pfa5.predictionms.Entities;

import com.pfa5.predictionms.Model.Evenement;
import com.pfa5.predictionms.Model.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Prediction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String photo;
    private String prediction;
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private LocalDate date;
    @Transient
    private List<User> user=new ArrayList<>();
    @Transient
    private Evenement evenement;

}