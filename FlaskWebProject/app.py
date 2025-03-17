from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configure PostgreSQL connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgreSQL2025@localhost/ecommerce'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy
db = SQLAlchemy(app)

# Define Product model
class Product(db.Model):
    __tablename__ = 'products'
    _id = db.Column(db.String(20), primary_key=True, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    image = db.Column(db.ARRAY(db.String))
    category = db.Column(db.String(50))
    subCategory = db.Column(db.String(50))
    sizes = db.Column(db.ARRAY(db.String))
    bestseller = db.Column(db.Boolean)

    def to_dict(self):
        return {
            '_id': self._id,
            'name': self.name,
            'description': self.description,
            'price': str(self.price),
            'image': self.image,
            'category': self.category,
            'subCategory': self.subCategory,
            'sizes': self.sizes,
            'bestseller': self.bestseller
        }

@app.route("/")  # Default routepython
def home():
    return jsonify({"message": "Welcome to the API!"})

# Endpoint to fetch all products
@app.route('/api/products', methods=['GET'])
def get_products():
    try:
        products = Product.query.all()  # Query all products
        return jsonify([product.to_dict() for product in products])  # Convert to dictionary and return JSON response
    except Exception as e:
        return jsonify({'message': 'Error fetching products', 'error': str(e)}), 500

# Endpoint to add a new product
@app.route('/api/products', methods=['POST'])
def add_product():
    try:
        data = request.get_json()  # Get the data from the POST request
        new_product = Product(
            _id=data['_id'],
            name=data['name'],
            description=data['description'],
            price=data['price'],
            image=data['image'],
            category=data['category'],
            subCategory=data['subCategory'],
            sizes=data['sizes'],
            bestseller=data['bestseller']
        )
        db.session.add(new_product)  # Add the new product to the session
        db.session.commit()  # Commit the transaction
        return jsonify(new_product.to_dict()), 201  # Return the added product
    except Exception as e:
        return jsonify({'message': 'Error adding product', 'error': str(e)}), 500

# Endpoint to update a product by ID
@app.route('/api/products/<product_id>', methods=['PUT'])
def update_product(product_id):
    try:
        data = request.get_json()  # Get the data from the PUT request
        product = Product.query.filter_by(_id=product_id).first()  # Find product by ID

        if not product:
            return jsonify({'message': 'Product not found'}), 404

        product.name = data['name']
        product.description = data['description']
        product.price = data['price']
        product.image = data['image']
        product.category = data['category']
        product.subCategory = data['subCategory']
        product.sizes = data['sizes']
        product.bestseller = data['bestseller']

        db.session.commit()  # Commit the updated product to the session
        return jsonify(product.to_dict())  # Return the updated product
    except Exception as e:
        return jsonify({'message': 'Error updating product', 'error': str(e)}), 500

# Endpoint to delete a product by ID
@app.route('/api/products/<product_id>', methods=['DELETE'])
def delete_product(product_id):
    try:
        product = Product.query.filter_by(_id=product_id).first()  # Find product by ID

        if not product:
            return jsonify({'message': 'Product not found'}), 404

        db.session.delete(product)  # Delete the product
        db.session.commit()  # Commit the transaction
        return jsonify({'message': 'Product deleted successfully'}), 200
    except Exception as e:
        return jsonify({'message': 'Error deleting product', 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)



