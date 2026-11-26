<?php
header("Access-Control-Allow-Origin: http://localhost:3001");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

try {
    $pdo = new PDO(
        "mysql:host=localhost;dbname=todolist;charset=utf8",
        "root",
        ""
    );

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] === "GET") {
        $stmt = $pdo->query("SELECT * FROM todo ORDER BY id DESC");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        exit;
    }

    $data = json_decode(file_get_contents("php://input"), true);
    $action = $data["action"] ?? "";

    if ($action === "new") {
        $stmt = $pdo->prepare("INSERT INTO todo (title) VALUES (?)");
        $stmt->execute([$data["title"]]);
    }

    if ($action === "toggle") {
        $stmt = $pdo->prepare("UPDATE todo SET done = 1-done WHERE id = ?");
        $stmt->execute([$data["id"]]);
    }

    if ($action === "delete") {
        $stmt = $pdo->prepare("DELETE FROM todo WHERE id = ?");
        $stmt->execute([$data["id"]]);
    }

    echo json_encode(["success" => true]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed"]);
}
?>
