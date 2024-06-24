package com.lp.Project;

import com.mongodb.client.MongoDatabase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class ProjectApplication {
  @Autowired
  private MongoDatabase mongoDatabase;
	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
	}

}
