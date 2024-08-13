from sqlalchemy import create_engine
import os

username    = os.getenv('DB_Username')
password    = os.getenv('DB_Password')
host        = os.getenv('DB_Host')
database    = os.getenv('DB_Database')
port        = os.getenv('DB_Port')

# Check if any environment variable is not set
# if not all([username, password, host, database, port]):
#     raise ValueError("One or more environment variables are not set. Please check DB_Username, DB_Password, DB_Host, DB_Database, and DB_Port.")

# # Ensure port is an integer
# try:
#     port = int(port)
# except ValueError:
#     raise ValueError("DB_Port must be an integer.")

# username    = "root"
# password    = "admin"
# host        = "127.0.0.1"
# database    = "user"
# port        = "3306"

print("connecting to database")
engine = create_engine(f'mysql+mysqlconnector://{username}:{password}@{host}:{port}/{database}')

connection = engine.connect()
print('connected')