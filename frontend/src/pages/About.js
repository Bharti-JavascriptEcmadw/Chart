 import React from "react";
import Table from "../components/Table";

const About = () => {
  // Sample data for the table
  const sampleData = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
    { name: "Diana", age: 28 },
    { name: "Eve", age: 35 },
    { name: "Frank", age: 40 },
    { name: "Grace", age: 27 },
    { name: "Hank", age: 32 },
    { name: "Ivy", age: 29 },
    { name: "Jack", age: 23 },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto border-1 border-teal-500">
      <h2 className="text-2xl font-semibold mb-4">About Page</h2>
      <p className="mb-6">This is the about page of the dashboard.</p>
      <Table data={sampleData} />
    </div>
  );
};

export default About;
