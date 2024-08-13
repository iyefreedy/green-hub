from flask import Blueprint, jsonify, request
from flask_login import login_required
from connectors.mysql_connectors import connection
from models.product import products_list
from sqlalchemy.orm import sessionmaker
from datetime import datetime

products_list = Blueprint('accounts', __name__)

@products_list.route('/products/', methods=['GET'])
# @login_required
def get_product():
    session = sessionmaker(connection)
    s = session()
  
    try:
        product = s.query(Product).all()
        products_list = []
        for prod in products:
            product_data = {
                'product_id': prod.id,
                'seller_id': prod.user_id,
                'name': prod.product_name,
                'price': prod.price,
                'description': prod.description,
                'stock': prod.stock,
                'product_category': prod.category,
                'product_grade': prod.grade,
                'product_type': prod.type
            }
            products_list.append(product_data)
        return jsonify(products_list), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        s.close()


# @account.route('/accounts/', methods=['POST'])
# @login_required
# def create_account():
#     session = sessionmaker(bind=connection)
#     s = session()
#     try:
        
#         data = request.get_json()
#         if data is None or not isinstance(data, dict):
#             return jsonify({"error": "Missing or invalid JSON data"}), 400

#         new_account = Accounts(
#             id=data.get('id'),
#             user_id=data.get('user_id'),
#             account_type=data.get('account_type'),
#             account_number=data.get('account_number'),
#             balance=data.get('balance', 0),
#             created_at=datetime.utcnow(),
#             updated_at=datetime.utcnow()
#         )
#         s.add(new_account)
#         s.commit()
#         return jsonify({"message": "Account created successfully", "account_id": new_account.id}), 201

#     except Exception as e:
#         s.rollback()
#         return jsonify({"error": str(e)}), 500

#     finally:
#         s.close()

# @account.route('/accounts/<int:account_id>', methods=['PUT'])
# @login_required
# def update_account(account_id):
#     session = sessionmaker(bind=connection)
#     s = session()
#     try:
#         account = s.query(Accounts).filter_by(id=account_id).first()
#         if account is None:
#             return jsonify({"error": "Account not found"}), 404

#         data = request.get_json()
#         if data is None or not isinstance(data, dict):
#             return jsonify({"error": "Missing or invalid JSON data"}), 400

#         account.account_type = data.get('account_type', account.account_type)
#         account.account_number = data.get('account_number', account.account_number)
#         account.balance = data.get('balance', account.balance)
#         account.updated_at = datetime.utcnow()
#         s.commit()
#         return jsonify({"message": "Account updated successfully"}), 200
#     except Exception as e:
#         s.rollback()
#         return jsonify({"error": str(e)}), 500
#     finally:
#         s.close()

# @account.route('/accounts/<int:account_id>', methods=['DELETE'])
# @login_required
# def delete_account(account_id):
#     session = sessionmaker(bind=connection)
#     s = session()
#     try:
#         account = s.query(Accounts).filter_by(id=account_id).first()
#         if account is None:
#             return jsonify({"error": "Account not found"}), 404
#         s.delete(account)
#         s.commit()
#         return jsonify({"message": "Account deleted successfully"}), 200
#     except Exception as e:
#         s.rollback()
#         return jsonify({"error": str(e)}), 500
#     finally:
#         s.close()