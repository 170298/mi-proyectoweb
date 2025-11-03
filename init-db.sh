#!/usr/bin/env sh
# init-db.sh - import schema.sql into a MySQL server using env vars.
set -e
: "${DB_HOST:?Need DB_HOST}" 
: "${DB_USER:?Need DB_USER}"
: "${DB_PASS:=}"
: "${DB_NAME:=proyecto_db}"

echo "Importing schema.sql into $DB_HOST as $DB_USER (DB: $DB_NAME)"
if command -v mysql >/dev/null 2>&1; then
  mysql -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASS" < schema.sql
  echo "Import complete."
else
  echo "mysql client not found. Please run the SQL import manually or install mysql client."
  exit 1
fi
