document.addEventListener("DOMContentLoaded",()=>{
  // --- DATA & HELPERS ---
  const PRODUCTS = {
    "Mango (Aavakaaya)":      { img:"assets/mango.jpg",  
          desc:"Experience authentic Andhra flavor with our homemade Mango Aavakaaya. Ripe raw mangoes, hand-ground mustard seeds and red chilies are fermented in pure cold-pressed mustard oil for a tangy, spicy pickle that brings the taste of home to every meal.",
          prices:{"500g":8,"1kg":15},  
          slides:["assets/mango.jpg","assets/mango-2.jpg"] },

    "tomato":                 { img:"assets/tomato.jpg",    
      desc:"Delight in our Tangy Tomato Pickle, crafted from sun-ripened tomatoes, tempered with mustard seeds, fenugreek & curry leaves, and slow-cooked in pure mustard oil. Perfect as a spicy, flavor-packed condiment for rice, dosa, sandwiches, and more.",     
      prices:{"500g":7,"1kg":12},  
      slides:["assets/tomato.jpg","assets/tomato-2.jpg"] },

    "Red chilli":             { img:"assets/red-chilli.jpg",
      desc:"Ignite your palate with our Spicy Red Chilli Pickle. A blend of premium Kashmiri & Guntur chilies, garlic, and tamarind is cooked in mustard oil to deliver a fiery, umami-rich pickle that transforms any dish.",  
      prices:{"500g":6,"1kg":11},  
      slides:["assets/red-chilli.jpg","assets/red-chilli-2.jpg"] },

    "amla":       { img:"assets/amla.jpg",     
       desc:"Boost your meals with our Vitamin-C-rich Amla (Gooseberry) Pickle. Fresh Indian gooseberries, turmeric, and jaggery combine in mustard oil to create a tangy-sweet accompaniment that aids digestion and excites the senses.",
       prices:{"500g":9,"1kg":16},  
       slides:["assets/amla.jpg","assets/amla-2.jpg"] },
    
    "Cut mango":              {img:"assets/cut mango.jpg",
       desc:"Savor the chunky bite of our Cut Mango Pickle. Hand-cut raw mango slices are tossed with mustard seeds, asafoetida, and chili powder, then sun-fermented in mustard oil for a perfectly crisp, tangy snack.",
       prices:{"500g":10,"1kg":24},
       slides:["assetts/cut mango.jpg","assetts/cut mango-2.jpg"] },

    "Gongura":              {img:"assets/gongura.jpg",
       desc:"Discover the unique sour punch of our Gongura (Sorrel Leaf) Pickle. Fresh gongura leaves, garlic, and spices are slow-cooked in mustard oil, yielding a bold, tangy pickle that’s a staple in Andhra cuisine.",
       prices:{"500g":10,"1kg":24},
       slides:["assetts/gongura.jpg","assetts/gongura-2.jpg"] },
    
    "Lemon":              {img:"assets/lemon.jpg",
       desc:"Brighten your table with our Zesty Lemon Pickle. Whole lemons, ginger, and a secret spice blend are preserved in mustard oil to deliver a citrusy, savory condiment that pairs beautifully with rice, roti, and salads.",
       prices:{"500g":10,"1kg":24},
       slides:["assetts/lemon.jpg","assetts/lemon-2.jpg"] },

    "Ginger":              {img:"assets/ginger.jpg",
       desc:"Add a warming kick with our Homemade Ginger Pickle. Young ginger root is shredded and cooked with chilies, curry leaves, and mustard seeds in pure oil—creating a spicy, aromatic zing in every bite.",
       prices:{"500g":10,"1kg":24},
       slides:["assetts/ginger.jpg","assetts/ginger-2.jpg"] },
    
    "Tamarind":              {img:"assets/tamrind.jpg",
       desc:"Relish the sweet-tart flavor of our Tamarind (Chinthakaya) Pickle. Pulped tamarind, jaggery, and red chilies are slow-stewed in mustard oil for a luscious, chutney-style pickle that complements any meal.",
       prices:{"500g":10,"1kg":24},
       slides:["assetts/tamrind.jpg","assetts/tamrind-2.jpg"] },
    // … add nonveg & podulu here with the same shape …
  };


  

// Mobile‐menu button → toggle the nav
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("open");
});

