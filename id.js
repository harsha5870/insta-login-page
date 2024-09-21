// Creating HTML elements
const htmlContent = `
<!DOCTYPE html>
<html>
<head>h1 {
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}
  <title>Instagram Id of my friends</title>
  <style>
h1 {
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}


    .container {
      display: flex;
      flex-wrap: wrap;
    }
    .item {
      flex: 1;
      margin: 10px;
    }
    .item img {
      width: 100%;
      height: auto;
    }
    @media (min-width: 600px) {
      .container {
        flex-direction: row;
      }
      .item {
        flex: 1;
        margin: 10px;
      }
    }
  </style>
</head>
<body>
  <h1>ID's Of My Friend's</h1>
  <div class="container">
    <div class="item">
      <a href="https://www.instagram.com/manikantha__gowda/#"><p>Manikantha</p><img src="C:\\Users\\ythar\\OneDrive\\Pictures\\Screenshots\\Screenshot 2024-04-21 101011.png" width="500" height="650"></a>
    </div>
    <div class="item">
      <a href="https://www.instagram.com/ganiiiii_07/#"><p>T.Ganesh</p><img src="C:\\Users\\ythar\\OneDrive\\Pictures\\WhatsApp Image 2024-04-21 at 10.19.48_b46bf048.jpg" width="500" height="650"></a>
    </div>
    <div class="item">
      <a href="https://www.instagram.com/venki__1612/#"><p>Venkatesh Prasad</p><img src="C:\\Users\\ythar\\OneDrive\\Pictures\\WhatsApp Image 2024-04-21 at 10.24.32_4787d393.jpg" width="auto" height="650"></a>
    </div>
    <div class="item">
      <a href="https://www.instagram.com/ll._.7sea._.ll#"><p>Mallesh K R</p><img src="C:\\Users\\ythar\\OneDrive\\Pictures\\WhatsApp Image 2024-04-21 at 10.24.32_4787d393.jpg" width="auto" height="650"></a>
    </div>
  </div>
</body>
</html>
`;

// Creating a blob from HTML content
const blob = new Blob([htmlContent], { type: 'text/html' });

// Creating a URL for the blob
const url = URL.createObjectURL(blob);

// Opening the generated HTML in a new window
window.open(url);
