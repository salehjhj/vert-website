/* ================================================================
   VERT Fine Jewelry — app.js  (updated with real photos)
   ================================================================ */

'use strict';

const WA_NUMBER = '96597804090';

const PRODUCTS = [
  {
    id: 1, name: 'Wide Band Diamond Ring', category: 'rings', price: 185,
    desc: 'A sculptural wide band encrusted with fine diamonds along both edges, with a brushed satin center. Available in 18K yellow gold or 18K white gold.',
    metals: ['18K Yellow Gold', '18K White Gold'],
    sizes: ['5', '6', '7', '7.5', '8', '8.5', '9'],
    specs: '18K Gold · Diamond-edged band · Brushed satin center · Hallmarked in Kuwait',
    variations: { label: 'Metal Finish', options: [
      { name: 'Yellow Gold', images: ['images/jewelry_7.jpg','images/jewelry_1.jpg','images/jewelry_1_1.jpg','images/jewelry_1_2.jpg','images/jewelry_5.jpg','images/jewelry_5_1.jpg','images/jewelry_7_1.jpg','images/jewelry_9.jpg','images/jewelry_9_1.jpg','images/jewelry_9_2.jpg','images/jewelry_9_3.jpg','images/jewelry_11.jpg','images/jewelry_11_1.jpg','images/jewelry_13.jpg','images/jewelry_13_1.jpg','images/jewelry_15.jpg','images/jewelry_15_1.jpg'] },
      { name: 'White Gold',  images: ['images/jewelry_6.jpg','images/jewelry_2.jpg','images/jewelry_2_1.jpg','images/jewelry_4.jpg','images/jewelry_4_1.jpg','images/jewelry_6_1.jpg','images/jewelry_8.jpg','images/jewelry_8_1.jpg','images/jewelry_10.jpg','images/jewelry_10_1.jpg','images/jewelry_12.jpg','images/jewelry_12_1.jpg','images/jewelry_14.jpg','images/jewelry_14_1.jpg'] }
    ]}
  },
  {
    id: 2, name: 'Diamond Edge Slim Ring', category: 'rings', price: 120,
    desc: 'A refined slim band with a single line of pavé diamonds tracing the outer edge. Timeless and stackable.',
    metals: ['18K Yellow Gold', '18K White Gold'],
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8'],
    specs: '18K Gold · Pavé diamond edge · 2mm band · Hallmarked in Kuwait',
    variations: { label: 'Metal Finish', options: [
      { name: 'Yellow Gold', images: ['images/jewelry_27.jpg','images/jewelry_27_1.jpg'] },
      { name: 'White Gold',  images: ['images/jewelry_26.jpg','images/jewelry_26_1.jpg'] }
    ]}
  },
  {
    id: 3, name: 'Round Pavé Stud Earrings', category: 'earrings', price: 95,
    desc: 'Circular stud earrings entirely pavé-set with brilliant diamonds on a domed face. A daily essential that catches every light.',
    metals: ['18K Yellow Gold', '18K White Gold'],
    sizes: null,
    specs: '18K Gold · Full pavé diamond face · 8mm diameter · Post & butterfly back · Hallmarked in Kuwait',
    variations: { label: 'Metal Finish', options: [
      { name: 'Yellow Gold', images: ['images/jewelry_21.jpg','images/jewelry_21_1.jpg','images/jewelry_20.jpg'] },
      { name: 'White Gold',  images: ['images/jewelry_22.jpg','images/jewelry_20_1.jpg','images/jewelry_22_1.jpg','images/jewelry_23.jpg','images/jewelry_23_1.jpg'] }
    ]}
  },
  {
    id: 4, name: 'Chunky Pavé Hoop Earrings', category: 'earrings', price: 175,
    desc: 'Bold, sculptural hoops with a thick rounded profile fully encrusted in pavé diamonds. A statement piece with undeniable presence.',
    metals: ['18K Yellow Gold', '18K White Gold'],
    sizes: null,
    specs: '18K Gold · Full pavé diamond surface · Thick rounded hoop · Lever-back closure · Hallmarked in Kuwait',
    variations: { label: 'Metal Finish', options: [
      { name: 'Yellow Gold', images: ['images/jewelry_33.jpg','images/jewelry_31.jpg','images/jewelry_31_1.jpg','images/jewelry_33_1.jpg'] },
      { name: 'White Gold',  images: ['images/jewelry_30.jpg','images/jewelry_30_1.jpg','images/jewelry_32.jpg','images/jewelry_32_1.jpg'] }
    ]}
  },
  {
    id: 5, name: 'Diamond Edge Slim Hoops', category: 'earrings', price: 145,
    desc: 'Fine hoop earrings with a single line of pavé diamonds tracing the front edge. Effortless elegance, day or night.',
    metals: ['18K Yellow Gold', '18K White Gold'],
    sizes: null,
    specs: '18K Gold · Pavé diamond front edge · Fine hoop profile · Hallmarked in Kuwait',
    variations: { label: 'Metal Finish', options: [
      { name: 'Yellow Gold', images: ['images/jewelry_25.jpg','images/jewelry_25_1.jpg'] },
      { name: 'White Gold',  images: ['images/jewelry_24.jpg','images/jewelry_24_1.jpg'] }
    ]}
  },
  {
    id: 6, name: 'Wide Diamond Bangle', category: 'bracelets', price: 285,
    desc: 'A wide rigid bangle with diamond-encrusted edges framing a brushed satin center band. The perfect complement to the matching ring.',
    metals: ['18K Yellow Gold', '18K White Gold'],
    sizes: ['S — 58mm', 'M — 62mm', 'L — 66mm'],
    specs: '18K Gold · Diamond-edged wide bangle · Brushed satin center · Hallmarked in Kuwait',
    variations: { label: 'Metal Finish', options: [
      { name: 'Yellow Gold', images: ['images/jewelry_17.jpg','images/jewelry_17_1.jpg','images/jewelry_19.jpg','images/jewelry_19_1.jpg'] },
      { name: 'White Gold',  images: ['images/jewelry_18.jpg','images/jewelry_18_1.jpg'] }
    ]}
  },
  {
    id: 7, name: 'Emerald & Diamond Bracelet', category: 'bracelets', price: 485,
    desc: 'A breathtaking tennis bracelet featuring vivid emerald baguettes flanked by two rows of brilliant-cut diamonds. Also available in all-white diamonds.',
    metals: ['18K White Gold'],
    sizes: ['S — 16cm', 'M — 17cm', 'L — 18cm'],
    specs: '18K White Gold · Emerald baguettes or all-diamond · Two rows round brilliant diamonds · Hallmarked in Kuwait',
    variations: { label: 'Stone', options: [
      { name: 'Emerald & Diamond', images: ['images/jewelry_36.jpg','images/jewelry_37.jpg','images/jewelry_37_1.jpg','images/jewelry_35.jpg','images/jewelry_35_1.jpg','images/jewelry_36_1.jpg'] },
      { name: 'All Diamond',       images: ['images/jewelry_36_1.jpg'] }
    ]}
  },
];

