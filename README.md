# cs253project

Fetching Hashtag Stream

Extract real-time tweets using tweepy streamlistener and filter each each based on #hashtags we are interested in. In this case base on five hashtag names.

The tweets are first sent to Kafka message broker which serves as intermidiary storage. The stored messages are then read from the message broker using Apache Spark for aggreagtion. The tweets are filtered by hastags and specific hastag names, these names are then aggregated and persist into Hbase as well as google cloud firestore.

Angular application is used to visually display the hashtag counts as they change in real-time. This is made possible by google cloud firestore library.

Setting up the environment

Running HBase

Run the HBase start up script.
/opt/hbase-2.2.5/bin/start-hbase.sh
HappyBase uses the Thrift interface to communicate with HBase. So make sure this interface is up and running.

/opt/hbase-2.2.5/bin/hbase-daemon.sh start thrift
Use jps to make sure both HBase and its Thrift interface are up and running correctly. You can also navigate to http://localhost:16010 in your web browser to view the status of this HBase standalone instance.

Run the hbase shell and create the hashtags table that we shall use in the applications.

hbase(main):001:0> create 'hashtags', {NAME => 'hashtag'}
Running Kafka

Configure this Zookeeper instance to run on port 2182 (clientPort in zookeeper.properties) and then run it:

/opt/kafka_2.13-2.6.0/bin/zookeeper-server-start.sh config/zookeeper.properties
Then, run the Kafka server on the default port - 9092:

/opt/kafka_2.13-2.6.0/bin/kafka-server-start.sh config/server.properties
There's no need to create the topic we shall use as the producer creates it if it does not find it.

Visualize hashtag counts

To run the Angular front end application:

ng serve 
Navigate to http://localhost:4200 in a web browser for a visualization of the hashtag counts.

Further references

HBase Installation
HappyBase
HBase Thrift Interface
Kafka with Python
Spark Streaming Kafka Integration
Streaming Samples
Angular
Google cloud firestore
