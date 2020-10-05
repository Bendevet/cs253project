import tweepy
import time
from kafka import KafkaProducer
import json
from json import dumps
from random import seed
from random import randint
import os

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

seed(1)
low_boundary = 10;
upper_boundary = 1000

cred = credentials.Certificate("./service-account.json")
firebase_admin.initialize_app(cred)

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'service-account.json'

# twitter setup
consumer_key = "M5QXN1Tl0KcOFZUa9Jz6dO61M"
consumer_secret = "NgN8sKeVPXomcvgAjLxlB8oXLg6rwVstiXS6NQgHUTaG4uQILd"
access_token = "769752813777907712-OhOKGUgTfEm06Lcn4XSytlhJYjmpVnT"
access_token_secret = "g2TUuDAR7rvrlnI6pGkmnNqw8XDSCp2rH5NTnCEWQjxna"

db = firestore.Client()
doc_ref = db.collection(u'trends').document(u'trends')
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

producer = KafkaProducer(bootstrap_servers=['localhost:9092'], value_serializer=lambda x: dumps(x).encode("utf-8"))
topic_name = 'bendevet'


# def write_to_firestore():
#     doc_ref.set({
#         u'Trump': p1 + randint(low_boundary, upper_boundary),
#         u'Pence': p2 + randint(low_boundary, upper_boundary),
#         u'Biden': p3 + randint(low_boundary, upper_boundary),
#         u'Harris': p4 + randint(low_boundary, upper_boundary),
#         u'Pelosi': p5 + randint(low_boundary, upper_boundary),
#     })


class MyStreamListener(tweepy.StreamListener):

    def on_status(self, status):
        pass

    def on_data(self, raw_data):
        raw_tweet = json.loads(raw_data)
        tweet_text = raw_tweet['text']
        print(tweet_text)
        # write_to_firestore()
        producer.send(topic_name, value=tweet_text)


myStreamListener = MyStreamListener()
myStream = tweepy.Stream(auth=api.auth, listener=myStreamListener)
myStream.filter(track=['#Trump', '#Pence', '#Biden', '#Harris', '#Pelosi'])
