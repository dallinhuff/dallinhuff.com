---
layout: ../../layouts/post.astro
title: The Critters Stack
description: Why I chose cats, tapir, skunk, and CockroachDB to build my scala web app, and why you should too.
dateFormatted: June 14, 2024
---

![cats, a tapir, a skunk, and cockroaches playing](/assets/images/posts/critters-stack.jpg)

Starting a new hobby project is a fantastic opportunity to experiment with both established and cutting-edge technologies.

While designing and implementing the backend for my latest work-in-progress project, BeautyBard, I chose a set of libraries I've named the **Critters Stack**: a backend stack comprised of exceptional libraries, each with an animal-inspired name.

The stack includes:

- [**CockroachDB**](https://www.cockroachlabs.com/) for the database
- [**skunk**](https://typelevel.org/skunk/) for the data access layer
- [**http4s**](https://http4s.org/#) with [**cats-effect**](https://typelevel.org/cats-effect/) for the HTTP and business logic layers
- [**tapir**](https://tapir.softwaremill.com/en/latest/#) for defining REST endpoints and generating API specifications

I've been very pleased with the productivity, flexibility, and performance this stack has provided for my use case. I recommend that anyone interested in using Scala or functional programming (FP) for principled software development give these technologies a try.



## Database Layer — CockroachDB

CockroachDB is a "cloud-native, distributed SQL database designed for high availability, effortless scale, and control over data placement." Under the hood, it's a distributed transactional key-value store, but its external API conforms to the Postgres wire protocol, providing all the benefits of a relational database while allowing seamless horizontal scalability.

If your project requires strong consistency guarantees, frequent joining across related entities, or if you are already familiar with Postgres, CockroachDB offers world-class scalability and availability without compromising on these fronts.



## Data Access Layer — Skunk

Skunk is a purely functional, non-blocking Postgres library for Scala. Queries, updates, and transactions are declaratively described with type-safe interpolated strings. The SQL interpolator in Skunk provides developers with the fine-grained control and performance of raw SQL while ensuring compile-time type safety akin to what an ORM library offers.

Although still pre-release software, Skunk boasts an exceptionally polished and expressive API, granting developers precise control over their queries and transactions.



## HTTP & Business Layers — http4s & Cats Effect

http4s is a minimal, idiomatic Scala library for HTTP services, and cats-effect is a library for functional programming that provides the building blocks for effectful and concurrent programming. Together, they form a robust foundation for creating scalable and maintainable business logic and HTTP services.



## Endpoint Definitions — Tapir

Tapir is a library for describing HTTP endpoints as immutable Scala values. It provides a powerful and flexible way to define your API in a type-safe manner, which can then be used to generate server implementations, client code, and API documentation.



## Conclusion

The Critters Stack has proven to be an excellent choice for my project, and I believe it can offer the same benefits to other developers looking to leverage Scala and FP principles in their software.