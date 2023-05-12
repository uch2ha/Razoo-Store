package com.student.backend.config;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.stereotype.Component;

@Component
public class EnvConfig
{
  private static final EnvConfig instance = new EnvConfig();

  public static EnvConfig getConfig()
  {
    return instance;
  }

  private Dotenv env;

  public EnvConfig()
  {
    this.env = Dotenv.configure().directory("./backend/").ignoreIfMissing().load();
  }

  public String get(String variable)
  {
    return env.get(variable);
  }
}
