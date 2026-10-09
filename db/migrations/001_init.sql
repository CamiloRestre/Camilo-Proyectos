-- Base schema proposal for future admin panel and policy versioning (PostgreSQL)
CREATE TABLE IF NOT EXISTS businesses (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(120) UNIQUE NOT NULL,
  business_name VARCHAR(180) NOT NULL,
  legal_name VARCHAR(180),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS privacy_policies (
  id SERIAL PRIMARY KEY,
  business_id INTEGER NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  version VARCHAR(40) NOT NULL,
  effective_date DATE NOT NULL,
  published BOOLEAN NOT NULL DEFAULT FALSE,
  policy_payload JSONB NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE (business_id, version)
);

CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(180) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(60) NOT NULL DEFAULT 'admin',
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS admin_audit_logs (
  id SERIAL PRIMARY KEY,
  admin_user_id INTEGER REFERENCES admin_users(id) ON DELETE SET NULL,
  action VARCHAR(120) NOT NULL,
  entity_type VARCHAR(120) NOT NULL,
  entity_id INTEGER,
  metadata JSONB,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
