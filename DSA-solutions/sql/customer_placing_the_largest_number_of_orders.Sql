SELECT customer_number FROM Orders GROUP BY customer_number ORDER BY count(*) DESC limit 1;
