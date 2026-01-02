<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Food Stall Registration</title>

  <!-- Icons -->
  <link href="https://unpkg.com/lucide-static@latest/font/lucide.css" rel="stylesheet">

  <style>
    * {
      box-sizing: border-box;
      font-family: Inter, system-ui, sans-serif;
    }

    body {
      margin: 0;
      min-height: 100vh;
      background: radial-gradient(circle at top, #0f172a, #020617);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }

    .container {
      width: 100%;
      max-width: 760px;
      background: rgba(15, 23, 42, 0.75);
      border: 1px solid rgba(148, 163, 184, 0.15);
      border-radius: 20px;
      padding: 32px;
      box-shadow: 0 25px 80px rgba(0,0,0,0.6);
    }

    h1 {
      text-align: center;
      margin-bottom: 8px;
      font-size: 32px;
    }

    .subtitle {
      text-align: center;
      color: #94a3b8;
      margin-bottom: 32px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    @media (max-width: 640px) {
      .grid { grid-template-columns: 1fr; }
    }

    label {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
      font-size: 14px;
      font-weight: 500;
    }

    label i { color: #facc15; }

    input, select, textarea {
      width: 100%;
      background: rgba(2, 6, 23, 0.7);
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 14px;
      padding: 14px 16px;
      color: #fff;
      font-size: 15px;
      outline: none;
    }

    input::placeholder, textarea::placeholder {
      color: #64748b;
    }

    input:focus, select:focus, textarea:focus {
      border-color: #facc15;
    }

    textarea {
      min-height: 100px;
      resize: vertical;
    }

    .full { grid-column: span 2; }

    @media (max-width: 640px) {
      .full { grid-column: span 1; }
    }

    button {
      margin-top: 24px;
      width: 100%;
      background: linear-gradient(to right, #facc15, #eab308);
      border: none;
      border-radius: 16px;
      padding: 16px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      color: #020617;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .footer-text {
      margin-top: 14px;
      text-align: center;
      font-size: 13px;
      color: #94a3b8;
    }
  </style>
</head>

<body>

<form class="container"
      action="https://formspree.io/f/xrebqgge"
      method="POST">

  <h1>Register Your Food Stall</h1>
  <p class="subtitle">
    Fill out the form below to secure your spot at the food festival
  </p>

  <div class="grid">

    <div>
      <label><i class="lucide-store"></i> Stall Name *</label>
      <input name="stall_name" required placeholder="e.g., Spice Garden">
    </div>

    <div>
      <label><i class="lucide-user"></i> Owner Name *</label>
      <input name="owner_name" required placeholder="Your full name">
    </div>

    <div>
      <label><i class="lucide-mail"></i> Email Address *</label>
      <input type="email" name="email" required placeholder="your@email.com">
    </div>

    <div>
      <label><i class="lucide-phone"></i> Phone Number *</label>
      <input name="phone" required placeholder="+91 98765 43210">
    </div>

    <div class="full">
      <label><i class="lucide-utensils"></i> Food Category *</label>
      <select name="food_category" required>
        <option value="" disabled selected>Select your food category</option>
        <option>Indian Cuisine</option>
        <option>Chinese / Indo-Chinese</option>
        <option>Street Food</option>
        <option>Desserts & Sweets</option>
        <option>Beverages & Drinks</option>
        <option>Snacks & Fast Food</option>
        <option>Other</option>
      </select>
    </div>

    <div class="full">
      <label>Menu Items (Optional)</label>
      <textarea name="menu_items" placeholder="List your main menu items..."></textarea>
    </div>

    <div class="full">
      <label>Special Requirements (Optional)</label>
      <textarea name="special_requirements" placeholder="Any special equipment or space requirements..."></textarea>
    </div>

  </div>

  <!-- Formspree extras -->
  <input type="hidden" name="_subject" value="New Food Stall Registration">
  <input type="hidden" name="_template" value="table">
  <input type="text" name="_gotcha" style="display:none">

  <button type="submit">
    <i class="lucide-send"></i>
    Register Your Stall
  </button>

  <p class="footer-text">
    By registering, you agree to follow the event guidelines and food safety standards.
  </p>

</form>

</body>
</html>