let cart = loadCart();
let activeFilter = 'all';
let modalProduct = null;
let selectedMetal = null;
let selectedSize  = null;
let selectedVariation = 0;

function formatPrice(kwd) { return `KWD ${kwd.toFixed(3)}`; }
function cartKey(id, metal, size, varIdx) { return `${id}::${metal}::${size||'one-size'}::${varIdx}`; }
function loadCart() { try { const r = localStorage.getItem('vert_cart'); return r ? new Map(JSON.parse(r)) : new Map(); } catch { return new Map(); } }
function saveCart() { localStorage.setItem('vert_cart', JSON.stringify([...cart])); }
function totalItems() { let n=0; cart.forEach(v=>{n+=v.qty;}); return n; }
function totalPrice() { let s=0; cart.forEach(v=>{s+=v.product.price*v.qty;}); return s; }
function showToast(msg) { const el=document.getElementById('toast'); el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),2600); }

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const n = totalItems();
  badge.textContent = n;
  badge.classList.toggle('visible', n > 0);
}

function renderCart() {
  const body=document.getElementById('cart-body'), foot=document.getElementById('cart-foot'),
        empty=document.getElementById('cart-empty'), total=document.getElementById('cart-total'),
        waBtn=document.getElementById('cart-wa-btn');
  if (cart.size===0) { empty.hidden=false; foot.hidden=true; body.innerHTML=''; body.appendChild(empty); return; }
  let html='';
  cart.forEach((item,key) => {
    const thumb = item.product.variations ? item.product.variations.options[item.varIdx||0].images[0] : 'images/jewelry_1.jpg';
    html += `<div class="cart-item" data-key="${key}">
      <div class="cart-item-img" style="background:url('${thumb}') center/cover no-repeat;width:60px;height:60px;flex-shrink:0;border-radius:4px;"></div>
      <div class="cart-item-info">
        <span class="cart-item-name">${item.product.name}</span>
        <span class="cart-item-meta">${item.metal}${item.size?' · '+item.size:''}${item.varName?' · '+item.varName:''}</span>
        <div class="cart-item-qty">
          <button class="qty-btn qty-dec" data-key="${key}">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn qty-inc" data-key="${key}">+</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
        <span class="cart-item-price">${formatPrice(item.product.price*item.qty)}</span>
        <button class="remove-item" data-key="${key}">×</button>
      </div>
    </div>`;
  });
  body.innerHTML=html; foot.hidden=false; total.textContent=formatPrice(totalPrice());
  let msg='Hello VERT! I would like to order:\n\n';
  cart.forEach(item=>{msg+=`• ${item.product.name} — ${item.metal}${item.size?', '+item.size:''}${item.varName?', '+item.varName:''} × ${item.qty} — ${formatPrice(item.product.price*item.qty)}\n`;});
  msg+=`\nTotal: ${formatPrice(totalPrice())}`;
  waBtn.href=`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  body.querySelectorAll('.qty-dec').forEach(b=>b.addEventListener('click',()=>adjustQty(b.dataset.key,-1)));
  body.querySelectorAll('.qty-inc').forEach(b=>b.addEventListener('click',()=>adjustQty(b.dataset.key,+1)));
  body.querySelectorAll('.remove-item').forEach(b=>b.addEventListener('click',()=>removeCartItem(b.dataset.key)));
}

function addToCart(product, metal, size, varIdx, varName) {
  const key = cartKey(product.id, metal, size, varIdx);
  if (cart.has(key)) { cart.get(key).qty+=1; } else { cart.set(key, {product,metal,size,qty:1,varIdx,varName}); }
  saveCart(); updateCartBadge(); renderCart(); showToast('Added to cart');
}
function adjustQty(key,delta) { const item=cart.get(key); if(!item)return; item.qty+=delta; if(item.qty<=0)cart.delete(key); saveCart();updateCartBadge();renderCart(); }
function removeCartItem(key) { cart.delete(key); saveCart();updateCartBadge();renderCart(); }

function openCart() { document.getElementById('cart-sidebar').classList.add('open'); document.getElementById('cart-overlay').classList.add('active'); document.getElementById('cart-sidebar').setAttribute('aria-hidden','false'); renderCart(); }
function closeCart() { document.getElementById('cart-sidebar').classList.remove('open'); document.getElementById('cart-overlay').classList.remove('active'); document.getElementById('cart-sidebar').setAttribute('aria-hidden','true'); }

function makeSlideshow(container, images) {
  if (!container || !images.length) return;
  if (images.length === 1) { container.innerHTML=`<div class="slide active"><img src="${images[0]}" alt="" loading="lazy"/></div>`; return; }
  container.innerHTML = images.map((s,i)=>`<div class="slide${i===0?' active':''}"><img src="${s}" alt="" loading="lazy"/></div>`).join('')
    + `<div class="slide-arrows"><button class="slide-arrow" data-dir="-1">‹</button><button class="slide-arrow" data-dir="1">›</button></div>`
    + `<div class="slide-dots">${images.map((_,i)=>`<button class="slide-dot${i===0?' active':''}" data-idx="${i}"></button>`).join('')}</div>`;
  let cur=0;
  const slides=container.querySelectorAll('.slide'), dots=container.querySelectorAll('.slide-dot');
  function goTo(idx) { slides[cur].classList.remove('active'); if(dots[cur])dots[cur].classList.remove('active'); cur=(idx+slides.length)%slides.length; slides[cur].classList.add('active'); if(dots[cur])dots[cur].classList.add('active'); }
  container.querySelectorAll('.slide-arrow').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();goTo(cur+parseInt(b.dataset.dir));}));
  dots.forEach(d=>d.addEventListener('click',e=>{e.stopPropagation();goTo(parseInt(d.dataset.idx));}));
  let tx=0;
  container.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;},{passive:true});
  container.addEventListener('touchend',e=>{const d=tx-e.changedTouches[0].clientX;if(Math.abs(d)>40)goTo(cur+(d>0?1:-1));});
}

function renderProducts(filter) {
  const grid = document.getElementById('products-grid');
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = filtered.map((p, i) => {
    return `<article class="product-card reveal-up" style="--delay:${(i%4)*0.06}s" data-category="${p.category}" role="listitem">
      <div class="product-visual">
        <div class="slideshow" id="gs-${p.id}"></div>
        <div class="prod-actions">
          <button class="prod-btn view-btn" data-id="${p.id}">Quick View</button>
          <button class="prod-btn add-btn" data-id="${p.id}">+ Add</button>
        </div>
      </div>
    </article>`;
  }).join('');

  filtered.forEach(p => {
    const imgs = p.variations ? p.variations.options[0].images : ['images/jewelry_1.jpg'];
    makeSlideshow(document.getElementById(`gs-${p.id}`), imgs);
  });

  observeRevealElements();
  grid.querySelectorAll('.view-btn').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); openModal(parseInt(b.dataset.id)); }));
  grid.querySelectorAll('.add-btn').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); openModal(parseInt(b.dataset.id)); }));
  grid.querySelectorAll('.product-card').forEach(card => card.addEventListener('click', () => { const id = card.querySelector('.view-btn')?.dataset.id; if (id) openModal(parseInt(id)); }));
}

document.querySelectorAll('.filter-pill').forEach(pill=>{
  pill.addEventListener('click',()=>{
    document.querySelectorAll('.filter-pill').forEach(p=>{p.classList.remove('active');p.setAttribute('aria-selected','false');});
    pill.classList.add('active'); pill.setAttribute('aria-selected','true');
    activeFilter=pill.dataset.filter; renderProducts(activeFilter);
  });
});

function openModal(productId) {
  const p=PRODUCTS.find(p=>p.id===productId); if(!p)return;
  modalProduct=p; selectedMetal=p.metals[0]; selectedSize=p.sizes?p.sizes[0]:null; selectedVariation=0;
  document.getElementById('modal-cat').textContent=p.category.charAt(0).toUpperCase()+p.category.slice(1);
  document.getElementById('modal-name').textContent=p.name;
  document.getElementById('modal-price').textContent=formatPrice(p.price);
  document.getElementById('modal-desc').textContent=p.desc;
  document.getElementById('modal-specs').textContent=p.specs;
  const mainImg=document.getElementById('modal-main-img');
  mainImg.className='modal-main-img modal-slideshow';
  makeSlideshow(mainImg, p.variations?p.variations.options[0].images:['images/jewelry_1.jpg']);

  const varGroup=document.getElementById('variation-group'), varLabel=document.getElementById('variation-label'), varPills=document.getElementById('variation-pills');
  if(p.variations&&p.variations.options.length>1){
    varGroup.hidden=false; varLabel.textContent=p.variations.label;
    varPills.innerHTML=p.variations.options.map((opt,i)=>`<button class="var-btn${i===0?' active':''}" data-var="${i}">${opt.name}</button>`).join('');
    varPills.querySelectorAll('.var-btn').forEach(btn=>btn.addEventListener('click',()=>{
      selectedVariation=parseInt(btn.dataset.var);
      varPills.querySelectorAll('.var-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
      makeSlideshow(mainImg, p.variations.options[selectedVariation].images); updateModalWa();
    }));
  } else { varGroup.hidden=true; }

  const metalPills=document.getElementById('metal-pills');
  metalPills.innerHTML=p.metals.map(m=>`<button class="option-pill${m===selectedMetal?' active':''}" data-metal="${m}">${m}</button>`).join('');
  metalPills.querySelectorAll('.option-pill').forEach(pill=>pill.addEventListener('click',()=>{ selectedMetal=pill.dataset.metal; metalPills.querySelectorAll('.option-pill').forEach(pp=>pp.classList.remove('active')); pill.classList.add('active'); updateModalWa(); }));

  const sizeGroup=document.getElementById('size-group'), sizePills=document.getElementById('size-pills');
  if(p.sizes&&p.sizes.length>0){
    sizeGroup.hidden=false;
    sizePills.innerHTML=p.sizes.map(s=>`<button class="option-pill${s===selectedSize?' active':''}" data-size="${s}">${s}</button>`).join('');
    sizePills.querySelectorAll('.option-pill').forEach(pill=>pill.addEventListener('click',()=>{ selectedSize=pill.dataset.size; sizePills.querySelectorAll('.option-pill').forEach(pp=>pp.classList.remove('active')); pill.classList.add('active'); updateModalWa(); }));
  } else { sizeGroup.hidden=true; }

  updateModalWa();
  const modal=document.getElementById('product-modal'), overlay=document.getElementById('modal-overlay');
  modal.hidden=false; overlay.classList.add('active'); requestAnimationFrame(()=>modal.classList.add('open'));
  document.body.style.overflow='hidden';
}

function closeModal() {
  const modal=document.getElementById('product-modal'), overlay=document.getElementById('modal-overlay');
  modal.classList.remove('open'); overlay.classList.remove('active');
  setTimeout(()=>{modal.hidden=true;},400); document.body.style.overflow=''; modalProduct=null;
}

function updateModalWa() {
  if(!modalProduct)return;
  const varName=modalProduct.variations?modalProduct.variations.options[selectedVariation].name:'';
  const msg=`Hello VERT! I'm interested in:\n\n• ${modalProduct.name}${varName?'\n  Option: '+varName:''}\n  Metal: ${selectedMetal}${selectedSize?'\n  Size: '+selectedSize:''}\n  Price: ${formatPrice(modalProduct.price)}\n\nPlease let me know availability. Thank you!`;
  document.getElementById('modal-wa-btn').href=`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{navbar.classList.toggle('scrolled',window.scrollY>40);},{passive:true});

const mobileMenu=document.getElementById('mobile-menu'), hamburger=document.getElementById('hamburger'), closeMobileBtn=document.getElementById('mobile-menu-close');
function openMobileMenu(){mobileMenu.classList.add('open');mobileMenu.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeMobileMenu(){mobileMenu.classList.remove('open');mobileMenu.setAttribute('aria-hidden','true');document.body.style.overflow='';}
hamburger.addEventListener('click',openMobileMenu); closeMobileBtn.addEventListener('click',closeMobileMenu);
mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link=>link.addEventListener('click',closeMobileMenu));

let revealObserver;
function observeRevealElements() {
  if(revealObserver)revealObserver.disconnect();
  revealObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}});},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal-up').forEach(el=>revealObserver.observe(el));
}

(function initCursor(){
  if(window.matchMedia('(hover: none)').matches)return;
  const dot=document.getElementById('cursor-dot'),ring=document.getElementById('cursor-ring');
  let mx=-100,my=-100,rx=-100,ry=-100;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
  function animateRing(){rx+=(mx-rx)*0.11;ry+=(my-ry)*0.11;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animateRing);}
  animateRing();
  const sel='a,button,.product-card,.cat-card,.filter-pill,.option-pill,.var-btn,summary';
  document.addEventListener('mouseover',e=>{if(e.target.closest(sel))document.body.classList.add('cursor-hover');});
  document.addEventListener('mouseout',e=>{if(e.target.closest(sel))document.body.classList.remove('cursor-hover');});
  document.addEventListener('mouseleave',()=>{dot.style.opacity='0';ring.style.opacity='0';});
  document.addEventListener('mouseenter',()=>{dot.style.opacity='';ring.style.opacity='';});
})();

window.addEventListener('load',()=>{setTimeout(()=>{document.getElementById('page-loader').classList.add('hidden');},900);});

document.getElementById('cart-toggle').addEventListener('click',openCart);
document.getElementById('close-cart').addEventListener('click',closeCart);
document.getElementById('cart-overlay').addEventListener('click',closeCart);
document.getElementById('close-modal').addEventListener('click',closeModal);
document.getElementById('modal-overlay').addEventListener('click',closeModal);

document.getElementById('modal-add-cart').addEventListener('click',()=>{
  if(!modalProduct)return;
  const varName=modalProduct.variations?modalProduct.variations.options[selectedVariation].name:'';
  addToCart(modalProduct,selectedMetal,selectedSize,selectedVariation,varName);
  closeModal(); openCart();
});

document.querySelectorAll('.cat-card').forEach(card=>{
  card.addEventListener('click',()=>{
    const filter=card.dataset.filter;
    document.querySelectorAll('.filter-pill').forEach(p=>{const match=p.dataset.filter===filter;p.classList.toggle('active',match);p.setAttribute('aria-selected',String(match));});
    activeFilter=filter;
    renderProducts(filter);
    setTimeout(()=>{ document.getElementById('collections').scrollIntoView({behavior:'smooth'}); }, 60);
  });
});

document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeCart();}});
document.getElementById('checkout-btn').addEventListener('click',()=>{showToast('Checkout coming soon');});
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}});});

renderProducts('all');
updateCartBadge();
observeRevealElements();
