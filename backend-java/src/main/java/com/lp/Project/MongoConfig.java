package com.lp.Project;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MongoConfig {

  @Bean
  public MongoClient mongoClient() {
    String uri = "mongodb+srv://yashsavinamdev:sT%40nGY7XPxJV!zw@learningapp.s5mxuhn.mongodb.net/?retryWrites=true&w=majority&appName=LearningApp";

    MongoClientSettings settings = MongoClientSettings.builder()
      .applyConnectionString(new ConnectionString(uri))
      .build();

    return MongoClients.create(settings);
  }

  @Bean
  public MongoDatabase mongoDatabase() {
    return mongoClient().getDatabase("admin");
  }
}
