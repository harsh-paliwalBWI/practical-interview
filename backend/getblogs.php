<?php

// header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Origin: https://practical-interview-blog-website.netlify.app');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

                include("db.php");
                $sqlSelect = "SELECT * FROM blogs";
                $result = mysqli_query($conn,$sqlSelect);
                if (mysqli_num_rows($result) > 0) {
                    $blogs = array();
                 
                    while ($row = mysqli_fetch_assoc($result)) {
                        $blogs[] = $row;
                    }
               
                    header('Content-Type: application/json');
                    echo json_encode($blogs);
                } else {
                
                    echo json_encode([]);
                }
            ?>