const db = require("../models/index");
const Product = db.product;

const InitializeProducts = () => {

  Product.create({
    "id": 1,
    "name": "Superfood Antioxidant Cleanser",
    "brand": "Youth to the people",
    "type": "cleanser",
    "store": "sephora",
    "skinType": "all",
    "price": "$$",
    "goal": "elasticity",
    "order": 1,
    "link": "https://www.sephora.com/product/kale-spinach-green-tea-age-prevention-cleanser-P411387?skuId=1863588&icid2=products%20grid:p411387:product"
  });

  Product.create({
    "id": 2,
    "name": "Soy Face Wash",
    "brand": "Fresh",
    "type": "cleanser",
    "store": "sephora",
    "skinType": "all",
    "price": "$$",
    "goal": "elasticity",
    "order": 1,
    "link": "https://www.sephora.com/product/soy-face-cleanser-P7880?skuId=487694&icid2=products%20grid:p7880:product"
  });

  Product.create(
    {
      "id": 3,
      "name": "The Cleansing Foam",
      "brand": "La Mer",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "elasticity",
      "order": 1,
      "link": "https://www.sephora.com/product/the-cleansing-foam-P416344?skuId=1932367&icid2=products%20grid:p416344:product"

    }
  );
  Product.create(
    {
      "id": 4,
      "name": "Orange Essence Facial Cleanser",
      "brand": "Burt's Bees",
      "type": "cleanser",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "elasticity",
      "order": 1,
      "link": "https://www.target.com/p/burt-39-s-bees-orange-essence-facial-cleanser-4-34oz/-/A-12834905#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 5,
      "name": "The Deep Cleanse Gentle Exfoliating Cleanser",
      "brand": "Tatcha",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "oily",
      "price": "$$",
      "goal": "acne",
      "order": 1,
      "link": "https://www.sephora.com/product/the-deep-cleanse-P427536"
    }
  );
  Product.create(
    {
      "id": 6,
      "name": "Special Cleansing Gel",
      "brand": "Dermalogica",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "acne",
      "order": 1,
      "link": "https://www.sephora.com/product/special-cleansing-gel-P423136?skuId=2002103&icid2=products%20grid:p423136:product"
    }
  );
  Product.create(
    {
      "id": 7,
      "name": "Purifying Pore Detox Cleanser",
      "brand": "Tata Harper",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "oily",
      "price": "$$$",
      "goal": "acne",
      "order": 1,
      "link": "https://www.sephora.com/product/purifying-cleanser-P392144"
    }
  );
  Product.create(
    {
      "id": 8,
      "name": "Effaclar Gel Cleanser",
      "brand": "La Roche Posey",
      "type": "cleanser",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "acne",
      "order": 1,
      "link": "https://www.target.com/p/la-roche-posay-effaclar-purifying-foaming-gel-face-cleanser-6-76-fl-oz/-/A-14225591#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 9,
      "name": "Facial Treatment Cleanser",
      "brand": "SK-II",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "dry",
      "price": "$$$",
      "goal": "dryness",
      "order": 1,
      "link": "https://www.sephora.com/product/facial-treatment-cleanser-P375850?skuId=1448596&icid2=products%20grid:p375850:product"
    }
  );
  Product.create(
    {
      "id": 10,
      "name": "The Rice Wash Cleanser",
      "brand": "Tatcha",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "dry",
      "price": "$$",
      "goal": "dryness",
      "order": 1,
      "link": "https://www.sephora.com/product/tatcha-the-rice-wash-skin-softening-cleanser-P461537?skuId=2382232&icid2=products%20grid:p461537:product"
    }
  );
  Product.create(
    {
      "id": 11,
      "name": "Pure Skin Face Cleanser",
      "brand": "First Aid Beauty",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "dry",
      "price": "$$",
      "goal": "dryness",
      "order": 1,
      "link": "https://www.sephora.com/product/face-cleanser-P248404"
    }
  );
  Product.create(
    {
      "id": 12,
      "name": "Hydrating Facial Cleanser",
      "brand": "CeraVe",
      "type": "cleanser",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dryness",
      "order": 1,
      "link": "https://www.target.com/p/cerave-hydrating-facial-cleanser-for-normal-to-dry-skin/-/A-81616326?preselect=76198439#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 13,
      "name": "ExfoliKate Cleanser",
      "brand": "Kate Somerville",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "normal",
      "price": "$$",
      "goal": "dullness",
      "order": 1,
      "link": "https://www.sephora.com/product/exfolikate-cleanser-daily-foaming-wash-P404322?skuId=1778349&icid2=products%20grid:p404322:product"
    }
  );
  Product.create(
    {
      "id": 14,
      "name": "GinZing Refreshing Scrub Cleanser",
      "brand": "Origins",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "normal",
      "price": "$$",
      "goal": "dullness",
      "order": 1,
      "link": "https://www.sephora.com/product/ginzing-refreshing-scrub-cleanser-P386197?skuId=1596527&keyword=origins%20ginzing%20refreshing%20scrub%20cleanser"
    }
  );
  Product.create(
    {
      "id": 15,
      "name": "Treatment Cleansing Foam Cleanser",
      "brand": "Amorepacific",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "dry",
      "price": "$$$",
      "goal": "dullness",
      "order": 1,
      "link": "https://www.sephora.com/product/treatment-cleansing-foam-P232930"
    }
  );
  Product.create(
    {
      "id": 16,
      "name": "Daily Vitamin C Facial Wash",
      "brand": "Soap & Glory",
      "type": "cleanser",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dullness",
      "order": 1,
      "link": "https://www.target.com/p/soap-38-glory-face-soap-38-clarity-3-in-1-daily-vitamin-c-facial-wash-11-8-fl-oz/-/A-51207562#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 17,
      "name": "Tonique Confort Re-Hydrating Comforting Toner",
      "brand": "Lancome",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "elasticity",
      "order": 4,
      "link": "https://www.sephora.com/product/tonique-confort-comforting-rehydrating-toner-P54509?skuId=534529&icid2=products%20grid:p54509:product"
    }
  );
  Product.create(
    {
      "id": 18,
      "name": "Rose Deep Hydration Toner",
      "brand": "Fresh",
      "type": "toner",
      "store": "sephora",
      "skinType": "dry",
      "price": "$$",
      "goal": "elasticity",
      "order": 4,
      "link": "https://www.sephora.com/product/rose-deep-hydration-facial-toner-P417936?skuId=1924901&icid2=products%20grid:p417936:product"
    }
  );
  Product.create(
    {
      "id": 19,
      "name": "Dr.Andrew Weil Mega-Mushroom Treatment Lotion",
      "brand": "origins",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity",
      "order": 4,
      "link": "https://www.sephora.com/product/dr-andrew-weil-for-origins-mega-mushroom-relief-resilience-hydra-burst-gel-lotion-P443550?skuId=2175446&icid2=products%20grid:p443550:product"
    }
  );
  Product.create(
    {
      "id": 20,
      "name": "Collagen Tonic",
      "brand": "Pixi by Petra",
      "type": "toner",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "elasticity",
      "order": 4,
      "link": "https://www.target.com/p/pixi-by-petra-collagen-tonic-3-4-fl-oz/-/A-78135910#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 21,
      "name": "Vinopure Toner",
      "brand": "Caudalie",
      "type": "toner",
      "store": "sephora",
      "skinType": "oily",
      "price": "$$",
      "goal": "acne",
      "order": 4,
      "link": "https://www.sephora.com/product/vinopure-natural-salicylic-acid-pore-minimizing-toner-P433625?skuId=2114924&icid2=products%20grid:p433625:product"
    }
  );
  Product.create(
    {
      "id": 22,
      "name": "Supertoner Acid Solution Toner",
      "brand": "Glamglow",
      "type": "toner",
      "store": "sephora",
      "skinType": "oily",
      "price": "$$",
      "goal": "acne",
      "order": 4,
      "link": "https://www.sephora.com/product/supertoner-exfoliating-acid-solution-P441865?skuId=2185601&keyword=glamglow%20supertoner%20exfoliating%20acid%20solution"
    }
  );
  Product.create(
    {
      "id": 23,
      "name": "Facial Treatment Clear Lotion Toner",
      "brand": "SK-II",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "acne",
      "order": 4,
      "link": "https://www.sephora.com/product/facial-treatment-clear-lotion-P375853"
    }
  );
  Product.create(
    {
      "id": 24,
      "name": "Acne Stress Control",
      "brand": "Neutrogena",
      "type": "toner",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "acne",
      "order": 4,
      "link": "https://www.target.com/p/neutrogena-oil-free-acne-stress-control-triple-action-toner-8-fl-oz/-/A-11537216#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 25,
      "name": "Multi-Active Toner",
      "brand": "Dermalogica",
      "type": "toner",
      "store": "sephora",
      "skinType": "normal",
      "price": "$$$",
      "goal": "dryness",
      "order": 4,
      "link": "https://www.sephora.com/product/multi-active-toner-P423150?skuId=2002129&icid2=products%20grid:p423150:product"
    }
  );
  Product.create(
    {
      "id": 26,
      "name": "Ultra repair Wild Oat Hydrating Toner",
      "brand": "First Aid Beauty",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 4,
      "link": "https://www.sephora.com/product/ultra-repair-wild-oat-hydrating-toner-P447603?skuId=2265015&keyword=ultra%20repair%20wild%20oat%20hydrating"
    }
  );
  Product.create(
    {
      "id": 27,
      "name": "Ultra Facial Toner",
      "brand": "Kiehl's Since 1851",
      "type": "toner",
      "store": "sephora",
      "skinType": "dry",
      "price": "$$",
      "goal": "dryness",
      "order": 4,
      "link": "https://www.sephora.com/product/ultra-facial-toner-P422011?skuId=1988609&icid2=products%20grid:p422011:product"
    }
  );
  Product.create(
    {
      "id": 28,
      "name": "Roserwater Facial Toner",
      "brand": "Heritage Store",
      "type": "toner",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dryness",
      "order": 4,
      "link": "https://www.target.com/p/heritage-store-rosewater-facial-toner-8-fl-oz/-/A-76545843#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 29,
      "name": "Ready Steady Glow",
      "brand": "REN",
      "type": "toner",
      "store": "sephora",
      "skinType": "dry",
      "price": "$$",
      "goal": "dullness",
      "order": 4,
      "link": "https://www.sephora.com/product/ready-steady-glow-daily-aha-tonic-P428095?skuId=2046639&icid2=products%20grid:p428095:product"
    }
  );
  Product.create(
    {
      "id": 30,
      "name": "Glow2OH Dark spot Toner",
      "brand": "Olehenriksen",
      "type": "toner",
      "store": "sephora",
      "skinType": "oily",
      "price": "$$",
      "goal": "dullness",
      "order": 4,
      "link": "https://www.sephora.com/product/glow2oh-dark-spot-toner-P439061?skuId=2169431&icid2=products%20grid:p439061:product"
    }
  );
  Product.create(
    {
      "id": 31,
      "name": "The Tonic",
      "brand": "La Mer",
      "type": "toner",
      "store": "sephora",
      "skinType": "normal",
      "price": "$$$",
      "goal": "dullness",
      "order": 4,
      "link": "https://www.sephora.com/product/the-tonic-P417243?skuId=1932383&icid2=products%20grid:p417243:product"
    }
  );
  Product.create(
    {
      "id": 32,
      "name": "Glow Tonic",
      "brand": "Pixi by Petra",
      "type": "toner",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dullness",
      "order": 4,
      "link": "https://www.target.com/p/pixi-by-petra-glow-tonic/-/A-78817020?preselect=17408487#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 33,
      "name": "Eudermine Revitalizing Essence",
      "brand": "Shiseido",
      "type": "essence",
      "store": "sephora",
      "skinType": "dry",
      "price": "$$",
      "goal": "elasticity",
      "order": 5,
      "link": "https://www.sephora.com/product/eudermine-revitalizing-essence-P173653?skuId=153726&keyword=shiseido%20eudermine%20revitalizing%20essence"
    }
  );
  Product.create(
    {
      "id": 34,
      "name": "Facial Treatment Essence",
      "brand": "SK-II",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "elasticity",
      "order": 5,
      "link": "https://www.sephora.com/product/facial-treatment-essence-P375849?skuId=1850346&icid2=products%20grid:p375849:product"
    }
  );
  Product.create(
    {
      "id": 35,
      "name": "Kombucha Facial Treatment",
      "brand": "Fresh",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity ",
      "order": 5,
      "link": "https://www.sephora.com/product/black-tea-kombucha-facial-treatment-essence-P428628?skuId=2044949&icid2=products%20grid:p428628:product"
    }
  );
  Product.create(
    {
      "id": 36,
      "name": "Hydrating Water Essence",
      "brand": "E.L.F",
      "type": "essence",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "elasticity",
      "order": 5,
      "link": "https://www.target.com/p/e-l-f-hydrating-water-essence-5-fl-oz/-/A-52374851#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 37,
      "name": "Pink Drink Firming Resurfacing Essence",
      "brand": "Sunday Riley",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "acne",
      "order": 5,
      "link": "https://www.sephora.com/product/sunday-riley-pink-drink-firming-resurfacing-essence-P463964"
    }
  );
  Product.create(
    {
      "id": 38,
      "name": "Original Skin Essence",
      "brand": "Origins",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "acne",
      "order": 5,
      "link": "https://www.sephora.com/product/original-skin-essence-lotion-with-dual-ferment-complex-P409770?skuId=1843093&keyword=origins%20original%20skin%20essence"
    }
  );
  Product.create(
    {
      "id": 39,
      "name": "SOS Daily Rescue Spray",
      "brand": "Tower 28 Beauty",
      "type": "essence",
      "store": "sephora",
      "skinType": "normal",
      "price": "$$",
      "goal": "acne",
      "order": 5,
      "link": "https://www.sephora.com/product/sos-save-our-skin-daily-rescue-facial-spray-P448852?skuId=2284909&icid2=products%20grid:p448852:product"
    }
  );
  Product.create(
    {
      "id": 40,
      "name": "Hydrating Water Essence",
      "brand": "E.L.F",
      "type": "essence",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "acne",
      "order": 5,
      "link": "https://www.target.com/p/e-l-f-hydrating-water-essence-5-fl-oz/-/A-52374851#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 41,
      "name": "The Essence Plumping Skin Softener",
      "brand": "Tatcha",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dryness",
      "order": 5,
      "link": "https://www.sephora.com/product/the-essence-plumping-skin-softener-P415771?skuId=1890904&icid2=products%20grid:p415771:product"
    }
  );
  Product.create(
    {
      "id": 42,
      "name": "Hydrating Essence",
      "brand": "Algenist",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 5,
      "link": "https://www.sephora.com/product/hydrating-essence-toner-P386910?skuId=1629948&keyword=algenist%20hydrating%20essence%20toner"
    }
  );
  Product.create(
    {
      "id": 43,
      "name": "Iris Extract Activating Treatment",
      "brand": "Kiehl's Since 1851",
      "type": "essence",
      "store": "sephora",
      "skinType": "dry",
      "price": "$$",
      "goal": "dryness",
      "order": 5,
      "link": "https://www.sephora.com/product/iris-extract-activating-treatment-essence-P431734?skuId=2057628&keyword=kiehls%20iris%20extract%20activating%20essence"
    }
  );
  Product.create(
    {
      "id": 44,
      "name": "Hydrating Water Essence",
      "brand": "E.L.F",
      "type": "essence",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dryness",
      "order": 5,
      "link": "https://www.target.com/p/e-l-f-hydrating-water-essence-5-fl-oz/-/A-52374851#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 45,
      "name": "Vintage Single Extract Essence",
      "brand": "Amorepacific",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dullness",
      "order": 5,
      "link": "https://www.sephora.com/product/vintage-single-extract-essence-P422238?skuId=2342004&icid2=products%20grid:p422238:product"
    }
  );
  Product.create(
    {
      "id": 46,
      "name": "WASO: Fresh Jelly Essence",
      "brand": "Shiseido",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dullness",
      "order": 5,
      "link": "https://www.sephora.com/product/waso-fresh-jelly-lotion-P421773"
    }
  );
  Product.create(
    {
      "id": 47,
      "name": "Vinoperfect Brightening Glycolic Essence",
      "brand": "Caudalie",
      "type": "essence",
      "store": "sephora",
      "skinType": "oily",
      "price": "$$",
      "goal": "dullness",
      "order": 5,
      "link": "https://www.sephora.com/product/vinoperfect-concentrated-brightening-essence-P420224"
    }
  );
  Product.create(
    {
      "id": 48,
      "name": "Hydrating Water Essence",
      "brand": "E.L.F",
      "type": "essence",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dullness",
      "order": 5,
      "link": "https://www.target.com/p/e-l-f-hydrating-water-essence-5-fl-oz/-/A-52374851#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 49,
      "name": "The Treatment Lotion",
      "brand": "La Mer",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "elasticity",
      "order": 6,
      "link": "https://www.sephora.com/product/the-treatment-lotion-P416345?skuId=1932391&icid2=products%20grid:p416345:product"
    }
  );
  Product.create(
    {
      "id": 50,
      "name": "Bakuchiol Serum",
      "brand": "Herbivore",
      "type": "serum",
      "store": "sephora",
      "skinType": "normal",
      "price": "$$",
      "goal": "elasticity",
      "order": 6,
      "link": "https://www.sephora.com/product/herbivore-botanicals-bakuchiol-retinol-alternative-smoothing-serum-P465761?icid2=products%20grid:p465761"
    }
  );
  Product.create(
    {
      "id": 51,
      "name": "Advance Genefique Serum",
      "brand": "Lancome",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity",
      "order": 6,
      "link": "https://www.sephora.com/product/advanced-genifique-youth-activating-serum-P379510?skuId=2291813&icid2=products%20grid:p379510:product"
    }
  );
  Product.create(
    {
      "id": 52,
      "name": "Retinol Serum",
      "brand": "Artnaturals",
      "type": "serum",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "elasticity",
      "order": 6,
      "link": "https://www.target.com/p/artnaturals-retinol-serum-1-fl-oz/-/A-76198639#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 53,
      "name": "Pure Shots Night Reboot Resurfacing Serum",
      "brand": "Yves saint Laurent",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "acne",
      "order": 6,
      "link": "https://www.sephora.com/product/yves-saint-laurent-pure-shots-night-reboot-resurfacing-serum-P454076?skuId=2320745&icid2=products%20grid:p454076:product"
    }
  );
  Product.create(
    {
      "id": 54,
      "name": "Anti Bac Acne Clearing Lotion",
      "brand": "Kate Somerville",
      "type": "serum",
      "store": "sephora",
      "skinType": "oily",
      "price": "$$",
      "goal": "acne",
      "order": 6,
      "link": "https://www.sephora.com/product/anti-bac-clearing-lotion-P232907?skuId=1167139&keyword=kate%20somerville%20anti%20bac%20lotion"
    }
  );
  Product.create(
    {
      "id": 55,
      "name": "Vinopure Natural Salicylic Acid Serum",
      "brand": "Caudalie",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "acne",
      "order": 6,
      "link": "https://www.sephora.com/product/vinopure-natural-salicylic-acid-pore-minimizing-serum-P433626"
    }
  );
  Product.create(
    {
      "id": 56,
      "name": "Clarity Concentrate",
      "brand": "Pixi by Petra",
      "type": "serum",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "acne",
      "order": 6,
      "link": "https://www.target.com/p/pixi-by-petra-clarity-concentrate-1-fl-oz/-/A-79767480#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 57,
      "name": "C.E.O",
      "brand": "Sunday Riley",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dullness",
      "order": 6,
      "link": "https://www.sephora.com/product/c-e-o-glow-vitamin-c-turmeric-face-oil-P442761"
    }
  );
  Product.create(
    {
      "id": 58,
      "name": "The Concentrate",
      "brand": "La Mer",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dullness",
      "order": 6,
      "link": "https://www.sephora.com/product/la-mer-the-concentrate-P461949?skuId=2384014&icid2=products%20grid:p461949:product"
    }
  );
  Product.create(
    {
      "id": 59,
      "name": "Vinoperfect",
      "brand": "Caudalie",
      "type": "serum",
      "store": "sephora",
      "skinType": "normal",
      "price": "$$",
      "goal": "dullness",
      "order": 4,
      "link": "https://www.sephora.com/product/vinoperfect-radiance-serum-P94421?skuId=823427&icid2=products%20grid:p94421:product"
    }
  );
  Product.create(
    {
      "id": 60,
      "name": "Vitamin C Serum",
      "brand": "Artnaturals",
      "type": "serum",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dullness",
      "order": 6,
      "link": "https://www.target.com/p/artnaturals-vitamin-c-serum-1oz/-/A-76198637#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 61,
      "name": "The Regenerating Serum",
      "brand": "La Mer",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dryness",
      "order": 6,
      "link": "https://www.sephora.com/product/the-regenerating-serum-P450290?skuId=2284164&icid2=products%20grid:p450290:product"
    }
  );
  Product.create(
    {
      "id": 62,
      "name": "Plum Plump",
      "brand": "Glow Recipe",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 6,
      "link": "https://www.sephora.com/product/glow-recipe-plum-plump-hyaluronic-acid-serum-P462699"
    }
  );
  Product.create(
    {
      "id": 63,
      "name": "Ultra Repair Hydrating Serum",
      "brand": "First Aid Beauty",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 6,
      "link": "https://www.sephora.com/product/ultra-repair-hydrating-serum-P403739?skuId=2203958&keyword=ultra%20repair%20hydrating%20serum"
    }
  );
  Product.create(
    {
      "id": 64,
      "name": "Hydrating Hyaluronic Acid Face Serum",
      "brand": "CeraVe",
      "type": "serum",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dryness",
      "order": 6,
      "link": "https://www.target.com/p/cerave-hydrating-hyaluronic-acid-face-serum-1-fl-oz/-/A-75566029#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 65,
      "name": "Creme de la Mer",
      "brand": "La Mer",
      "type": "moisturizer",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "elasticity",
      "order": 7,
      "link": "https://www.sephora.com/product/creme-de-la-mer-moisturizing-cream-P416341?skuId=1932201&icid2=products%20grid:p416341:product"
    }
  );
  Product.create(
    {
      "id": 66,
      "name": "Adaptogen Deep Moisture Cream",
      "brand": "Youth To The People",
      "type": "moisturizer",
      "store": "sephora",
      "skinType": "dry",
      "price": "$$",
      "goal": "elasticity",
      "order": 7,
      "link": "https://www.sephora.com/product/adaptogen-deep-moisture-cream-P432829?skuId=2088029&icid2=products%20grid:p432829:product"
    }
  );
  Product.create(
    {
      "id": 67,
      "name": "Barrier + Triple Lipid-Peptide Cream",
      "brand": "Skinfix",
      "type": "moisturizer",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity",
      "order": 7,
      "link": "https://www.sephora.com/product/barrier-lipid-peptide-cream-P442840"
    }
  );
  Product.create(
    {
      "id": 68,
      "name": "Collagen Moisture Filler",
      "brand": "L'oreal",
      "type": "moisturizer",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "elasticity",
      "order": 7,
      "link": "https://www.target.com/p/l-oreal-paris-collagen-moisture-filler-day-night-cream-1-7oz/-/A-11480283#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 69,
      "name": "Moisture Bound Refreshing Hydra-Gel",
      "brand": "Amorepacific",
      "type": "moisturizer",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "acne",
      "order": 7,
      "link": 'https://www.sephora.com/product/moisture-bound-refreshing-hydra-gel-oil-free-P232940'
    }
  );
  Product.create(
    {
      "id": 70,
      "name": "Oil Free moisturizer",
      "brand": "Kate Somerville",
      "type": "moisturizer",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "acne",
      "order": 7,
      "link": "https://www.sephora.com/product/oil-free-moisturizer-P232906?skuId=1167196&icid2=products%20grid:p232906:product"
    }
  );
  Product.create(
    {
      "id": 71,
      "name": "Counter Balance Oil Control Hydrator",
      "brand": "Olehenriksen",
      "type": "moisturizer",
      "store": "sephora",
      "skinType": "oily",
      "price": "$$",
      "goal": "acne",
      "order": 7,
      "link": "https://www.sephora.com/product/counter-balance-oil-control-hydrator-P416818?skuId=1910694&icid2=products%20grid:p416818:product"
    }
  );
  Product.create(
    {
      "id": 72,
      "name": "Simply Calm Hydrating Face Cream For Stressed Skin",
      "brand": "Botanics",
      "type": "moisturizer",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "acne",
      "order": 7,
      "link": "https://www.target.com/p/botanics-simply-calm-hydrating-face-cream-for-stressed-skin-1-69-fl-oz/-/A-76471186#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 73,
      "name": "The Moisturizing Soft Cream",
      "brand": "La Mer",
      "type": "moisturizer",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dryness",
      "order": 7,
      "link": "https://www.sephora.com/product/the-moisturizing-soft-cream-P416342?skuId=1932235&icid2=products%20grid:p416342:product"
    }
  );
  Product.create(
    {
      "id": 74,
      "name": "The Dewy Skin Cream",
      "brand": "Tatcha",
      "type": "moisturizer",
      "store": "sephora",
      "skinType": "dry",
      "price": "$$",
      "goal": "dryness",
      "order": 7,
      "link": "https://www.sephora.com/product/the-dewy-skin-cream-P441101?skuId=2181006&icid2=products%20grid:p441101:product"
    }
  );
  Product.create(
    {
      "id": 75,
      "name": "Rose & Hyaluronic Deep Hydration moisturizer",
      "brand": "Fresh",
      "type": "moisturizer",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 7,
      "link": "https://www.sephora.com/product/rose-deep-hydration-face-cream-P406686?skuId=1788397&icid2=products%20grid:p406686:product"
    }
  );
  Product.create(
    {
      "id": 76,
      "name": "Moisturizing Cream",
      "brand": "CeraVe",
      "type": "moisturizer",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dryness",
      "order": 7,
      "link": "https://www.target.com/p/cerave-moisturizing-cream-for-normal-to-dry-skin-8-fl-oz/-/A-76198440#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 77,
      "name": "C-Rush Vitamin C Gel",
      "brand": "Olehenriksen",
      "type": "moisturizer",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dullness",
      "order": 7,
      "link": "https://www.sephora.com/product/c-rush-tm-brightening-gel-cr-me-P430337?skuId=2071751&icid2=products%20grid:p430337:product"
    }
  );
  Product.create(
    {
      "id": 78,
      "name": "Squalane + Omego Repair Cream",
      "brand": "Biossance",
      "type": "moisturizer",
      "store": "sephora",
      "skinType": "normal",
      "price": "$$",
      "goal": "dullness",
      "order": 7,
      "link": "https://www.sephora.com/product/squalane-omega-repair-cream-P433887?skuId=2105856&icid2=products%20grid:p433887:product"
    }
  );
  Product.create(
    {
      "id": 79,
      "name": "Creme Ancienne",
      "brand": "Fresh",
      "type": "moisturizer",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dullness",
      "order": 7,
      "link": "https://www.sephora.com/product/creme-ancienne-P42592?skuId=683862&icid2=products%20grid:p42592:product"
    }
  );
  Product.create(
    {
      "id": 80,
      "name": "Watermelon Glowing Oil-Free Face moisturizer",
      "brand": "St.Ives",
      "type": "moisturizer",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dullness",
      "order": 7,
      "link": "https://www.target.com/p/st-ives-watermelon-glowing-oil-free-face-moisturizer-1-8oz/-/A-76596419#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 81,
      "name": "Time Response Eye Reserve Creme",
      "brand": "Amorepacific",
      "type": "eye cream",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "elasticity",
      "order": 8,
      "link": "https://www.sephora.com/product/time-response-eye-reserve-creme-P436659?skuId=2150233&icid2=products%20grid:p436659:product"
    }
  );
  Product.create(
    {
      "id": 82,
      "name": "Squalane + Marine Algea Eye Cream",
      "brand": "Biossance",
      "type": "eye cream",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity",
      "order": 8,
      "link": "https://www.sephora.com/product/squalane-marine-algae-eye-cream-P447210"
    }
  );
  Product.create(
    {
      "id": 83,
      "name": "Rapid Wrinkle Repair Eye Cream",
      "brand": "Neutrogena",
      "type": "eye cream",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "elasticity",
      "order": 8,
      "link": "https://www.target.com/p/neutrogena-rapid-wrinkle-repair-eye-cream-with-hyaluronic-acid-0-5-fl-oz/-/A-13219480#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 84,
      "name": "The Eye Balm Intense",
      "brand": "La Mer",
      "type": "eye cream",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "acne",
      "order": 8,
      "link": "https://www.sephora.com/product/the-eye-balm-intense-P417111?skuId=1932326&icid2=products%20grid:p417111:product"
    }
  );
  Product.create(
    {
      "id": 85,
      "name": "The Silk Peony Melting Eye Cream",
      "brand": "Tatcha",
      "type": "eye cream",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "acne",
      "order": 8,
      "link": "https://www.sephora.com/product/the-silk-peony-melting-eye-cream-P447780?skuId=2236263&icid2=products%20grid:p447780:product"
    }
  );
  Product.create(
    {
      "id": 86,
      "name": "Tokyo Age Correcting Eye Cream",
      "brand": "Hada Labo",
      "type": "eye cream",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "acne",
      "order": 8,
      "link": "https://www.target.com/p/hada-labo-tokyo-age-correcting-eye-cream-0-5-fl-oz/-/A-16512826#lnk=sametab"
    },
  );
  Product.create(
    {
      "id": 87,
      "name": "Boosted Contouring Retinol Eye Balm",
      "brand": "Tata Harper",
      "type": "eye cream",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dryness",
      "order": 8,
      "link": "https://www.sephora.com/product/boosted-contouring-retinol-eye-balm-P449410?skuId=2284941&keyword=Tata%20Harper%20-%20Boosted%20Contouring%20Retinol%20Eye%20Balm"
    }
  );
  Product.create(
    {
      "id": 88,
      "name": "Moisturizing Eye Bomb",
      "brand": "Belif",
      "type": "eye cream",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 8,
      "link": "https://www.sephora.com/product/moisturizing-eye-bomb-P422905?skuId=1997394&icid2=products%20grid:p422905:product"
    }
  );
  Product.create(
    {
      "id": 89,
      "name": "Hydro Boost Hyaluronic Acid Eye Cream",
      "brand": "Neutrogena",
      "type": "eye cream",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dryness",
      "order": 8,
      "link": "https://www.target.com/p/unscented-neutrogena-hydro-boost-hyaluronic-acid-gel-eye-cream-0-5-fl-oz/-/A-16600135#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 90,
      "name": "Creme Ancienne Supreme",
      "brand": "Fresh",
      "type": "eye cream",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dullness",
      "order": 8,
      "link": "https://www.sephora.com/product/creme-ancienne-supreme-eye-serum-P424956?skuId=1924802&icid2=products%20grid:p424956:product"
    }
  );
  Product.create(
    {
      "id": 91,
      "name": "Vital-E Microbiome Age Defense Eye Cream",
      "brand": "Peter Thomas Roth",
      "type": "eye cream",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dullness",
      "order": 8,
      "link": "https://www.sephora.com/product/peter-thomas-roth-vital-e-microbiome-age-defense-eye-cream-P453823"
    }
  );
  Product.create(
    {
      "id": 92,
      "name": "Illuminating Eye Cream",
      "brand": "E.L.F",
      "type": "eye cream",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dullness",
      "order": 8,
      "link": "https://www.target.com/p/e-l-f-illuminating-eye-cream-0-49oz/-/A-39599094#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 93,
      "name": "GOOPGLOW Microderm Insant Glow Exfoliator",
      "brand": "Goop",
      "type": "exfoliator",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "elasticity",
      "order": 2,
      "link": "https://www.sephora.com/product/goop-goopglow-microderm-instant-glow-exfoliator-P456213?skuId=2319168&icid2=products%20grid:p456213:product"
    }
  );
  Product.create(
    {
      "id": 94,
      "name": "Daily Microfoliant Exfoliator",
      "brand": "Dermalogica",
      "type": "exfoliator",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity",
      "order": 2,
      "link": "https://www.sephora.com/product/daily-microfoliant-P423688?skuId=2002087&icid2=products%20grid:p423688:product"
    }
  );
  Product.create(
    {
      "id": 95,
      "name": "Positively Radiant Skin Brightening Exfoliating Face Scrub",
      "brand": "Aveeno",
      "type": "exfoliator",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "elasticity",
      "order": 2,
      "link": "https://www.target.com/p/aveeno-positively-radiant-skin-brightening-daily-scrub-5oz/-/A-11537365#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 96,
      "name": "The Replenishing Oil Exfoliator",
      "brand": "La Mer",
      "type": "exfoliator",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "acne",
      "order": 2,
      "link": "https://www.sephora.com/product/replenishing-oil-exfoliator-P431416?skuId=2082337&keyword=la%20mer%20replenishing%20oil%20exfoliator"
    }
  );
  Product.create(
    {
      "id": 97,
      "name": "The Rice Polish",
      "brand": "Tatcha",
      "type": "exfoliator",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "acne",
      "order": 2,
      "link": "https://www.sephora.com/product/polished-rice-enzyme-powder-P426340?skuId=2122489&icid2=products%20grid:p426340:product"
    }
  );
  Product.create(
    {
      "id": 98,
      "name": "Brightening Facial Scrub",
      "brand": "Acure",
      "type": "exfoliator",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "acne",
      "order": 2,
      "link": "https://www.target.com/p/acure-brightening-facial-scrub-4-fl-oz/-/A-16453836#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 99,
      "name": "Microdermabrasion Age Defying Exfoliator",
      "brand": "Dr.Brandt",
      "type": "exfoliator",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dryness",
      "order": 2,
      "link": "https://www.sephora.com/product/microdermabrasion-age-defying-exfoliator-P45503"
    }
  );
  Product.create(
    {
      "id": 100,
      "name": "Yo Glow Facial Enzyme Scrub",
      "brand": "Wishful",
      "type": "exfoliator",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 2,
      "link": "https://www.sephora.com/product/wishful-by-huda-yo-glow-facial-enzyme-scrub-P455676?skuId=2337293&icid2=products%20grid:p455676:product"
    }
  );
  Product.create(
    {
      "id": 101,
      "name": "Radiant Youth Microdermabrasion Polish",
      "brand": "Botanics",
      "type": "exfoliator",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dryness",
      "order": 2,
      "link": "https://www.target.com/p/botanics-radiant-youth-microdermabrasion-polish-4-fl-oz/-/A-53730624#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 102,
      "name": "Refining Facial Polish",
      "brand": "Omorovicza",
      "type": "exfoliator",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dullness",
      "order": 2,
      "link": "https://www.omorovicza.com/refining-facial-polisher/11105224.html"
    }
  );
  Product.create(
    {
      "id": 103,
      "name": "Sugar Face Polish",
      "brand": "Fresh",
      "type": "exfoliator",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dullness",
      "order": 2,
      "link": "https://www.sephora.com/product/sugar-face-polish-P12295?skuId=1933696&icid2=products%20grid:p12295:product"
    }
  );
  Product.create(
    {
      "id": 104,
      "name": "Peach & Willow Bark Deep Pore Exfoliating Facial Scrub",
      "brand": "Burt's Bees",
      "type": "exfoliator",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dullness",
      "order": 2,
      "link": "https://www.target.com/p/burt-39-s-bees-peach-38-willow-bark-deep-pore-exfoliating-facial-scrub-4oz/-/A-12834908#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 105,
      "name": "The Lifting And Firming Mask",
      "brand": "La Mer",
      "type": "mask",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "elasticity",
      "order": 3,
      "link": "https://www.sephora.com/product/the-lifting-firming-mask-P416538?skuId=1932409&icid2=products%20grid:p416538:product"
    }
  );
  Product.create(
    {
      "id": 106,
      "name": "Black Tea Firming Overnight Mask",
      "brand": "Fresh",
      "type": "mask",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity",
      "order": 3,
      "link": "https://www.sephora.com/product/black-tea-firming-overnight-mask-P391799?skuId=1673888&icid2=products%20grid:p391799:product"
    }
  );
  Product.create(
    {
      "id": 107,
      "name": "LiftActiv Hyalu Face Mask",
      "brand": "Vichy",
      "type": "mask",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "elasticity",
      "order": 3,
      "link": "https://www.target.com/p/vichy-liftactiv-hyalu-face-mask-with-1-natural-origin-hyaluronic-acid-1-69-fl-oz/-/A-75567450#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 108,
      "name": "Clarifying Mask",
      "brand": "Dr.Barbara Sturm",
      "type": "mask",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "acne",
      "order": 3,
      "link": "https://www.sephora.com/product/dr-barbara-sturm-clarifying-mask-P448542?skuId=2270056&keyword=dr%20barbara%20sturm%20clarifying%20mask"
    }
  );
  Product.create(
    {
      "id": 109,
      "name": "SUPERMUD",
      "brand": "Glamglow",
      "type": "mask",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "acne",
      "order": 3,
      "link": "https://www.sephora.com/product/super-mud-clearing-treatment-P376409"
    }
  );
  Product.create(
    {
      "id": 110,
      "name": "Detoxifying Clay Face Mask",
      "brand": "Burt's Bees",
      "type": "mask",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "acne",
      "order": 3,
      "link": "https://www.target.com/p/burt-39-s-bees-detoxifying-clay-face-mask-2-5oz/-/A-75561990#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 111,
      "name": "Creme Ancienne Ultimate Nourishing Honey Mask",
      "brand": "Fresh",
      "type": "mask",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dryness",
      "order": 3,
      "link": "https://www.sephora.com/product/creme-ancienne-ultimate-nourishing-honey-mask-P381021?skuId=1551233&keyword=Fresh%20-%20Cr%C3%A8me%20Ancienne%C2%AE%20Ultimate%20Nourishing%20Honey%20Mask"
    }
  );
  Product.create(
    {
      "id": 112,
      "name": "Jet Lag Mask",
      "brand": "Summer Fridays",
      "type": "mask",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 3,
      "link": "https://www.sephora.com/product/jet-lag-mask-P429952?skuId=2071322&icid2=products%20grid:p429952:product"
    }
  );
  Product.create(
    {
      "id": 113,
      "name": "Moisturizing Sleeping Face Mask",
      "brand": "E.L.F",
      "type": "mask",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dryness",
      "order": 3,
      "link": "https://www.target.com/p/e-l-f-moisturizing-sleeping-face-mask-1-16oz/-/A-52507945#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 114,
      "name": "Youth Revolution Radiance Creme & Masque",
      "brand": "Amorepacific",
      "type": "mask",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dullness",
      "order": 3,
      "link": "https://www.sephora.com/product/youth-revolution-radiance-creme-masque-P441062"
    }
  );
  Product.create(
    {
      "id": 115,
      "name": "Violet-C Radiance Mask",
      "brand": "Tatcha",
      "type": "mask",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dullness",
      "order": 3,
      "link": "https://www.sephora.com/product/violet-c-radiance-mask-P420699?skuId=1956408&icid2=products%20grid:p420699:product"
    }
  );
  Product.create(
    {
      "id": 116,
      "name": "Watermelon Super Fresh Jelly Mask",
      "brand": "Yes To",
      "type": "mask",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dullness",
      "order": 3,
      "link": "https://www.target.com/p/yes-to-watermelon-super-fresh-jelly-mask-3-fl-oz/-/A-76545024#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 117,
      "name": "Sun Drops",
      "brand": "Dr.Barbara Sturm",
      "type": "spf",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "elasticity",
      "order": 9,
      "link": "https://www.sephora.com/product/dr-barbara-sturm-sun-drops-spf-50-P447789?skuId=2269934&keyword=dr%20barbara%20sturm%20sun%20drops"
    }
  );
  Product.create(
    {
      "id": 118,
      "name": "Unseen Sunscreen",
      "brand": "Supergoop!",
      "type": "spf",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity",
      "order": 9,
      "link": "https://www.sephora.com/product/supergoop-unseen-sunscreen-spf-40-P454380?skuId=2315935&icid2=products%20grid:p454380:product"
    }
  );
  Product.create(
    {
      "id": 119,
      "name": "Daily Anti-Aging Face Sunscreen",
      "brand": "Vichy",
      "type": "spf",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "elasticity",
      "order": 9,
      "link": "https://www.target.com/p/la-roche-posay-anthelios-daily-anti-aging-face-primer-with-sunscreen-spf-50-1-35oz/-/A-14225596#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 120,
      "name": "The Broad Spectrum SPF",
      "brand": "La Mer",
      "type": "spf",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "acne",
      "order": 9,
      "link": "https://www.sephora.com/product/the-broad-spectrum-spf-50-uv-protecting-fluid-P417118?skuId=1932441&keyword=La%20Mer%20-%20The%20Broad%20Spectrum%20SPF%2050%20UV%20Protecting%20Fluid"
    }
  );
  Product.create(
    {
      "id": 121,
      "name": "Silken Pore Perfecting Sunscreen",
      "brand": "Tatcha",
      "type": "spf",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "acne",
      "order": 9,
      "link": "https://www.sephora.com/product/silken-pore-perfecting-sunscreen-broad-spectrum-spf-35-P408206"
    }
  );
  Product.create(
    {
      "id": 122,
      "name": "Clear Face Sunscreen Lotion",
      "brand": "Neutrogena",
      "type": "spf",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "acne",
      "order": 9,
      "link": "https://www.target.com/p/neutrogena-clear-face-liquid-sunscreen-lotion-spf-30-3-fl-oz/-/A-47019380#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 123,
      "name": "Prisma Protect",
      "brand": "Dermalogica",
      "type": "spf",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dryness",
      "order": 9,
      "link": "https://www.sephora.com/product/prisma-protect-spf-30-moisturizer-P443366?skuId=2221174&keyword=dermalogica%20prisma%20protect%20spf%2030"
    }
  );
  Product.create(
    {
      "id": 124,
      "name": "Water Drench Hyaluronic Hydrating Moisturizer SPF 45",
      "brand": "Peter Thomas Roth",
      "type": "spf",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 9,
      "link": "https://www.sephora.com/product/peter-thomas-roth-water-drench-hyaluronic-hydrating-moisturizer-spf-45-P458576"
    }
  );
  Product.create(
    {
      "id": 125,
      "name": "Protect Hydrate Face Sunscreen",
      "brand": "Aveeno",
      "type": "spf",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dryness",
      "order": 9,
      "link": "https://www.target.com/p/aveeno-protect-hydrate-face-sunscreen-lotion-with-spf-50-3oz/-/A-14452750#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 126,
      "name": "Future Solution LX",
      "brand": "Shiseido",
      "type": "spf",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dullness",
      "order": 9,
      "link": "https://www.sephora.com/product/future-solution-lx-total-protective-cream-broad-spectrum-spf-20-sunscreen-P423167?skuId=2009249&icid2=products%20grid:p423167:product"
    }
  );
  Product.create(
    {
      "id": 127,
      "name": "Squalane + Zinc Sheer Mineral Sunscreen",
      "brand": "Biossance",
      "type": "spf",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dullness",
      "order": 9,
      "link": "https://www.sephora.com/product/biossance-squalane-zinc-sheer-mineral-sunscreen-spf-30-pa-P456410"
    }
  );
  Product.create(
    {
      "id": 128,
      "name": "Silk Hydration Weightless Face Sunscreen",
      "brand": "Hawaiian Tropic",
      "type": "spf",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dullness",
      "order": 9,
      "link": "https://www.target.com/p/hawaiian-tropic-silk-hydration-weightless-face-sunscreen-spf-30-1-7oz/-/A-51164217#lnk=sametab"
    }
  );
  Product.create(
    {
      "id": 129,
      "name": "Ultra Facial Cleanser",
      "brand": "Kiehl's Since 1851",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 1,
      "link": "https://www.sephora.com/product/ultra-facial-cleanser-P422007"
    }
  );
  Product.create(
    {
      "id": 130,
      "name": "Essential-C Cleanser",
      "brand": "Murad",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dullness",
      "order": 1,
      "link": "https://www.sephora.com/product/essential-c-cleanser-P9941"
    }
  );
  Product.create(
    {
      "id": 131,
      "name": "Rise + Shine Gentle Cleanser",
      "brand": "Saturday Skin",
      "type": "cleaner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity",
      "order": 1,
      "link": "https://www.sephora.com/product/rise-shine-gentle-cleanser-P428249?skuId=2048841&keyword=rise%20shine%20gentle%20cleanser"

    }
  );
  Product.create(
    {
      "id": 132,
      "name": "Ceramic Slip Cleanser",
      "brand": "Sunday Riley",
      "type": "cleaner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 1,
      "link": "https://www.sephora.com/product/ceramic-slip-clay-cleanser-P309310?skuId=2148476&icid2=products%20grid:p309310:product"
    }
  );
  Product.create(
    {
      "id": 133,
      "name": "Ultracalming Cleanser",
      "brand": "Dermalogica",
      "type": "cleaner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 1,
      "link": "https://www.sephora.com/product/ultracalming-cleanser-P423127?skuId=2002368&keyword=dermalogica%20ultracalming%20cleanser"
    }
  );
  Product.create(
    {
      "id": 134,
      "name": "Plantscription Anti-Aging Cleanser",
      "brand": "Origins",
      "type": "cleaner",
      "store": "sephora",
      "skinType": "normal",
      "price": "$$",
      "goal": "elasticity",
      "order": 1,
      "link": "https://www.sephora.com/product/plantscription-tm-anti-aging-cleanser-P377919"
    }
  );
  Product.create(
    {
      "id": 135,
      "name": "Argan Cleansing Oil",
      "brand": "Josie Maran",
      "type": "cleaner",
      "store": "sephora",
      "skinType": "dry",
      "price": "$$",
      "goal": "elasticity",
      "order": 1,
      "link": "https://www.sephora.com/product/argan-cleansing-oil-P283501?skuId=1324631&icid2=products%20grid:p283501:product"

    }
  );
  Product.create(
    {
      "id": 136,
      "name": "Renewing Cleansing Cream",
      "brand": "Murad",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "normal",
      "price": "$$",
      "goal": "dullness",
      "order": 1,
      "link": "https://www.sephora.com/product/renewing-cleansing-cream-P38217?skuId=646976&icid2=products%20grid:p38217:product"

    }
  );
  Product.create(
    {
      "id": 137,
      "name": "Salicylic Acid Acne + pore Cleanser",
      "brand": "The INKEY list",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "all",
      "price": "$",
      "goal": "acne",
      "order": 1,
      "link": "https://www.sephora.com/product/salicylic-acid-cleanser-P443833"

    }
  );
  Product.create(
    {
      "id": 138,
      "name": "Clarifying Cleanser",
      "brand": "Murad",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "acne",
      "order": 1,
      "link": "https://www.sephora.com/product/clarifying-cleanser-P4016?skuId=654228&icid2=products%20grid:p4016:product"

    }
  );
  Product.create(
    {
      "id": 139,
      "name": "Squalane + Tea Tree Cleansing",
      "brand": "Biossance",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "ance",
      "order": 1,
      "link": "https://www.sephora.com/product/squalane-tea-tree-cleansing-gel-P442549?skuId=2208395&icid2=products%20grid:p442549:product"

    }
  );
  Product.create(
    {
      "id": 140,
      "name": "Creme Ancienne Infusion Toner",
      "brand": "Fresh",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dullness",
      "order": 4,
      "link": "https://www.sephora.com/product/creme-ancienne-r-infusion-toner-P392618?skuId=1668334&keyword=creme%20ancienne%20infusion%20toner"

    }
  );
  Product.create(
    {
      "id": 141,
      "name": "8% Glycolic Solutions toner",
      "brand": "Peter Thomas Roth",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dullness",
      "order": 4,
      "link": "https://www.sephora.com/product/8-glycolic-solutions-toner-P422233?skuId=1954007&keyword=8%20glycolic%20solutions%20toner"

    }
  );
  Product.create(
    {
      "id": 142,
      "name": "Vitamin C Brightening Toner",
      "brand": "Dr.Zenovia Skincare",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dullness",
      "order": 4,
      "link": "https://www.sephora.com/product/dr-zenovia-skin-care-vitamin-c-brightening-toner-P464244"

    }
  );
  Product.create(
    {
      "id": 143,
      "name": "Botanical Soothing Toner",
      "brand": "Amorepacific",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dryness",
      "order": 4,
      "link": "https://www.sephora.com/product/amorepacific-botanical-soothing-toner-P459839?skuId=2346120&keyword=amorepacific%20botanical%20soothing%20toner"

    }
  );
  Product.create(
    {
      "id": 144,
      "name": "Hydrating Face Tonic Toner",
      "brand": "Bobbi Brown",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 4,
      "link": "https://www.sephora.com/product/hydrating-face-tonic-P270607"

    }
  );
  Product.create(
    {
      "id": 145,
      "name": "Alpine Berry Water Toner",
      "brand": "Primera",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 4,
      "link": "https://www.sephora.com/product/primera-alpine-berry-water-toner-P447179"

    }
  );
  Product.create(
    {
      "id": 146,
      "name": "G.Tox Malachite and AHA Pore Refining Toner",
      "brand": "Goop",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "acne",
      "order": 4,
      "link": "https://www.sephora.com/product/goop-g-tox-malachite-aha-pore-refining-tonic-P458962"

    }
  );
  Product.create(
    {
      "id": 147,
      "name": "Calendula Herbal Extract Toner",
      "brand": "Kiehl's Since 1851",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "acne",
      "order": 4,
      "link": "https://www.sephora.com/product/calendula-herbal-extract-alcohol-free-toner-P421997"

    }
  );
  Product.create(
    {
      "id": 148,
      "name": "Umbrian Clay Toner",
      "brand": "Fresh",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "acne",
      "order": 4,
      "link": "https://www.sephora.com/product/umbrian-clay-purifying-facial-toner-P408643"

    }
  );
  Product.create(
    {
      "id": 149,
      "name": "Moor Cream Cleanser",
      "brand": "Omorovicza",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "acne",
      "order": 1,
      "link": "https://www.sephora.com/product/moor-cream-cleanser-P418024?skuId=1945708&keyword=omorovicza%20moor%20cream%20cleanser"

    }
  );
  Product.create(
    {
      "id": 150,
      "name": "Precleanse Cleansing Oil",
      "brand": "Dermalogica",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dryness",
      "order": 1,
      "link": "https://www.sephora.com/product/precleanse-P423148?skuId=2002079&icid2=products%20grid:p423148:product"

    }
  );
  Product.create(
    {
      "id": 151,
      "name": "Enzyme Cleanser",
      "brand": "Dr.Barbara Sturm",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dullness",
      "order": 1,
      "link": "https://www.sephora.com/product/dr-barbara-sturm-enzyme-cleanser-P448554"

    }
  );
  Product.create(
    {
      "id": 152,
      "name": "Turnaround",
      "brand": "Clinique",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity",
      "order": 4,
      "link": "https://www.sephora.com/product/turnaround-revitalizing-serum-P302900?skuId=1689157&icid2=products%20grid:p302900:product"

    }
  );
  Product.create(
    {
      "id": 153,
      "name": "CoQ-10 Toner",
      "brand": "Indie Lee",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity",
      "order": 4,
      "link": "https://www.sephora.com/product/coq-10-toner-P432272?skuId=2070795&icid2=products%20grid:p432272:product"

    }
  );
  Product.create(
    {
      "id": 154,
      "name": "Coconut Rose Toner",
      "brand": "Kopari",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity",
      "order": 4,
      "link": "https://www.sephora.com/product/coconut-rose-toner-P416144?skuId=1918705&icid2=products%20grid:p416144:product"

    }
  );
  Product.create(
    {
      "id": 155,
      "name": "Fermented Soybean Firming Energy Essence",
      "brand": "Innisfree",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity ",
      "order": 5,
      "link": "https://www.sephora.com/product/fermented-soybean-firming-energy-essence-P449862?skuId=2276491&keyword=fermented%20soybean%20firming%20energy%20essence"

    }
  );
  Product.create(
    {
      "id": 156,
      "name": "Miracle Seed Essence",
      "brand": "Primera",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity ",
      "order": 5,
      "link": "https://www.sephora.com/product/primera-miracle-seed-essence-P447176?skuId=2262384&icid2=products%20grid:p447176:product"

    }
  );
  Product.create(
    {
      "id": 157,
      "name": "Sake Toning Essence",
      "brand": "Shani Darden Skin Care",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "elasticity ",
      "order": 5,
      "link": "https://www.sephora.com/product/shani-darden-sake-toning-essence-P455931?skuId=2340230&keyword=shani%20darden%20sake%20toning%20essence"

    }
  );
  Product.create(
    {
      "id": 158,
      "name": "Concentrated Brightening Essence",
      "brand": "Tata Harper",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "acne",
      "order": 5,
      "link": "https://www.sephora.com/product/concentrated-brightening-essence-P449408?skuId=2284925&keyword=tata%20harper%20concentrated%20brightening%20essence"

    }
  );
  Product.create(
    {
      "id": 159,
      "name": "Hungarian Water Essence",
      "brand": "Belif",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "acne",
      "order": 5,
      "link": "https://www.sephora.com/product/hungarian-water-essence-P394633?skuId=1686351&icid2=products%20grid:p394633:product"

    }
  );
  Product.create(
    {
      "id": 160,
      "name": "SOS Save.Our.Skin spray",
      "brand": "Tower 28 Beauty",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "acne",
      "order": 5,
      "link": "https://www.sephora.com/product/sos-save-our-skin-daily-rescue-facial-spray-P448852?skuId=2284909&icid2=products%20grid:p448852:product"

    }
  );
  Product.create(
    {
      "id": 161,
      "name": "GenOptics Spot Essence",
      "brand": "SK-II",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dryness",
      "order": 5,
      "link": "https://www.sephora.com/product/genoptics-spot-essence-P410755?skuId=1863216&icid2=products%20grid:p410755:product"

    }
  );
  Product.create(
    {
      "id": 162,
      "name": "The True Tincture Essence",
      "brand": "Belif",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 5,
      "link": "https://www.sephora.com/product/the-true-tincture-essence-chamomile-P416533?skuId=1905264&keyword=belif%20true%20tincture"

    }
  );
  Product.create(
    {
      "id": 163,
      "name": "Ceramidin Liquid",
      "brand": "Dr.Jart+",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 5,
      "link": "https://www.sephora.com/product/ceramidin-tm-liquid-P434364"

    }
  );
  Product.create(
    {
      "id": 164,
      "name": "Ultimate Revival Essence",
      "brand": "SK-II",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dullness",
      "order": 5,
      "link": "https://www.sephora.com/product/ultimate-revival-essence-P428103?skuId=2047439&keyword=sk%20ii%20ultimate%20revival%20essence"

    }
  );
  Product.create(
    {
      "id": 165,
      "name": "Squalane + Hyaluronic Toning Mist",
      "brand": "Biossance",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dullness",
      "order": 5,
      "link": "https://www.sephora.com/product/squalane-micronutrient-fine-mist-P429659?skuId=2051894&keyword=biossance%20squalane%20hyaluronic%20toning%20mist"

    }
  );
  Product.create(
    {
      "id": 166,
      "name": "Hydrating Hyaluronic Acid Floral Essence",
      "brand": "Tata Harper",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dullness",
      "order": 5,
      "link": "https://www.sephora.com/product/hydrating-floral-essence-P379705"

    }
  );
  Product.create(
    {
      "id": 167,
      "name": "Elixir Vitae Serum Wrinkle Solution",
      "brand": "Tata Harper",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "elasticity",
      "order": 6,
      "link": "https://www.sephora.com/product/elixir-vitae-serum-wrinkle-solution-P449166"

    }
  );
  Product.create(
    {
      "id": 168,
      "name": "Squalane + Phyto-Retinol Serum",
      "brand": "Biossance",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "elasticity",
      "order": 6,
      "link": "https://www.sephora.com/product/squalane-phyto-retinol-serum-P429028?skuId=2038057&icid2=products%20grid:p429028:product"

    }
  );
  Product.create(
    {
      "id": 169,
      "name": "Neuropeptide Smoothing Facial Conformer",
      "brand": "Perricone MD",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "acne",
      "order": 6,
      "link": "https://www.sephora.com/product/neuropeptide-facial-conformer-contouring-treatment-P211332"

    }
  );
  Product.create(
    {
      "id": 170,
      "name": "Glow Cycle Retin-Alt Power Serum",
      "brand": "Olehenriksen",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "acne",
      "order": 6,
      "link": "https://www.sephora.com/product/glow-cycle-retin-alt-power-serum-P434545?skuId=2106086&keyword=olehenriksen%20glow%20cycle%20retin%20alt"

    }
  );
  Product.create(
    {
      "id": 171,
      "name": "Brightening Serum",
      "brand": "Dr.Barbara Sturm",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dullness",
      "order": 6,
      "link": "https://www.sephora.com/product/dr-barbara-sturm-brightening-serum-P448549"

    }
  );
  Product.create(
    {
      "id": 172,
      "name": "Truth Serum",
      "brand": "Olehenriksen",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dullness",
      "order": 6,
      "link": "https://www.sephora.com/product/truth-serum-P42343"

    }
  );
  Product.create(
    {
      "id": 173,
      "name": "Hyaluronic Serum",
      "brand": "Dr.Lara Devgan Scientific Beauty",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dryness",
      "order": 6,
      "link": "https://www.sephora.com/product/dr-lara-devgan-scientific-beauty-hyaluronic-serum-P459130"

    }
  );
  Product.create(
    {
      "id": 174,
      "name": "Organic Rosewater Facial Toner",
      "brand": "Cocokind",
      "type": "toner",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "elasticity",
      "order": 4,
      "link": "https://www.target.com/p/cocokind-organic-rosewater-facial-toner-4oz/-/A-51148426#lnk=sametab"

    }
  );
  Product.create(
    {
      "id": 175,
      "name": "Rose Deep Hydration Oil-Infused Serum",
      "brand": "Fresh",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 6,
      "link": "https://www.sephora.com/product/fresh-rose-deep-hydration-oil-serum-P457005"

    }
  );

}

module.exports = InitializeProducts;