// Click outside to close the nav
document.addEventListener("click", (e) => {
  const nav = document.querySelector(".nav-list");
  const btn = document.querySelector(".menu-btn");
  if (!nav.contains(e.target) && !btn.contains(e.target)) {
    nav.classList.remove("open");
  }
});



  const CART_KEY="narmada_cart";
  const getCart=()=>JSON.parse(localStorage.getItem(CART_KEY))||[];
  const saveCart=c=>localStorage.setItem(CART_KEY,JSON.stringify(c));
  const updateCartCount=()=>{
    document.getElementById("cart-count").innerText=getCart().length;
  };

  updateCartCount();

  // --- NAV SEARCH ---
  const searchInput=document.querySelector(".search-bar");
  const suggestions=document.querySelector(".search-suggestions");
  if(searchInput){
    searchInput.addEventListener("input",e=>{
      const q=e.target.value.toLowerCase();
      const names=Object.keys(PRODUCTS).filter(n=>n.toLowerCase().includes(q)).sort();
      suggestions.innerHTML=names.map(n=>`<li>${n}</li>`).join("");
      suggestions.style.display=q?"block":"none";
    });
    suggestions.addEventListener("click",e=>{
      if(e.target.tagName==="LI"){
        const pick=e.target.innerText;
        location.href=`product.html?name=${encodeURIComponent(pick)}`;
      }
    });
  }

  // --- CART PANEL ---
  window.toggleCartPanel=()=>{
    document.getElementById("cart-panel").classList.toggle("open");
    renderCartPanel();
  };
  function renderCartPanel(){
    const panelItems=document.getElementById("cart-panel-items");
    const totalEl=document.getElementById("cart-panel-total");
    const cart=getCart();
    
    if(!cart.length){
      panelItems.innerHTML="<p>Your cart is empty.</p>";
    } else {
      panelItems.innerHTML=cart.map((it,i,arr)=>{
        return `<li>
          ${it.name} (${it.weight}) x${it.qty} — $${it.price*it.qty}
          <button data-idx="${i}">✖</button>
        </li>`;
      }).join("");
      panelItems.querySelectorAll("button").forEach(btn=>{
        btn.onclick=()=>{
          const c=getCart();
          c.splice(+btn.dataset.idx,1);
          saveCart(c);
          updateCartCount();
          renderCartPanel();
        };
      });
    }
    totalEl.innerText=`Items: ${cart.length}`;
  }

  // --- PRODUCT GRID PAGES (Veg/Nonveg/Podulu) ---
  document.querySelectorAll(".veg-card, .nonveg-grid .veg-card, .podulu-grid .veg-card").forEach(card=>{
    // weight toggle
    card.querySelectorAll(".weight-btn").forEach(btn=>{
      btn.onclick=()=>{
        card.querySelectorAll(".weight-btn").forEach(b=>b.classList.remove("selected"));
        btn.classList.add("selected");
      };
    });
    // add to cart
    card.querySelector(".add-btn").onclick=()=>{
      const name=card.dataset.name;
      const weight=card.querySelector(".weight-btn.selected").dataset.weight;
      const price=PRODUCTS[name].prices[weight];
      const qty=1;
      const cart=getCart();
      cart.push({name,weight,price,qty});
      saveCart(cart);
      updateCartCount();
      alert(`${name} (${weight}) added!`);
    };
    // click image/title to go detail
    card.onclick=e=>{
      if(e.target.closest("img")||e.target.closest("h3")){
        location.href=`product.html?name=${encodeURIComponent(card.dataset.name)}`;
      }
    };
  });

  // --- PRODUCT DETAIL LOGIC ---
  (()=>{
    const params=new URLSearchParams(location.search);
    const name=params.get("name");
    if(!name) return;
    const data=PRODUCTS[name];
    if(!data) return;

    // title + desc
    document.getElementById("detail-title").innerText=name;
    document.getElementById("detail-desc").innerText=data.desc;

    // slider
    const slides=data.slides||[data.img];
    let idx=0;
    const imgEl=document.getElementById("product-image");
    function show(i){
      idx=(i+slides.length)%slides.length;
      imgEl.src=slides[idx];
    }
    document.querySelector(".slider-btn.prev").onclick=()=>show(idx-1);
    document.querySelector(".slider-btn.next").onclick=()=>show(idx+1);
    show(0);

    // weight & price toggle
    let sel="500g";
    document.querySelectorAll(".weight-btn").forEach(btn=>{
      btn.onclick=()=>{
        document.querySelectorAll(".weight-btn").forEach(b=>b.classList.remove("selected"));
        btn.classList.add("selected");
        sel=btn.dataset.weight;
        document.getElementById("detail-price").innerText=`$${data.prices[sel]} / ${sel}`;
      };
    });
    // init
    document.querySelector(".weight-btn.selected").click();

    // qty
    let qty=1;
    document.getElementById("qty-inc").onclick=()=>{
      qty++; document.getElementById("qty").innerText=qty;
    };
    document.getElementById("qty-dec").onclick=()=>{
      if(qty>1) qty--; document.getElementById("qty").innerText=qty;
    };

    // add to cart
    document.getElementById("add-to-cart").onclick=()=>{
      const cart=getCart();
      cart.push({name,weight:sel,price:data.prices[sel],qty});
      saveCart(cart);
      updateCartCount();
      alert(`Added ${name} (${sel}) x${qty}`);
    };

    // whatsapp link
    const wa=document.getElementById("order-whatsapp");
    wa.href=`https://wa.me/919603680098?text=${encodeURIComponent(
      `I’d like to order: ${name} (${sel}) x${qty}`
    )}`;
  })();

  // --- CART PAGE LOGIC ---
  if(location.pathname.endsWith("cart.html")){
    const itemsEl=document.getElementById("cart-items");
    const summary=document.getElementById("cart-summary");
    const checkout=document.getElementById("checkout-whatsapp");
    const special=document.getElementById("special-request");

    function render(){
      const cart=getCart();
      itemsEl.innerHTML=cart.map((it,i)=>`
        <div class="cart-item">
          <img src="${PRODUCTS[it.name].img}" class="cart-item-img" alt="${it.name}">
          <div class="cart-item-details">
            <h3 class="cart-item-name">${it.name}</h3>
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
            <p>Subtotal: $${it.price*it.qty}</p>
          </div>
        </div>
      `).join("");
      // bind controls
      itemsEl.querySelectorAll(".weight-btn").forEach(b=>{
        b.onclick=()=>{
          const c=getCart(), idx=+b.dataset.idx;
          c[idx].weight=b.dataset.weight;
          c[idx].price=PRODUCTS[c[idx].name].prices[b.dataset.weight];
          saveCart(c); render(); updateCartCount();
        };
      });
      itemsEl.querySelectorAll(".qty-inc").forEach(b=>{
        b.onclick=()=>{
          const c=getCart(), idx=+b.dataset.idx;
          c[idx].qty++; saveCart(c); render(); updateCartCount();
        };
      });
      itemsEl.querySelectorAll(".qty-dec").forEach(b=>{
        b.onclick=()=>{
          const c=getCart(), idx=+b.dataset.idx;
          if(c[idx].qty>1) c[idx].qty--; saveCart(c); render(); updateCartCount();
        };
      });
      itemsEl.querySelectorAll(".remove-btn").forEach(b=>{
        b.onclick=()=>{
          const c=getCart(); c.splice(+b.dataset.idx,1);
          saveCart(c); render(); updateCartCount();
        };
      });

      // summary & total
      const total=cart.reduce((sum,it)=>sum+it.price*it.qty,0);
      summary.innerText=`Items: ${cart.length} — Total: $${total}`;
      const text=cart.map(it=>`${it.name} (${it.weight}) x${it.qty} = $${it.price*it.qty}`).join("\n");
      let msg=`${text}\n\nTotal: $${total}`;
      if(special.value.trim()) msg+=`\n\nSpecial: ${special.value.trim()}`;
      checkout.href=`https://wa.me/919603680098?text=${encodeURIComponent(msg)}`;
    }

    special.oninput=render;
    render();
  }
});
