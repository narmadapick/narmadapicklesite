// script.js
document.addEventListener("DOMContentLoaded", () => {
  // ─── 1. DATA & HELPERS ───
  const PRODUCTS = {
    "Mango (Aavakaaya)": {
      img: "assets/mango.jpg",
      desc: "Savor our authentic Mango Aavakaaya—handpicked raw mangoes tossed with mustard seeds, fenugreek & red chilies, then sun-fermented in cold-pressed mustard oil for a tangy, fiery Andhra-style pickle. Perfect on rice, curd rice & dosas.",
      prices: { "500g": 4.99, "1kg": 7.99 },
      slides: ["assets/mango.jpg", "assets/mango-2.jpg"]
    },
    "tomato": {
      img: "assets/tomato.jpg",
      desc: "Brighten your meals with our Tangy Tomato Pickle—sun-ripened tomatoes slow-cooked with mustard seeds, curry leaves & spices in pure mustard oil. A savory, zesty condiment ideal on rice, sandwiches & snacks.",
      prices: { "500g": 4.99, "1kg": 7.99 },
      slides: ["assets/tomato.jpg", "assets/tomato-2.jpg"]
    },
    "red chilli": {
      img: "assets/red chilli.jpg",
      desc: "Turn up the heat with our Spicy Red Chilli Pickle—premium Kashmiri & Guntur chilies tempered with garlic, tamarind & asafoetida, then cooked in mustard oil for a bold, umami-rich Andhra-style spicy pickle.",
      prices: { "500g": 4.99, "1kg": 7.99 },
      slides: ["assets/red chilli.jpg", "assets/red chilli-2.jpg"]
    },
    "amla": {
      img: "assets/amla.jpg",
      desc: "Boost your health with our Amla Pickle—fresh Indian gooseberries infused with turmeric, ginger & jaggery, slow-cooked in mustard oil to balance tangy, sweet & spicy notes. A vitamin-C rich Andhra delicacy.",
      prices: { "500g": 3.99, "1kg": 6.99 },
      slides: ["assets/amla.jpg", "assets/amla-2.jpg"]
    },
    "cut mango": {
      img: "assets/cut mango.jpg",
      desc: "Enjoy the crisp bite of Cut Mango Pickle—hand-cut raw mango slices tossed with mustard seeds, asafoetida & chili powder, then sun-fermented in pure mustard oil for a tangy, crunchy snack.",
      prices: { "500g": 3.99, "1kg": 6.99 },
      slides: ["assets/cut mango.jpg", "assets/cutmango.jpeg"]
    },
    "Gongura": {
      img: "assets/gongura.jpg",
      desc: "Experience the tart punch of Gongura Pickle—sorrel leaves tempered with garlic, green chilies & spices, slow-cooked in mustard oil for a bold, tangy Andhra staple that pairs perfectly with hot rice.",
      prices: { "500g": 4.99, "1kg": 7.99 },
      slides: ["assets/gongura.jpg", "assets/gongura-2.jpg"]
    },
    "Lemon": {
      img: "assets/lemon.jpg",
      desc: "Zest up your plate with our Lemon Pickle—whole lemons marinated in garlic, chilies & secret spices, preserved in cold-pressed mustard oil for a citrusy, savory condiment that enlivens curries, salads & more.",
      prices: { "500g": 3.99, "1kg": 5.99 },
      slides: ["assets/lemon.jpg", "assets/lemon-2.jpg"]
    },
    "Allam": {
      img: "assets/allam.jpeg",
      desc: "Add a warming kick with Ginger Pickle—fresh ginger root shredded & sautéed with mustard seeds, curry leaves & green chilies in pure oil, delivering a spicy, aromatic zing to rice & snacks.",
      prices: { "500g": 3.99, "1kg": 5.99 },
      slides: ["assets/allam.jpeg", "assets/ginger.jpeg"]
    },
    "Tamarind": {
      img: "assets/tamrind.jpg",
      desc: "Relish the sweet-tart flavor of Tamarind Pickle—pulped tamarind, jaggery & red chilies slow-stewed in mustard oil for a luscious, chutney-style pickle that complements any meal.",
      prices: { "500g": 2.99, "1kg": 5.99 },
      slides: ["assets/tamrind.jpg", "assets/tamrind-2.jpg"]
    },
    "Chicken (Boneless)": {
      img: "assets/chicken.jpg",
      desc: "Indulge in Boneless Chicken Pickle—tender chicken pieces marinated in fiery red chilies, garlic & spices, then slow-cooked in mustard oil for a rich, protein-packed non-veg Andhra delicacy.",
      prices: { "500g": 10.99, "1kg": 18.99 },
      slides: ["assets/chicken.jpg", "assets/chicken-2.jpg"]
    },
    "Gongura chicken": {
      img: "assets/gongurachicken.jpg",
      desc: "Discover Gongura Chicken Pickle—succulent chicken cubes cooked with tangy sorrel leaves, green chilies & garlic in mustard oil, creating a spicy, zesty non-veg Andhra specialty.",
      prices: { "500g": 11.99, "1kg": 21.99 },
      slides: ["assets/gongurachicken.jpg", "assets/gongurachicken-2.jpg"]
    },
    "Prawns": {
      img: "assets/prawns.jpg",
      desc: "Delight in Prawn Pickle—fresh prawns marinated in a robust masala of red chilies, tamarind & spices, cooked in mustard oil for a savory, seafood twist on classic Andhra pickles.",
      prices: { "500g": 12.99, "1kg": 22.99 },
      slides: ["assets/prawns.jpg", "assets/prawns-2.jpg"]
    },
    "Mutton (Boneless)": {
      img: "assets/mutton.jpg",
      desc: "Savor Boneless Mutton Pickle—premium mutton chunks slow-cooked with red chilies, ginger & aromatic spices in mustard oil, delivering a rich, meaty Andhra-style pickle with bold flavors.",
      prices: { "500g": 13.99, "1kg": 23.99 },
      slides: ["assets/mutton.jpg", "assets/mutton-2.jpg"]
    },
    "Gongura Prawns": {
      img: "assets/gonguraprawns.jpg",
      desc: "Spice up your palate with Gongura Prawns Pickle—fresh prawns & sorrel leaves slow-cooked in a fiery blend of garlic, green chilies & mustard oil, offering a tangy-seafood fusion from Andhra cuisine.",
      prices: { "500g": 13.99, "1kg": 23.99 },
      slides: ["assets/gonguraprawns.jpg", "assets/gonguraprawns-2.jpg"]
    },
    "Chili Powder": {
      img: "assets/chillipowder.jpg",
      desc: "Add bold, fiery flavor to your cooking with our authentic Red Chilli Powder, made from sun-dried Guntur chillies. Known for their natural spice and deep color, our chilli powder is 100% pure, preservative-free, and packed fresh to deliver the perfect heat to your curries, fries, and masalas. Whether you're making biryani or daily dal, this homemade karam podi brings real Andhra-style punch to your food.",
      prices: { "250g": 2.99, "500g": 4.99 },
      slides: ["assets/chillipowder.jpg"]
    },
    "kakarakaya karam": {
      img: "assets/kakarakaya.jpg",
      desc: "Our Kakarakaya Karam is a specialty podi from Andhra cuisine, made with roasted bitter gourd (kakarakaya), lentils, spices, and red chilli. Slightly bitter, mildly spicy, and uniquely flavorful — this powder is a favorite when mixed with hot rice and ghee or served alongside idli/dosa. Made in small batches, it’s a traditional homemade spice mix with no additives or preservatives.",
      prices: { "250g": 2.99, "500g": 4.99 },
      slides: ["assets/kakarakaya.jpg"]
    },
    "Sambhar Podi": {
      img: "assets/sambhar.jpg",
      desc: "Bring the rich aroma of South India to your kitchen with our Sambar Podi, a carefully balanced blend of roasted lentils, coriander, red chillies, and spices. Perfect for making delicious, flavorful sambar at home — just add it to boiling dal and vegetables for that authentic Tamil-style taste. Our homemade sambar powder is freshly ground, free from preservatives, and full of flavor.",
      prices: { "250g": 2.99, "500g": 4.99 },
      slides: ["assets/sambhar.jpg"]
    }
  };

  // ─── 2. CART STORAGE HELPERS ───
  const CART_KEY       = "narmada_cart";
  const getCart        = () => JSON.parse(localStorage.getItem(CART_KEY)) || [];
  const saveCart       = c => localStorage.setItem(CART_KEY, JSON.stringify(c));
  const updateCartCount = () => {
    document.getElementById("cart-count").innerText = getCart().length;
  };
  updateCartCount();

  // ─── (the rest of your script.js follows unchanged) ───

  // ─── 3. NAV MENU & SEARCH ───
  document.querySelector(".menu-btn")?.addEventListener("click", () => {
    document.querySelector(".nav-list")?.classList.toggle("open");
  });
  document.addEventListener("click", e => {
    const nav = document.querySelector(".nav-list");
    const btn = document.querySelector(".menu-btn");
    if (nav && btn && !nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove("open");
    }
  });

  const searchInput = document.getElementById("search-bar");
  if (searchInput) {
    const suggestions = document.getElementById("search-suggestions");
    searchInput.addEventListener("input", e => {
      const q = e.target.value.toLowerCase();
      const matches = Object.keys(PRODUCTS)
        .filter(name => name.toLowerCase().includes(q))
        .sort();
      suggestions.innerHTML = matches.map(n => `<li>${n}</li>`).join("");
      suggestions.style.display = q ? "block" : "none";
    });
    suggestions?.addEventListener("click", e => {
      if (e.target.tagName === "LI") {
        const pick = e.target.innerText;
        location.href = `product.html?name=${encodeURIComponent(pick)}`;
      }
    });
  }


  // ─── 4. MINI CART PANEL ───
  window.toggleCartPanel = () => {
    document.getElementById("cart-panel")?.classList.toggle("open");
    renderCartPanel();
  };
  document.getElementById("close-cart")?.addEventListener("click", toggleCartPanel);

  function renderCartPanel() {
    const panelItems = document.getElementById("cart-panel-items");
    const totalEl    = document.getElementById("cart-panel-total");
    const cart       = getCart();
    if (!panelItems || !totalEl) return;

    if (cart.length === 0) {
      panelItems.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      panelItems.innerHTML = cart.map((it,i) =>
        `<li>
           ${it.name} (${it.weight}) x${it.qty} — $${(it.price*it.qty).toFixed(2)}
           <button data-idx="${i}">✖</button>
         </li>`
      ).join("");
      panelItems.querySelectorAll("button[data-idx]").forEach(btn => {
        btn.onclick = () => {
          const c = getCart();
          c.splice(+btn.dataset.idx, 1);
          saveCart(c);
          updateCartCount();
          renderCartPanel();
        };
      });
    }
    totalEl.innerText = `Items: ${cart.length}`;
  }


  // ─── 5. PRODUCT GRID PAGES (veg.html / nonveg.html / podulu.html) ───
  document.querySelectorAll(".veg-card, .nonveg-grid .veg-card, .podulu-grid .veg-card")
    .forEach(card => {
      // weight selector
      card.querySelectorAll(".weight-btn").forEach(btn => {
        btn.onclick = () => {
          card.querySelectorAll(".weight-btn")
            .forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
        };
      });
      // add to cart
      card.querySelector(".add-btn")?.addEventListener("click", () => {
        const name   = card.dataset.name;
        const weight = card.querySelector(".weight-btn.selected")?.dataset.weight;
        const price  = PRODUCTS[name].prices[weight];
        const cart   = getCart();
        cart.push({ name, weight, price, qty: 1 });
        saveCart(cart);
        updateCartCount();
        alert(`${name} (${weight}) added to cart!`);
      });
      // click image/title → detail
      card.addEventListener("click", e => {
        const target = e.target;
        if (target.tagName === "IMG" || target.tagName === "H3") {
          const name = card.dataset.name;
          location.href = `product.html?name=${encodeURIComponent(name)}`;
        }
      });
    });


  // ─── 6. PRODUCT DETAIL PAGE (product.html) ───
  ( () => {
    const params = new URLSearchParams(location.search);
    const name   = params.get("name");
    if (!name || !PRODUCTS[name]) return;

    const data = PRODUCTS[name];
    document.getElementById("detail-title").innerText = name;
    document.getElementById("detail-desc").innerText  = data.desc;

    // slider
    let idx = 0;
    const slides = data.slides;
    const imgEl  = document.getElementById("product-image");
    function showSlide(i) {
      idx = (i + slides.length) % slides.length;
      imgEl.src = slides[idx];
    }
    document.querySelector(".slider-btn.prev")?.addEventListener("click", () => showSlide(idx-1));
    document.querySelector(".slider-btn.next")?.addEventListener("click", () => showSlide(idx+1));
    showSlide(0);

    // weight & price
    let sel = "500g";
    document.querySelectorAll(".weight-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".weight-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        sel = btn.dataset.weight;
        document.getElementById("detail-price").innerText =
          `$${ data.prices[sel].toFixed(2) } / ${sel}`;
      });
    });
    // init
    document.querySelector(".weight-btn.selected")?.click();

    // qty
    let qty = 1;
    document.getElementById("qty-inc")?.addEventListener("click", () => {
      qty++; document.getElementById("qty").innerText = qty;
    });
    document.getElementById("qty-dec")?.addEventListener("click", () => {
      if (qty>1) { qty--; document.getElementById("qty").innerText = qty; }
    });

    // add to cart
    document.getElementById("add-to-cart")?.addEventListener("click", () => {
      const cart = getCart();
      cart.push({ name, weight: sel, price: data.prices[sel], qty });
      saveCart(cart);
      updateCartCount();
      alert(`Added ${name} (${sel}) x${qty} to cart!`);
    });

    // WhatsApp order link
    const wa = document.getElementById("order-whatsapp");
    if (wa) {
      wa.href = `https://wa.me/919603680098?text=${encodeURIComponent(
        `I’d like to order: ${name} (${sel}) x${qty}`
      )}`;
    }
  })();


  // ─── 7. CART PAGE LOGIC (cart.html) ───
  if (location.pathname.endsWith("cart.html")) {
    const itemsEl    = document.getElementById("cart-items");
    const summary    = document.getElementById("cart-summary");
    const checkout   = document.getElementById("checkout-whatsapp");
    const special    = document.getElementById("special-request");
    const suggestion = document.getElementById("discount-suggestion");

    function getShippingRate(weight) {
      if (weight >= 10) return 10;
      if (weight >= 5)  return 13;
      if (weight >= 3)  return 17;
      return 28;
    }
    function getSuggestedMessage(weight) {
      for (let t of [1,3,5,10]) {
        if (weight < t) {
          const diff        = +((t - weight).toFixed(1));
          const currentRate = getShippingRate(weight);
          const futureRate  = getShippingRate(t);
          if (futureRate < currentRate) {
            const save = (currentRate - futureRate) * t;
            return `🎁 Add ${diff}kg more to save $${save.toFixed(2)} on shipping!`;
          }
        }
      }
      return null;
    }

    function renderCartPage() {
      const cart = getCart();
      // 1) render items
      itemsEl.innerHTML = cart.map((it,i) => `
        <div class="cart-item">
          <img src="${PRODUCTS[it.name].img}" class="cart-item-img" alt="${it.name}">
          <div class="cart-item-details">
            <h3>${it.name}</h3>
            <div class="weight-buttons">
              <button class="weight-btn ${it.weight==='500g'?'selected':''}" data-idx="${i}" data-weight="500g">500 g</button>
              <button class="weight-btn ${it.weight==='1kg'?'selected':''}" data-idx="${i}" data-weight="1kg">1 kg</button>
            </div>
            <div class="quantity-input">
              <button class="qty-dec" data-idx="${i}">–</button>
              <span>${it.qty}</span>
              <button class="qty-inc" data-idx="${i}">+</button>
            </div>
            <button class="remove-btn" data-idx="${i}">✖ Remove</button>
            <p>Subtotal: $${(it.price*it.qty).toFixed(2)}</p>
          </div>
        </div>
      `).join("");

      // 2) bind controls (weight/qty/remove)
      itemsEl.querySelectorAll(".weight-btn").forEach(b => {
        b.onclick = () => {
          const c   = getCart();
          const idx = +b.dataset.idx;
          c[idx].weight = b.dataset.weight;
          c[idx].price  = PRODUCTS[c[idx].name].prices[b.dataset.weight];
          saveCart(c);
          renderCartPage(); updateCartCount();
        };
      });
      itemsEl.querySelectorAll(".qty-inc").forEach(b => {
        b.onclick = () => {
          const c   = getCart();
          const idx = +b.dataset.idx;
          c[idx].qty++;
          saveCart(c);
          renderCartPage(); updateCartCount();
        };
      });
      itemsEl.querySelectorAll(".qty-dec").forEach(b => {
        b.onclick = () => {
          const c   = getCart();
          const idx = +b.dataset.idx;
          if (c[idx].qty > 1) c[idx].qty--;
          saveCart(c);
          renderCartPage(); updateCartCount();
        };
      });
      itemsEl.querySelectorAll(".remove-btn").forEach(b => {
        b.onclick = () => {
          const c   = getCart();
          const idx = +b.dataset.idx;
          c.splice(idx,1);
          saveCart(c);
          renderCartPage(); updateCartCount();
        };
      });

      // 3) summary, shipping, total
      // ─── Pickle vs. Shipping Cost ───
      // inside your renderCartPage() or render() for cart.html:

      // 1) compute totals
      const pickleTotal = cart.reduce((sum,it)=> sum + it.price*it.qty, 0);
      const totalWeight = cart.reduce((sum,it)=>
        sum + (it.weight==="1kg"?1:0.5) * it.qty
      , 0);

      // 2) shipping & grand
      const rate         = getShippingRate(totalWeight);
      const shipping     = rate * totalWeight;
      const grandTotal  = pickleTotal + shipping;

      // 3) update the four summary fields
      document.getElementById("summary-items").innerText    = cart.length;
      document.getElementById("summary-pickle").innerText   = `$${pickleTotal.toFixed(2)}`;
      document.getElementById("summary-shipping").innerText = `$${shipping.toFixed(2)}`;
      document.getElementById("summary-grand").innerText    = `$${grandTotal.toFixed(2)}`;


            // Apply strikethrough to shipping and grand total (if applicable)
      const shippingEl = document.getElementById("summary-shipping");
      const grandEl    = document.getElementById("summary-grand");

      // Only apply strike if discount is active (i.e., total weight qualifies for cheaper rate)
      const baseRate = 28;  // worst-case base shipping rate
      const baseShipping = baseRate * totalWeight;
      const baseGrand = pickleTotal + baseShipping;

      if (shipping < baseShipping) {
        shippingEl.innerHTML = `<s>$${baseShipping.toFixed(2)}</s> <span class="new-price">$${shipping.toFixed(2)}</span>`;
        grandEl.innerHTML = `<s>$${baseGrand.toFixed(2)}</s> <span class="new-price">$${grandTotal.toFixed(2)}</span>`;
      } else {
        shippingEl.innerText = `$${shipping.toFixed(2)}`;
        grandEl.innerText = `$${grandTotal.toFixed(2)}`;
      }


      // 4) rebuild WhatsApp message URL
      const lines = cart.map(it=>
        `${it.name} (${it.weight}) x${it.qty} = $${(it.price*it.qty).toFixed(2)}`
      );
      let msg = lines.join("\n")
            + `\n\nPickle: $${pickleTotal.toFixed(2)}`
            + `\nShipping: $${shipping.toFixed(2)}`
            + `\nGrand Total: $${grandTotal.toFixed(2)}`;
      if(special.value.trim()){
        msg += `\n\nSpecial: ${special.value.trim()}`;
      }
      checkout.href = `https://wa.me/919603680098?text=${encodeURIComponent(msg)}`;

      // 5) discount suggestion
      const suggestionBox = document.getElementById("discount-suggestion");
      const suggestion    = getSuggestedMessage(totalWeight);

      if(suggestion){
        suggestionBox.style.display = "block";
        suggestionBox.innerText    = suggestion;

        // trigger shake every 6s
        suggestionBox.classList.remove("shake-loop");
        void suggestionBox.offsetWidth;
        suggestionBox.classList.add("shake-loop");

        clearInterval(window._shakeInt);
        window._shakeInt = setInterval(()=>{
          suggestionBox.classList.remove("shake-loop");
          void suggestionBox.offsetWidth;
          suggestionBox.classList.add("shake-loop");
        }, 6000);

      } else {
        suggestionBox.style.display = "none";
        suggestionBox.classList.remove("shake-loop");
        clearInterval(window._shakeInt);
      }
    }

    special.addEventListener("input", renderCartPage);
    renderCartPage();
  }


  // ─── 8. NEWSLETTER FORM (footer) ───
  document.getElementById("newsletter-form")?.addEventListener("submit", e => {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`Thanks for subscribing, ${email}!`);
    e.target.reset();
  });


  // ─── 9. FEATURED PRODUCTS CAROUSEL ───
  ( () => {
    const track = document.querySelector('.feat-track');
    const cards = track ? Array.from(track.children) : [];
    const prev  = document.querySelector('.feat-btn.prev');
    const next  = document.querySelector('.feat-btn.next');
    let idx = 0;
    function slide(i) {
      idx = (i + cards.length) % cards.length;
      const w = cards[0]?.getBoundingClientRect().width || 0;
      track.style.transform = `translateX(${-idx * (w+24)}px)`;
    }
    prev?.addEventListener('click', () => slide(idx-1));
    next?.addEventListener('click', () => slide(idx+1));
    setInterval(() => slide(idx+1), 6000);
  })();;

});
