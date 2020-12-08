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
    "order": 1
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
    "order": 1
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
      "order": 1
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
      "order": 1
    }
  );
  Product.create(
    {
      "id": 5,
      "name": "The Deep Cleanser Gentle Exfoliating Cleanser",
      "brand": "Tatcha",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "oily",
      "price": "$$",
      "goal": "acne",
      "order": 1
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
      "order": 1
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
      "order": 1
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
      "order": 1
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
      "order": 1
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
      "order": 1
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
      "order": 1
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
      "order": 1
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
      "order": 1
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
      "order": 1
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
      "order": 1
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
      "order": 1
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
      "order": 2
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
      "order": 2
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
      "order": 2
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
      "price": "$$",
      "goal": "elasticity",
      "order": 2
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
      "order": 2
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
      "order": 2
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
      "order": 2
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
      "order": 2
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
      "order": 2
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
      "order": 2
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
      "order": 2
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
      "order": 2
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
      "order": 2
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
      "order": 2
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
      "order": 2
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
      "order": 2
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
      "order": 3
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
      "order": 3
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
      "order": 3
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
      "order": 3
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
      "order": 3
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
      "order": 3
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
      "order": 3
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
      "order": 3
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
      "order": 3
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
      "order": 3
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
      "order": 3
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
      "order": 3
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
      "order": 3
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
      "order": 3
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
      "order": 3
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
      "order": 3
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
      "order": 4
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
      "order": 4
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
      "order": 4
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
      "order": 4
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
      "order": 4
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
      "order": 4
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
      "order": 4
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
      "order": 4
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
      "order": 4
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
      "order": 4
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
      "order": 4
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
      "order": 4
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
      "order": 4
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
      "order": 4
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
      "order": 4
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
      "order": 4
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
      "order": 5
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
      "order": 5
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
      "order": 5
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
      "order": 5
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
      "order": 5
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
      "order": 5
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
      "order": 5
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
      "order": 5
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
      "order": 5
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
      "order": 5
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
      "order": 5
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
      "order": 5
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
      "order": 5
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
      "order": 5
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
      "order": 5
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
      "order": 5
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
      "order": 6
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
      "order": 6
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
      "order": 6
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
      "order": 6
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
      "order": 6
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
      "order": 6
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
      "order": 6
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
      "order": 6
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
      "order": 6
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
      "order": 6
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
      "order": 6
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
      "order": 6
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
      "order": 7
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
      "order": 7
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
      "order": 7
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
      "order": 7
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
      "order": 7
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
      "order": 7
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
      "order": 7
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
      "order": 7
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
      "order": 7
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
      "order": 7
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
      "order": 7
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
      "order": 7
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
      "order": 8
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
      "order": 8
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
      "order": 8
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
      "order": 8
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
      "order": 8
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
      "order": 8
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
      "order": 8
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
      "order": 8
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
      "order": 8
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
      "order": 8
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
      "order": 8
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
      "order": 8
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
      "order": 9
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
      "order": 9
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
      "order": 9
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
      "order": 9
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
      "order": 9
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
      "order": 9
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
      "order": 9
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
      "order": 9
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
      "order": 9
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
      "order": 9
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
      "order": 9
    }
  );
  Product.create(
    {
      "id": 128,
      "name": "Tropic Silk Hydration Weightless Face Sunscreen",
      "brand": "Hawaiian",
      "type": "spf",
      "store": "target",
      "skinType": "all",
      "price": "$",
      "goal": "dullness",
      "order": 9
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
      "order": 1
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
      "order": 1
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
      "order": 1

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
      "order": 1

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
      "order": 1

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
      "order": 1

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
      "order": 1

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
      "order": 1

    }
  );
  Product.create(
    {
      "id": 137,
      "name": "Salicylic Acid Acne + pore Cleanser",
      "brand": "The IKEY list",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "all",
      "price": "$",
      "goal": "acne",
      "order": 1

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
      "order": 1

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
      "order": 1

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
      "order": 2

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
      "order": 2

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
      "order": 2

    }
  );
  Product.create(
    {
      "id": 143,
      "name": "Botanical soothing Toner",
      "brand": "Amorepacific",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "dryness",
      "order": 2

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
      "order": 2

    }
  );
  Product.create(
    {
      "id": 145,
      "name": "Apline Berry Water Toner",
      "brand": "Primera",
      "type": "toner",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 2

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
      "order": 2

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
      "order": 2

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
      "order": 2

    }
  );
  Product.create(
    {
      "id": 149,
      "name": "Mood Cream Cleanser",
      "brand": "Omorovicza",
      "type": "cleanser",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "acne",
      "order": 1

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
      "order": 1

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
      "order": 1

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
      "order": 2

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
      "order": 2

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
      "order": 2

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
      "order": 3

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
      "order": 3

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
      "order": 3

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
      "order": 3

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
      "order": 3

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
      "order": 3

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
      "order": 3

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
      "order": 3

    }
  );
  Product.create(
    {
      "id": 163,
      "name": "Ceramidin Liquis",
      "brand": "Dr.Jart+",
      "type": "essence",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 3

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
      "order": 3

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
      "order": 3

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
      "order": 3

    }
  );
  Product.create(
    {
      "id": 167,
      "name": "Elixer Vitae Serum Wrinkle Solution",
      "brand": "Tata Harper",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$$",
      "goal": "elasticity",
      "order": 4

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
      "order": 4

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
      "order": 4

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
      "order": 4

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
      "order": 4

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
      "order": 4

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
      "order": 4

    }
  );
  Product.create(
    {
      "id": 174,
      "name": "Rose Deep Hydration Oil-Infused Serum",
      "brand": "Fresh",
      "type": "serum",
      "store": "sephora",
      "skinType": "all",
      "price": "$$",
      "goal": "dryness",
      "order": 4

    }
  );

}

module.exports = InitializeProducts;