DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'login_system') THEN
    CREATE DATABASE login_system;
  END IF;
END $$;
