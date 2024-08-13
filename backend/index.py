import os
from dotenv import load_dotenv
from flask import Flask
# from flask_login import LoginManager
import sqlalchemy
from controllers.product_management import products
# from controllers.account_management import account
# from controllers.transaction_management import transactions
# from controllers.financial_management import budget
from sqlalchemy.orm import sessionmaker
from connectors.mysql_connectors import connection
from models.users import Users

load_dotenv()

app = Flask(__name__)

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

app.register_blueprint(products)
# app.register_blueprint(account)
# app.register_blueprint(transactions)
# app.register_blueprint(budget)


# login_manager = LoginManager()
# login_manager.init_app(app)

# @login_manager.user_loader
# def load_user(username):
#     session = sessionmaker(connection)
#     s = session()
#     return s.query(Users).get(username)

@app.route('/')
def index():
    return 'Hello World!'