# Write your MySQL query statement below
#SELECT DISTINCT(name) as "Customers" FROM Customers as p LEFT JOIN Orders as o ON o.customerId = p.id WHERE o.customerId IS NULL;
SELECT Customers.name as "Customers" FROM Customers WHERE Customers.id NOT IN(SELECT customerId FROM Orders);