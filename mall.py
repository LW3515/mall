from flask import Flask

abb = Flask(__name__)


@abb.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    abb.run()
