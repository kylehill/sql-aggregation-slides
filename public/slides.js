var slides = [
  {
    feature: true,
    content: "<h2>SQL Aggregation Functions</h2>"
  },
  {
    title: "<em>GROUP BY</em>",
    p: [
      "A <em>GROUP BY</em> clause transforms the data that's returned from a <em>SELECT</em> query, from individual table rows into groups",
      "One row is returned for each distinct group",
      "<em>GROUP BY</em> can take multiple arguments; query returns all distinct groupings as rows",
      "All selected columns must appear in the <em>GROUP BY</em> clause -- or in an aggregate function"
    ]
  },
  {
    title: "<em>GROUP BY</em> example",
    language: "sql",
    code: [
      "SELECT name",
      "FROM department_sales",
      "GROUP BY name",
    ],
    table: {
      class: "shrink jagged",
      header: [ "name" ],
      rows: [
        [ "Anna" ],
        [ "Betty" ],
        [ "Christine" ],
        [ "Donna" ],
      ]
    }
  },
  {
    title: "<em>GROUP BY</em> example",
    language: "sql",
    code: [
      "SELECT department, employee",
      "FROM department_sales",
      "GROUP BY department, employee",
    ],
    table: {
      class: "shrink jagged",
      header: [ "department", "name" ],
      rows: [
        [ "Electronics", "Anna" ],
        [ "Men's Clothing", "Anna" ],
        [ "Men's Clothing", "Betty" ],
        [ "Electronics", "Christine" ],
      ]
    }
  },
  {
    title: "Aggregation Functions",
    p: [
      "Aggregation functions synthesize data for groups from other columns",
      "Functions return a value, which is then returned by the query in a row (use <em>AS</em> to name)",
      "Can be used without <em>GROUP BY</em> clause (but will treat entire table as a single group)",
      "Aggregation functions can't be nested! Use subqueries..."
    ]
  },
  {
    title: "COUNT()",
    code: [
      "SELECT COUNT(*)",
      "FROM department_sales"
    ],
    language: "sql",
    table: {
      class: "shrink",
      header: [ "count" ],
      rows: [ [ 42918 ] ]
    }
  },
  {
    title: "COUNT()",
    code: [
      "SELECT employee, COUNT(*)",
      "FROM department_sales",
      "GROUP by employee"
    ],
    language: "sql",
    table: {
      class: "shrink",
      header: [ "employee", "count" ],
      rows: [ 
        [ "Anna", 323 ],
        [ "Betty", 190 ],
        [ "Christine", 467 ],
        [ "Donna", 355 ]
      ]
    }
  },
  {
    title: "COUNT()",
    code: [
      "SELECT COUNT(*)",
      "FROM department_sales",
      "WHERE total_price > 1000"
    ],
    language: "sql",
    table: {
      class: "shrink",
      header: [ "count" ],
      rows: [ [ 1387 ] ]
    }
  },
  {
    title: "SUM()",
    code: [
      "SELECT SUM(total_price) AS revenue",
      "FROM department_sales"
    ],
    language: "sql",
    table: {
      class: "shrink",
      header: [ "revenue" ],
      rows: [ [ 1067488.34 ] ]
    }
  },
  {
    title: "SUM()",
    code: [
      "SELECT department, SUM(item_count) AS items",
      "FROM department_sales",
      "GROUP BY department"
    ],
    language: "sql",
    table: {
      class: "shrink",
      header: [ "department", "revenue" ],
      rows: [ 
        [ "Electronics", 1519 ],
        [ "Men's Clothing", 3867 ],
        [ "Women's Clothing", 5434 ],
        [ "Gift Cards", 825 ],
      ]
    }
  },
  {
    title: "AVG()",
    code: [
      "SELECT department, AVG(total_price) AS average_sale",
      "FROM department_sales",
      "GROUP BY department"
    ],
    language: "sql",
    table: {
      class: "shrink",
      header: [ "department", "average_sale" ],
      rows: [ 
        [ "Electronics", 255.18 ],
        [ "Men's Clothing", 110.07 ],
        [ "Women's Clothing", 86.43 ],
        [ "Gift Cards", 19.25 ],
      ]
    }
  },
  {
    title: "AVG()",
    code: [
      "SELECT department, AVG(total_price / item_count) AS average_sale",
      "FROM department_sales",
      "GROUP BY department"
    ],
    language: "sql",
    table: {
      class: "shrink",
      header: [ "department", "average_item" ],
      rows: [ 
        [ "Electronics", 41.93 ],
        [ "Men's Clothing", 12.25 ],
        [ "Women's Clothing", 9.53 ],
        [ "Gift Cards", 9.37 ],
      ]
    }
  },
  {
    title: "MAX()",
    code: [
      "SELECT department, MAX(total_price) as biggest_sale",
      "FROM department_sales",
      "GROUP BY department"
    ],
    language: "sql",
    table: {
      class: "shrink",
      header: [ "department", "biggest_sale" ],
      rows: [ 
        [ "Electronics", 1799.99 ],
        [ "Men's Clothing", 1249.93 ],
        [ "Women's Clothing", 341.53 ],
        [ "Gift Cards", 125.75 ],
      ]
    }
  },
  {
    title: "MAX()",
    code: [
      "SELECT department, employee, MAX(total_price) as biggest_sale",
      "FROM department_sales",
      "GROUP BY department, employee"
    ],
    language: "sql",
    table: {
      class: "shrink",
      header: [ "department", "employee", "biggest_sale" ],
      rows: [ 
        [ "Electronics", "Anna", 549.99 ],
        [ "Electronics", "Christine", 1799.99 ],
        [ "Electronics", "Donna", 1699.98 ],
        [ "Men's Clothing", "Anna", 501.75 ],
      ]
    }
  },
  {
    title: "Demo - Nick's Sporting Goods",
    content: "Nick owns a sporting goods store; he wants to use his sales and inventory system to learn about how he can optimize his business and effectively organize his salesforce.",
    ul: [
      "How many pieces of unsold merchandise do we have?",
      "What's the total value of our unsold merchandise?",
      "What's the average value of transaction?",
      "What are my salespeoples' best departments?"
    ]
  },
  {
    title: "Demo Tables - Sports",
    table: {
      header: [ "<em>id</em> (PK)", "<em>name</em> (varchar)" ],
      rows: [
        [1, "Basketball"],
        [2, "Baseball"],
        [3, "Soccer"]
      ]
    }
  },
  {
    title: "Demo Tables - Products",
    table: {
      header: [ "<em>id</em> (PK)", "<em>name</em> (varchar)", "<em>sport</em> (FK -> sports)", "<em>price</em> (decimal)", "<em>stock</em> (int)" ],
      rows: [
        [1, "Baseball Glove", 2, 20.99, 45],
        [2, "Soccer Ball", 3, 12.99, 150],
        [3, "Soccer Cleats", 3, 59.99, 32],
        [4, "Basketball", 1, 15.99, 100],
        [5, "Hoop and Backboard", 1, 199.99, 0]
      ]
    }
  },
  {
    title: "Demo Tables - Employees",
    table: {
      header: [ "<em>id</em> (PK)", "<em>name</em> (varchar)" ],
      rows: [
        [1, "Kate"],
        [2, "Matt"],
        [3, "Sally"]
      ]
    }
  },
  {
    title: "Demo Tables - Transactions",
    table: {
      header: [ "<em>id</em> (PK)", "<em>employee</em> (FK -> employees)", "<em>product</em> (FK -> products)", "quantity (int)" ],
      rows: [
        [1, 1, 2, 4],
        [2, 3, 4, 1],
        [3, 3, 4, 1],
        [4, 2, 3, 10],
        [5, 1, 1, 9]
      ]
    }
  }
]