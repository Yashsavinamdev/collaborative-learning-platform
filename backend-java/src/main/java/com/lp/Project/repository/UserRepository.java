package com.lp.Project.repository;

import com.lp.Project.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
  // Custom query methods (if needed)
  User findByEmail(String email);
}
