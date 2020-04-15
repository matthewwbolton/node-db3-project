-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

    SELECT ProductName, CategoryName FROM Product AS P
    JOIN Category AS C
    ON P.CategoryId = C.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

    SELECT O.Id, O.ShipName FROM [Order] AS O
    WHERE O.OrderDate < '2012-08-09';    

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

    SELECT p.productname, od.quantity FROM Product as p
    JOIN OrderDetail as od
    ON p.Id = od.ProductId
    WHERE od.OrderId = 10251
    ORDER BY p.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

    SELECT o.id as 'Order ID'
    , c.companyname as 'Company Name of Customer'
    , e.lastname as 'Employee Last Name' 
    FROM [Order] as o
    JOIN Customer as c ON o.CustomerId = c.Id
    JOIN Employee as e ON o.EmployeeId = e.Id;