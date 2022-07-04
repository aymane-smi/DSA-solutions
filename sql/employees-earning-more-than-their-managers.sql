# Write your MySQL query statement below
SELECT e.name as Employee FROM Employee e, Employee M WHERE e.salary > m.salary AND e.managerId = m.id;