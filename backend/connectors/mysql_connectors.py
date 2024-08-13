from sqlalchemy import create_engine
import os
from dotenv import load_dotenv

load_dotenv()

username    = os.getenv('DB_Username')
password    = os.getenv('DB_Password')
host        = os.getenv('DB_Host')
database    = os.getenv('DB_Database')
# port        = os.getenv('DB_Port')


# username    = "root"
# password    = "admin"
# host        = "127.0.0.1"
# database    = "product"
# port        = "3306"

print("connecting to database")
engine = create_engine(f'mysql+mysqlconnector://{username}:{password}@{host}/{database}')

connection = engine.connect()
print('connected')