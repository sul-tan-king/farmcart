// View switching
function showView(viewId) {
  const views = document.querySelectorAll(".view");
  views.forEach(v => v.classList.remove("active"));
  document.getElementById(`${viewId}-view`).classList.add("active");
}

// Populate products
function populateProducts() {
  const grid = document.getElementById("product-grid");
  for (let i = 1; i <= 8; i++) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="img"></div>
      <h3>Organic Product ${i}</h3>
      <p>₹${i * 30}</p>
      <button>Add to Cart</button>
    `;
    grid.appendChild(card);
  }
}

// Chatbot toggle
function toggleChat() {
  const chatbot = document.getElementById("chatbot");
  chatbot.classList.toggle("hidden");
}

// Chatbot response logic
function sendChat() {
  const input = document.getElementById("chat-input");
  const chatLog = document.getElementById("chat-log");
  const question = input.value.trim();
  if (!question) return;

  const botReply = getFAQResponse(question);

  chatLog.innerHTML += `<p><strong>You:</strong> ${question}</p>`;
  chatLog.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
  chatLog.scrollTop = chatLog.scrollHeight;
  input.value = "";
}

function getFAQResponse(input) {
  const faqs = {
    "how to buy": "To buy a product, click on 'Add to Cart' and proceed to checkout.",
    "how to sell": "To sell, click the 'Sell' button and fill in your product details.",
    "how to contact support": "You can reach support at support@farmcart.com"
  };
  const key = input.toLowerCase();
  return faqs[key] || "Sorry, I couldn't understand that. Try asking something else!";
}

// Initialize
window.onload = function () {
  populateProducts();
  showView("home");
};
