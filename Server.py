"""Main Flask module for serving application.
"""
import sys
import flask
import json
import pandas as pd
from os import listdir

from flask import Flask, render_template, url_for, request
# sys.path.insert(0, "..")


# print(type(analyze_simulations))
app = Flask(__name__)
app.config["SECRET_KEY"] = "593dc3612430f9a1c1aa214821623db2"
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/", methods=["GET", "POST"])
@app.route("/index.html", methods=["GET", "POST"])
def home_page():
    return render_template('index.html')

@app.route("/about", methods=["GET", "POST"])
@app.route("/about.html", methods=["GET", "POST"])
def about_page():
    return render_template('about.html')


@app.route("/projects/hacking-the-election", methods=["GET", "POST"])
@app.route("/projects/hacking-the-election.html", methods=["GET", "POST"])
def hacking_the_election_page():
    return render_template('projects/hacking-the-election.html')

@app.route("/projects/in-the-zone", methods=["GET", "POST"])
@app.route("/projects/in-the-zone.html", methods=["GET", "POST"])
def in_the_zone_page():
    return render_template('projects/in-the-zone.html')

@app.route("/art", methods=["GET", "POST"])
@app.route("/art.html", methods=["GET", "POST"])
def art_page():
    return render_template('art.html')

    
@app.route("/blog", methods=["GET", "POST"])
@app.route("/blog.html", methods=["GET", "POST"])
def blog_page():
    return render_template('blog.html')
    
@app.route("/projects", methods=["GET", "POST"])
@app.route("/projects.html", methods=["GET", "POST"])
def projects_page():
    return render_template('projects.html')


if __name__ == '__main__':
    app.run(host="127.0.0.1", port="8080", debug=True)