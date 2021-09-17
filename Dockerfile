From openjdk:11
copy ./server/target/server-0.0.1-SNAPSHOT.jar server-0.0.1-SNAPSHOT.jar
CMD ["java","-jar","server-0.0.1-SNAPSHOT.jar"]
